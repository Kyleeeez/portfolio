import React from 'react';

export const Bulb = () => (
  <div className="relative w-10 h-10">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/4 w-1/4 rounded-full bg-secondary" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3/5 w-3/5 rounded-full bg-secondary opacity-20" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full rounded-full bg-secondary opacity-10" />
  </div>
);
