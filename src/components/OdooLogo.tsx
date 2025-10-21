'use client';

import React from 'react';

interface OdooLogoProps {
  className?: string;
}

export const OdooLogo: React.FC<OdooLogoProps> = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <span
        className="font-bold tracking-tight"
        style={{
          fontSize: 'inherit',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          background: 'linear-gradient(135deg, #714B67 0%, #8B5A7D 50%, #A64D79 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        odoo
      </span>
    </div>
  );
};
