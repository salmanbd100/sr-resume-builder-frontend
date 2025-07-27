import { z } from 'zod';

export const personalDetailsSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  title: z.string().min(2, 'Professional title is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  location: z.string().min(2, 'Location is required'),
  linkedin: z.string().url().optional().or(z.literal('')),
  website: z.string().url().optional().or(z.literal('')),
  github: z.string().url().optional().or(z.literal('')),
});

export const workExperienceSchema = z.object({
  id: z.string(),
  jobTitle: z.string().min(2, 'Job title is required'),
  company: z.string().min(2, 'Company name is required'),
  location: z.string().min(2, 'Location is required'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().optional(),
  current: z.boolean().default(false),
  description: z.string().min(10, 'Description is required'),
});

export const educationSchema = z.object({
  id: z.string(),
  degree: z.string().min(2, 'Degree is required'),
  institution: z.string().min(2, 'Institution is required'),
  location: z.string().min(2, 'Location is required'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
  gpa: z.string().optional(),
  description: z.string().optional(),
});

export const resumeDataSchema = z.object({
  personalDetails: personalDetailsSchema,
  summary: z.string().min(50, 'Summary should be at least 50 characters'),
  workExperience: z.array(workExperienceSchema),
  education: z.array(educationSchema),
  skills: z.array(
    z.object({
      id: z.string(),
      name: z.string().min(1, 'Skill name is required'),
      category: z.enum(['technical', 'soft', 'language']),
      level: z.enum(['beginner', 'intermediate', 'advanced', 'expert']),
      dateAcquired: z.string().optional(),
    })
  ),
  certifications: z.array(
    z.object({
      id: z.string(),
      name: z.string().min(1, 'Certification name is required'),
      issuer: z.string().min(1, 'Issuer is required'),
      date: z.string().min(1, 'Date is required'),
      expiryDate: z.string().optional(),
      credentialId: z.string().optional(),
    })
  ),
  projects: z.array(
    z.object({
      id: z.string(),
      name: z.string().min(1, 'Project name is required'),
      description: z.string().min(10, 'Description is required'),
      technologies: z.array(z.string()),
      startDate: z.string().min(1, 'Start date is required'),
      endDate: z.string().optional(),
      url: z.string().url().optional().or(z.literal('')),
      github: z.string().url().optional().or(z.literal('')),
    })
  ),
  languages: z.array(
    z.object({
      id: z.string(),
      name: z.string().min(1, 'Language name is required'),
      proficiency: z.enum(['basic', 'conversational', 'fluent', 'native']),
    })
  ),
  additionalInfo: z.string().optional(),
});
