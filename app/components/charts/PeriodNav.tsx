interface PeriodNavProps {
  label: string;
  onPrevious: () => void;
  onNext: () => void;
  isNextDisabled: boolean;
}

export function PeriodNav({ label, onPrevious, onNext, isNextDisabled }: PeriodNavProps) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <button
        onClick={onPrevious}
        aria-label="Période précédente"
        className="h-6 w-6 rounded-[10px] border border-[#717171] text-base leading-none hover:bg-primary-hover hover:text-white"
      >
        ‹
      </button>
      <span className="whitespace-nowrap">{label}</span>
      <button
        onClick={onNext}
        disabled={isNextDisabled}
        aria-label="Période suivante"
        className="h-6 w-6 rounded-[10px] border border-[#717171] text-base leading-none hover:bg-primary-hover hover:text-white disabled:opacity-30"
      >
        ›
      </button>
    </div>
  );
}