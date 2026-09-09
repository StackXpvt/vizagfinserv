export default function RegulatoryStrip() {
  return (
    <aside
      aria-label="Regulatory compliance information"
      className="fixed bottom-0 left-0 right-0 z-40 bg-brand-950/95 backdrop-blur-md border-t border-brand-800/60 shadow-[0_-4px_20px_rgba(0,0,0,0.25)] py-1.5 sm:py-2 px-4 text-center transition-all duration-300"
    >
      <div className="container-narrow flex items-center justify-center">
        <p className="text-[11px] sm:text-xs md:text-sm font-medium tracking-wide text-white leading-normal">
          AMFI-Registered Mutual Fund Distributor &middot; ARN 138117 | EUIN E233588
        </p>
      </div>
    </aside>
  );
}
