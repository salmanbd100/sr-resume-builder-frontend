'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Linkedin, Globe, Github } from 'lucide-react';

interface ResumePreviewProps {
  data: any;
}

export function ResumePreview({ data }: ResumePreviewProps) {
  const { personalDetails, summary, workExperience, education, skills } = data;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Resume Preview</span>
          <Badge variant="secondary">Live Preview</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">{personalDetails?.fullName || 'Your Name'}</h1>
          <p className="text-lg text-muted-foreground">
            {personalDetails?.title || 'Professional Title'}
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            {personalDetails?.email && (
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                {personalDetails.email}
              </div>
            )}
            {personalDetails?.phone && (
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                {personalDetails.phone}
              </div>
            )}
            {personalDetails?.location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {personalDetails.location}
              </div>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {personalDetails?.linkedin && (
              <div className="flex items-center gap-1 text-blue-600">
                <Linkedin className="h-3 w-3" />
                LinkedIn
              </div>
            )}
            {personalDetails?.website && (
              <div className="flex items-center gap-1 text-blue-600">
                <Globe className="h-3 w-3" />
                Website
              </div>
            )}
            {personalDetails?.github && (
              <div className="flex items-center gap-1 text-blue-600">
                <Github className="h-3 w-3" />
                GitHub
              </div>
            )}
          </div>
        </div>

        <Separator />

        {/* Summary */}
        {summary && (
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Professional Summary</h2>
            <p className="text-sm leading-relaxed">{summary}</p>
          </div>
        )}

        {/* Work Experience */}
        {workExperience && workExperience.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Work Experience</h2>
            {workExperience.map((exp: any, index: number) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{exp.jobTitle || 'Job Title'}</h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.company || 'Company'} • {exp.location || 'Location'}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </p>
                </div>
                {exp.description && <p className="text-sm leading-relaxed">{exp.description}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Education</h2>
            {education.map((edu: any, index: number) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{edu.degree || 'Degree'}</h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution || 'Institution'} • {edu.location || 'Location'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">
                      {edu.startDate} - {edu.endDate}
                    </p>
                    {edu.gpa && <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>}
                  </div>
                </div>
                {edu.description && <p className="text-sm leading-relaxed">{edu.description}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Skills</h2>
            <div className="space-y-3">
              {['technical', 'soft', 'language'].map((category) => {
                const categorySkills = skills.filter((skill: any) => skill.category === category);
                if (categorySkills.length === 0) return null;

                return (
                  <div key={category}>
                    <h3 className="text-sm font-medium capitalize mb-2">
                      {category === 'technical'
                        ? 'Technical Skills'
                        : category === 'soft'
                          ? 'Soft Skills'
                          : 'Languages'}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill: any) => (
                        <Badge key={skill.id} variant="secondary" className="text-xs">
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!personalDetails?.fullName &&
          !summary &&
          (!workExperience || workExperience.length === 0) && (
            <div className="text-center py-12 text-muted-foreground">
              <p>Start filling out the form to see your resume preview here!</p>
            </div>
          )}
      </CardContent>
    </Card>
  );
}
