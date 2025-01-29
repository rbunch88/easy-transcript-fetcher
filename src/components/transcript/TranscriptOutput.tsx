import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface TranscriptOutputProps {
  transcript: string;
  onCopy: () => void;
}

export function TranscriptOutput({ transcript, onCopy }: TranscriptOutputProps) {
  return (
    <div className="relative">
      <pre className="bg-background/50 p-4 rounded-lg overflow-auto max-h-[400px] text-sm border border-white/10">
        {transcript}
      </pre>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-2 right-2 bg-background/50 hover:bg-background/80 transition-colors"
        onClick={onCopy}
      >
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  );
}