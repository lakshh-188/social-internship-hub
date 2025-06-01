
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Users, MessageCircle, Award, CheckCircle, Upload } from "lucide-react";

const submissionSteps = [
  {
    step: 1,
    title: "Google Form Submission",
    description: "Submit your completed tasks through our official Google form",
    icon: <Upload className="w-6 h-6" />,
    details: [
      "A dedicated Google form will be shared with you for task submissions",
      "Upload all required documents, photos, and reports",
      "Provide detailed descriptions of your work and impact",
      "Include contact information of beneficiaries/institutions (if applicable)"
    ]
  },
  {
    step: 2,
    title: "24/7 Mentor Support",
    description: "Get continuous guidance from our dedicated mentor help desk",
    icon: <MessageCircle className="w-6 h-6" />,
    details: [
      "Round-the-clock mentor support for any queries or guidance",
      "WhatsApp help desk for immediate assistance",
      "Expert guidance on task execution and best practices",
      "Regular check-ins to ensure you're on the right track"
    ]
  },
  {
    step: 3,
    title: "Documentation Requirements",
    description: "Specific documentation needed for each task category",
    icon: <FileText className="w-6 h-6" />,
    details: [
      "Student Queries: Use 'Uni-pitch' page guidelines for relevant query collection",
      "Submit Google form responses and 'Letter of Appreciation' from satisfied students",
      "Institutional Visits: Create awareness about 'UIRAD' platform",
      "Collect 'Letter of Clearance' from institutions or submit detailed visit reports"
    ]
  }
];

export const SubmissionProcess = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Submission Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow our streamlined submission process to ensure your social internship tasks are properly documented and recognized.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {submissionSteps.map((step, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white">
                  {step.icon}
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Badge className="bg-purple-100 text-purple-600">Step {step.step}</Badge>
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
                <p className="text-sm text-gray-600">{step.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Guidelines */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">📋 Important Submission Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                Query Collection Guidelines
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Follow "Uni-pitch" page guidelines and policies strictly</li>
                <li>• Collect only relevant queries, avoid irrelevant data</li>
                <li>• Use official Google form for query submission</li>
                <li>• Obtain "Letter of Appreciation" from satisfied students</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Award className="w-5 h-5 mr-2 text-purple-600" />
                Institutional Documentation
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Create awareness about "UIRAD" platform during visits</li>
                <li>• Request "Letter of Clearance" from institutions</li>
                <li>• Alternative: Submit detailed visit reports</li>
                <li>• Include contact details and feedback from institutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
