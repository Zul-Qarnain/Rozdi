'use client';

import React, { useState } from 'react';
import { Project } from '@prisma/client';
import { Edit2, Trash2, X } from 'lucide-react';
import { saveProject, deleteProject } from './actions';
import { motion, AnimatePresence } from 'framer-motion';

export function ProjectsTable({ projects }: { projects: Project[] }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Partial<Project> | null>(null);

  const openDrawer = (project?: Project) => {
    if (project) {
      setEditingProject(project);
    } else {
      setEditingProject({
        title: '', subtitle: '', clientName: '', liveUrl: '', githubUrl: '', featured: false, tags: []
      });
    }
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setEditingProject(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get('title') as string,
      subtitle: formData.get('subtitle') as string,
      clientName: formData.get('clientName') as string,
      liveUrl: formData.get('liveUrl') as string,
      githubUrl: formData.get('githubUrl') as string,
      featured: formData.get('featured') === 'on',
      tags: (formData.get('tags') as string).split(',').map(t => t.trim()).filter(Boolean),
    };

    await saveProject(data, editingProject?.id);
    closeDrawer();
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[28px] font-bold text-[var(--color-charcoal)]">Project Management</h1>
        <button 
          onClick={() => openDrawer()}
          className="bg-[var(--color-charcoal)] text-white px-5 py-2.5 font-medium text-[14px] hover:bg-[#333] transition-colors"
        >
          Add Project +
        </button>
      </div>

      <div className="bg-white border border-[var(--color-border)] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[var(--color-canvas)] border-b border-[var(--color-border)]">
              <th className="px-4 py-3 text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Title</th>
              <th className="px-4 py-3 text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Client</th>
              <th className="px-4 py-3 text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Tags</th>
              <th className="px-4 py-3 text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Featured</th>
              <th className="px-4 py-3 text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666] text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr key={project.id} className="border-b border-[var(--color-border)] hover:bg-[var(--color-cream)] transition-colors">
                <td className="px-4 py-4 text-[14px] text-[var(--color-charcoal)] font-medium">{project.title}</td>
                <td className="px-4 py-4 text-[14px] text-[#444748]">{project.clientName}</td>
                <td className="px-4 py-4 text-[14px] text-[#444748]">{project.tags.join(', ')}</td>
                <td className="px-4 py-4 text-[14px] text-[#444748]">{project.featured ? 'Yes' : 'No'}</td>
                <td className="px-4 py-4 text-right flex items-center justify-end gap-3">
                  <button onClick={() => openDrawer(project)} className="text-[#888] hover:text-[var(--color-charcoal)] transition-colors"><Edit2 size={16} /></button>
                  <button onClick={() => deleteProject(project.id)} className="text-[#888] hover:text-red-600 transition-colors"><Trash2 size={16} /></button>
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
                <h2 className="text-[20px] font-bold text-[var(--color-charcoal)]">{editingProject?.id ? 'Edit Project' : 'Add Project'}</h2>
                <button onClick={closeDrawer} className="text-[#888] hover:text-[var(--color-charcoal)]"><X size={20} /></button>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Title*</label>
                  <input required name="title" defaultValue={editingProject?.title} className="border border-[var(--color-border)] p-3 px-4 text-[14px] focus:outline-none focus:border-[var(--color-charcoal)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Subtitle</label>
                  <input name="subtitle" defaultValue={editingProject?.subtitle || ''} className="border border-[var(--color-border)] p-3 px-4 text-[14px] focus:outline-none focus:border-[var(--color-charcoal)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Client Name*</label>
                  <input required name="clientName" defaultValue={editingProject?.clientName} className="border border-[var(--color-border)] p-3 px-4 text-[14px] focus:outline-none focus:border-[var(--color-charcoal)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Tags (comma separated)</label>
                  <input name="tags" defaultValue={editingProject?.tags?.join(', ')} className="border border-[var(--color-border)] p-3 px-4 text-[14px] focus:outline-none focus:border-[var(--color-charcoal)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Live URL</label>
                  <input type="url" name="liveUrl" defaultValue={editingProject?.liveUrl || ''} className="border border-[var(--color-border)] p-3 px-4 text-[14px] focus:outline-none focus:border-[var(--color-charcoal)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">GitHub URL</label>
                  <input type="url" name="githubUrl" defaultValue={editingProject?.githubUrl || ''} className="border border-[var(--color-border)] p-3 px-4 text-[14px] focus:outline-none focus:border-[var(--color-charcoal)]" />
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <input type="checkbox" id="featured" name="featured" defaultChecked={editingProject?.featured} className="w-4 h-4" />
                  <label htmlFor="featured" className="text-[14px] text-[var(--color-charcoal)] font-medium">Featured Project</label>
                </div>
                
                <div className="mt-auto pt-8">
                  <button type="submit" className="w-full bg-[var(--color-charcoal)] text-white py-3 font-semibold hover:bg-[#333] transition-colors">
                    Save Project
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
