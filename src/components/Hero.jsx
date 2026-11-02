import React, { useRef, useState, useEffect } from 'react';

export const Hero = () => {
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (desktopVideoRef.current) desktopVideoRef.current.muted = nextMuted;
    if (mobileVideoRef.current) mobileVideoRef.current.muted = nextMuted;
  };

  useEffect(() => {
    const setupContinuousVideo = (video) => {
      if (!video) return;

      // Force mobile Safari/Chrome to treat it strictly as muted background video
      video.muted = true;
      video.defaultMuted = true;
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      video.setAttribute('x5-playsinline', '');

      const startPlay = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // If browser or iOS Low Power Mode blocks initial unprompted autoplay,
            // immediately start on the very first touch, click, or scroll
            const triggerPlay = () => {
              video.play().catch(() => {});
              window.removeEventListener('touchstart', triggerPlay);
              window.removeEventListener('touchend', triggerPlay);
              window.removeEventListener('click', triggerPlay);
              window.removeEventListener('scroll', triggerPlay);
            };
            window.addEventListener('touchstart', triggerPlay, { once: true, passive: true });
            window.addEventListener('touchend', triggerPlay, { once: true, passive: true });
            window.addEventListener('click', triggerPlay, { once: true, passive: true });
            window.addEventListener('scroll', triggerPlay, { once: true, passive: true });
          });
        }
      };

      startPlay();

      // Ensure endless non-stop playback loop
      const handleEnded = () => {
        video.currentTime = 0;
        video.play().catch(() => {});
      };

      video.addEventListener('ended', handleEnded);

      return () => {
        video.removeEventListener('ended', handleEnded);
      };
    };

    const cleanupDesktop = setupContinuousVideo(desktopVideoRef.current);
    const cleanupMobile = setupContinuousVideo(mobileVideoRef.current);

    return () => {
      if (cleanupDesktop) cleanupDesktop();
      if (cleanupMobile) cleanupMobile();
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black select-none">
      {/* Desktop View Video (visible on md screens and above) */}
      <div className="hidden md:block w-full relative pointer-events-none">
        <video
          ref={desktopVideoRef}
          className="w-full h-auto max-h-[92vh] object-cover mx-auto block pointer-events-none"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          webkit-playsinline="true"
          preload="auto"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src="/desktop-view.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Mobile View Video (visible on small mobile screens) */}
      <div className="block md:hidden w-full relative pointer-events-none">
        <video
          ref={mobileVideoRef}
          className="w-full h-auto object-cover mx-auto block pointer-events-none"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          webkit-playsinline="true"
          preload="auto"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src="/mobile-view.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Audio Mute/Unmute toggle only (No pause button - video plays continuously) */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center">
        <button
          onClick={toggleMute}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-all border border-white/20 shadow-lg cursor-pointer"
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
            {isMuted ? 'volume_off' : 'volume_up'}
          </span>
        </button>
      </div>
    </section>
  );
};
