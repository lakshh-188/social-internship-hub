
export interface Task {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  difficulty: "Easy" | "Medium" | "Hard";
  impact: string;
  icon: string;
  category: string;
  detailedDescription: string;
  requirements: string[];
}
