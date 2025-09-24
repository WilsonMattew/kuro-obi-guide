import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechniqueCard } from "@/components/TechniqueCard";
import { getCategoryById } from "@/data/karateData";

export default function Category() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  const category = categoryId ? getCategoryById(categoryId) : null;

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Category not found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  const handleTechniqueClick = (techniqueId: string) => {
    navigate(`/category/${categoryId}/technique/${techniqueId}`);
  };

  const IconComponent = category.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Categories</span>
            </Button>
            
            <div className="text-right">
              <div className="text-sm text-muted-foreground">
                {category.techniques.length} techniques
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <IconComponent className="w-10 h-10 text-primary" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {category.title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {category.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Techniques List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Available Techniques
          </h2>
          <p className="text-sm text-muted-foreground">
            Select a technique to view detailed instructions and practice steps
          </p>
        </div>

        <div className="space-y-4">
          {category.techniques.map((technique, index) => (
            <div
              key={technique.id}
              className="animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <TechniqueCard
                japanese={technique.japanese}
                english={technique.english}
                description={technique.description}
                image={technique.image}
                onClick={() => handleTechniqueClick(technique.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}