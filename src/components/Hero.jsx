import React, { useRef, useEffect } from 'react';

export const Hero = () => {
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  // Bulletproof continuous autoplay & loop engine for mobile iOS/Android & desktop
  useEffect(() => {
    const initVideo = (video) => {
      if (!video) return;

      // Hardcode all iOS Safari & WebKit background playback prerequisites
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      video.setAttribute('x5-playsinline', '');

      const executeAutoplay = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // If iOS Low Power Mode blocks initial zero-interaction autoplay,
            // resume immediately on the very first touch, swipe, or scroll
            const resumeOnInteraction = () => {
              video.muted = true;
              video.play().catch(() => {});
              ['touchstart', 'touchend', 'scroll', 'click'].forEach((evt) => {
                window.removeEventListener(evt, resumeOnInteraction);
              });
            };

            ['touchstart', 'touchend', 'scroll', 'click'].forEach((evt) => {
              window.addEventListener(evt, resumeOnInteraction, { once: true, passive: true });
            });
          });
        }
      };

      executeAutoplay();

      // Guarantee continuous infinite looping
      const handleVideoEnded = () => {
        video.currentTime = 0;
        video.play().catch(() => {});
      };

      video.addEventListener('ended', handleVideoEnded);
      return () => {
        video.removeEventListener('ended', handleVideoEnded);
      };
    };

    const cleanupDesktop = initVideo(desktopVideoRef.current);
    const cleanupMobile = initVideo(mobileVideoRef.current);

    return () => {
      if (cleanupDesktop) cleanupDesktop();
      if (cleanupMobile) cleanupMobile();
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black select-none pointer-events-none">
      {/* Seamless Single-Stream Continuous Video Banner (Zero Buttons, Pure Atmosphere) */}
      <div className="w-full relative pointer-events-none overflow-hidden">
        {/* Desktop View Video (1920x1080) */}
        <video
          ref={desktopVideoRef}
          src="/desktop-view.mp4"
          className="hidden md:block w-full h-auto max-h-[92vh] object-cover mx-auto pointer-events-none select-none"
          autoPlay
          loop
          muted
          defaultMuted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
        >
          Your browser does not support the video tag.
        </video>

        {/* Mobile View Video (1080x1920) */}
        <video
          ref={mobileVideoRef}
          src="/mobile-view.mp4"
          className="block md:hidden w-full h-auto max-h-[92vh] object-cover mx-auto pointer-events-none select-none"
          autoPlay
          loop
          muted
          defaultMuted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};
