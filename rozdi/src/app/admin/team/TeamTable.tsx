'use client';

import React, { useState } from 'react';
import { TeamMember } from '@prisma/client';
import { Edit2, Trash2, X, ArrowUp, ArrowDown } from 'lucide-react';
import { saveTeamMember, deleteTeamMember, swapDisplayOrder } from './actions';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function TeamTable({ members }: { members: TeamMember[] }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<Partial<TeamMember> | null>(null);

  const openDrawer = (member?: TeamMember) => {
    if (member) {
      setEditingMember(member);
    } else {
      setEditingMember({
        name: '', role: '', headshotUrl: '', projectsCompleted: 0,
        academicMilestones: [], awards: [], displayOrder: members.length + 1
      });
    }
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setEditingMember(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    let academicMilestones = [];
    let awards = [];
    try {
      academicMilestones = JSON.parse(formData.get('academicMilestones') as string || '[]');
      awards = JSON.parse(formData.get('awards') as string || '[]');
    } catch(err) {
      alert("Invalid JSON format in Milestones or Awards");
      return;
    }

    const data = {
      name: formData.get('name') as string,
      role: formData.get('role') as string,
      headshotUrl: formData.get('headshotUrl') as string,
      projectsCompleted: parseInt(formData.get('projectsCompleted') as string) || 0,
      academicMilestones,
      awards,
      displayOrder: editingMember?.displayOrder || members.length + 1,
    };

    await saveTeamMember(data, editingMember?.id);
    closeDrawer();
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[28px] font-bold text-[var(--color-charcoal)]">Team Management</h1>
        <button 
          onClick={() => openDrawer()}
          className="bg-[var(--color-charcoal)] text-white px-5 py-2.5 font-medium text-[14px] hover:bg-[#333] transition-colors"
        >
          Add Member +
        </button>
      </div>

      <div className="bg-white border border-[var(--color-border)] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[var(--color-canvas)] border-b border-[var(--color-border)]">
              <th className="px-4 py-3 text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666] w-[60px]">Order</th>
              <th className="px-4 py-3 text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666] w-[60px]">Img</th>
              <th className="px-4 py-3 text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Name</th>
              <th className="px-4 py-3 text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Role</th>
              <th className="px-4 py-3 text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666] text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, idx) => (
              <tr key={member.id} className="border-b border-[var(--color-border)] hover:bg-[var(--color-cream)] transition-colors">
                <td className="px-4 py-4">
                  <div className="flex flex-col items-center justify-center gap-1">
                    {idx > 0 && <button onClick={() => swapDisplayOrder(member.id, member.displayOrder, members[idx-1].id, members[idx-1].displayOrder)} className="text-[#888] hover:text-[var(--color-charcoal)]"><ArrowUp size={14} /></button>}
                    <span className="text-[12px] font-bold text-[var(--color-charcoal)]">{member.displayOrder}</span>
                    {idx < members.length - 1 && <button onClick={() => swapDisplayOrder(member.id, member.displayOrder, members[idx+1].id, members[idx+1].displayOrder)} className="text-[#888] hover:text-[var(--color-charcoal)]"><ArrowDown size={14} /></button>}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative border border-[var(--color-border)] bg-[#f5f5f5]">
                    {member.headshotUrl && <Image src={member.headshotUrl} alt={member.name} fill className="object-cover" />}
                  </div>
                </td>
                <td className="px-4 py-4 text-[14px] text-[var(--color-charcoal)] font-medium">{member.name}</td>
                <td className="px-4 py-4 text-[14px] text-[#444748]">{member.role}</td>
                <td className="px-4 py-4 text-right flex items-center justify-end gap-3 h-[73px]">
                  <button onClick={() => openDrawer(member)} className="text-[#888] hover:text-[var(--color-charcoal)] transition-colors"><Edit2 size={16} /></button>
                  <button onClick={() => deleteTeamMember(member.id)} className="text-[#888] hover:text-red-600 transition-colors"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeDrawer} className="fixed inset-0 bg-black/40 z-[150]" />
            <motion.div initial={{ x: 420 }} animate={{ x: 0 }} exit={{ x: 420 }} transition={{ duration: 0.3, ease: 'easeOut' }} className="fixed top-0 right-0 h-full w-full md:w-[420px] bg-white border-l border-[var(--color-border)] z-[200] overflow-y-auto flex flex-col p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-[20px] font-bold text-[var(--color-charcoal)]">{editingMember?.id ? 'Edit Member' : 'Add Member'}</h2>
                <button onClick={closeDrawer} className="text-[#888] hover:text-[var(--color-charcoal)]"><X size={20} /></button>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Name*</label>
                  <input required name="name" defaultValue={editingMember?.name} className="border border-[var(--color-border)] p-3 px-4 text-[14px] focus:outline-none focus:border-[var(--color-charcoal)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Role*</label>
                  <input required name="role" defaultValue={editingMember?.role} className="border border-[var(--color-border)] p-3 px-4 text-[14px] focus:outline-none focus:border-[var(--color-charcoal)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Headshot URL</label>
                  <input type="url" name="headshotUrl" defaultValue={editingMember?.headshotUrl || ''} className="border border-[var(--color-border)] p-3 px-4 text-[14px] focus:outline-none focus:border-[var(--color-charcoal)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Projects Completed</label>
                  <input type="number" name="projectsCompleted" defaultValue={editingMember?.projectsCompleted} className="border border-[var(--color-border)] p-3 px-4 text-[14px] focus:outline-none focus:border-[var(--color-charcoal)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Academic Milestones (JSON Array)</label>
                  <textarea name="academicMilestones" defaultValue={JSON.stringify(editingMember?.academicMilestones || [])} rows={3} className="border border-[var(--color-border)] p-3 px-4 text-[14px] focus:outline-none focus:border-[var(--color-charcoal)] font-mono" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Awards (JSON Array)</label>
                  <textarea name="awards" defaultValue={JSON.stringify(editingMember?.awards || [])} rows={3} className="border border-[var(--color-border)] p-3 px-4 text-[14px] focus:outline-none focus:border-[var(--color-charcoal)] font-mono" />
                </div>
                
                <div className="mt-auto pt-8">
                  <button type="submit" className="w-full bg-[var(--color-charcoal)] text-white py-3 font-semibold hover:bg-[#333] transition-colors">
                    Save Member
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
