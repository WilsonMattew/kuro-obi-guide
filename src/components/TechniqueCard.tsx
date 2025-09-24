import { cn } from "@/lib/utils";

interface TechniqueCardProps {
  japanese: string;
  english: string;
  description: string;
  image?: string;
  onClick: () => void;
  className?: string;
}

export function TechniqueCard({ 
  japanese, 
  english, 
  description, 
  image, 
  onClick, 
  className 
}: TechniqueCardProps) {
  return (
    <div 
      className={cn("technique-card p-4", className)}
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            {image ? (
              <img 
                src={image} 
                alt={english}
                className="w-12 h-12 object-cover rounded-md"
              />
            ) : (
              <div className="w-8 h-8 bg-primary/20 rounded-md"></div>
            )}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h3 className="font-bold text-foreground truncate">{japanese}</h3>
            <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">JP</span>
          </div>
          <p className="text-sm font-medium text-muted-foreground mt-1">{english}</p>
          <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{description}</p>
        </div>
        
        <div className="flex-shrink-0">
          <svg 
            className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}