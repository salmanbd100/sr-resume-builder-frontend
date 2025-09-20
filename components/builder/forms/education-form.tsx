'use client';

import React from 'react';
import { useFieldArray, useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LuPlus, LuTrash2, LuCalendar } from 'react-icons/lu';
import { educationSchema } from '@/lib/schemas';
import type { Education } from '@/lib/types';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { DatePicker } from '@/components/ui/date-picker';

const educationArraySchema = z.array(educationSchema);

interface EducationFormProps {
  data: Education[];
  onChange: (data: Education[]) => void;
}

export function EducationForm({ data, onChange }: EducationFormProps) {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useForm<{ education: Education[] }>({
    resolver: zodResolver(z.object({ education: educationArraySchema })),
    defaultValues: {
      education:
        data.length > 0
          ? data
          : [
              {
                id: crypto.randomUUID(),
                degree: '',
                institution: '',
                location: '',
                startDate: '',
                endDate: '',
                gpa: '',
                description: '',
              },
            ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'education',
  });

  React.useEffect(() => {
    const subscription = watch((value) => {
      onChange(value.education as Education[]);
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  const addEducation = () => {
    append({
      id: crypto.randomUUID(),
      degree: '',
      institution: '',
      location: '',
      startDate: '',
      endDate: '',
      gpa: '',
      description: '',
    });
  };

  return (
    <div className="space-y-6">
      {fields.map((field, index) => (
        <Card key={field.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Education {index + 1}</CardTitle>
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
                <Label htmlFor={`degree-${index}`}>Degree *</Label>
                <Input
                  id={`degree-${index}`}
                  placeholder="Bachelor of Science in Computer Science"
                  {...register(`education.${index}.degree`)}
                />
                {errors.education?.[index]?.degree && (
                  <p className="text-sm text-destructive">
                    {errors.education[index]?.degree?.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`institution-${index}`}>Institution *</Label>
                <Input
                  id={`institution-${index}`}
                  placeholder="University of Technology"
                  {...register(`education.${index}.institution`)}
                />
                {errors.education?.[index]?.institution && (
                  <p className="text-sm text-destructive">
                    {errors.education[index]?.institution?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`location-${index}`}>Location *</Label>
              <Input
                id={`location-${index}`}
                placeholder="Boston, MA"
                {...register(`education.${index}.location`)}
              />
              {errors.education?.[index]?.location && (
                <p className="text-sm text-destructive">
                  {errors.education[index]?.location?.message}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`startDate-${index}`}>Start Date *</Label>
                <Controller
                  control={control}
                  name={`education.${index}.startDate`}
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full justify-start text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          <LuCalendar className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(new Date(field.value), 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={field.value ? new Date(field.value) : undefined}
                          onSelect={(date) => field.onChange(date?.toISOString())}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
                {errors.education?.[index]?.startDate && (
                  <p className="text-sm text-destructive">
                    {errors.education[index]?.startDate?.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`endDate-${index}`}>End Date *</Label>
                <Controller
                  control={control}
                  name={`education.${index}.endDate`}
                  render={({ field }) => (
                    <DatePicker value={field.value} onChange={field.onChange} />
                  )}
                />
                {errors.education?.[index]?.endDate && (
                  <p className="text-sm text-destructive">
                    {errors.education[index]?.endDate?.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`gpa-${index}`}>GPA (Optional)</Label>
                <Input
                  id={`gpa-${index}`}
                  placeholder="3.8"
                  {...register(`education.${index}.gpa`)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`description-${index}`}>Description (Optional)</Label>
              <Textarea
                id={`description-${index}`}
                placeholder="Relevant coursework, honors, activities, or achievements..."
                className="min-h-[80px]"
                {...register(`education.${index}.description`)}
              />
            </div>
          </CardContent>
        </Card>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={addEducation}
        className="w-full bg-transparent"
      >
        <LuPlus className="mr-2 h-4 w-4" />
        Add Another Education
      </Button>
    </div>
  );
}
