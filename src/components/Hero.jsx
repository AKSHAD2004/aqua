import React, { useRef, useEffect, useState } from 'react';

export const Hero = () => {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(
    typeof window !== 'undefined' && window.innerWidth < 768
      ? '/mobile-view.mp4'
      : '/desktop-view.mp4'
  );

  // Responsive video source switching
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const targetSrc = isMobile ? '/mobile-view.mp4' : '/desktop-view.mp4';
      if (videoSrc !== targetSrc) {
        setVideoSrc(targetSrc);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [videoSrc]);

  // Bulletproof continuous autoplay & loop engine for mobile iOS/Android & desktop
  useEffect(() => {
    const video = videoRef.current;
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
  }, [videoSrc]);

  return (
    <section className="relative w-full overflow-hidden bg-black select-none pointer-events-none">
      {/* Seamless Single-Stream Continuous Video Banner (Zero Buttons, Pure Atmosphere) */}
      <div className="w-full relative pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          key={videoSrc}
          src={videoSrc}
          className="w-full h-auto max-h-[92vh] object-cover mx-auto block pointer-events-none select-none"
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
