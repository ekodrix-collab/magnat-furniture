import FadeInView from "./FadeInView";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  className = "",
  light = false,
}: SectionHeadingProps) {
  const alignmentStyles = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right",
  };

  return (
    <div className={`max-w-3xl ${alignmentStyles[align]} ${className}`}>
      {label && (
        <FadeInView delay={0.1}>
          <span className="section-label">{label}</span>
        </FadeInView>
      )}
      <FadeInView delay={0.2}>
        <h2 className={`section-title ${light ? "text-white" : "text-[#1A1A1A]"}`}>
          {title}
        </h2>
      </FadeInView>
      {subtitle && (
        <FadeInView delay={0.3}>
          <p className={`section-subtitle ${light ? "text-[#EFE7DF]" : "text-[#5A5A5A]"}`}>
            {subtitle}
          </p>
        </FadeInView>
      )}
    </div>
  );
}
