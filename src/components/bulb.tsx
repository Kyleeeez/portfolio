import React from 'react';

type Variant = 'yellow' | 'blue';

export const Bulb = ({ light, small, variant }: { light?: boolean; small?: boolean; variant?: Variant }) => {
  const colorClass = variant === 'yellow' ? 'yellow-500' : variant === 'blue' ? 'blue-500' : 'secondary';

  return (
    <div className="relative w-10 h-10">
      {light && (
        <div
          className={`absolute bg-gradient-radial from-${colorClass}/10 to-70% ${
            small ? 'h-[500px] w-[500px]' : 'h-[1000px] w-[1000px]'
          } top-1/2 -translate-y-1/2  -translate-x-1/2 left-1/2 -z-1`}
        />
      )}

      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/4 w-1/4 rounded-full bg-${colorClass}`}
      />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3/5 w-3/5 rounded-full bg-${colorClass} opacity-20`}
      />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full rounded-full bg-${colorClass} opacity-10`}
      />
    </div>
  );
};
