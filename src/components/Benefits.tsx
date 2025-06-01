
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Gift, CreditCard, Star, Medal } from "lucide-react";

const benefits = [
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Golden ID Card",
    description: "Exclusive digital ID card with special privileges and recognition",
    features: ["Digital verification", "Special access rights", "Professional networking"],
    highlight: "Premium"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Certification Kit",
    description: "Complete certification package with digital credentials",
    features: ["Digital certificate", "LinkedIn verification", "Skill endorsement"],
    highlight: "Essential"
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: "Digital Goodies",
    description: "Exclusive digital resources and tools for personal development",
    features: ["E-books collection", "Design templates", "Course materials"],
    highlight: "Bonus"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Membership Benefits",
    description: "Lifetime membership with ongoing support and opportunities",
    features: ["Alumni network access", "Job referrals", "Mentorship programs"],
    highlight: "Lifetime"
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Excellence Awards",
    description: "Special recognition for outstanding performance and innovation",
    features: ["Public recognition", "Media features", "Cash rewards"],
    highlight: "Top Performers"
  },
  {
    icon: <Medal className="w-8 h-8" />,
    title: "Special Goodies",
    description: "Exclusive merchandise and surprise gifts for dedicated interns",
    features: ["Branded merchandise", "Surprise packages", "Event invitations"],
    highlight: "Surprise"
  }
];

export const Benefits = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Social Internship Benefits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete your social internship and unlock amazing benefits, certifications, and exclusive rewards that will enhance your career prospects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {benefit.highlight}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Note */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">🎯 Best Performers Get Extra Rewards!</h3>
          <p className="text-lg mb-6 opacity-90">
            Top-performing interns receive additional awards, special recognition, and exclusive opportunities for career advancement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-white text-purple-600 px-4 py-2">Cash Rewards</Badge>
            <Badge className="bg-white text-purple-600 px-4 py-2">Media Coverage</Badge>
            <Badge className="bg-white text-purple-600 px-4 py-2">Job Opportunities</Badge>
            <Badge className="bg-white text-purple-600 px-4 py-2">Mentorship</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};
