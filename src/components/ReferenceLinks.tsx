
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Globe, Award } from "lucide-react";

const referenceLinks = [
  {
    category: "Official Documentation",
    icon: <FileText className="w-5 h-5" />,
    links: [
      { title: "Uniford Foundation Programs", url: "#", description: "Complete guide to all foundation programs" },
      { title: "ID Card Benefits", url: "#", description: "Digital ID card features and benefits" },
      { title: "Pitchburg Platform", url: "#", description: "Innovation and startup platform details" },
      { title: "UIRAD Website", url: "#", description: "Institutional partnership information" }
    ]
  },
  {
    category: "Sample Forms & Templates",
    icon: <Globe className="w-5 h-5" />,
    links: [
      { title: "Student Query Form Template", url: "#", description: "Google form template for student queries" },
      { title: "Institution Visit Report Template", url: "#", description: "Template for institutional visits" },
      { title: "Project Documentation Sample", url: "#", description: "Sample project documentation format" },
      { title: "Social Initiative Proposal", url: "#", description: "Template for social initiative proposals" }
    ]
  },
  {
    category: "Inspiration & Examples",
    icon: <Award className="w-5 h-5" />,
    links: [
      { title: "Previous Student Success Stories", url: "#", description: "Inspiring stories from past interns" },
      { title: "Innovation Project Gallery", url: "#", description: "Creative waste management projects" },
      { title: "Community Impact Examples", url: "#", description: "Real examples of community service" },
      { title: "Stanburg Award Winners", url: "#", description: "Past award winners and their projects" }
    ]
  }
];

export const ReferenceLinks = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Reference Links & Resources</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access all the essential documentation, templates, and inspiration you need to successfully complete your social internship tasks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {referenceLinks.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="border-b border-gray-100 pb-3 last:border-b-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 mb-1">{link.title}</h4>
                          <p className="text-sm text-gray-600">{link.description}</p>
                        </div>
                        <Button variant="ghost" size="sm" className="ml-2">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
