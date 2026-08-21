export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-2">{eyebrow}</p>
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900 mb-3">{title}</h2>
      {subtitle && <p className="text-stone-500 text-lg">{subtitle}</p>}
    </div>
  );
}
