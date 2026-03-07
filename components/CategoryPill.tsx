type Props = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export default function CategoryPill({ label, active, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
        active
          ? "bg-amber-500 text-white shadow-sm"
          : "bg-white text-slate-600 border border-slate-200 hover:border-amber-400 hover:text-amber-600"
      }`}
    >
      {label}
    </button>
  );
}
