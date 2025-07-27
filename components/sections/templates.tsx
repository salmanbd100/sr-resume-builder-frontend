import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye } from 'lucide-react';

const templates = [
  {
    id: 'modern',
    name: 'Modern Professional',
    description: 'Clean and contemporary design perfect for tech and creative roles',
    category: 'Modern',
    preview: '/placeholder.svg?height=400&width=300',
  },
  {
    id: 'classic',
    name: 'Classic Executive',
    description: 'Traditional format ideal for corporate and executive positions',
    category: 'Classic',
    preview: '/placeholder.svg?height=400&width=300',
  },
  {
    id: 'minimal',
    name: 'Minimal Clean',
    description: 'Simple and elegant design that focuses on content',
    category: 'Minimal',
    preview: '/placeholder.svg?height=400&width=300',
  },
  {
    id: 'creative',
    name: 'Creative Designer',
    description: 'Eye-catching design for creative professionals and designers',
    category: 'Creative',
    preview: '/placeholder.svg?height=400&width=300',
  },
];

export function Templates() {
  return (
    <section id="templates" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Professional Resume Templates</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of ATS-compliant templates designed by professionals for
            various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template) => (
            <Card key={template.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={template.preview || '/placeholder.svg'}
                    alt={template.name}
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="sm" variant="secondary">
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{template.name}</h3>
                    <Badge variant="secondary">{template.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
