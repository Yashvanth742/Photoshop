import React, { useState, useEffect, FormEvent } from 'react';
import { 
  Search, 
  Archive, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  PlusCircle, 
  ShieldCheck, 
  Calendar, 
  Phone, 
  FileText, 
  Sparkles, 
  X, 
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import { INITIAL_PHOTO_VAULT } from '../data/mockData';
import { PhotoArchiveRecord } from '../types';
import { useToast } from './Toast';

const STORAGE_KEY = 'framecraft_photo_vault_records_v1';

export function PhotoVault() {
  const { showToast } = useToast();
  const [records, setRecords] = useState<PhotoArchiveRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse saved vault records', e);
    }
    return INITIAL_PHOTO_VAULT;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecord, setSelectedRecord] = useState<PhotoArchiveRecord | null>(null);
  const [isReprintModalOpen, setIsReprintModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Reprint form state
  const [reprintSize, setReprintSize] = useState('8x12');
  const [reprintFinish, setReprintFinish] = useState('Lustre');
  const [reprintCopies, setReprintCopies] = useState(2);

  // New photo archiving state
  const [newCustomerName, setNewCustomerName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newService, setNewService] = useState('Matrimonial / Studio Portrait');
  const [newPrintSize, setNewPrintSize] = useState('8 x 12 inches');
  const [newFinish, setNewFinish] = useState<'Matte' | 'Glossy' | 'Lustre' | 'Metallic'>('Lustre');
  const [newImageUrl, setNewImageUrl] = useState(
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=90'
  );
  const [newNotes, setNewNotes] = useState('');

  // Persist to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    } catch (e) {
      console.error('Failed to save vault records', e);
    }
  }, [records]);

  // Set default selected record
  useEffect(() => {
    if (records.length > 0 && !selectedRecord) {
      setSelectedRecord(records[0]);
    }
  }, [records, selectedRecord]);

  // Filter records based on search query
  const filteredRecords = records.filter((r) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      r.id.toLowerCase().includes(query) ||
      r.customerName.toLowerCase().includes(query) ||
      r.phoneNumber.includes(query) ||
      r.serviceType.toLowerCase().includes(query) ||
      r.tags.some((t) => t.toLowerCase().includes(query))
    );
  });

  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    showToast(`Copied Photo ID: ${id} to clipboard`, 'info');
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleDownload = (record: PhotoArchiveRecord) => {
    // Simulated realistic soft-copy download
    showToast(`Downloading master image package for Photo ID #${record.id}...`, 'success');
    const link = document.createElement('a');
    link.href = record.imageUrl;
    link.download = `FrameCraft_${record.id}_Master.jpg`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleConfirmReprint = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRecord) return;

    // Increment reprint count in state and storage
    const updated = records.map((rec) => {
      if (rec.id === selectedRecord.id) {
        return {
          ...rec,
          reprintCount: rec.reprintCount + reprintCopies,
        };
      }
      return rec;
    });

    setRecords(updated);
    setSelectedRecord({
      ...selectedRecord,
      reprintCount: selectedRecord.reprintCount + reprintCopies,
    });
    setIsReprintModalOpen(false);

    showToast(
      `Reprint order confirmed for ${reprintCopies}x copies (${reprintSize} ${reprintFinish}). Sent to Studio Lab queue!`,
      'success'
    );
  };

  const handleCreateNewRecord = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCustomerName || !newPhone) {
      showToast('Please provide customer name and phone number', 'error');
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newId = `FC-${randomNum}`;

    const newRecord: PhotoArchiveRecord = {
      id: newId,
      customerName: newCustomerName,
      phoneNumber: newPhone,
      serviceType: newService,
      dateArchived: new Date().toISOString().split('T')[0],
      imageUrl: newImageUrl,
      resolution: '6000 x 4000 px (24 MP Ultra-Res)',
      printSize: newPrintSize,
      finish: newFinish,
      reprintCount: 0,
      notes: newNotes || 'Customer registered via Studio Order Archive Desk.',
      tags: [newService.split(' ')[0], newFinish, 'Studio Vault'],
    };

    setRecords([newRecord, ...records]);
    setSelectedRecord(newRecord);
    setIsAddModalOpen(false);

    // Reset fields
    setNewCustomerName('');
    setNewPhone('');
    setNewNotes('');

    showToast(`Order archived successfully! Permanent Photo ID is ${newId}`, 'success');
  };

  const calculateReprintEstimate = () => {
    let pricePerUnit = 40;
    if (reprintSize === '4x6') pricePerUnit = 25;
    if (reprintSize === '6x8') pricePerUnit = 50;
    if (reprintSize === '8x12') pricePerUnit = 110;
    if (reprintSize === '12x18') pricePerUnit = 220;
    if (reprintSize === 'Passport 8-Pack') pricePerUnit = 90;
    return pricePerUnit * reprintCopies;
  };

  return (
    <div className="py-12 lg:py-20 bg-[#fdfbf7] text-[#1a1a1a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b5965e]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#b5965e]">
              Client Archive System
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight mb-4">
            Instant Photo & Order Lookup
          </h1>
          <p className="text-base text-[#1a1a1a99] leading-relaxed">
            Every photograph captured or restored at FrameCraft is archived under a permanent unique ID.
            Months or years later, simply enter your ID or phone number to retrieve original files
            or order lab reprints.
          </p>
        </div>

        {/* Top Control Bar: Search & New Order Action */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 bg-[#ffffff] p-4 rounded-2xl border border-[#1a1a1a1a] shadow-sm">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#1a1a1a66] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Photo ID (e.g. FC-8821), Phone Number, or Client Name..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#fdfbf7] border border-[#1a1a1a1a] rounded-xl text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a66] focus:outline-none focus:border-[#b5965e] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#1a1a1a66] hover:text-[#1a1a1a]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Search Demo Buttons & Archive New Photo CTA */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a66] shrink-0">Demo IDs:</span>
            {['FC-8821', 'FC-7734', 'FC-9042', 'FC-4190'].map((demoId) => (
              <button
                key={demoId}
                onClick={() => setSearchQuery(demoId)}
                className="px-3 py-1 rounded-full bg-[#f4f1e8] hover:bg-[#1a1a1a] hover:text-white border border-[#1a1a1a1a] text-xs font-mono font-bold text-[#1a1a1a] transition-colors shrink-0 cursor-pointer"
              >
                {demoId}
              </button>
            ))}

            <button
              onClick={() => setIsAddModalOpen(true)}
              className="ml-auto px-5 py-2.5 rounded-full bg-[#1a1a1a] text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 shrink-0 hover:bg-[#b5965e] transition-colors shadow-sm cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Archive Photo</span>
            </button>
          </div>
        </div>

        {/* Main Vault Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: List of Matched Client Orders */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between text-xs text-[#1a1a1a88] px-1 mb-1 font-medium">
              <span>Found {filteredRecords.length} archived records</span>
              <span className="flex items-center gap-1 text-[#b5965e] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#b5965e]" /> Lifetime Protection
              </span>
            </div>

            {filteredRecords.length === 0 ? (
              <div className="bg-[#ffffff] border border-[#1a1a1a1a] rounded-2xl p-8 text-center space-y-3 shadow-sm">
                <Archive className="w-8 h-8 text-[#1a1a1a44] mx-auto" />
                <p className="text-sm font-bold text-[#1a1a1a]">No archived photos found for "{searchQuery}"</p>
                <p className="text-xs text-[#1a1a1a88]">
                  Try searching by phone number (e.g. 9822014890) or one of the demo IDs above.
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-1.5 rounded-full bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Reset Search
                </button>
              </div>
            ) : (
              <div className="space-y-2.5 max-h-[720px] overflow-y-auto pr-1">
                {filteredRecords.map((record) => {
                  const isSelected = selectedRecord?.id === record.id;
                  return (
                    <div
                      key={record.id}
                      onClick={() => setSelectedRecord(record)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
                        isSelected
                          ? 'bg-[#ffffff] border-2 border-[#1a1a1a] shadow-md'
                          : 'bg-[#ffffff] border border-[#1a1a1a1a] hover:border-[#b5965e]'
                      }`}
                    >
                      {/* Photo Thumbnail */}
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#f4f1e8] border border-[#1a1a1a1a]">
                        <img
                          src={record.imageUrl}
                          alt={record.customerName}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Info snippet */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="font-mono text-xs font-bold text-[#b5965e]">
                            {record.id}
                          </span>
                          <span className="text-[10px] text-[#1a1a1a66] font-mono">{record.dateArchived}</span>
                        </div>
                        <h4 className="text-sm font-bold text-[#1a1a1a] truncate font-serif">
                          {record.customerName}
                        </h4>
                        <div className="text-xs text-[#1a1a1a88] truncate">
                          {record.serviceType}
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-[11px] text-[#1a1a1a66]">
                          <span>{record.printSize}</span>
                          <span>•</span>
                          <span className="text-[#1a1a1a] font-medium">{record.reprintCount} reprints</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: Selected Order Deep Inspection & Lab Reprint Panel */}
          <div className="lg:col-span-7">
            {selectedRecord ? (
              <div className="bg-[#ffffff] border border-[#1a1a1a1a] rounded-3xl overflow-hidden shadow-xl p-6 sm:p-8 space-y-6">
                {/* Header with Photo ID and Copy Action */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#1a1a1a1a]">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl sm:text-3xl font-black text-[#1a1a1a]">
                        {selectedRecord.id}
                      </span>
                      <button
                        onClick={() => handleCopyId(selectedRecord.id)}
                        className="px-3 py-1 rounded-full bg-[#f4f1e8] hover:bg-[#1a1a1a] hover:text-white border border-[#1a1a1a1a] text-xs font-mono font-bold text-[#1a1a1a] flex items-center gap-1.5 transition-colors cursor-pointer"
                        title="Copy Photo ID"
                      >
                        {copiedId === selectedRecord.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy ID</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-[#1a1a1a88] mt-1 font-medium">
                      Archived on {selectedRecord.dateArchived} • Permanent Master Negative
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleDownload(selectedRecord)}
                      className="px-4 py-2.5 rounded-full border border-[#1a1a1a1a] hover:bg-[#1a1a1a] hover:text-white text-xs font-bold uppercase tracking-wider text-[#1a1a1a] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-[#b5965e]" />
                      <span>Download File</span>
                    </button>

                    <button
                      onClick={() => setIsReprintModalOpen(true)}
                      className="px-5 py-2.5 rounded-full bg-[#1a1a1a] hover:bg-[#b5965e] text-white font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Order Reprint</span>
                    </button>
                  </div>
                </div>

                {/* Main High-Res Image Preview Card */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#f4f1e8] border border-[#1a1a1a1a]">
                  <img
                    src={selectedRecord.imageUrl}
                    alt={selectedRecord.customerName}
                    className="w-full h-full object-contain object-center"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#1a1a1a]/85 text-[10px] text-white font-mono">
                    {selectedRecord.resolution}
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#1a1a1a]/85 text-[10px] text-[#b5965e] font-mono font-bold">
                    Paper: {selectedRecord.finish}
                  </div>
                </div>

                {/* Client & Archive Metadata Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-[#fdfbf7] border border-[#1a1a1a1a] space-y-1">
                    <span className="text-[#1a1a1a66] uppercase tracking-wider text-[10px] font-bold">
                      Client Contact
                    </span>
                    <div className="text-sm font-bold text-[#1a1a1a] font-serif">
                      {selectedRecord.customerName}
                    </div>
                    <div className="flex items-center gap-1.5 text-[#1a1a1a]">
                      <Phone className="w-3.5 h-3.5 text-[#b5965e]" />
                      <span className="font-bold">+91 {selectedRecord.phoneNumber}</span>
                    </div>
                    {selectedRecord.email && (
                      <div className="text-[#1a1a1a88] truncate">{selectedRecord.email}</div>
                    )}
                  </div>

                  <div className="p-4 rounded-2xl bg-[#fdfbf7] border border-[#1a1a1a1a] space-y-1">
                    <span className="text-[#1a1a1a66] uppercase tracking-wider text-[10px] font-bold">
                      Original Studio Service
                    </span>
                    <div className="text-sm font-bold text-[#b5965e] font-serif">
                      {selectedRecord.serviceType}
                    </div>
                    <div className="text-[#1a1a1a]">
                      Initial Delivery: <strong>{selectedRecord.printSize}</strong>
                    </div>
                    <div className="text-[#1a1a1a88]">
                      Reprint history: {selectedRecord.reprintCount} physical prints ordered
                    </div>
                  </div>
                </div>

                {/* Notes & Tags */}
                <div className="p-4 rounded-2xl bg-[#fdfbf7] border border-[#1a1a1a1a] space-y-2">
                  <span className="text-[#1a1a1a66] uppercase tracking-wider text-[10px] font-bold flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#b5965e]" />
                    Studio Technician Notes
                  </span>
                  <p className="text-xs text-[#1a1a1a99] leading-relaxed">
                    {selectedRecord.notes}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedRecord.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-[#f4f1e8] text-[10px] font-bold text-[#1a1a1a] border border-[#1a1a1a1a]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center p-12 bg-[#ffffff] border border-[#1a1a1a1a] rounded-3xl text-center text-[#1a1a1a66]">
                Select an order from the left to inspect high-resolution archives and order reprints.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reprint Order Modal */}
      {isReprintModalOpen && selectedRecord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a1a1a]/80 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-lg bg-[#1a1a1a] text-white border border-[#ffffff15] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 animate-scaleUp">
            <div className="flex items-center justify-between pb-4 border-b border-[#ffffff15]">
              <div>
                <span className="text-[10px] font-mono text-[#b5965e] uppercase tracking-widest font-bold">
                  ORDER LAB REPRINT
                </span>
                <h3 className="font-serif text-2xl font-black text-white">
                  {selectedRecord.id} — {selectedRecord.customerName}
                </h3>
              </div>
              <button
                onClick={() => setIsReprintModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center text-white hover:bg-[#b5965e] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleConfirmReprint} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#b5965e] mb-2">
                  Print Size & Specification
                </label>
                <select
                  value={reprintSize}
                  onChange={(e) => setReprintSize(e.target.value)}
                  className="w-full bg-[#262626] border border-[#ffffff22] rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#b5965e]"
                >
                  <option value="Passport 8-Pack">Passport / Visa Biometric (Sheet of 8) — ₹90</option>
                  <option value="4x6">4 x 6 inches (Standard Postcard) — ₹25/ea</option>
                  <option value="6x8">6 x 8 inches (Cabinet Frame) — ₹50/ea</option>
                  <option value="8x12">8 x 12 inches (A4 Master Frame) — ₹110/ea</option>
                  <option value="12x18">12 x 18 inches (Exhibition Poster) — ₹220/ea</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#b5965e] mb-2">Paper Finish</label>
                  <select
                    value={reprintFinish}
                    onChange={(e) => setReprintFinish(e.target.value)}
                    className="w-full bg-[#262626] border border-[#ffffff22] rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#b5965e]"
                  >
                    <option value="Lustre">Fujifilm Lustre (Anti-fingerprint)</option>
                    <option value="Glossy">Kodak High-Gloss (Vibrant color)</option>
                    <option value="Matte">Smooth Fine-Art Matte</option>
                    <option value="Metallic">Metallic Pearl Finish (+₹30)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#b5965e] mb-2">Quantity</label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={reprintCopies}
                    onChange={(e) => setReprintCopies(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full bg-[#262626] border border-[#ffffff22] rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#b5965e]"
                  />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#262626] border border-[#ffffff15] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#888] uppercase tracking-widest font-bold">Estimated Lab Fee</span>
                  <div className="font-serif text-2xl font-black text-white">
                    ₹{calculateReprintEstimate()}
                  </div>
                </div>
                <span className="text-xs text-[#b5965e] font-mono font-bold">Ready in 20 Mins</span>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsReprintModalOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-[#262626] text-xs font-bold uppercase tracking-wider text-[#bbb] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#b5965e] hover:bg-[#a3844e] text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all cursor-pointer"
                >
                  Send to Studio Lab
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Archive New Photo Modal (For Studio Owner / Registration) */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a1a1a]/80 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-lg bg-[#1a1a1a] text-white border border-[#ffffff15] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 animate-scaleUp">
            <div className="flex items-center justify-between pb-4 border-b border-[#ffffff15]">
              <div>
                <span className="text-[10px] font-mono text-[#b5965e] uppercase tracking-widest font-bold">STUDIO ORDER REGISTRATION</span>
                <h3 className="font-serif text-2xl font-black text-white">
                  Archive New Customer Photo
                </h3>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center text-white hover:bg-[#b5965e] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateNewRecord} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#bbb] mb-1 font-bold uppercase text-[10px]">Customer Full Name *</label>
                  <input
                    type="text"
                    required
                    value={newCustomerName}
                    onChange={(e) => setNewCustomerName(e.target.value)}
                    placeholder="e.g. Anand Shinde"
                    className="w-full bg-[#262626] border border-[#ffffff22] rounded-xl p-3 text-white focus:border-[#b5965e] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#bbb] mb-1 font-bold uppercase text-[10px]">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    placeholder="e.g. 9822114400"
                    className="w-full bg-[#262626] border border-[#ffffff22] rounded-xl p-3 text-white focus:border-[#b5965e] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#bbb] mb-1 font-bold uppercase text-[10px]">Service Category</label>
                  <select
                    value={newService}
                    onChange={(e) => setNewService(e.target.value)}
                    className="w-full bg-[#262626] border border-[#ffffff22] rounded-xl p-3 text-white focus:border-[#b5965e] focus:outline-none"
                  >
                    <option value="Portrait Photography">Portrait Photography</option>
                    <option value="Wedding & Pre-wedding">Wedding & Pre-wedding</option>
                    <option value="Passport & Visa ID Photo">Passport & Visa ID Photo</option>
                    <option value="Photo Restoration">Photo Restoration</option>
                    <option value="Album Design & Canvas">Album Design & Canvas</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#bbb] mb-1 font-bold uppercase text-[10px]">Finish</label>
                  <select
                    value={newFinish}
                    onChange={(e) => setNewFinish(e.target.value as any)}
                    className="w-full bg-[#262626] border border-[#ffffff22] rounded-xl p-3 text-white focus:border-[#b5965e] focus:outline-none"
                  >
                    <option value="Lustre">Lustre</option>
                    <option value="Glossy">Glossy</option>
                    <option value="Matte">Matte</option>
                    <option value="Metallic">Metallic</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#bbb] mb-1 font-bold uppercase text-[10px]">
                  Sample Image URL
                </label>
                <input
                  type="url"
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  className="w-full bg-[#262626] border border-[#ffffff22] rounded-xl p-3 text-white focus:border-[#b5965e] focus:outline-none text-[11px]"
                />
              </div>

              <div>
                <label className="block text-[#bbb] mb-1 font-bold uppercase text-[10px]">Technician Notes</label>
                <textarea
                  rows={2}
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  placeholder="e.g. Captured with strobe 2; client approved soft lighting retouch."
                  className="w-full bg-[#262626] border border-[#ffffff22] rounded-xl p-3 text-white focus:border-[#b5965e] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-[#262626] text-xs font-bold uppercase tracking-wider text-[#bbb] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#b5965e] hover:bg-[#a3844e] text-white font-bold text-xs uppercase tracking-widest shadow-md cursor-pointer"
                >
                  Generate Photo ID & Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
