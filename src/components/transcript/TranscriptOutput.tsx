import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface TranscriptOutputProps {
  transcript: string;
  onCopy: () => void;
}

export function TranscriptOutput({ transcript, onCopy }: TranscriptOutputProps) {
  return (
    <div className="relative">
      <pre className="bg-background/50 p-6 rounded-lg overflow-auto max-h-[400px] text-base font-mono border border-white/10">
        {transcript}
      </pre>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-4 right-4 bg-background/50 hover:bg-background/80 transition-colors"
        onClick={onCopy}
      >
        <Copy className="h-5 w-5" />
      </Button>
    </div>
  );
}