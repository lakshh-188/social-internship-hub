
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TaskCard } from "@/components/TaskCard";
import { TaskModal } from "@/components/TaskModal";
import { Task } from "@/types/Task";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const optionalTasks: Task[] = [
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
    detailedDescription: `DETAILED TASK OVERVIEW:
This compassionate initiative focuses on creating sustainable support systems for local wildlife and street animals.

PLANNING PHASE (Days 1-2):
- Survey your neighborhood to identify high-traffic animal areas
- Assess what type of support is most needed
- Gather necessary materials and permissions

IMPLEMENTATION PHASE (Days 3-6):
- Install water sources and feeding stations
- Create shelter options
- Monitor and maintain installations

EXAMPLE PROJECTS:
1. BIRD WATER STATIONS: Install small bowls or containers on rooftops, balconies, or trees. Use shallow containers (2-3 inches deep) that birds can easily access. Change water every 2-3 days to prevent mosquito breeding.

2. STREET DOG FEEDING: Set up regular feeding spots with proper food containers. Coordinate with local residents to ensure sustainability.

3. SHELTER CREATION: Build simple shelters using cardboard boxes, old blankets, or plastic containers for street animals during harsh weather.

SAFETY CONSIDERATIONS:
- Always maintain safe distance from unknown animals
- Use proper hygiene practices
- Get tetanus vaccination if handling materials that might cause cuts

SUSTAINABILITY TIPS:
- Involve neighbors and local communities
- Create maintenance schedules
- Use weather-resistant materials`,
    requirements: [
      "Survey your neighborhood to identify areas with high bird/animal activity and assess their specific needs (water, food, shelter)",
      "Install at least 5-8 water stations for birds in accessible locations like terraces, balconies, trees, or community areas",
      "Create feeding stations for street animals using proper containers that protect food from rain and contamination",
      "Build or install simple shelter structures for animals using recycled materials like wooden boxes, plastic containers, or cloth",
      "Document your installations with photos showing before/after scenarios and animals using the facilities",
      "Create a maintenance schedule and involve family members or neighbors in upkeep responsibilities",
      "Monitor the installations for 1 week to ensure they're being used and make necessary adjustments",
      "Share your experience and encourage others in your community to replicate similar initiatives"
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
    detailedDescription: `DETAILED TASK OVERVIEW:
Transform household waste into functional, innovative items that demonstrate creativity and environmental consciousness.

CREATIVE PROCESS (Days 1-3):
- Audit household waste materials
- Brainstorm innovative solutions
- Design and plan your projects

CONSTRUCTION PHASE (Days 4-8):
- Build your innovative items
- Test functionality and durability
- Make improvements and refinements

EXAMPLE PROJECTS:

1. PLASTIC BOTTLE PLANTERS:
- Use 2L bottles cut horizontally
- Create drainage holes
- Add rope for hanging systems
- Perfect for herbs and small plants

2. CARDBOARD ORGANIZERS:
- Transform shoe boxes into desk organizers
- Create compartments for stationery
- Cover with decorative paper or paint

3. TIN CAN INNOVATIONS:
- Convert large tins into storage containers
- Create pen holders with multiple compartments
- Build bird feeders with feeding holes

4. NEWSPAPER/MAGAZINE CRAFTS:
- Roll papers into sturdy baskets
- Create decorative wall art
- Make seed starter pots

INNOVATION CRITERIA:
- Must be functional and useful
- Should solve a real problem
- Use primarily waste materials
- Demonstrate creativity and practical thinking

DOCUMENTATION REQUIREMENTS:
- Before/after photos of materials
- Step-by-step creation process
- Final product in use
- Cost savings analysis`,
    requirements: [
      "Collect and categorize household waste materials: plastic containers, cardboard boxes, glass jars, tin cans, newspapers, fabric scraps",
      "Design at least 3-5 different innovative items that serve practical purposes in daily life (storage, organization, gardening, decoration)",
      "Create detailed project plans including materials needed, tools required, and step-by-step construction process",
      "Build your innovations ensuring they are functional, durable, and aesthetically pleasing",
      "Test each item for practical use and make improvements based on functionality",
      "Document the entire process with photos: raw materials, work-in-progress, and final products being used",
      "Calculate environmental impact: amount of waste diverted from landfills, money saved on purchasing new items",
      "Create an instruction guide or video tutorial that others can follow to replicate your innovations",
      "Share your creations on social media or community groups to inspire others and promote waste reduction"
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
    detailedDescription: `DETAILED TASK OVERVIEW:
Organize a meaningful community outreach program to support underprivileged families and individuals with basic necessities.

ORGANIZATION PHASE (Days 1-2):
- Identify beneficiary communities
- Plan collection and distribution strategy
- Coordinate with family, friends, and neighbors

COLLECTION PHASE (Days 3-4):
- Gather food and clothing donations
- Sort and package items appropriately
- Ensure quality and hygiene standards

DISTRIBUTION PHASE (Day 5):
- Distribute items with dignity and respect
- Document impact and beneficiary feedback

EXAMPLE DISTRIBUTION STRATEGY:

FOOD ITEMS TO COLLECT:
- Rice, wheat flour, lentils (dal)
- Cooking oil, sugar, tea
- Biscuits, dry fruits, canned goods
- Baby food (if families have infants)

CLOTHING PRIORITY:
- Clean, wearable clothes in good condition
- Seasonal appropriate items
- Children's clothes (always in high demand)
- Blankets and warm clothing

IDENTIFICATION OF BENEFICIARIES:
- Roadside vendors and their families
- Construction workers in temporary settlements
- Elderly individuals living alone
- Families in slum areas or temporary shelters

DISTRIBUTION BEST PRACTICES:
- Approach with respect and dignity
- Ask about specific needs before distributing
- Involve beneficiaries in the process
- Maintain privacy and avoid taking photos without permission

SAFETY GUIDELINES:
- Visit in groups, not alone
- Inform family about your locations
- Carry hand sanitizer and wear masks
- Distribute during daylight hours`,
    requirements: [
      "Identify 3-5 underprivileged families or communities in your area through observation, local contacts, or community organizations",
      "Organize collection drive among family, friends, neighbors, and classmates for raw food items (rice, flour, oil, lentils, sugar)",
      "Collect clean, wearable clothing items suitable for different age groups and seasons",
      "Sort and package donations hygienically in clean bags or containers with labels indicating contents",
      "Plan distribution strategy ensuring dignity and respect: visit during appropriate times, approach respectfully, ask about specific needs",
      "Distribute items personally, engaging with beneficiaries to understand their situations and additional needs",
      "Document the initiative through photos (with permission) and record number of families helped and items distributed",
      "Collect feedback from beneficiaries about most needed items for future reference",
      "Create a sustainability plan by connecting beneficiaries with local NGOs or government schemes for ongoing support"
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
    detailedDescription: `DETAILED TASK OVERVIEW:
Identify and recruit exceptional students with innovative projects for the prestigious Stanburg Award, creating a network of young changemakers.

RESEARCH PHASE (Days 1-5):
- Study Pitchburg platform and Stanburg Award criteria
- Identify potential candidates through various channels
- Create outreach strategy

OUTREACH PHASE (Days 6-12):
- Contact potential candidates
- Evaluate their projects/initiatives
- Guide them through application process

EXAMPLE CANDIDATE PROFILES:

1. TECH INNOVATORS:
- Students developing mobile apps for social causes
- Those working on IoT solutions for rural problems
- AI/ML projects addressing real-world challenges

2. SOCIAL ENTREPRENEURS:
- Students running NGOs or social initiatives
- Those creating sustainable business models
- Community development project leaders

3. RESEARCH PIONEERS:
- Students with published research papers
- Those working on breakthrough technologies
- Innovation in traditional fields with modern applications

4. CREATIVE PROBLEM SOLVERS:
- Artists using creativity for social change
- Students developing educational tools
- Environmental conservation innovators

NETWORKING STRATEGIES:
- LinkedIn: Search for students posting about projects
- College tech fests and innovation competitions
- Startup incubators and accelerators
- Social media groups focused on innovation
- University research departments
- Engineering and management college networks

EVALUATION CRITERIA:
- Innovation and originality of the project
- Social impact potential
- Scalability and sustainability
- Student's passion and commitment
- Alignment with Stanburg Award objectives

ENGAGEMENT PROCESS:
- Initial contact through personalized messages
- Detailed discussion about their projects
- Explanation of Stanburg Award benefits
- Guidance on application preparation
- Follow-up and support throughout the process`,
    requirements: [
      "Study the Pitchburg platform thoroughly to understand Stanburg Award criteria, benefits, application process, and success stories",
      "Create a systematic search strategy using LinkedIn, college networks, startup communities, and innovation forums to identify potential candidates",
      "Develop a database of 20-30 potential candidates with details: name, institution, project description, contact information, innovation level",
      "Reach out through personalized messages explaining the award opportunity and requesting detailed project information",
      "Screen candidates based on innovation quality, social impact, scalability, and alignment with award criteria",
      "Conduct detailed conversations (calls/meetings) with shortlisted candidates to assess their passion, commitment, and project potential",
      "Guide selected candidates through the application process, helping them understand requirements and prepare strong submissions",
      "Maintain regular follow-up communication to ensure application completion and provide ongoing support",
      "Create a comprehensive report with candidate profiles, project summaries, recommendation rankings, and potential impact assessment",
      "Submit final list of 5-10 qualified candidates with complete documentation and personal recommendations to the foundation"
    ]
  }
];

const OptionalTasks = () => {
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
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-purple-200 mb-6">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Optional Tasks
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Choose additional tasks to enhance your impact and earn extra recognition
            </p>
            <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
              Choose Any Tasks to Complete
            </Badge>
          </div>
        </div>
      </div>

      {/* Tasks Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Optional Tasks</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These tasks are optional but highly recommended to maximize your social impact and gain additional recognition. 
            Each completed task adds value to your internship experience and increases your chances of earning special awards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {optionalTasks.map((task) => (
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
            Complete More Tasks, Earn More Recognition!
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Each optional task you complete increases your impact score and eligibility for special awards and recognition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Back to Home
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              View Submission Guidelines
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

export default OptionalTasks;
