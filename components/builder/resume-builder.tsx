'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { PersonalDetailsForm } from './forms/personal-details-form';
import { SummaryForm } from './forms/summary-form';
import { WorkExperienceForm } from './forms/work-experience-form';
import { EducationForm } from './forms/education-form';
import { SkillsForm } from './forms/skills-form';
import { ResumePreview } from './resume-preview';
import {
  LuChevronLeft,
  LuChevronRight,
  LuSave,
  LuDownload,
  LuUser,
  LuFileText,
  LuBriefcase,
  LuGraduationCap,
  LuWrench,
} from 'react-icons/lu';

const steps = [
  { id: 'personal', title: 'Personal Details', icon: LuUser },
  { id: 'summary', title: 'Summary', icon: LuFileText },
  { id: 'experience', title: 'Work Experience', icon: LuBriefcase },
  { id: 'education', title: 'Education', icon: LuGraduationCap },
  { id: 'skills', title: 'Skills', icon: LuWrench },
];

export function ResumeBuilder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [resumeData, setResumeData] = useState({
    personalDetails: {},
    summary: '',
    workExperience: [],
    education: [],
    skills: [],
  });

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderCurrentForm = () => {
    switch (steps[currentStep].id) {
      case 'personal':
        return (
          <PersonalDetailsForm
            data={resumeData.personalDetails}
            onChange={(data) => setResumeData((prev) => ({ ...prev, personalDetails: data }))}
          />
        );
      case 'summary':
        return (
          <SummaryForm
            data={resumeData.summary}
            onChange={(data) => setResumeData((prev) => ({ ...prev, summary: data }))}
          />
        );
      case 'experience':
        return (
          <WorkExperienceForm
            data={resumeData.workExperience}
            onChange={(data) => setResumeData((prev) => ({ ...prev, workExperience: data }))}
          />
        );
      case 'education':
        return (
          <EducationForm
            data={resumeData.education}
            onChange={(data) => setResumeData((prev) => ({ ...prev, education: data }))}
          />
        );
      case 'skills':
        return (
          <SkillsForm
            data={resumeData.skills}
            onChange={(data) => setResumeData((prev) => ({ ...prev, skills: data }))}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            {/* Progress */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Resume Builder</CardTitle>
                  <span className="text-sm text-muted-foreground">
                    Step {currentStep + 1} of {steps.length}
                  </span>
                </div>
                <Progress value={progress} className="w-full" />
              </CardHeader>
            </Card>

            {/* Steps Navigation */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={step.id}
                        className={`flex flex-col items-center space-y-2 cursor-pointer ${
                          index === currentStep
                            ? 'text-primary'
                            : index < currentStep
                              ? 'text-green-600'
                              : 'text-muted-foreground'
                        }`}
                        onClick={() => setCurrentStep(index)}
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            index === currentStep
                              ? 'bg-primary text-primary-foreground'
                              : index < currentStep
                                ? 'bg-green-600 text-white'
                                : 'bg-muted'
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-xs font-medium hidden sm:block">{step.title}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Current Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {(() => {
                    const Icon = steps[currentStep].icon;
                    return <Icon className="h-5 w-5" />;
                  })()}
                  <span>{steps[currentStep].title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>{renderCurrentForm()}</CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
                <LuChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              <div className="flex items-center space-x-2">
                <Button variant="outline">
                  <LuSave className="mr-2 h-4 w-4" />
                  Save Draft
                </Button>
                <Button variant="outline">
                  <LuDownload className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </div>

              <Button onClick={handleNext} disabled={currentStep === steps.length - 1}>
                Next
                <LuChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-8">
            <ResumePreview data={resumeData} />
          </div>
        </div>
      </div>
    </div>
  );
}
