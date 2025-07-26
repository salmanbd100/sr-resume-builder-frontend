import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    company: 'Google',
    image: '/placeholder.svg?height=40&width=40',
    content:
      'This resume builder helped me land my dream job at Google. The ATS optimization really works!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Manager',
    company: 'Microsoft',
    image: '/placeholder.svg?height=40&width=40',
    content:
      'Clean, professional templates and super easy to use. Got 3 interview calls within a week!',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Data Scientist',
    company: 'Amazon',
    image: '/placeholder.svg?height=40&width=40',
    content: 'The PDF export quality is excellent. My resume looks exactly how I designed it.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Product Manager',
    company: 'Apple',
    image: '/placeholder.svg?height=40&width=40',
    content: "Best resume builder I've used. The templates are modern and ATS-friendly.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Trusted by Thousands of Job Seekers</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our users say about their experience with our resume builder.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={testimonial.image || '/placeholder.svg'}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
