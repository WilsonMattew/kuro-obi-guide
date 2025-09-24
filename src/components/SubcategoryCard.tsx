interface SubcategoryCardProps {
  title: string;
  subtitle: string;
  techniqueCount: number;
  onClick: () => void;
}

export function SubcategoryCard({ title, subtitle, techniqueCount, onClick }: SubcategoryCardProps) {
  return (
    <div 
      onClick={onClick}
      className="subcategory-card group cursor-pointer"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
          {techniqueCount} techniques
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {subtitle}
      </p>
      
      <div className="flex items-center text-xs text-primary group-hover:text-primary-hover transition-colors">
        <span>View Techniques</span>
        <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}