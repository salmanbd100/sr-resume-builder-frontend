import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to Build Your Perfect Resume?</h2>
          <p className="text-xl opacity-90">
            Join thousands of job seekers who have successfully landed their dream jobs using our
            ATS-compliant resume builder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/auth/signup">
                Start Building Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="#templates">View Templates</Link>
            </Button>
          </div>
          <p className="text-sm opacity-75">
            No credit card required • Free forever plan available
          </p>
        </div>
      </div>
    </section>
  );
}
