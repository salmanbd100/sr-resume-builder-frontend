import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { ResumeGrid } from '@/components/dashboard/resume-grid';
import { DashboardStats } from '@/components/dashboard/dashboard-stats';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <DashboardStats />
        <ResumeGrid />
      </main>
    </div>
  );
}
