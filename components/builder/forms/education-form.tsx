"use client"

import React from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"
import { educationSchema } from "@/lib/schemas"
import type { Education } from "@/lib/types"

const educationArraySchema = z.array(educationSchema)

interface EducationFormProps {
  data: Education[]
  onChange: (data: Education[]) => void
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
                degree: "",
                institution: "",
                location: "",
                startDate: "",
                endDate: "",
                gpa: "",
                description: "",
              },
            ],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  })

  const watchedEducation = watch("education")

  React.useEffect(() => {
    onChange(watchedEducation)
  }, [watchedEducation, onChange])

  const addEducation = () => {
    append({
      id: crypto.randomUUID(),
      degree: "",
      institution: "",
      location: "",
      startDate: "",
      endDate: "",
      gpa: "",
      description: "",
    })
  }

  return (
    <div className="space-y-6">
      {fields.map((field, index) => (
        <Card key={field.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Education {index + 1}</CardTitle>
              {fields.length > 1 && (
                <Button type="button" variant="ghost" size="sm" onClick={() => remove(index)}>
                  <Trash2 className="h-4 w-4" />
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
                  <p className="text-sm text-destructive">{errors.education[index]?.degree?.message}</p>
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
                  <p className="text-sm text-destructive">{errors.education[index]?.institution?.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`location-${index}`}>Location *</Label>
              <Input id={`location-${index}`} placeholder="Boston, MA" {...register(`education.${index}.location`)} />
              {errors.education?.[index]?.location && (
                <p className="text-sm text-destructive">{errors.education[index]?.location?.message}</p>
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`startDate-${index}`}>Start Date *</Label>
                <Input id={`startDate-${index}`} type="month" {...register(`education.${index}.startDate`)} />
                {errors.education?.[index]?.startDate && (
                  <p className="text-sm text-destructive">{errors.education[index]?.startDate?.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`endDate-${index}`}>End Date *</Label>
                <Input id={`endDate-${index}`} type="month" {...register(`education.${index}.endDate`)} />
                {errors.education?.[index]?.endDate && (
                  <p className="text-sm text-destructive">{errors.education[index]?.endDate?.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`gpa-${index}`}>GPA (Optional)</Label>
                <Input id={`gpa-${index}`} placeholder="3.8" {...register(`education.${index}.gpa`)} />
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

      <Button type="button" variant="outline" onClick={addEducation} className="w-full bg-transparent">
        <Plus className="mr-2 h-4 w-4" />
        Add Another Education
      </Button>
    </div>
  )
}
