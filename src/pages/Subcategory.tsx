import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechniqueCard } from "@/components/TechniqueCard";
import { getCategoryById, getSubcategoryById } from "@/data/karateData";

export default function Subcategory() {
  const { categoryId, subcategoryId } = useParams();
  const navigate = useNavigate();
  
  const category = categoryId ? getCategoryById(categoryId) : null;
  const subcategory = categoryId && subcategoryId ? getSubcategoryById(categoryId, subcategoryId) : null;

  if (!category || !subcategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Subcategory not found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  const handleTechniqueClick = (techniqueId: string) => {
    navigate(`/category/${categoryId}/subcategory/${subcategoryId}/technique/${techniqueId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(`/category/${categoryId}`)}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to {category.title}</span>
            </Button>
            
            <div className="text-right">
              <div className="text-sm text-muted-foreground">
                {subcategory.techniques.length} techniques
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subcategory Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="mb-4">
              <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                {category.title}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {subcategory.title}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {subcategory.subtitle}
            </p>
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
          {subcategory.techniques.map((technique, index) => (
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