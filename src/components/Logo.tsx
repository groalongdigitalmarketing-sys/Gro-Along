import React from 'react';
import logoImg from '../assets/images/logo_grow_along_1791103925663.jpg';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'vertical' | 'mark' | 'stamp';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'light' | 'dark' | 'auto';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'horizontal',
  size = 'md',
  theme = 'auto',
  showTagline = true,
}) => {
  // Dimensions based on size
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-20 h-20'
  };

  const textSizes = {
    sm: { title: 'text-sm', sub: 'text-[9px]' },
    md: { title: 'text-base sm:text-lg', sub: 'text-[10px] sm:text-xs' },
    lg: { title: 'text-xl sm:text-2xl', sub: 'text-xs sm:text-sm' },
    xl: { title: 'text-3xl sm:text-4xl', sub: 'text-base sm:text-lg' }
  };

  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-slate-950';
  const subTextColor = isDark ? 'text-slate-300' : 'text-slate-600';
  const ruleColor = isDark ? 'bg-slate-700' : 'bg-slate-300';
  const dotColor = isDark ? 'bg-amber-400' : 'bg-slate-900';

  // Precision SVG emblem matching the user's uploaded logo:
  // - Stylized royal peacock feather & fountain pen nib
  // - 5 sweeping violet/indigo petals with luminous gradients
  // - Golden amber droplet frame
  // - Cyan blue inner water droplet with depth
  // - Precision fountain pen nib at the base
  const Emblem = () => (
    <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
      <svg
        viewBox="0 0 120 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm select-none"
      >
        <defs>
          {/* Main Petal Royal Violet Gradients */}
          <linearGradient id="ga-violet-center" x1="60" y1="0" x2="60" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4338CA" />
            <stop offset="35%" stopColor="#6366F1" />
            <stop offset="70%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#4C1D95" />
          </linearGradient>

          <linearGradient id="ga-violet-left" x1="0" y1="20" x2="60" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6D28D9" />
            <stop offset="50%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#312E81" />
          </linearGradient>

          <linearGradient id="ga-violet-right" x1="120" y1="20" x2="60" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#4338CA" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>

          {/* Wing Petals Chrome/Silver Sheen */}
          <linearGradient id="ga-petal-sheen-left" x1="20" y1="40" x2="55" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5B21B6" />
            <stop offset="40%" stopColor="#818CF8" />
            <stop offset="75%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          <linearGradient id="ga-petal-sheen-right" x1="100" y1="40" x2="65" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="40%" stopColor="#6366F1" />
            <stop offset="75%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          {/* Gold Amber Teardrop Frame */}
          <linearGradient id="ga-gold" x1="60" y1="35" x2="60" y2="75" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="30%" stopColor="#F59E0B" />
            <stop offset="75%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          {/* Cyan Blue Water Droplet Core */}
          <radialGradient id="ga-cyan-core" cx="60%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="25%" stopColor="#38BDF8" />
            <stop offset="65%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </radialGradient>

          {/* Pen Nib Metallic Gradient */}
          <linearGradient id="ga-pen-nib" x1="60" y1="80" x2="60" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="45%" stopColor="#4338CA" />
            <stop offset="100%" stopColor="#312E81" />
          </linearGradient>
        </defs>

        {/* 1. Outermost Lower Wing Petals (Left & Right) */}
        <path
          d="M 12 62 C 10 74, 25 88, 52 86 C 36 86, 20 80, 12 62 Z"
          fill="url(#ga-violet-left)"
        />
        <path
          d="M 108 62 C 110 74, 95 88, 68 86 C 84 86, 100 80, 108 62 Z"
          fill="url(#ga-violet-right)"
        />

        {/* 2. Middle Sweeping Petals with chrome bevels (Left & Right) */}
        <path
          d="M 22 40 C 18 58, 30 75, 54 85 C 40 76, 32 60, 22 40 Z"
          fill="url(#ga-petal-sheen-left)"
        />
        <path
          d="M 98 40 C 102 58, 90 75, 66 85 C 80 76, 88 60, 98 40 Z"
          fill="url(#ga-petal-sheen-right)"
        />

        {/* 3. Central Majestic Feather Flame Petals */}
        <path
          d="M 60 4 C 64 25, 78 40, 78 56 C 78 72, 68 84, 60 88 C 52 84, 42 72, 42 56 C 42 40, 56 25, 60 4 Z"
          fill="url(#ga-violet-center)"
        />

        {/* Central Crown Feather Top Tips */}
        <path
          d="M 60 0 C 62 10, 68 22, 66 32 C 63 24, 60 16, 60 0 Z"
          fill="#4338CA"
        />
        <path
          d="M 66 18 C 72 26, 75 36, 74 46 C 71 38, 68 30, 66 18 Z"
          fill="#6366F1"
        />
        <path
          d="M 54 18 C 48 26, 45 36, 46 46 C 49 38, 52 30, 54 18 Z"
          fill="#4F46E5"
        />

        {/* 4. Golden Amber Droplet Outer Ring */}
        <path
          d="M 60 36 C 68 46, 72 54, 72 62 C 72 70, 66 76, 60 76 C 54 76, 48 70, 48 62 C 48 54, 52 46, 60 36 Z"
          fill="url(#ga-gold)"
        />

        {/* 5. Glowing Cyan Water Droplet Core with Light Specular */}
        <path
          d="M 60 43 C 65 50, 68 56, 68 62 C 68 68, 64 72, 60 72 C 56 72, 52 68, 52 62 C 52 56, 55 50, 60 43 Z"
          fill="url(#ga-cyan-core)"
        />

        {/* Specular Highlight on Core */}
        <ellipse cx="58" cy="52" rx="3.5" ry="5.5" fill="#FFFFFF" opacity="0.6" transform="rotate(-15 58 52)" />
        <circle cx="63" cy="64" r="1.5" fill="#FFFFFF" opacity="0.4" />

        {/* 6. Collar Knot / Tie Connecting Feather to Nib */}
        <rect x="56" y="85" width="8" height="6" rx="1.5" fill="#4338CA" />
        <rect x="58" y="86.5" width="4" height="3" rx="0.5" fill="#818CF8" />

        {/* 7. Fountain Pen Nib (Bottom Stem) */}
        <path
          d="M 54 92 L 66 92 L 63 114 L 60 122 L 57 114 Z"
          fill="url(#ga-pen-nib)"
        />

        {/* Nib Breather Hole & Center Slit */}
        <circle cx="60" cy="104" r="1.5" fill={isDark ? '#0F172A' : '#F8FAFC'} />
        <line x1="60" y1="105.5" x2="60" y2="122" stroke={isDark ? '#0F172A' : '#F8FAFC'} strokeWidth="1" />

        {/* Nib Bevel Highlights */}
        <path d="M 55 94 L 58 114 L 60 120" stroke="#818CF8" strokeWidth="0.8" fill="none" opacity="0.7" />
      </svg>
    </div>
  );

  // Variant: Mark Only
  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <Emblem />
      </div>
    );
  }

  // Variant: Stamp (Stacked vertical lockup as shown in user's image)
  if (variant === 'stamp') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <Emblem />

        <div className="mt-3 w-full flex flex-col items-center">
          {/* Main Title */}
          <div className={`font-serif tracking-[0.14em] font-bold ${textColor} ${textSizes[size].title} uppercase leading-none`}>
            GROW ALONG
          </div>

          {/* Divider rule with accent dots */}
          <div className="my-1.5 w-full max-w-[170px] flex items-center justify-between gap-1">
            <span className={`w-1.5 h-1.5 rounded-full ${dotColor} shrink-0`} />
            <div className={`h-[1px] flex-1 ${ruleColor}`} />
            <span className={`w-1.5 h-1.5 rounded-full ${dotColor} shrink-0`} />
          </div>

          {/* Subtitle */}
          {showTagline && (
            <div className={`font-serif tracking-[0.08em] font-normal ${subTextColor} ${textSizes[size].sub}`}>
              Marketing
            </div>
          )}
        </div>
      </div>
    );
  }

  // Variant: Vertical Stacked
  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <Emblem />
        <div className="mt-2">
          <span className={`font-serif font-bold tracking-wider ${textColor} ${textSizes[size].title} block`}>
            GROW ALONG
          </span>
          {showTagline && (
            <span className={`font-sans tracking-widest uppercase text-[10px] ${subTextColor} block mt-0.5 font-medium`}>
              Marketing Agency
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default: Horizontal Lockup (For Navigation Bar & Headers)
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <Emblem />
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1.5">
          <span className={`font-serif font-bold tracking-[0.08em] ${textColor} ${textSizes[size].title} uppercase`}>
            GROW ALONG
          </span>
        </div>
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className={`font-sans tracking-[0.18em] uppercase text-[10px] sm:text-[11px] font-semibold text-amber-700 dark:text-amber-400`}>
              Marketing Agency
            </span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
              Chennai
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
