// Design System Constants
export const COLORS = {
  // Primary Colors - White, Black, Gray Scale
  primary: {
    50: '#ffffff',   // Pure white
    100: '#f9fafb',  // Very light gray
    200: '#f3f4f6',  // Light gray
    300: '#e5e7eb',  // Light gray
    400: '#d1d5db',  // Medium light gray
    500: '#9ca3af',  // Medium gray
    600: '#6b7280',  // Medium dark gray
    700: '#374151',  // Dark gray
    800: '#1f2937',  // Very dark gray
    900: '#111827',  // Almost black
    950: '#000000',  // Pure black
  },
  
  // Accent Colors - Keep colorful for logos/important elements
  accent: {
    // Social media colors for logos
    linkedin: '#0077b5',
    github: '#ffffff',
    email: '#dc2626',
    // Status colors
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
  },
  
  // Text Colors
  text: {
    primary: '#ffffff',      // White for main text
    secondary: '#e5e7eb',    // Light gray for secondary text
    tertiary: '#9ca3af',     // Medium gray for tertiary text
    muted: '#6b7280',        // Dark gray for muted text
    disabled: '#374151',     // Very dark gray for disabled text
  },
  
  // Background Colors
  background: {
    primary: '#000000',      // Pure black
    secondary: '#111827',    // Almost black
    tertiary: '#1f2937',     // Very dark gray
    card: 'rgba(31, 41, 55, 0.2)',      // Dark gray with transparency
    cardHover: 'rgba(31, 41, 55, 0.3)', // Dark gray with more transparency
  },
  
  // Border Colors
  border: {
    primary: 'rgba(255, 255, 255, 0.1)',   // White with low opacity
    secondary: 'rgba(255, 255, 255, 0.2)', // White with medium opacity
    accent: 'rgba(255, 255, 255, 0.3)',    // White with high opacity
    accentHover: 'rgba(255, 255, 255, 0.4)', // White with very high opacity
  },
  
  // Gradient Colors
  gradient: {
    primary: 'from-white via-gray-100 to-gray-300',
    secondary: 'from-gray-200 to-white',
    accent: 'from-gray-400 to-white',
  }
};

export const TYPOGRAPHY = {
  // Font Families
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  
  // Font Sizes - Consistent Scale
  fontSize: {
    xs: '0.75rem',      // 12px - Small labels, captions
    sm: '0.875rem',     // 14px - Small text, secondary info
    base: '1rem',       // 16px - Body text, default
    lg: '1.125rem',     // 18px - Large body text
    xl: '1.25rem',      // 20px - Small headings
    '2xl': '1.5rem',    // 24px - Medium headings
    '3xl': '1.875rem',  // 30px - Large headings
    '4xl': '2.25rem',   // 36px - Extra large headings
    '5xl': '3rem',      // 48px - Hero headings
    '6xl': '3.75rem',   // 60px - Large hero headings
    '7xl': '4.5rem',    // 72px - Extra large hero
    '8xl': '6rem',      // 96px - Massive headings
    '9xl': '8rem',      // 128px - Ultra large headings
  },
  
  // Font Weights
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  
  // Line Heights
  lineHeight: {
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  
  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  
  // Typography Scale Classes
  heading: {
    h1: 'text-5xl sm:text-6xl lg:text-7xl font-black leading-tight',
    h2: 'text-4xl sm:text-5xl lg:text-6xl font-black leading-tight',
    h3: 'text-3xl sm:text-4xl font-bold leading-snug',
    h4: 'text-2xl sm:text-3xl font-bold leading-snug',
    h5: 'text-xl sm:text-2xl font-semibold leading-snug',
    h6: 'text-lg sm:text-xl font-semibold leading-snug',
  },
  
  body: {
    large: 'text-lg sm:text-xl font-normal leading-relaxed',
    base: 'text-base sm:text-lg font-normal leading-relaxed',
    small: 'text-sm sm:text-base font-normal leading-relaxed',
    xs: 'text-xs sm:text-sm font-normal leading-relaxed',
  },
  
  labels: {
    large: 'text-lg font-semibold',
    base: 'text-base font-semibold',
    small: 'text-sm font-semibold',
    xs: 'text-xs font-semibold',
  }
};

export const SPACING = {
  // Padding
  padding: {
    xs: '0.5rem',    // 8px
    sm: '0.75rem',   // 12px
    base: '1rem',    // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '5rem',   // 80px
  },
  
  // Margin
  margin: {
    xs: '0.5rem',    // 8px
    sm: '0.75rem',   // 12px
    base: '1rem',    // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '5rem',   // 80px
  },
  
  // Gap
  gap: {
    xs: '0.5rem',    // 8px
    sm: '0.75rem',   // 12px
    base: '1rem',    // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
  }
};

export const BORDER_RADIUS = {
  none: '0',
  sm: '0.125rem',    // 2px
  base: '0.25rem',   // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',
};

export const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  glow: '0 0 20px rgba(139, 92, 246, 0.3)',
  glowHover: '0 0 30px rgba(139, 92, 246, 0.5)',
};

export const TRANSITIONS = {
  fast: '150ms ease-in-out',
  normal: '300ms ease-in-out',
  slow: '500ms ease-in-out',
  bounce: '300ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
};

// Component-specific styling constants
export const COMPONENT_STYLES = {
  // Navigation
  navbar: {
    height: '4rem',
    background: 'rgba(0, 0, 0, 0.2)',
    backdropBlur: 'md',
    border: 'rgba(255, 255, 255, 0.1)',
  },
  
  // Buttons
  button: {
    primary: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
    secondary: 'bg-gray-800/20 border border-gray-600/30 hover:bg-gray-700/30',
    text: 'text-gray-300 hover:text-white',
  },
  
  // Cards
  card: {
    background: 'bg-gray-800/20',
    border: 'border-gray-600/30',
    hover: 'hover:bg-gray-700/30 hover:border-gray-500/40',
    padding: 'p-6',
    radius: 'rounded-xl',
  },
  
  // Form Elements
  input: {
    background: 'bg-gray-900/50',
    border: 'border-gray-600/40',
    focus: 'focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50',
    padding: 'px-4 py-3',
    radius: 'rounded-xl',
  },
  
  // Headings
  heading: {
    h1: 'text-4xl sm:text-5xl lg:text-6xl font-black',
    h2: 'text-3xl sm:text-4xl lg:text-5xl font-bold',
    h3: 'text-2xl sm:text-3xl font-bold',
    h4: 'text-xl sm:text-2xl font-semibold',
    h5: 'text-lg sm:text-xl font-semibold',
    h6: 'text-base sm:text-lg font-semibold',
  },
  
  // Text
  text: {
    primary: 'text-white',
    secondary: 'text-gray-300',
    tertiary: 'text-gray-400',
    muted: 'text-gray-500',
  }
};
