import React, { useState } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

export default function SmartImage({
  src,
  alt,
  caption,
  className = "",
  onClick,
  placeholderText
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Extract filename like photo1.jpg from /images/photo1.jpg
  const filename = src.split('/').pop() || 'photo';

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl bg-[#181524] border border-white/10 group cursor-pointer select-none ${className}`}
    >
      {!hasError ? (
        <>
          {/* Skeleton Loader */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20 animate-pulse flex items-center justify-center">
              <ImageIcon className="w-8 h-8 text-purple-300/40 animate-bounce" />
            </div>
          )}

          <img
            src={src}
            alt={alt || caption || "Memory photo"}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Hover Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <span className="text-white/90 text-sm font-medium tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              {caption || "Click to view memory ✨"}
            </span>
          </div>
        </>
      ) : (
        /* Tasteful Fallback Card when file is missing */
        <div className="w-full h-full min-h-[220px] p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#1c182d] to-[#120f20] border border-dashed border-purple-500/30 group-hover:border-purple-400/60 transition-colors">
          <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Camera className="w-6 h-6 text-purple-300" />
          </div>
          <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-1">
            Photo Slot ({filename})
          </span>
          <p className="text-sm text-gray-300 font-medium line-clamp-2">
            {caption || placeholderText || "Add your image to public/images/"}
          </p>
          <span className="mt-3 text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
            Click to preview layout
          </span>
        </div>
      )}
    </div>
  );
}
