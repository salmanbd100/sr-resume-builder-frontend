'use client';

import React from 'react';
import { useFieldArray, useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LuPlus, LuTrash2 } from 'react-icons/lu';
import { DatePicker } from '@/components/ui/date-picker';
import { workExperienceSchema } from '@/lib/schemas';
import type { WorkExperience } from '@/lib/types';

const workExperienceArraySchema = z.array(workExperienceSchema);

interface WorkExperienceFormProps {
  data: WorkExperience[];
  onChange: (data: WorkExperience[]) => void;
}

export function WorkExperienceForm({ data, onChange }: WorkExperienceFormProps) {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useForm<{ experiences: WorkExperience[] }>({
    resolver: zodResolver(z.object({ experiences: workExperienceArraySchema })),
    defaultValues: {
      experiences:
        data.length > 0
          ? data
          : [
              {
                id: crypto.randomUUID(),
                jobTitle: '',
                company: '',
                location: '',
                startDate: '',
                endDate: '',
                current: false,
                description: '',
              },
            ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experiences',
  });

  const watchedExperiences = watch('experiences');

  React.useEffect(() => {
    const subscription = watch((value) => {
      onChange(value.experiences as WorkExperience[]);
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  const addExperience = () => {
    append({
      id: crypto.randomUUID(),
      jobTitle: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    });
  };

  return (
    <div className="space-y-6">
      {fields.map((field, index) => (
        <Card key={field.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Experience {index + 1}</CardTitle>
              {fields.length > 1 && (
                <Button type="button" variant="ghost" size="sm" onClick={() => remove(index)}>
                  <LuTrash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`jobTitle-${index}`}>Job Title *</Label>
                <Input
                  id={`jobTitle-${index}`}
                  placeholder="Software Engineer"
                  {...register(`experiences.${index}.jobTitle`)}
                />
                {errors.experiences?.[index]?.jobTitle && (
                  <p className="text-sm text-destructive">
                    {errors.experiences[index]?.jobTitle?.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`company-${index}`}>Company *</Label>
                <Input
                  id={`company-${index}`}
                  placeholder="Tech Corp"
                  {...register(`experiences.${index}.company`)}
                />
                {errors.experiences?.[index]?.company && (
                  <p className="text-sm text-destructive">
                    {errors.experiences[index]?.company?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`location-${index}`}>Location *</Label>
              <Input
                id={`location-${index}`}
                placeholder="New York, NY"
                {...register(`experiences.${index}.location`)}
              />
              {errors.experiences?.[index]?.location && (
                <p className="text-sm text-destructive">
                  {errors.experiences[index]?.location?.message}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`startDate-${index}`}>Start Date *</Label>
                <Controller
                  control={control}
                  name={`experiences.${index}.startDate`}
                  render={({ field }) => (
                    <DatePicker value={field.value} onChange={field.onChange} />
                  )}
                />
                {errors.experiences?.[index]?.startDate && (
                  <p className="text-sm text-destructive">
                    {errors.experiences[index]?.startDate?.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`endDate-${index}`}>End Date</Label>
                <Controller
                  control={control}
                  name={`experiences.${index}.endDate`}
                  render={({ field }) => (
                    <DatePicker
                      value={field.value}
                      onChange={field.onChange}
                      disabled={watchedExperiences[index]?.current}
                    />
                  )}
                />
                {errors.experiences?.[index]?.endDate && (
                  <p className="text-sm text-destructive">
                    {errors.experiences[index]?.endDate?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Controller
                control={control}
                name={`experiences.${index}.current`}
                render={({ field }) => (
                  <Checkbox
                    id={`current-${index}`}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label htmlFor={`current-${index}`}>I currently work here</Label>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`description-${index}`}>Job Description *</Label>
              <Textarea
                id={`description-${index}`}
                placeholder="Describe your responsibilities, achievements, and key contributions in this role..."
                className="min-h-[100px]"
                {...register(`experiences.${index}.description`)}
              />
              {errors.experiences?.[index]?.description && (
                <p className="text-sm text-destructive">
                  {errors.experiences[index]?.description?.message}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={addExperience}
        className="w-full bg-transparent"
      >
        <LuPlus className="mr-2 h-4 w-4" />
        Add Another Experience
      </Button>
    </div>
  );
}
