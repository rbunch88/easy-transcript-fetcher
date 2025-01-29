import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  loading: boolean;
}

export function SubmitButton({ loading }: SubmitButtonProps) {
  return (
    <Button 
      type="submit" 
      className="w-full h-12 text-base font-medium transition-all hover:scale-[1.02] active:scale-[0.98]" 
      disabled={loading}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Fetching transcript...
        </>
      ) : (
        "Get Transcript"
      )}
    </Button>
  );
}