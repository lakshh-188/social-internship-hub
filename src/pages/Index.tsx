import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { TaskCard } from "@/components/TaskCard";
import { TaskModal } from "@/components/TaskModal";
import { ReferenceLinks } from "@/components/ReferenceLinks";
import { Benefits } from "@/components/Benefits";
import { SubmissionProcess } from "@/components/SubmissionProcess";
import { Notice } from "@/components/Notice";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Task } from "@/types/Task";
import { AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

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
    detailedDescription: `DETAILED TASK OVERVIEW:
The Student Empowerment Program is designed to bridge the gap between students' needs and organizational support. Your role is to act as a liaison between students and the Uniford Foundation.

WHAT YOU'LL DO:
1. Research & Understanding Phase (Days 1-3)
2. Form Creation & Distribution (Days 4-7)
3. Data Collection (Days 8-12)
4. Analysis & Reporting (Days 13-15)

EXAMPLE SCENARIO:
Imagine you're helping a computer science student who wants to start a tech startup but doesn't know about funding opportunities. Through your form, you'll collect such queries and connect them with relevant Uniford Foundation programs.

WHY THIS MATTERS:
Many talented students are unaware of available resources. Your work directly impacts their career trajectories and helps the foundation better understand student needs.`,
    requirements: [
      "Study the Uniford Foundation website thoroughly - focus on 'Programs', 'ID Card', and 'Pitchburg' sections to understand all available offerings",
      "Create a comprehensive Google Form with questions like: 'What challenges are you facing in your academic/career journey?', 'What type of support are you looking for?', 'How familiar are you with Uniford Foundation programs?'",
      "Include demographic questions: course/year of study, institution name, contact information, and specific areas of interest",
      "Distribute the form through college WhatsApp groups, social media, campus notice boards, and direct outreach to students",
      "Aim to collect 20-30 quality responses with detailed answers, not just brief one-word responses",
      "Analyze responses to identify common themes and needs among students",
      "Create a summary report highlighting key findings: most common problems, opportunities students seek, awareness levels about foundation programs",
      "Prepare recommendations on how the foundation can better serve student needs based on your findings"
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
    detailedDescription: `DETAILED TASK OVERVIEW:
This high-impact program involves building relationships with educational institutions to create partnerships that benefit both students and schools.

PREPARATION PHASE (Days 1-5):
- Research target schools in your area
- Study UIRAD website page thoroughly
- Prepare presentation materials
- Schedule appointments with key personnel

EXECUTION PHASE (Days 6-18):
- Conduct school visits
- Meet with principals, academic coordinators, career counselors
- Present foundation offerings
- Assess institutional needs

EXAMPLE VISIT SCENARIO:
You visit St. Mary's CBSE School and meet with the Principal and Career Counselor. You explain how Uniford Foundation's scholarship programs can help their financially disadvantaged students, how the skill development workshops can enhance their curriculum, and how the mentorship programs can guide students' career choices.

TARGET INSTITUTIONS:
- CBSE/ICSE schools (Classes 8-12)
- English medium private schools
- Professional institutes offering BCA, BBA, B.Tech, etc.
- Coaching centers and skill development institutes

KEY OUTCOMES EXPECTED:
- Establish 5-10 institutional partnerships
- Create awareness about foundation programs
- Generate leads for student enrollment
- Build long-term relationships for future collaboration`,
    requirements: [
      "Research and create a list of 15-20 target schools/institutes in your area with their contact details and key personnel information",
      "Study the complete UIRAD website page to understand all foundation offerings, eligibility criteria, application processes, and success stories",
      "Prepare a professional presentation or brochure highlighting key programs: scholarships, mentorship, skill development, career guidance",
      "Schedule formal appointments with school principals, vice-principals, career counselors or academic coordinators",
      "During visits, conduct needs assessment: ask about student demographics, common challenges, existing support systems",
      "Present relevant foundation programs that align with each institution's specific needs and student profile",
      "Collect institutional feedback: what additional support would be most valuable, willingness to collaborate, preferred communication channels",
      "Maintain detailed visit records: institution name, contact person, discussion summary, follow-up actions, potential collaboration opportunities",
      "Submit comprehensive report with recommendations for partnership strategies and potential program implementations"
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

  const compulsoryTasks = tasks;

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
            <a href="https://forms.gle/vuRAsPvLFSSQgDUFA" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-purple-700 hover:text-purple-800">
                Register Now
              </Button>
            </a>
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
                Complete the compulsory tasks first, then choose from optional tasks to maximize your impact.
              </p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <Alert className="mb-8 border-purple-200 bg-purple-50">
          <AlertCircle className="h-4 w-4 text-purple-600" />
          <AlertTitle className="text-purple-800">Task Requirements</AlertTitle>
          <AlertDescription className="text-purple-700">
            <strong>Compulsory:</strong> You must complete the first 2 tasks (Student Empowerment and Institutional Empowerment).
            <br />
            <strong>Optional:</strong> Visit the optional tasks page to choose additional tasks and enhance your impact.
          </AlertDescription>
        </Alert>

        {/* Compulsory Tasks */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Compulsory Tasks</h3>
            <Badge className="bg-red-100 text-red-800">Required</Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {compulsoryTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onClick={() => setSelectedTask(task)}
                getDifficultyColor={getDifficultyColor}
              />
            ))}
          </div>
        </div>

        {/* Optional Tasks Preview */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-gray-900">Optional Tasks</h3>
              <Badge className="bg-blue-100 text-blue-800">Choose Any</Badge>
            </div>
            <Link to="/optional-tasks">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                View All Optional Tasks
              </Button>
            </Link>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              4 Additional Optional Tasks Available
            </h4>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Enhance your social impact by completing additional tasks including Social Animal Welfare, 
              Innovation by Waste, Community Food & Clothing Drive, and Collaboration with Frontliners.
            </p>
            <Link to="/optional-tasks">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Explore Optional Tasks
              </Button>
            </Link>
          </div>
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
            <a href="https://forms.gle/vuRAsPvLFSSQgDUFA" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Apply For Social Internship
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Internship Submission Form
            </Button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <Benefits />

      {/* Submission Process Section */}
      <SubmissionProcess />

      {/* Notice Section */}
      <Notice />

      {/* Reference Links Section */}
      <ReferenceLinks />

      {/* Footer */}
      <Footer />

      {/* Floating Actions */}
      <FloatingActions />

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
