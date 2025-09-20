'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LuPlus as Plus, LuX as X } from 'react-icons/lu';
import type { Skill } from '@/lib/types';
import { DatePicker } from '@/components/ui/date-picker';

interface SkillsFormProps {
  data: Skill[];
  onChange: (data: Skill[]) => void;
}

export function SkillsForm({ data, onChange }: SkillsFormProps) {
  const [newSkill, setNewSkill] = useState<{
    name: string;
    category: 'technical' | 'soft' | 'language';
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    dateAcquired?: string;
  }>({
    name: '',
    category: 'technical' as const,
    level: 'intermediate' as const,
    dateAcquired: undefined,
  });

  const addSkill = () => {
    if (newSkill.name.trim()) {
      const skill: Skill = {
        id: crypto.randomUUID(),
        name: newSkill.name.trim(),
        category: newSkill.category,
        level: newSkill.level,
        dateAcquired: newSkill.dateAcquired,
      };
      onChange([...data, skill]);
      setNewSkill({
        name: '',
        category: 'technical',
        level: 'intermediate',
        dateAcquired: undefined,
      });
    }
  };

  const removeSkill = (id: string) => {
    onChange(data.filter((skill) => skill.id !== id));
  };

  const skillsByCategory = {
    technical: data.filter((skill) => skill.category === 'technical'),
    soft: data.filter((skill) => skill.category === 'soft'),
    language: data.filter((skill) => skill.category === 'language'),
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-red-100 text-red-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-blue-100 text-blue-800';
      case 'expert':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Add New Skill */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Add New Skill</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="skillName">Skill Name</Label>
              <Input
                id="skillName"
                placeholder="e.g., JavaScript, Leadership"
                value={newSkill.name}
                onChange={(e) => setNewSkill((prev) => ({ ...prev, name: e.target.value }))}
                onKeyPress={(e) => e.key === 'Enter' && addSkill()}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="skillCategory">Category</Label>
              <Select
                value={newSkill.category}
                onValueChange={(value: 'technical' | 'soft' | 'language') =>
                  setNewSkill((prev) => ({ ...prev, category: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technical">Technical</SelectItem>
                  <SelectItem value="soft">Soft Skills</SelectItem>
                  <SelectItem value="language">Language</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="skillLevel">Proficiency Level</Label>
              <Select
                value={newSkill.level}
                onValueChange={(value: 'beginner' | 'intermediate' | 'advanced' | 'expert') =>
                  setNewSkill((prev) => ({ ...prev, level: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                  <SelectItem value="expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateAcquired">Date Acquired (Optional)</Label>
            <DatePicker
              value={newSkill.dateAcquired}
              onChange={(date) => setNewSkill((prev) => ({ ...prev, dateAcquired: date }))}
            />
          </div>

          <Button onClick={addSkill} className="w-full">
            <Plus className="mr-2 h-4 w-4" />
            Add Skill
          </Button>
        </CardContent>
      </Card>

      {/* Technical Skills */}
      {skillsByCategory.technical.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skillsByCategory.technical.map((skill) => (
                <Badge
                  key={skill.id}
                  variant="secondary"
                  className={`${getLevelColor(skill.level)} flex items-center gap-2`}
                >
                  {skill.name}
                  <span className="text-xs">({skill.level})</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 hover:bg-transparent"
                    onClick={() => removeSkill(skill.id)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Soft Skills */}
      {skillsByCategory.soft.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Soft Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skillsByCategory.soft.map((skill) => (
                <Badge
                  key={skill.id}
                  variant="secondary"
                  className={`${getLevelColor(skill.level)} flex items-center gap-2`}
                >
                  {skill.name}
                  <span className="text-xs">({skill.level})</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 hover:bg-transparent"
                    onClick={() => removeSkill(skill.id)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Languages */}
      {skillsByCategory.language.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skillsByCategory.language.map((skill) => (
                <Badge
                  key={skill.id}
                  variant="secondary"
                  className={`${getLevelColor(skill.level)} flex items-center gap-2`}
                >
                  {skill.name}
                  <span className="text-xs">({skill.level})</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 hover:bg-transparent"
                    onClick={() => removeSkill(skill.id)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {data.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <p>No skills added yet. Add your first skill above!</p>
        </div>
      )}
    </div>
  );
}