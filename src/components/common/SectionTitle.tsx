interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <header className="section-title">
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </header>
  );
}
