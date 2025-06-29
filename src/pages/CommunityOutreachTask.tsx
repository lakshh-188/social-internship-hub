
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Users, 
  Target, 
  MapPin, 
  CheckCircle, 
  Calendar, 
  Camera, 
  Award 
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const CommunityOutreachTask = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <NavBar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16 pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🤝</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Community Outreach Program
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Connect with local communities and create meaningful social impact
          </p>
          <Badge className="bg-green-500 text-white text-lg px-4 py-2">
            High Impact Volunteer Task
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* About Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Heart className="h-6 w-6 text-red-600" />
              About Community Outreach
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              The Community Outreach Program focuses on building bridges between Uniford Foundation and local communities to create sustainable social impact. Volunteers engage directly with community members to understand their needs and facilitate meaningful connections.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">Community Engagement</h3>
                <p className="text-sm text-gray-600">Direct interaction with local communities</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">Need Assessment</h3>
                <p className="text-sm text-gray-600">Identify and document community needs</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <Heart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">Impact Creation</h3>
                <p className="text-sm text-gray-600">Facilitate positive community change</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Task Objectives */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Target className="h-6 w-6 text-purple-600" />
              Task Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-green-800">Primary Objectives</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Conduct community needs assessment surveys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Organize awareness sessions about Uniford programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Facilitate connections between community and foundation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Document and report community feedback</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-blue-800">Secondary Goals</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5" />
                    <span className="text-sm">Build long-term community partnerships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5" />
                    <span className="text-sm">Create volunteer network in local areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5" />
                    <span className="text-sm">Promote social entrepreneurship opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5" />
                    <span className="text-sm">Establish feedback mechanisms for continuous improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Steps */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Calendar className="h-6 w-6 text-indigo-600" />
              Implementation Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 rounded-full p-2 flex-shrink-0">
                  <span className="text-indigo-800 font-bold text-sm">Week 1-2</span>
                </div>
                <div>
                  <h3 className="font-semibold">Planning & Research</h3>
                  <p className="text-sm text-gray-600">Identify target communities, research local needs, and prepare outreach materials</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <span className="text-green-800 font-bold text-sm">Week 3-4</span>
                </div>
                <div>
                  <h3 className="font-semibold">Initial Outreach</h3>
                  <p className="text-sm text-gray-600">Make first contact with community leaders and schedule meetings</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                  <span className="text-blue-800 font-bold text-sm">Week 5-6</span>
                </div>
                <div>
                  <h3 className="font-semibold">Community Engagement</h3>
                  <p className="text-sm text-gray-600">Conduct surveys, organize sessions, and gather comprehensive feedback</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                  <span className="text-purple-800 font-bold text-sm">Week 7-8</span>
                </div>
                <div>
                  <h3 className="font-semibold">Documentation & Reporting</h3>
                  <p className="text-sm text-gray-600">Compile findings, create impact reports, and submit recommendations</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Documentation Requirements */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Camera className="h-6 w-6 text-orange-600" />
              Documentation & Reporting
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Required Documentation</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Photo evidence of community meetings</li>
                  <li>• Survey responses and feedback forms</li>
                  <li>• Meeting minutes and attendance records</li>
                  <li>• Community leader contact information</li>
                  <li>• Impact assessment reports</li>
                </ul>
              </div>
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Reporting Format</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Weekly progress updates</li>
                  <li>• Community needs analysis</li>
                  <li>• Recommendation summary</li>
                  <li>• Future collaboration opportunities</li>
                  <li>• Final impact presentation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Award className="h-6 w-6 text-yellow-600" />
              Volunteer Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <Award className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                <h3 className="font-semibold">Certificate</h3>
                <p className="text-sm text-gray-600">Community Outreach Volunteer Certificate</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">Network</h3>
                <p className="text-sm text-gray-600">Access to community leader network</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <Target className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">Skills</h3>
                <p className="text-sm text-gray-600">Leadership and communication development</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Join Community Outreach Program
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CommunityOutreachTask;
