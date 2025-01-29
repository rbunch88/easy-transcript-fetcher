import { TranscriptForm } from "@/components/TranscriptForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img 
                src="/youtube-logo.svg" 
                alt="YouTube Logo" 
                className="w-12 h-12 animate-fade-in"
              />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gradient">
                Transcript
                <span className="block mt-2">Made Simple</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Extract transcripts from any YouTube video in seconds.
              <span className="block text-gray-500 text-base mt-2 tracking-wide">
                Multiple languages and formats supported.
              </span>
            </p>
          </div>
          <TranscriptForm />
        </div>
      </div>
    </div>
  );
};

export default Index;