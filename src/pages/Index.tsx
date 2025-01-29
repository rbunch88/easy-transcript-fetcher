import { TranscriptForm } from "@/components/TranscriptForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12 animate-fade-in pt-8 md:pt-16">
          <div className="text-center space-y-8">
            <div className="inline-flex flex-col items-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <img 
                  src="/youtube-logo.svg" 
                  alt="YouTube Logo" 
                  className="w-14 h-14 md:w-16 md:h-16 animate-fade-in hover:scale-105 transition-transform"
                />
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gradient">
                  Transcript
                </h1>
              </div>
              <span className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gradient mt-2">
                Made Simple
              </span>
            </div>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                Extract transcripts from any YouTube video in seconds.
              </p>
              <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto tracking-wide font-light">
                Multiple languages and formats supported.
              </p>
            </div>
          </div>
          <TranscriptForm />
        </div>
      </div>
    </div>
  );
};

export default Index;