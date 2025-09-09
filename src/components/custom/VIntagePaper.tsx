export default function VintagePaper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl shadow-xl border border-stone-400/50 p-6 sm:p-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-50 via-amber-100 to-amber-200 text-stone-800">
      <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(0,0,0,0.035), rgba(0,0,0,0.035) 1px, transparent 1px, transparent 4px)",
        mixBlendMode: "multiply",
        opacity: 0.2,
      }} />
      {children}
    </div>
  );
}