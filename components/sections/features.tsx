import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Download, Zap, Shield, Smartphone, Users } from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "ATS-Compliant Templates",
    description:
      "Our templates are designed to pass Applicant Tracking Systems, ensuring your resume gets seen by human recruiters.",
  },
  {
    icon: Download,
    title: "Instant PDF Export",
    description: "Export your resume to high-quality PDF format with a single click. Perfect formatting guaranteed.",
  },
  {
    icon: Zap,
    title: "Quick & Easy Builder",
    description: "Build your resume in minutes with our intuitive step-by-step builder. No design skills required.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is encrypted and secure. We never share your information with third parties.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description:
      "Build and edit your resume on any device. Our platform works seamlessly on desktop, tablet, and mobile.",
  },
  {
    icon: Users,
    title: "Multiple Templates",
    description: "Choose from various professional templates designed for different industries and career levels.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Everything You Need to Build the Perfect Resume</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools and features you need to create a professional, ATS-compliant resume
            that gets results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
