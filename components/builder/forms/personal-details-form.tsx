'use client';

import React from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { personalDetailsSchema } from '@/lib/schemas';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { z } from 'zod';

type PersonalDetailsData = z.infer<typeof personalDetailsSchema>;

interface PersonalDetailsFormProps {
  data: Partial<PersonalDetailsData>;
  onChange: (data: PersonalDetailsData) => void;
}

export function PersonalDetailsForm({ data, onChange }: PersonalDetailsFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PersonalDetailsData>({
    resolver: zodResolver(personalDetailsSchema),
    defaultValues: data,
  });

  const formData = watch();

  // Update parent component when form data changes
  React.useEffect(() => {
    const subscription = watch((value) => {
      if (value && Object.keys(value).length > 0) {
        onChange(value as PersonalDetailsData);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input id="fullName" placeholder="John Doe" {...register('fullName')} />
          {errors.fullName && <p className="text-sm text-destructive">{errors.fullName.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="title">Professional Title *</Label>
          <Input id="title" placeholder="Software Engineer" {...register('title')} />
          {errors.title && <p className="text-sm text-destructive">{errors.title.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" placeholder="john@example.com" {...register('email')} />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" placeholder="+1 (555) 123-4567" {...register('phone')} />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location *</Label>
        <Input id="location" placeholder="New York, NY" {...register('location')} />
        {errors.location && <p className="text-sm text-destructive">{errors.location.message}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn Profile</Label>
          <Input
            id="linkedin"
            placeholder="https://linkedin.com/in/johndoe"
            {...register('linkedin')}
          />
          {errors.linkedin && <p className="text-sm text-destructive">{errors.linkedin.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input id="website" placeholder="https://johndoe.com" {...register('website')} />
          {errors.website && <p className="text-sm text-destructive">{errors.website.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="github">GitHub Profile</Label>
        <Input id="github" placeholder="https://github.com/johndoe" {...register('github')} />
        {errors.github && <p className="text-sm text-destructive">{errors.github.message}</p>}
      </div>
    </form>
  );
}
