
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TaskCard } from "@/components/TaskCard";
import { TaskModal } from "@/components/TaskModal";
import { Task } from "@/types/Task";

const tasks: Task[] = [
  {
    id: 1,
    title: "Student Empowerment Program",
    subtitle: "Under National Empowerment",
    description: "Collect 20 to 30 students queries by creating a google form and share with organization",
    duration: "15 days",
    difficulty: "Medium",
    impact: "High",
    icon: "👥",
    category: "Student",
    detailedDescription: `Student Empowerment Program Under national Empowerment 

Collect - 20 to 30 students queries by creating a google form and then share it with organization 

-- You have to Collect Queries / problems / Opportunity they are looking for and how uniford foundation help them using their programs , platform & resources 

For this you have to detailed study of organization website pages like " Program " "ID Card " " Pitchburg "`,
    requirements: [
      "Create Google Form with relevant questions",
      "Study organization website thoroughly",
      "Collect 20-30 student responses",
      "Share findings with organization"
    ]
  },
  {
    id: 2,
    title: "Institutional Empowerment Program",
    subtitle: "Private Schools & Institutes Outreach",
    description: "Visit Private Schools 8th to 12th with CBSE, ICSE or english medium institutes",
    duration: "20 days",
    difficulty: "Hard",
    impact: "Very High",
    icon: "🏫",
    category: "Institutional",
    detailedDescription: `Institutional Empowerment Program 

In this you have to visit Private Schools 8 to 12th with CBSE , ICSE or any english medium or Institutes having Professional courcse like BCA , BBA , B.tec ect 

Connect with institute designated staff member & Authority and ask them how Uniford Foundation help them and what are the things you are looking for as per our offerings 

Your responsiblity to just aware them using " UIRAD " Website page where all details are mentioned and submit the report`,
    requirements: [
      "Visit schools with CBSE/ICSE curriculum",
      "Connect with designated staff members",
      "Present Uniford Foundation offerings",
      "Use UIRAD website for reference",
      "Submit detailed report"
    ]
  },
  {
    id: 3,
    title: "Social Animal Welfare",
    subtitle: "Help Animals & Birds",
    description: "Install water buckets for birds or any things for animals, birds etc",
    duration: "7 days",
    difficulty: "Easy",
    impact: "Medium",
    icon: "🐦",
    category: "Welfare",
    detailedDescription: `Social Animal Welfare 

- Install the water bucket for birds or any things for animals , birds ect`,
    requirements: [
      "Install water buckets for birds",
      "Provide food sources for animals",
      "Document your welfare activities",
      "Take photos of installations"
    ]
  },
  {
    id: 4,
    title: "Innovation By Waste",
    subtitle: "Create Innovative Solutions",
    description: "Create innovative things using house waste like dustbin, plant pots etc",
    duration: "10 days",
    difficulty: "Medium",
    impact: "High",
    icon: "♻️",
    category: "Innovation",
    detailedDescription: `Innovation By Waste 

- Create any innovative thing using house waste like dustbin , plant pots ect`,
    requirements: [
      "Use household waste materials",
      "Create useful innovative items",
      "Document the creation process",
      "Share your innovation story"
    ]
  },
  {
    id: 5,
    title: "Community Food & Clothing Drive",
    subtitle: "Help Underprivileged Communities",
    description: "Donate raw food, clothes to nearby roadside tribal, poor peoples",
    duration: "5 days",
    difficulty: "Easy",
    impact: "Very High",
    icon: "❤️",
    category: "Community",
    detailedDescription: `Community Food & Clothing Drive

- Donate raw food , clothes to nearby roadside tribal , poor peoples`,
    requirements: [
      "Collect raw food items",
      "Gather clothing donations",
      "Identify underprivileged communities",
      "Distribute items safely",
      "Document impact created"
    ]
  },
  {
    id: 6,
    title: "Collab With Frontliners",
    subtitle: "Invite for Stanburg Award",
    description: "Find 5-10 students with projects, startups, innovations, social initiatives",
    duration: "15 days",
    difficulty: "Hard",
    impact: "Very High",
    icon: "🏆",
    category: "Collaboration",
    detailedDescription: `Collab With Frontliners to Invite them for Stanburg Award 

- Find any 5-10 students have any project , startup , innovation , Social Initiative ect using friend circle , using linkedin and invite them in Pitchburg and all the details are mentioned in pitchburg`,
    requirements: [
      "Find 5-10 innovative students",
      "Use LinkedIn and friend circles",
      "Identify projects/startups/social initiatives",
      "Invite them to Pitchburg",
      "Reference Pitchburg page for details"
    ]
  }
];

const Index = () => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Social Internship Program
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Complete meaningful tasks, make a difference in society, and get your registration fee refunded
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-purple-700 hover:text-purple-800">
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Tasks Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Available Tasks</h2>
              <p className="text-gray-600">Choose Your Social Impact Task</p>
              <p className="text-sm text-gray-500 mt-1">
                Select one of the following tasks to complete your social internship. Each task has different requirements and impact levels.
              </p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500">Popular</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500">Submission Guidelines</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onClick={() => setSelectedTask(task)}
              getDifficultyColor={getDifficultyColor}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our Social Internship Program today and be part of meaningful change while earning benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Register for Social Internship
            </Button>
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              View Official Documents
            </Button>
          </div>
        </div>
      </div>

      {/* Task Modal */}
      {selectedTask && (
        <TaskModal
          task={selectedTask}
          isOpen={!!selectedTask}
          onClose={() => setSelectedTask(null)}
        />
      )}
    </div>
  );
};

export default Index;
