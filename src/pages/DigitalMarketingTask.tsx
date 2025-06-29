
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Megaphone, 
  TrendingUp, 
  Share2, 
  BarChart3, 
  CheckCircle, 
  Lightbulb, 
  Target, 
  Award 
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const DigitalMarketingTask = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <NavBar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-16 pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl mb-4">📱</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Digital Marketing Support
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Amplify Uniford's mission through strategic digital marketing campaigns
          </p>
          <Badge className="bg-orange-500 text-white text-lg px-4 py-2">
            Creative Volunteer Task
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* About Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Megaphone className="h-6 w-6 text-orange-600" />
              About Digital Marketing Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Help spread awareness about Uniford Foundation's programs and initiatives through strategic digital marketing. This volunteer opportunity focuses on content creation, social media management, and digital campaign execution to reach more students and communities.
            </p>
            <div className="grid md:grid-cols-4 gap-4 mt-6">
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <Share2 className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h3 className="font-semibold">Content Creation</h3>
                <p className="text-sm text-gray-600">Design engaging posts and graphics</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <TrendingUp className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <h3 className="font-semibold">Growth Strategy</h3>
                <p className="text-sm text-gray-600">Expand reach and engagement</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">Analytics</h3>
                <p className="text-sm text-gray-600">Track and optimize performance</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">Campaign Management</h3>
                <p className="text-sm text-gray-600">Execute targeted campaigns</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Responsibilities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Target className="h-6 w-6 text-purple-600" />
              Key Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-orange-800">Content & Creative</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span className="text-sm">Create engaging social media posts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span className="text-sm">Design graphics and visual content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span className="text-sm">Write compelling captions and descriptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span className="text-sm">Develop campaign concepts and themes</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-red-800">Strategy & Analysis</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-red-500 mt-0.5" />
                    <span className="text-sm">Plan and schedule content calendars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-red-500 mt-0.5" />
                    <span className="text-sm">Monitor engagement and reach metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-red-500 mt-0.5" />
                    <span className="text-sm">Research trending topics and hashtags</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-red-500 mt-0.5" />
                    <span className="text-sm">Generate performance reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Platform Focus */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Share2 className="h-6 w-6 text-blue-600" />
              Platform Focus Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Instagram</h3>
                <p className="text-sm text-gray-600 mb-3">Visual storytelling and student engagement</p>
                <ul className="text-xs space-y-1">
                  <li>• Stories and Reels</li>
                  <li>• IGTV content</li>
                  <li>• Student testimonials</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
                <p className="text-sm text-gray-600 mb-3">Professional networking and program promotion</p>
                <ul className="text-xs space-y-1">
                  <li>• Article publishing</li>
                  <li>• Company updates</li>
                  <li>• Professional testimonials</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">YouTube</h3>
                <p className="text-sm text-gray-600 mb-3">Educational content and program showcases</p>
                <ul className="text-xs space-y-1">
                  <li>• Program explanations</li>
                  <li>• Success stories</li>
                  <li>• Tutorial videos</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Twitter/X</h3>
                <p className="text-sm text-gray-600 mb-3">Real-time updates and community building</p>
                <ul className="text-xs space-y-1">
                  <li>• Live updates</li>
                  <li>• Community engagement</li>
                  <li>• News and announcements</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tools & Skills */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Lightbulb className="h-6 w-6 text-yellow-600" />
              Tools & Skills Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Design Tools</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Canva Pro access</li>
                  <li>• Adobe Creative Suite basics</li>
                  <li>• Figma for templates</li>
                  <li>• Video editing apps</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Analytics Tools</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Google Analytics</li>
                  <li>• Social media insights</li>
                  <li>• Hootsuite/Buffer</li>
                  <li>• Performance tracking sheets</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Skills You'll Gain</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Digital marketing strategy</li>
                  <li>• Content creation</li>
                  <li>• Data analysis</li>
                  <li>• Brand management</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Campaign Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <TrendingUp className="h-6 w-6 text-indigo-600" />
              Campaign Examples
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-400 pl-4 py-2">
                <h4 className="font-semibold">#StudentSuccess Stories</h4>
                <p className="text-sm text-gray-600">Weekly features of students who benefited from Uniford programs</p>
              </div>
              <div className="border-l-4 border-green-400 pl-4 py-2">
                <h4 className="font-semibold">#OpportunitySpotlight</h4>
                <p className="text-sm text-gray-600">Highlighting available programs, scholarships, and internships</p>
              </div>
              <div className="border-l-4 border-orange-400 pl-4 py-2">
                <h4 className="font-semibold">#MondayMotivation</h4>
                <p className="text-sm text-gray-600">Inspirational content to motivate students and community members</p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4 py-2">
                <h4 className="font-semibold">#UnifордImpact</h4>
                <p className="text-sm text-gray-600">Showcasing the foundation's community impact and achievements</p>
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
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <Award className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                <h3 className="font-semibold">Certificate</h3>
                <p className="text-sm text-gray-600">Digital Marketing Specialist Certificate</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <TrendingUp className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <h3 className="font-semibold">Portfolio</h3>
                <p className="text-sm text-gray-600">Professional marketing portfolio pieces</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <Lightbulb className="h-6 w-6 text-red-600 mx-auto mb-2" />
                <h3 className="font-semibold">Skills</h3>
                <p className="text-sm text-gray-600">Industry-relevant digital marketing skills</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <Share2 className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">Network</h3>
                <p className="text-sm text-gray-600">Access to marketing professional network</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            Start Digital Marketing Volunteer Role
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DigitalMarketingTask;
