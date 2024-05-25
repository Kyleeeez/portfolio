export const AnimatedBlobs = () => (
  <div className="relative pb-52">
    <div
      className="absolute -top-10 left-0 h-[200px] w-[200px]
      bg-gradient-secondary opacity-50 rounded-full animate-blob"
    />
    <div
      className="absolute top-0 left-20 h-[300px] w-[300px]
      bg-secondary blur-3xl opacity-20 rounded-full animate-blob animation-delay-4000"
    />
  </div>
);
