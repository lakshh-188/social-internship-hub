
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TaskPreviewCardProps {
  icon: string;
  title: string;
  description: string;
  difficulty: string;
  impact: string;
  link: string;
  color: string;
}

export const TaskPreviewCard = ({ 
  icon, 
  title, 
  description, 
  difficulty, 
  impact, 
  link, 
  color 
}: TaskPreviewCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue": return "from-blue-50 to-blue-100 border-blue-200 hover:shadow-blue-200/50";
      case "green": return "from-green-50 to-green-100 border-green-200 hover:shadow-green-200/50";
      case "orange": return "from-orange-50 to-orange-100 border-orange-200 hover:shadow-orange-200/50";
      default: return "from-gray-50 to-gray-100 border-gray-200";
    }
  };

  return (
    <Card className={`h-full flex flex-col bg-gradient-to-br ${getColorClasses(color)} border-2 hover:shadow-xl transition-all duration-300 group`}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-3xl">{icon}</div>
          <Badge className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold group-hover:text-purple-600 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow flex flex-col">
        <p className="text-gray-700 mb-4 flex-grow">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <span className="font-medium">Impact: {impact}</span>
        </div>
        
        <Link to={link} className="mt-auto">
          <Button className="w-full bg-purple-600 hover:bg-purple-700 group-hover:bg-purple-700 transition-colors">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
