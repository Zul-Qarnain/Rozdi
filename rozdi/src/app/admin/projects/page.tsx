import { prisma } from '@/lib/prisma';
import { ProjectsTable } from './ProjectsTable';

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return <ProjectsTable projects={projects} />;
}
