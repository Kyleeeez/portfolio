import React from 'react';

type Variant = 'yellow' | 'blue';

export const Bulb = ({ light, small, variant }: { light?: boolean; small?: boolean; variant?: Variant }) => (
  <div className="relative w-10 h-10">
    {light && (
      <div
        className={`absolute dark:bg-gradient-radial opacity-[15%] to-70%
            ${variant === 'yellow' ? 'from-yellow-500' : variant === 'blue' ? 'from-blue-500' : 'from-secondary'}
          ${
            small ? 'h-[500px] w-[500px]' : 'h-[1000px] w-[1000px]'
          } top-1/2 -translate-y-1/2  -translate-x-1/2 left-1/2 -z-1`}
      />
    )}

    <div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/4 w-1/4 rounded-full
      ${variant === 'yellow' ? 'bg-yellow-500' : variant === 'blue' ? 'bg-blue-500' : 'bg-secondary'}
      `}
    />
    <div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3/5 w-3/5 rounded-full 
      ${variant === 'yellow' ? 'bg-yellow-500' : variant === 'blue' ? 'bg-blue-500' : 'bg-secondary'}
      opacity-20`}
    />
    <div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full rounded-full 
      ${variant === 'yellow' ? 'bg-yellow-500' : variant === 'blue' ? 'bg-blue-500' : 'bg-secondary'}
      opacity-10`}
    />
  </div>
);
