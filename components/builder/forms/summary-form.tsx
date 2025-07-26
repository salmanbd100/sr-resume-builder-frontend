"use client"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface SummaryFormProps {
  data: string
  onChange: (data: string) => void
}

export function SummaryForm({ data, onChange }: SummaryFormProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="summary">Professional Summary *</Label>
        <Textarea
          id="summary"
          placeholder="Write a compelling professional summary that highlights your key skills, experience, and career objectives. This should be 2-3 sentences that grab the employer's attention."
          className="min-h-[120px]"
          value={data}
          onChange={(e) => onChange(e.target.value)}
        />
        <p className="text-sm text-muted-foreground">{data.length}/500 characters. Aim for 50-150 words.</p>
      </div>

      <div className="bg-muted/50 p-4 rounded-lg">
        <h4 className="font-medium mb-2">Tips for a great summary:</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Start with your professional title and years of experience</li>
          <li>• Highlight 2-3 key skills or achievements</li>
          <li>• Mention the type of role you're seeking</li>
          <li>• Keep it concise and impactful</li>
        </ul>
      </div>
    </div>
  )
}
