import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getCategoryById, getTechniqueById } from "@/data/karateData";

export default function Technique() {
  const { categoryId, techniqueId, subcategoryId } = useParams();
  const navigate = useNavigate();
  
  const category = categoryId ? getCategoryById(categoryId) : null;
  const technique = categoryId && techniqueId ? getTechniqueById(categoryId, techniqueId, subcategoryId) : null;

  if (!category || !technique) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Technique not found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(subcategoryId ? `/category/${categoryId}/subcategory/${subcategoryId}` : `/category/${categoryId}`)}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to {subcategoryId ? 'Subcategory' : category.title}</span>
            </Button>
            
            <Badge variant="outline" className="hidden sm:flex">
              {category.title}
            </Badge>
          </div>
        </div>
      </div>

      {/* Technique Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                {technique.japanese}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                {technique.english}
              </p>
            </div>
            
            <div className="zen-divider max-w-md mx-auto"></div>
            
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {technique.description}
            </p>
          </div>
        </div>
      </div>

      {/* Technique Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Section */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  {technique.image ? (
                    <img 
                      src={technique.image} 
                      alt={technique.english}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                          {technique.japanese.charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground px-4">
                        Technique demonstration image coming soon
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Instructions Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Step-by-Step Instructions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {technique.steps.map((step, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors duration-200"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-sm text-foreground leading-relaxed flex-1">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Practice Tips */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Practice Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p>Practice slowly at first to ensure proper form and technique</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p>Focus on breathing and maintaining balance throughout the movement</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p>Repeat 10-15 times per practice session for muscle memory development</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}