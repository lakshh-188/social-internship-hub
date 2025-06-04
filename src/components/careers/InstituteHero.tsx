
interface InstituteHeroProps {
  title: string;
  subtitle: string;
  gradientClass: string;
}

export function InstituteHero({ title, subtitle, gradientClass }: InstituteHeroProps) {
  return (
    <div className={`${gradientClass} text-white py-16 pt-32`}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
