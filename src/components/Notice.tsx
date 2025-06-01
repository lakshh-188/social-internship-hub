
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Camera, FileText, Award, Heart } from "lucide-react";

export const Notice = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">📢 Important Notice</h2>
        </div>

        <Alert className="mb-8 border-orange-200 bg-orange-50">
          <AlertCircle className="h-5 w-5 text-orange-600" />
          <AlertDescription className="text-orange-800">
            <strong>Additional Task Flexibility:</strong> We understand that different institutions have varying requirements. 
            You can adapt and perform additional tasks as needed!
          </AlertDescription>
        </Alert>

        <Card className="mb-8 border-l-4 border-l-blue-500">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-blue-600" />
                  Institutional Requirements
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                    <span>Many institutes require specific reports and diaries to be created</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                    <span>Some institutions may ask for specific additional tasks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                    <span>You can perform these institutional requirements alongside our core tasks</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Camera className="w-6 h-6 mr-2 text-green-600" />
                  Documentation & Proof
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                    <span>Submit proof through photos and videos of your additional work</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                    <span>Organization will consider and include them in your final report</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                    <span>Certificates will be issued for additional qualifying tasks</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Extra Benefits Section */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <Award className="w-8 h-8 mr-3 text-yellow-600" />
            Additional Task Benefits
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Performing additional institutional tasks can earn you extra certifications and recognition!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="bg-green-100 text-green-800 px-4 py-2">Extra Certification</Badge>
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">Full Academic Credits</Badge>
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2">Institution Recognition</Badge>
            <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2">Enhanced Portfolio</Badge>
          </div>
        </div>

        {/* Support Guarantee */}
        <div className="mt-8 bg-white rounded-2xl p-8 border-l-4 border-l-purple-500 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Heart className="w-8 h-8 mr-3 text-red-500" />
            Our Commitment to You
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Don't worry!</strong> The organization will support you in all kinds of tasks and challenges. 
            We are committed to helping you get <span className="text-purple-600 font-semibold">full credits and marks</span> from your institution. 
            Our team will work closely with you to ensure your success and recognition.
          </p>
        </div>
      </div>
    </div>
  );
};
