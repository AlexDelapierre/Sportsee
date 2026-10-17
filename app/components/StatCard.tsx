interface StatCardProps {
  label: string;
  value: number | string;
  unit: string;
}

export function StatCard({ label, value, unit }: StatCardProps) {
  return (
    <div className="rounded-[10px] bg-primary px-[30px] py-5 text-white">
      <p className="text-sm">{label}</p>
      <p className="mt-3 text-[22px] font-medium">
        {value} <span className="text-base text-primary-light">{unit}</span>
      </p>
    </div>
  );
}