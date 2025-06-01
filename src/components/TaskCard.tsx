
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, TrendingUp } from "lucide-react";
import { Task } from "@/types/Task";

interface TaskCardProps {
  task: Task;
  onClick: () => void;
  getDifficultyColor: (difficulty: string) => string;
}

export const TaskCard = ({ task, onClick, getDifficultyColor }: TaskCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <div className="text-2xl">{task.icon}</div>
          <Badge className={getDifficultyColor(task.difficulty)}>
            {task.difficulty}
          </Badge>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1 group-hover:text-purple-600 transition-colors">
            {task.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{task.subtitle}</p>
          <p className="text-sm text-gray-700 line-clamp-3">{task.description}</p>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 flex-grow">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{task.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            <span>{task.impact}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button 
          onClick={onClick}
          className="w-full bg-purple-600 hover:bg-purple-700 group-hover:bg-purple-700 transition-colors"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};
