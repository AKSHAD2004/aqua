import React, { useRef, useState } from 'react';

export const Hero = () => {
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (desktopVideoRef.current) desktopVideoRef.current.muted = nextMuted;
    if (mobileVideoRef.current) mobileVideoRef.current.muted = nextMuted;
  };

  const togglePlay = () => {
    const activeVideo = window.innerWidth >= 768 ? desktopVideoRef.current : mobileVideoRef.current;
    if (activeVideo) {
      if (activeVideo.paused) {
        activeVideo.play();
        setIsPlaying(true);
      } else {
        activeVideo.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Desktop View Video (visible on md screens and above) */}
      <div className="hidden md:block w-full relative">
        <video
          ref={desktopVideoRef}
          className="w-full h-auto max-h-[92vh] object-cover mx-auto block"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
        >
          <source src="/desktop-view.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Mobile View Video (visible on small mobile screens) */}
      <div className="block md:hidden w-full relative">
        <video
          ref={mobileVideoRef}
          className="w-full h-auto object-cover mx-auto block"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
        >
          <source src="/mobile-view.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Floating Video Controls (Mute/Unmute & Play/Pause) */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-all border border-white/20 shadow-lg cursor-pointer"
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          <span className="material-symbols-outlined text-[20px]">
            {isMuted ? 'volume_off' : 'volume_up'}
          </span>
        </button>

        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-all border border-white/20 shadow-lg cursor-pointer"
          title={isPlaying ? 'Pause Video' : 'Play Video'}
          aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
        >
          <span className="material-symbols-outlined text-[20px]">
            {isPlaying ? 'pause' : 'play_arrow'}
          </span>
        </button>
      </div>
    </section>
  );
};
