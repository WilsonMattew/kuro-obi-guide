import { CategoryCard } from "@/components/CategoryCard";
import { karateCategories } from "@/data/karateData";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center space-y-6">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Karate Learning
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mt-4 font-light">
                空手道 (Karate-do) - The Way of the Empty Hand
              </p>
            </div>
            
            <div className="zen-divider max-w-md mx-auto"></div>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-in">
              Master the fundamentals of traditional karate through structured learning paths. 
              From basic stances to advanced kata, develop your skills with authentic techniques.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Choose Your Training Path
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Each category contains authentic techniques with step-by-step guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {karateCategories.map((category, index) => (
            <div
              key={category.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CategoryCard
                title={category.title}
                subtitle={category.subtitle}
                icon={category.icon}
                techniqueCount={category.techniques?.length || category.subcategories?.reduce((total, sub) => total + sub.techniques.length, 0) || 0}
                onClick={() => handleCategoryClick(category.id)}
                className="group h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              始めましょう (Hajimemashō)
            </h3>
            <p className="text-sm text-muted-foreground">
              "Let's begin" - Your karate journey starts with a single step
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}