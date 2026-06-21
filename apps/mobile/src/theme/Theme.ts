export const Colors = {
  background: '#020202',
  surface: '#0d1515',
  surfaceCard: '#161618',
  surfaceContainerHighest: '#353437',
  primary: '#00f0ff', // Neon Cyan
  secondary: '#ce5dff', // Neon Purple
  tertiary: '#00f6bb', // Plasma Green
  text: '#ffffff',
  textMuted: '#8E8E93',
  outline: '#849495',
  error: '#ffb4ab',
  success: '#34C759',
  primaryGlow: 'rgba(0, 240, 255, 0.4)',
  secondaryGlow: 'rgba(206, 93, 255, 0.4)',
  glassBackground: 'rgba(255, 255, 255, 0.05)',
  glassBorder: 'rgba(255, 255, 255, 0.1)',
};

export const Typography = {
  headlineLg: {
    fontSize: 28,
    fontWeight: '900' as const,
    letterSpacing: -1,
    color: Colors.text,
  },
  headlineMd: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  bodyMd: {
    fontSize: 14,
    fontWeight: '400' as const,
    color: Colors.text,
  },
  labelCaps: {
    fontSize: 10,
    fontWeight: '900' as const,
    letterSpacing: 2,
    textTransform: 'uppercase' as const,
    color: Colors.outline,
  },
  codeSm: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: Colors.primary,
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const Theme = {
  Colors,
  Typography,
  Spacing,
};
