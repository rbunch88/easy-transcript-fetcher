import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { TranscriptInput } from "./transcript/TranscriptInput";
import { TranscriptOutput } from "./transcript/TranscriptOutput";
import { SubmitButton } from "./transcript/SubmitButton";

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
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto space-y-8">
      <Card className="glass-morphism animate-slide-up">
        <CardHeader className="space-y-4">
          <CardTitle className="text-gradient text-2xl md:text-3xl font-bold tracking-tight">
            Get Started
          </CardTitle>
          <CardDescription className="text-base text-gray-400">
            Enter a YouTube video URL or ID to get its transcript
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <TranscriptInput
            videoUrl={videoUrl}
            language={language}
            format={format}
            onVideoUrlChange={setVideoUrl}
            onLanguageChange={setLanguage}
            onFormatChange={setFormat}
          />
          <SubmitButton loading={loading} />
        </CardContent>
      </Card>

      {transcript && (
        <Card className="glass-morphism animate-slide-up">
          <CardHeader className="space-y-4">
            <CardTitle className="text-gradient text-2xl md:text-3xl font-bold tracking-tight">
              Your Transcript
            </CardTitle>
            <CardDescription className="text-base text-gray-400">
              Ready to use - copy or download
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TranscriptOutput transcript={transcript} onCopy={copyToClipboard} />
          </CardContent>
        </Card>
      )}
    </form>
  );
}