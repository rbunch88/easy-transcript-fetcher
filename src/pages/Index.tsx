import { TranscriptForm } from "@/components/TranscriptForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black px-4 py-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-10 md:space-y-12 animate-fade-in pt-6 md:pt-16">
          <div className="text-center space-y-6 md:space-y-8">
            <div className="inline-flex flex-col items-center">
              <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
                <img 
                  src="/youtube-logo.svg" 
                  alt="YouTube Logo" 
                  className="w-12 h-12 md:w-16 md:h-16 animate-fade-in hover:scale-105 transition-transform"
                />
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gradient">
                  Transcript
                </h1>
              </div>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gradient mt-2">
                Made Simple
              </span>
            </div>
            <div className="space-y-3 md:space-y-4 px-2 md:px-0">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                Extract transcripts from any YouTube video in seconds.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto tracking-wide font-light">
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