import type { ReactNode } from 'react';
import { brandIconPaths } from './brandIconPaths';

/**
 * Every glyph renders on a 24x24 viewBox in `currentColor` so the whole set reads as one
 * monochrome family. Brand marks come from simple-icons as filled paths; the rest are drawn
 * here as light strokes for technologies and skills that have no logo of their own.
 */
const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const customIcons: Record<string, ReactNode> = {
  // Dropped from simple-icons over trademark requests, so these are generic representations.
  'C#': (
    <g {...strokeProps}>
      <path d="M13.5 9.2a3.6 3.6 0 100 5.6" />
      <path d="M17 9.5l-.9 5M19.4 9.5l-.9 5M15.9 10.9h4.2M15.5 13.4h4.2" />
    </g>
  ),
  AWS: (
    <g {...strokeProps}>
      <path d="M7.5 14.5a3 3 0 01.4-6 4.2 4.2 0 018 -.7 2.9 2.9 0 01.6 6.7H7.5z" />
      <path d="M4 18.2c4.6 2.2 11.4 2.2 16 0" />
      <path d="M18.2 17.2l2 .6-.6 2" />
    </g>
  ),
  'Azure DevOps': (
    <g {...strokeProps}>
      <path d="M8.2 12a2.6 2.6 0 11-2.6 2.6A6.5 6.5 0 0118 9.4" />
      <path d="M15.8 12a2.6 2.6 0 112.6-2.6A6.5 6.5 0 016 14.6" />
    </g>
  ),
  // A browser frame with a play control says "automated browser testing" far more clearly
  // than Playwright's theatre mask does at 32px.
  Playwright: (
    <g {...strokeProps}>
      <rect x="3.4" y="5" width="17.2" height="14" rx="2.1" />
      <path d="M3.4 9.1h17.2M6.2 7.1h.01M8.4 7.1h.01" />
      <path d="M10.6 12.1l4.2 2.5-4.2 2.5z" />
    </g>
  ),

  // Skills and protocols with no brand mark at all.
  // Curly braces read as document/JSON storage, which is what the label means here.
  NoSQL: (
    <g {...strokeProps}>
      <path d="M9.8 4.4c-1.9 0-2.5 1-2.5 2.4v2.3c0 1.3-.6 2-1.7 2.3v1.2c1.1.3 1.7 1 1.7 2.3v2.3c0 1.4.6 2.4 2.5 2.4" />
      <path d="M14.2 4.4c1.9 0 2.5 1 2.5 2.4v2.3c0 1.3.6 2 1.7 2.3v1.2c-1.1.3-1.7 1-1.7 2.3v2.3c0 1.4-.6 2.4-2.5 2.4" />
      <path d="M12 11.9h.01" />
    </g>
  ),
  'TCP/IP': (
    <g {...strokeProps}>
      <circle cx="12" cy="5.6" r="2.1" />
      <circle cx="5.8" cy="17.4" r="2.1" />
      <circle cx="18.2" cy="17.4" r="2.1" />
      <path d="M10.6 7.5l-3.5 8M13.4 7.5l3.5 8M7.9 17.4h8.2" />
    </g>
  ),
  'Bundle Protocol': (
    <g {...strokeProps}>
      <path d="M12 3.8l7 3.9v8.6l-7 3.9-7-3.9V7.7z" />
      <path d="M5.3 7.9L12 11.6l6.7-3.7M12 11.6v8.2" />
    </g>
  ),
  DTN: (
    <g {...strokeProps}>
      <circle cx="12" cy="12" r="2.2" />
      <path d="M7.8 7.8a6 6 0 000 8.4M16.2 7.8a6 6 0 010 8.4" />
      <path d="M5.1 5.1a9.8 9.8 0 000 13.8M18.9 5.1a9.8 9.8 0 010 13.8" />
    </g>
  ),
  SMTP: (
    <g {...strokeProps}>
      <rect x="3.5" y="6" width="17" height="12" rx="2" />
      <path d="M4 7.5l8 5.5 8-5.5" />
    </g>
  ),
  'Test Design': (
    <g {...strokeProps}>
      <path d="M8.5 5H7a1.8 1.8 0 00-1.8 1.8v11.4A1.8 1.8 0 007 20h10a1.8 1.8 0 001.8-1.8V6.8A1.8 1.8 0 0017 5h-1.5" />
      <rect x="8.8" y="3.4" width="6.4" height="3.2" rx="1.1" />
      <path d="M8.6 11.2h6.8M8.6 14.6h4.6" />
    </g>
  ),
  // Flask for the testing, bolt for the automation.
  'Test Automation': (
    <g {...strokeProps}>
      <path d="M10 3.8v5.4l-4.4 7.6A2 2 0 007.3 20h9.4a2 2 0 001.7-3.2L14 9.2V3.8" />
      <path d="M8.9 3.8h6.2" />
      <path d="M12.7 11.6l-1.7 2.7h2.2l-1.7 2.5" />
    </g>
  ),
  QASE: (
    <g {...strokeProps}>
      <rect x="4.6" y="4.6" width="14.8" height="14.8" rx="2.4" />
      <path d="M8.2 9.4l1.7 1.7 3-3M8.2 15.2l1.7 1.7 3-3" />
      <path d="M15.4 9.6h.01M15.4 15.4h.01" />
    </g>
  ),
  Agile: (
    <g {...strokeProps}>
      <path d="M19 12a7 7 0 01-11.9 5M5 12a7 7 0 0111.9-5" />
      <path d="M16.9 3.6V7h-3.4M7.1 20.4V17h3.4" />
    </g>
  ),
};

export const iconLabels = [
  ...Object.keys(brandIconPaths),
  ...Object.keys(customIcons),
];

export function hasIcon(label: string) {
  return label in brandIconPaths || label in customIcons;
}

export default function TechIcon({ label, className }: { label: string; className?: string }) {
  const brandPath = brandIconPaths[label];
  const custom = customIcons[label];
  if (!brandPath && !custom) return null;

  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label={label}>
      {brandPath ? <path d={brandPath} fill="currentColor" /> : custom}
    </svg>
  );
}
