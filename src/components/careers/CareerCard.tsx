
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CareerCardProps {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  onApply: () => void;
}

export function CareerCard({ title, department, location, type, description, onApply }: CareerCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold mb-1">{title}</CardTitle>
          <Badge variant="outline" className="bg-purple-100 text-purple-700">{type}</Badge>
        </div>
        <CardDescription className="flex flex-wrap gap-2 mt-1">
          <span className="text-gray-600">{department}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600">{location}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={onApply} className="bg-purple-600 hover:bg-purple-700">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
