import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What makes a resume ATS-compliant?',
    answer:
      'ATS-compliant resumes use standard formatting, avoid complex layouts, use standard fonts, and include relevant keywords. Our templates are specifically designed to pass through Applicant Tracking Systems while maintaining a professional appearance.',
  },
  {
    question: 'Can I edit my resume after creating it?',
    answer:
      'Yes! You can edit, update, and modify your resume anytime. All changes are automatically saved to your account, and you can export updated versions whenever needed.',
  },
  {
    question: 'What file formats can I export to?',
    answer:
      'Currently, we support high-quality PDF export, which is the most widely accepted format by employers and ATS systems. PDF ensures your formatting stays consistent across all devices and platforms.',
  },
  {
    question: 'How many resumes can I create?',
    answer:
      'With a free account, you can create up to 3 resumes. Premium users get unlimited resume creation, additional templates, and priority support.',
  },
  {
    question: 'Is my data secure and private?',
    answer:
      'Absolutely. We use industry-standard encryption to protect your data. We never share your personal information with third parties, and you can delete your account and data at any time.',
  },
  {
    question: 'Can I use this on mobile devices?',
    answer:
      'Yes! Our resume builder is fully responsive and works seamlessly on desktop, tablet, and mobile devices. You can create and edit your resume from anywhere.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers. Here are the most common questions about our resume
            builder.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
