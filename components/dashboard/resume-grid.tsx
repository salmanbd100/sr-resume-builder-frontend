'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LuEllipsis, LuPencil, LuDownload, LuCopy, LuTrash2, LuEye, LuPlus, LuFileText } from 'react-icons/lu';
import Link from 'next/link';

// Mock data - replace with actual data fetching
const mockResumes = [
  {
    id: '1',
    title: 'Software Engineer Resume',
    templateId: 'modern',
    templateName: 'Modern Professional',
    updatedAt: '2024-01-15',
    status: 'published',
  },
  {
    id: '2',
    title: 'Frontend Developer Resume',
    templateId: 'minimal',
    templateName: 'Minimal Clean',
    updatedAt: '2024-01-10',
    status: 'draft',
  },
  {
    id: '3',
    title: 'Full Stack Developer Resume',
    templateId: 'classic',
    templateName: 'Classic Executive',
    updatedAt: '2024-01-05',
    status: 'published',
  },
];

export function ResumeGrid() {
  const [resumes] = useState(mockResumes);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Resumes</h2>
        <Button asChild>
          <Link href="/builder">
            <LuPlus className="mr-2 h-4 w-4" />
            Create New
          </Link>
        </Button>
      </div>

      {resumes.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                <LuFileText className="h-8 w-8 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">No resumes yet</h3>
                <p className="text-muted-foreground">Create your first resume to get started</p>
              </div>
              <Button asChild>
                <Link href="/builder">
                  <LuPlus className="mr-2 h-4 w-4" />
                  Create Your First Resume
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resumes.map((resume) => (
            <Card key={resume.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{resume.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{resume.templateName}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <LuEllipsis className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/builder/${resume.id}`}>
                          <LuPencil className="mr-2 h-4 w-4" />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <LuEye className="mr-2 h-4 w-4" />
                        Preview
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <LuDownload className="mr-2 h-4 w-4" />
                        Download PDF
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <LuCopy className="mr-2 h-4 w-4" />
                        Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <LuTrash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center mx-auto">
                      <LuFileText className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">Resume Preview</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge variant={resume.status === 'published' ? 'default' : 'secondary'}>
                    {resume.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Updated {new Date(resume.updatedAt).toLocaleDateString()}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
