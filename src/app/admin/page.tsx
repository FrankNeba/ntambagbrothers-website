'use client';

import React, { useState, useEffect } from 'react';
import { 
  Settings, Layers, Users, Newspaper, Image as ImageIcon, Award, Upload, Save, Plus, Trash2, CheckCircle2, AlertCircle, RefreshCw, Lock, LogOut 
} from 'lucide-react';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const [data, setData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'config' | 'slides' | 'programs' | 'team' | 'news' | 'gallery'>('config');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    // Check if session cookie exists by trying to fetch data
    fetchContent();
  }, []);

  const fetchContent = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/content');
      const json = await res.json();
      if (res.ok) {
        setData(json);
        // Check local storage or state login status
        const loggedIn = localStorage.getItem('ntambag_admin_logged_in') === 'true';
        setIsAuthenticated(loggedIn);
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: 'Failed to fetch site content' });
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm),
      });
      const resJson = await res.json();
      if (resJson.success) {
        localStorage.setItem('ntambag_admin_logged_in', 'true');
        setIsAuthenticated(true);
      } else {
        setLoginError(resJson.error || 'Invalid credentials');
      }
    } catch (e: any) {
      setLoginError('Login failed. Please try again.');
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' });
    localStorage.removeItem('ntambag_admin_logged_in');
    setIsAuthenticated(false);
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const resJson = await res.json();
      if (resJson.success) {
        setMessage({ type: 'success', text: 'Changes saved successfully to JSON database!' });
      } else {
        throw new Error(resJson.error);
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Failed to save changes' });
    } finally {
      setSaving(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, callback: (url: string) => void) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const resJson = await res.json();
      if (resJson.success && resJson.url) {
        callback(resJson.url);
        setMessage({ type: 'success', text: 'Image uploaded successfully to public/uploads/' });
      } else {
        throw new Error(resJson.error);
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: 'File upload failed' });
    }
  };

  if (isAuthenticated === false) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full space-y-6 border border-gray-100 animate-in fade-in zoom-in duration-200">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-emerald-900 text-amber-400 rounded-full flex items-center justify-center mx-auto shadow-md">
              <Lock className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">Admin Login</h2>
            <p className="text-xs text-gray-500">Ntambag Brothers Content Management System</p>
          </div>

          {loginError && (
            <div className="bg-red-50 text-red-700 text-xs font-semibold p-3 rounded-xl border border-red-200 text-center">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Username</label>
              <input
                type="text"
                required
                placeholder="admin"
                value={loginForm.username}
                onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-900 hover:bg-emerald-950 text-white font-bold py-3 rounded-xl shadow-lg transition-all"
            >
              Sign In to Dashboard
            </button>
          </form>

          <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl text-center text-xs text-amber-800">
            Default Credentials: Username: <strong>admin</strong> | Password: <strong>ntambag2026</strong>
          </div>
        </div>
      </div>
    );
  }

  if (loading || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex items-center gap-3 text-emerald-800 font-bold">
          <RefreshCw className="w-6 h-6 animate-spin" /> Loading Admin Dashboard...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Admin Topbar */}
      <header className="bg-emerald-950 text-white px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-lg border-b-4 border-amber-500">
        <div>
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Settings className="w-5 h-5 text-amber-400" /> Ntambag Brothers Admin Management
          </h1>
          <p className="text-xs text-emerald-300">Dynamic Content & Media Management Dashboard</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchContent}
            className="bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1.5 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Refresh
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white text-sm font-bold px-5 py-2 rounded-lg flex items-center gap-2 shadow transition"
          >
            <Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save All Changes'}
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-800/80 hover:bg-red-800 text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1 transition"
          >
            <LogOut className="w-3.5 h-3.5" /> Logout
          </button>
        </div>
      </header>

      {/* Main Admin Area */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Sidebar Navigation */}
        <aside className="bg-white rounded-2xl p-4 shadow border border-gray-200 space-y-1 h-fit">
          {[
            { id: 'config', label: 'Site Info & Contacts', icon: Settings },
            { id: 'slides', label: 'Hero Slides', icon: Layers },
            { id: 'programs', label: 'Programs', icon: Award },
            { id: 'team', label: 'Team Members', icon: Users },
            { id: 'news', label: 'News & Events', icon: Newspaper },
            { id: 'gallery', label: 'Media Gallery', icon: ImageIcon },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all text-left ${
                  activeTab === tab.id
                    ? 'bg-emerald-950 text-amber-400 shadow'
                    : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-900'
                }`}
              >
                <Icon className="w-4 h-4" /> {tab.label}
              </button>
            );
          })}
        </aside>

        {/* Content Editor Panel */}
        <main className="md:col-span-3 bg-white rounded-2xl p-6 shadow border border-gray-200 space-y-6">
          
          {message && (
            <div className={`p-4 rounded-xl flex items-center gap-3 text-sm font-semibold ${
              message.type === 'success' ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-red-50 text-red-900 border border-red-200'
            }`}>
              {message.type === 'success' ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : <AlertCircle className="w-5 h-5 text-red-600" />}
              {message.text}
            </div>
          )}

          {/* TAB 1: SITE CONFIG */}
          {activeTab === 'config' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900 border-b pb-3">Site Information & Contacts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Organization Name</label>
                  <input
                    type="text"
                    value={data.siteConfig.name}
                    onChange={(e) => setData({ ...data, siteConfig: { ...data.siteConfig, name: e.target.value } })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Tagline</label>
                  <input
                    type="text"
                    value={data.siteConfig.tagline}
                    onChange={(e) => setData({ ...data, siteConfig: { ...data.siteConfig, tagline: e.target.value } })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={data.siteConfig.phone}
                    onChange={(e) => setData({ ...data, siteConfig: { ...data.siteConfig, phone: e.target.value } })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={data.siteConfig.email}
                    onChange={(e) => setData({ ...data, siteConfig: { ...data.siteConfig, email: e.target.value } })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Full Address</label>
                  <input
                    type="text"
                    value={data.siteConfig.address}
                    onChange={(e) => setData({ ...data, siteConfig: { ...data.siteConfig, address: e.target.value } })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Registration Number</label>
                  <input
                    type="text"
                    value={data.siteConfig.registration}
                    onChange={(e) => setData({ ...data, siteConfig: { ...data.siteConfig, registration: e.target.value } })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: HERO SLIDES */}
          {activeTab === 'slides' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b pb-3">
                <h2 className="text-xl font-bold text-gray-900">Hero Banners & Slides</h2>
                <button
                  onClick={() => {
                    const newSlides = [
                      ...data.heroSlides,
                      { id: Date.now().toString(), title: 'New Banner Title', subtitle: 'Description banner text...', image: '/assets/bts-group-XV_NaYNH.jpg', ctaText: 'Explore', ctaLink: '/programs' }
                    ];
                    setData({ ...data, heroSlides: newSlides });
                  }}
                  className="bg-emerald-800 text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Slide
                </button>
              </div>

              {data.heroSlides.map((slide: any, index: number) => (
                <div key={slide.id || index} className="p-4 border border-gray-200 rounded-xl space-y-3 bg-gray-50 relative">
                  <button
                    onClick={() => {
                      const filtered = data.heroSlides.filter((_: any, i: number) => i !== index);
                      setData({ ...data, heroSlides: filtered });
                    }}
                    className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Headline Title</label>
                      <input
                        type="text"
                        value={slide.title}
                        onChange={(e) => {
                          const updated = [...data.heroSlides];
                          updated[index].title = e.target.value;
                          setData({ ...data, heroSlides: updated });
                        }}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Subtitle</label>
                      <input
                        type="text"
                        value={slide.subtitle}
                        onChange={(e) => {
                          const updated = [...data.heroSlides];
                          updated[index].subtitle = e.target.value;
                          setData({ ...data, heroSlides: updated });
                        }}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Image URL / File</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={slide.image}
                          onChange={(e) => {
                            const updated = [...data.heroSlides];
                            updated[index].image = e.target.value;
                            setData({ ...data, heroSlides: updated });
                          }}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs outline-none"
                        />
                        <label className="bg-emerald-700 text-white text-xs px-3 py-2 rounded-lg cursor-pointer flex items-center shrink-0">
                          <Upload className="w-3.5 h-3.5" />
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleFileUpload(e, (url) => {
                              const updated = [...data.heroSlides];
                              updated[index].image = url;
                              setData({ ...data, heroSlides: updated });
                            })}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: PROGRAMS */}
          {activeTab === 'programs' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b pb-3">
                <h2 className="text-xl font-bold text-gray-900">Manage Programs</h2>
                <button
                  onClick={() => {
                    const newProg = [
                      ...data.programs,
                      { id: Date.now().toString(), title: 'New Initiative', category: 'Education', summary: 'Short summary...', description: 'Full description...', image: '/assets/bts-supplies-C4O45Rhf.jpg', impact: '50+ beneficiaries' }
                    ];
                    setData({ ...data, programs: newProg });
                  }}
                  className="bg-emerald-800 text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Program
                </button>
              </div>

              {data.programs.map((prog: any, index: number) => (
                <div key={prog.id || index} className="p-4 border border-gray-200 rounded-xl space-y-3 bg-gray-50 relative">
                  <button
                    onClick={() => {
                      const filtered = data.programs.filter((_: any, i: number) => i !== index);
                      setData({ ...data, programs: filtered });
                    }}
                    className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Program Title</label>
                      <input
                        type="text"
                        value={prog.title}
                        onChange={(e) => {
                          const updated = [...data.programs];
                          updated[index].title = e.target.value;
                          setData({ ...data, programs: updated });
                        }}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Category</label>
                      <input
                        type="text"
                        value={prog.category}
                        onChange={(e) => {
                          const updated = [...data.programs];
                          updated[index].category = e.target.value;
                          setData({ ...data, programs: updated });
                        }}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Summary</label>
                      <input
                        type="text"
                        value={prog.summary}
                        onChange={(e) => {
                          const updated = [...data.programs];
                          updated[index].summary = e.target.value;
                          setData({ ...data, programs: updated });
                        }}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Full Description</label>
                      <textarea
                        rows={3}
                        value={prog.description}
                        onChange={(e) => {
                          const updated = [...data.programs];
                          updated[index].description = e.target.value;
                          setData({ ...data, programs: updated });
                        }}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Image Upload</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={prog.image}
                          onChange={(e) => {
                            const updated = [...data.programs];
                            updated[index].image = e.target.value;
                            setData({ ...data, programs: updated });
                          }}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs outline-none"
                        />
                        <label className="bg-emerald-700 text-white text-xs px-3 py-2 rounded-lg cursor-pointer flex items-center shrink-0">
                          <Upload className="w-3.5 h-3.5" />
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleFileUpload(e, (url) => {
                              const updated = [...data.programs];
                              updated[index].image = url;
                              setData({ ...data, programs: updated });
                            })}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: TEAM MEMBERS */}
          {activeTab === 'team' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b pb-3">
                <h2 className="text-xl font-bold text-gray-900">Executive Board & Team</h2>
                <button
                  onClick={() => {
                    const newTeam = [
                      ...data.teamMembers,
                      { id: Date.now().toString(), name: 'Executive Name', role: 'Executive Officer', bio: 'Short bio...', image: '/assets/president-bobga-tita-enhanced-C3b4ZPnr.jpg' }
                    ];
                    setData({ ...data, teamMembers: newTeam });
                  }}
                  className="bg-emerald-800 text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Member
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.teamMembers.map((member: any, index: number) => (
                  <div key={member.id || index} className="p-4 border border-gray-200 rounded-xl space-y-3 bg-gray-50 relative">
                    <button
                      onClick={() => {
                        const filtered = data.teamMembers.filter((_: any, i: number) => i !== index);
                        setData({ ...data, teamMembers: filtered });
                      }}
                      className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) => {
                          const updated = [...data.teamMembers];
                          updated[index].name = e.target.value;
                          setData({ ...data, teamMembers: updated });
                        }}
                        className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Role / Position</label>
                      <input
                        type="text"
                        value={member.role}
                        onChange={(e) => {
                          const updated = [...data.teamMembers];
                          updated[index].role = e.target.value;
                          setData({ ...data, teamMembers: updated });
                        }}
                        className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Photo Upload</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={member.image}
                          onChange={(e) => {
                            const updated = [...data.teamMembers];
                            updated[index].image = e.target.value;
                            setData({ ...data, teamMembers: updated });
                          }}
                          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-xs outline-none"
                        />
                        <label className="bg-emerald-700 text-white text-xs px-3 py-1 rounded-lg cursor-pointer flex items-center shrink-0">
                          <Upload className="w-3.5 h-3.5" />
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleFileUpload(e, (url) => {
                              const updated = [...data.teamMembers];
                              updated[index].image = url;
                              setData({ ...data, teamMembers: updated });
                            })}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: NEWS */}
          {activeTab === 'news' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b pb-3">
                <h2 className="text-xl font-bold text-gray-900">Manage News & Articles</h2>
                <button
                  onClick={() => {
                    const newNews = [
                      ...data.news,
                      { id: Date.now().toString(), title: 'Headline Article', date: new Date().toLocaleDateString(), category: 'Community', summary: 'Article summary...', content: 'Full article text...', image: '/assets/bts-supplies-C4O45Rhf.jpg' }
                    ];
                    setData({ ...data, news: newNews });
                  }}
                  className="bg-emerald-800 text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Post News
                </button>
              </div>

              {data.news.map((item: any, index: number) => (
                <div key={item.id || index} className="p-4 border border-gray-200 rounded-xl space-y-3 bg-gray-50 relative">
                  <button
                    onClick={() => {
                      const filtered = data.news.filter((_: any, i: number) => i !== index);
                      setData({ ...data, news: filtered });
                    }}
                    className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">News Headline</label>
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => {
                          const updated = [...data.news];
                          updated[index].title = e.target.value;
                          setData({ ...data, news: updated });
                        }}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Date</label>
                      <input
                        type="text"
                        value={item.date}
                        onChange={(e) => {
                          const updated = [...data.news];
                          updated[index].date = e.target.value;
                          setData({ ...data, news: updated });
                        }}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Category</label>
                      <input
                        type="text"
                        value={item.category}
                        onChange={(e) => {
                          const updated = [...data.news];
                          updated[index].category = e.target.value;
                          setData({ ...data, news: updated });
                        }}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Summary</label>
                      <textarea
                        rows={2}
                        value={item.summary}
                        onChange={(e) => {
                          const updated = [...data.news];
                          updated[index].summary = e.target.value;
                          setData({ ...data, news: updated });
                        }}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 6: GALLERY */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b pb-3">
                <h2 className="text-xl font-bold text-gray-900">Manage Gallery</h2>
                <button
                  onClick={() => {
                    const newGal = [
                      ...data.gallery,
                      { id: Date.now().toString(), title: 'Event Photo', category: 'Events', image: '/assets/bts-group-XV_NaYNH.jpg' }
                    ];
                    setData({ ...data, gallery: newGal });
                  }}
                  className="bg-emerald-800 text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Photo
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.gallery.map((g: any, index: number) => (
                  <div key={g.id || index} className="p-4 border border-gray-200 rounded-xl space-y-3 bg-gray-50 relative">
                    <button
                      onClick={() => {
                        const filtered = data.gallery.filter((_: any, i: number) => i !== index);
                        setData({ ...data, gallery: filtered });
                      }}
                      className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Caption / Title</label>
                      <input
                        type="text"
                        value={g.title}
                        onChange={(e) => {
                          const updated = [...data.gallery];
                          updated[index].title = e.target.value;
                          setData({ ...data, gallery: updated });
                        }}
                        className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Image Upload</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={g.image}
                          onChange={(e) => {
                            const updated = [...data.gallery];
                            updated[index].image = e.target.value;
                            setData({ ...data, gallery: updated });
                          }}
                          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-xs outline-none"
                        />
                        <label className="bg-emerald-700 text-white text-xs px-3 py-1 rounded-lg cursor-pointer flex items-center shrink-0">
                          <Upload className="w-3.5 h-3.5" />
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleFileUpload(e, (url) => {
                              const updated = [...data.gallery];
                              updated[index].image = url;
                              setData({ ...data, gallery: updated });
                            })}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
