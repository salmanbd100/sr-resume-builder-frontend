'use client';

import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export function DashboardHeader() {
  const { data: session } = useSession();

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome back, {session?.user?.name?.split(' ')[0] || 'User'}!
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage your resumes and track your job applications
            </p>
          </div>
          <Button asChild>
            <Link href="/builder">
              <Plus className="mr-2 h-4 w-4" />
              Create New Resume
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
