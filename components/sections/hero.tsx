import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LuArrowRight as ArrowRight, LuCircleCheck as CheckCircle, LuDownload as Download, LuFileText as FileText } from 'react-icons/lu';

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Build Your Perfect <span className="text-primary">ATS-Compliant</span> Resume
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Create professional resumes that pass Applicant Tracking Systems and land you
                interviews. Export to PDF in seconds.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/builder">
                  Start Building Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#templates">View Templates</Link>
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>ATS Optimized</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="h-4 w-4 text-green-500" />
                <span>PDF Export</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-green-500" />
                <span>Professional Templates</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8">
              <div className="bg-white rounded-lg shadow-2xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-muted rounded w-full" />
                  <div className="h-2 bg-muted rounded w-4/5" />
                  <div className="h-2 bg-muted rounded w-3/4" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-primary/20 rounded w-full" />
                  <div className="h-2 bg-primary/20 rounded w-5/6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
