import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Copy, Loader2 } from "lucide-react";

export function TranscriptForm() {
  const [videoUrl, setVideoUrl] = useState("");
  const [language, setLanguage] = useState("en");
  const [format, setFormat] = useState("pretty");
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setTranscript("This is a sample transcript.\nIt would contain the actual video transcript.\nBut for now it's just a placeholder.");
      toast({
        title: "Success!",
        description: "Transcript fetched successfully.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch transcript. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(transcript);
      toast({
        title: "Copied!",
        description: "Transcript copied to clipboard.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to copy transcript.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="glass-morphism animate-slide-up">
        <CardHeader>
          <CardTitle className="text-gradient">Get Started</CardTitle>
          <CardDescription>Enter a YouTube video URL or ID to get its transcript</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="video-url">Video URL or ID</Label>
            <Input
              id="video-url"
              placeholder="https://youtube.com/watch?v=... or video-id"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              required
              className="bg-background/50 border-white/10 focus:border-white/20 transition-colors"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select value={language} onValueChange={setLanguage}>
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
              <Select value={format} onValueChange={setFormat}>
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
          <Button 
            type="submit" 
            className="w-full transition-all hover:scale-[1.02] active:scale-[0.98]" 
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Fetching...
              </>
            ) : (
              "Get Transcript"
            )}
          </Button>
        </CardContent>
      </Card>

      {transcript && (
        <Card className="glass-morphism animate-slide-up">
          <CardHeader>
            <CardTitle className="text-gradient">Transcript</CardTitle>
            <CardDescription>Retrieved transcript content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <pre className="bg-background/50 p-4 rounded-lg overflow-auto max-h-[400px] text-sm border border-white/10">
                {transcript}
              </pre>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-2 right-2 bg-background/50 hover:bg-background/80 transition-colors"
                onClick={copyToClipboard}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </form>
  );
}