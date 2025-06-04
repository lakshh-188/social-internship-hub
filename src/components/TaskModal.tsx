
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, TrendingUp, CheckCircle, X } from "lucide-react";
import { Task } from "@/types/Task";
import { useState } from "react";

interface TaskModalProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
}

export const TaskModal = ({ task, isOpen, onClose }: TaskModalProps) => {
  const [open, setOpen] = useState(isOpen);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    if (!open) {
      onClose();
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-start gap-3">
              <div className="text-3xl">{task.icon}</div>
              <div>
                <DialogTitle className="text-2xl font-bold">{task.title}</DialogTitle>
                <DialogDescription className="flex flex-wrap gap-2 mt-1">
                  <span>{task.subtitle}</span>
                  <span>•</span>
                  <span>{task.category}</span>
                  <span>•</span>
                  <Badge className={getDifficultyColor(task.difficulty)} variant="outline">
                    {task.difficulty}
                  </Badge>
                </DialogDescription>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-6">
          {/* Task Stats */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">Duration: {task.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">Impact: {task.impact}</span>
            </div>
            <Badge variant="outline" className="border-purple-200 text-purple-700">
              {task.category}
            </Badge>
          </div>

          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans leading-relaxed">
              {task.detailedDescription}
            </pre>
          </div>
          
          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="requirements">
              <AccordionTrigger className="text-lg font-semibold">Requirements & Steps</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  {task.requirements.map((requirement, index) => (
                    <div key={index} className="border-l-2 border-purple-600 pl-4 py-1">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{requirement}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="submission">
              <AccordionTrigger className="text-lg font-semibold">Submission Guidelines</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div className="border-l-2 border-green-500 pl-4 py-1">
                    <h4 className="font-medium">Documentation Required</h4>
                    <p className="text-gray-600 text-sm">Submit detailed reports, photos, and evidence of task completion</p>
                  </div>
                  <div className="border-l-2 border-green-500 pl-4 py-1">
                    <h4 className="font-medium">Quality Standards</h4>
                    <p className="text-gray-600 text-sm">Ensure all work meets the specified quality and impact requirements</p>
                  </div>
                  <div className="border-l-2 border-green-500 pl-4 py-1">
                    <h4 className="font-medium">Timeline Adherence</h4>
                    <p className="text-gray-600 text-sm">Complete and submit within the specified {task.duration} timeframe</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="benefits">
              <AccordionTrigger className="text-lg font-semibold">Benefits & Recognition</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-gray-700">Certificate of completion for successful task execution</li>
                  <li className="text-gray-700">Contribution towards internship program completion</li>
                  <li className="text-gray-700">Impact score addition for overall program assessment</li>
                  <li className="text-gray-700">Potential recommendation letter for outstanding performance</li>
                  <li className="text-gray-700">Recognition in program newsletter and social media</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-6 border-t">
          <Button variant="outline" onClick={onClose}>Close</Button>
          <Button className="bg-purple-600 hover:bg-purple-700 flex-1">
            Start This Task
          </Button>
          <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
            Download Guidelines
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
