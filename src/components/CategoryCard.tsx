import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  techniqueCount: number;
  onClick: () => void;
  className?: string;
}

export function CategoryCard({ 
  title, 
  subtitle, 
  icon: Icon, 
  techniqueCount, 
  onClick, 
  className 
}: CategoryCardProps) {
  return (
    <div 
      className={cn("category-card p-6", className)}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <span className="text-xs font-medium text-muted-foreground bg-accent px-2 py-1 rounded-full">
          {techniqueCount} techniques
        </span>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Explore techniques
        <svg 
          className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}