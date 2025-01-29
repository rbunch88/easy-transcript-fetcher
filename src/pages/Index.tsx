import { TranscriptForm } from "@/components/TranscriptForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
              YouTube Transcript Fetcher
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Extract transcripts from any YouTube video in seconds. Multiple languages and formats supported.
            </p>
          </div>
          <TranscriptForm />
        </div>
      </div>
    </div>
  );
};

export default Index;