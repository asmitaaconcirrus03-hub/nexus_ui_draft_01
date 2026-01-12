/**
 * Design Tokens extracted from Figma Design System
 * Source: https://www.figma.com/design/oMcDyzsbYyZOOwUpvqFyYK/Untitled?node-id=1-4625&m=dev
 * 
 * These tokens represent the single source of truth for the design system.
 * All values are extracted directly from Figma variables.
 */

export const designTokens = {
  colors: {
    // Primary Colors
    hotPink: {
      '800': '#ff69c2',
      '100': '#ffd5ed',
      '25': '#fff1f9',
    },
    blue: {
      '800': '#0084cb',
    },
    navyBlue: {
      '800': '#132541',
    },
    iceBlue: {
      '800': '#a0f5f5',
    },
    green: {
      '800': '#0ed183',
    },
    
    // Neutral Colors
    white: {
      '0': '#ffffff',
    },
    backgroundBlue: {
      '0': '#ecf1f6',
    },
    stoneGrey: {
      '25': '#f3f3f3',
    },
    cloudGrey: {
      '50': '#fcfbfb',
      '200': '#f8f8f7',
      '400': '#f5f4f3',
    },
    
    // Text Colors
    text: {
      primary: '#101826',
      secondary: '#656b75',
      tertiary: '#b1b8c3',
      white: '#ffffff',
      clickable: '#0084cb',
      brand: '#ff69c2',
    },
    
    // Icon Colors
    icon: {
      primary: '#101826',
      secondary: '#687589',
      clickable: '#0084cb',
      disabled: '#d0cece',
      negative: '#ff514e',
      white: '#ffffff',
    },
    
    // Fill Colors
    fill: {
      primary: '#ffffff',
      tertiary: '#f5f4f3',
      blue: '#0084cb',
      darkTertiary: '#b1b8c3',
    },
    
    // Stroke Colors
    stroke: {
      primary: '#273852',
      secondary: '#b1b8c3',
      tertiary: '#e4e7eb',
      quaternary: '#f3f3f3',
    },
    
    // Layout Colors
    layout: {
      primarySurface: '#ffffff',
      brandColour: '#ff69c2',
    },
  },
  
  // Font Families
  fontFamily: {
    title: ['Outfit', 'sans-serif'],
    body: ['Inter', 'sans-serif'],
    secondary: ['Roboto', 'sans-serif'],
  },
  
  // Font Sizes
  fontSize: {
    '12': '12px',
    '14': '14px',
    '16': '16px',
    '20': '20px',
    '24': '24px',
    '32': '32px',
  },
  
  // Font Weights
  fontWeight: {
    regular: '400',
    medium: '500',
  },
  
  // Spacing Scale
  spacing: {
    '0': '0',
    '4': '4px',
    '8': '8px',
    '12': '12px',
    '14': '14px',
    '16': '16px',
    '22': '22px',
    '24': '24px',
    '40': '40px',
  },
  
  // Padding Scale
  padding: {
    '2': '2px',
    '4': '4px',
    '8': '8px',
    '12': '12px',
    '14': '14px',
    '16': '16px',
    '22': '22px',
  },
  
  // Border Radius
  borderRadius: {
    '4': '4px',
    '6': '6px',
    '8': '8px',
    '24': '24px',
  },
  
  // Icon Sizes
  iconSize: {
    '16': '16px',
  },
} as const;

export type DesignTokens = typeof designTokens;
