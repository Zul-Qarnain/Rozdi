import { Project, CaseStudy, TeamMember, Lead } from '@prisma/client'

export const mockProjects: Partial<Project>[] = [
  {
    id: 'proj-1',
    title: 'Badsha Group: Corporate Portal & Email Automation',
    subtitle: 'Enterprise operations platform',
    clientName: 'Badsha Group',
    clientLogoUrl: 'https://picsum.photos/seed/badsha/100/100',
    layoutImageUrls: ['https://picsum.photos/seed/badsha-ui1/800/600', 'https://picsum.photos/seed/badsha-ui2/800/600'],
    tags: ['Enterprise', 'CRM', 'Email Automation'],
    liveUrl: 'https://example.com',
    githubUrl: null,
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'FinTech Automation',
    subtitle: 'Transaction analytics dashboard',
    clientName: 'FinTech Corp',
    clientLogoUrl: 'https://picsum.photos/seed/fintech/100/100',
    layoutImageUrls: ['https://picsum.photos/seed/fintech-ui/800/600'],
    tags: ['FinTech', 'Dashboard', 'AI'],
    liveUrl: 'https://example.com',
    githubUrl: null,
    featured: false,
  },
  {
    id: 'proj-3',
    title: 'Global Logistics',
    subtitle: 'Real-time route optimization',
    clientName: 'Global Logistics',
    clientLogoUrl: 'https://picsum.photos/seed/logistics/100/100',
    layoutImageUrls: ['https://picsum.photos/seed/logistics-ui/800/600'],
    tags: ['Logistics', 'Maps', 'Automation'],
    liveUrl: 'https://example.com',
    githubUrl: null,
    featured: false,
  }
]

export const mockCaseStudies: Partial<CaseStudy>[] = [
  {
    projectId: 'proj-1',
    title: 'White vs Dark Mode for Executives',
    researchSummary: 'An eye-tracking and preference study among executives.',
    metrics: { preferenceRate: 78, eyeStrainReduction: 24, surveyedLeaders: 312 },
    sections: []
  },
  {
    projectId: 'proj-2',
    title: 'Logo Orientation: Eye-Tracking Data',
    researchSummary: 'Analyzing heatmaps for optimal brand recognition.',
    metrics: { recognitionLift: 45, trustIncrease: 32 },
    sections: []
  },
  {
    projectId: 'proj-3',
    title: 'Button Physics: 3D Geometric CTR',
    researchSummary: 'Evaluating click-through-rates with depth cues.',
    metrics: { ctrLift: 12, engagementLift: 8, conversionLift: 15 },
    sections: []
  }
]

export const mockTeamMembers: Partial<TeamMember>[] = [
  {
    name: 'Dr. Rafiq Ahmed',
    role: 'AI Strategist',
    headshotUrl: 'https://i.pravatar.cc/300?img=11',
    academicMilestones: ['Ph.D. in Computer Science', 'M.Sc. in Machine Learning'],
    awards: ['Innovator of the Year 2024'],
    projectsCompleted: 14,
    displayOrder: 1,
  },
  {
    name: 'Sarah Rahman',
    role: 'Cloud Architect',
    headshotUrl: 'https://i.pravatar.cc/300?img=9',
    academicMilestones: ['AWS Certified Solutions Architect', 'B.Sc. Software Engineering'],
    awards: ['Cloud Excellence Award'],
    projectsCompleted: 22,
    displayOrder: 2,
  },
  {
    name: 'Omar Faruk',
    role: 'Data Science Lead',
    headshotUrl: 'https://i.pravatar.cc/300?img=12',
    academicMilestones: ['M.Sc. Data Science', 'Published in NeurIPS'],
    awards: ['Best Data Model 2023'],
    projectsCompleted: 18,
    displayOrder: 3,
  },
  {
    name: 'Tasnia Islam',
    role: 'UX/UI Director',
    headshotUrl: 'https://i.pravatar.cc/300?img=5',
    academicMilestones: ['M.A. Interaction Design', 'HCI Researcher'],
    awards: ['Awwwards Site of the Month', 'Design Thinking Champion'],
    projectsCompleted: 35,
    displayOrder: 4,
  },
  {
    name: 'Kamrul Hasan',
    role: 'Blockchain Specialist',
    headshotUrl: 'https://i.pravatar.cc/300?img=8',
    academicMilestones: ['B.Sc. Computer Science', 'Certified Blockchain Developer'],
    awards: ['Hackathon Winner 2022'],
    projectsCompleted: 9,
    displayOrder: 5,
  },
  {
    name: 'Nadia Chowdhury',
    role: 'Cybersecurity Analyst',
    headshotUrl: 'https://i.pravatar.cc/300?img=6',
    academicMilestones: ['CEH Certified', 'CISSP'],
    awards: ['Security Champion 2024'],
    projectsCompleted: 11,
    displayOrder: 6,
  }
]

export const mockLeads: Partial<Lead>[] = [
  {
    fullName: 'Arif Hossain',
    company: 'Apex Tech',
    corporateEmail: 'arif@apex.example.com',
    projectScope: 'Website Redesign',
    message: 'We need a new corporate site.',
    status: 'new'
  },
  {
    fullName: 'Laila Zaman',
    company: 'Zaman Logistics',
    corporateEmail: 'laila@zaman.example.com',
    projectScope: 'CRM System',
    message: 'Interested in automating our logistics CRM.',
    status: 'contacted'
  },
  {
    fullName: 'Hassan Ali',
    company: 'Ali Enterprises',
    corporateEmail: 'hassan@ali.example.com',
    projectScope: 'Full Package',
    message: 'Looking for a full digital transformation.',
    status: 'converted'
  }
]
