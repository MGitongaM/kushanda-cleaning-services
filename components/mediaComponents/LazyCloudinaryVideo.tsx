"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { CldVideoPlayerProps } from "next-cloudinary";

const CloudinaryVideo = dynamic(() => import("./CloudinaryVideo"), {
  ssr: false,
  loading: () => null,
});

export default function LazyCloudinaryVideo(props: CldVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="aspect-video w-full">
      {shouldLoad ? <CloudinaryVideo {...props} /> : null}
    </div>
  );
}
