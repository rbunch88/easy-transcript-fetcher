import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TranscriptInputProps {
  videoUrl: string;
  language: string;
  format: string;
  onVideoUrlChange: (value: string) => void;
  onLanguageChange: (value: string) => void;
  onFormatChange: (value: string) => void;
}

export function TranscriptInput({
  videoUrl,
  language,
  format,
  onVideoUrlChange,
  onLanguageChange,
  onFormatChange,
}: TranscriptInputProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="video-url">Video URL or ID</Label>
        <Input
          id="video-url"
          placeholder="https://youtube.com/watch?v=... or video-id"
          value={videoUrl}
          onChange={(e) => onVideoUrlChange(e.target.value)}
          required
          className="bg-background/50 border-white/10 focus:border-white/20 transition-colors"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="language">Language</Label>
          <Select value={language} onValueChange={onLanguageChange}>
            <SelectTrigger id="language" className="bg-background/50 border-white/10">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
              <SelectItem value="de">German</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="format">Output Format</Label>
          <Select value={format} onValueChange={onFormatChange}>
            <SelectTrigger id="format" className="bg-background/50 border-white/10">
              <SelectValue placeholder="Select format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pretty">Pretty Print</SelectItem>
              <SelectItem value="json">JSON</SelectItem>
              <SelectItem value="text">Plain Text</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}