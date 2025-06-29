
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Building, 
  Target, 
  CheckCircle, 
  Globe, 
  Award,
  Users,
  BookOpen,
  TrendingUp
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const UncifCurriculumTask = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <NavBar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🏫</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Connect with Institutes & Implement UNCIF Curriculum
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Transform educational institutions into internationally competitive, opportunity-rich environments
          </p>
          <Badge className="bg-indigo-500 text-white text-lg px-4 py-2">
            Institutional Partnership Task
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* About UNCIF */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BookOpen className="h-6 w-6 text-indigo-600" />
              About UNCIF Framework
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              UNCIF (Uniford National Curriculum & Innovation Framework) is a revolutionary model built to upgrade institutes into internationally competitive, opportunity-rich environments using Uniford's comprehensive ecosystem.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-indigo-50 p-4 rounded-lg text-center">
                <Globe className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                <h3 className="font-semibold">Premium Programs</h3>
                <p className="text-sm text-gray-600">Global opportunity access</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <GraduationCap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">Student Projects</h3>
                <p className="text-sm text-gray-600">Hands-on learning experience</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">CSR Grants</h3>
                <p className="text-sm text-gray-600">Funding opportunities</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h3 className="font-semibold">Career Tracks</h3>
                <p className="text-sm text-gray-600">Global talent portals</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Responsibilities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Target className="h-6 w-6 text-purple-600" />
              Your Core Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-indigo-800">1. Initiate Outreach</h3>
                <p className="text-sm text-gray-600 mb-3">Target schools, colleges, skill centers, coaching institutes, and universities.</p>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-sm italic">"How can UNCIF help your students, departments, and faculty in career development, innovation, and global visibility?"</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-green-800">2. Awareness & Consultation</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Free internships for students</li>
                  <li>• International certification programs</li>
                  <li>• AI Tools & Premium Courses</li>
                  <li>• Startup/Research pitch events & grants</li>
                  <li>• Environmental + social development projects</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-blue-800">3. Identify Green Flag Institutions</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Interest in career upliftment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Open to innovation & collaboration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Ready for social & skill projects
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-purple-800">4. Connect with Department</h3>
                <p className="text-sm text-gray-600 mb-2">Provide the internal team:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Institute name & contact person</li>
                  <li>• Intent summary & needs</li>
                  <li>• Project coordinator assignment</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* UNCIF Offerings */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Award className="h-6 w-6 text-green-600" />
              What UNCIF Can Offer to Institutes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 font-semibold">Institute Needs</th>
                    <th className="text-left p-3 font-semibold">UNCIF Offers</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b">
                    <td className="p-3">Skill development & global exposure</td>
                    <td className="p-3">Premium Career & Internship Tracks</td>
                  </tr>
                  <tr className="border-b bg-gray-25">
                    <td className="p-3">Student placements & job support</td>
                    <td className="p-3">Talent Hunt Alliance & Startup Listings</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Recognition & international branding</td>
                    <td className="p-3">Portal Partnerships + Event Visibility</td>
                  </tr>
                  <tr className="border-b bg-gray-25">
                    <td className="p-3">Social impact or community engagement</td>
                    <td className="p-3">Social Internship Framework & Scholar Missions</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Grants & funds for development</td>
                    <td className="p-3">CSR Grants via Uniford Foundation</td>
                  </tr>
                  <tr className="border-b bg-gray-25">
                    <td className="p-3">Female student support</td>
                    <td className="p-3">She Fly Program + Personality Development</td>
                  </tr>
                  <tr>
                    <td className="p-3">Project-based learning</td>
                    <td className="p-3">Eco-Career Club, Innovation Drives, Campaigns</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Finding Institutes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Building className="h-6 w-6 text-orange-600" />
              Ways to Find Institutes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">LinkedIn (search by institute, head of department, placement officer)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-green-600" />
                  <span className="text-sm">College websites & contact pages</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-purple-600" />
                  <span className="text-sm">Instagram pages of colleges, skill institutes</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-orange-600" />
                  <span className="text-sm">WhatsApp/Telegram academic groups</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-red-600" />
                  <span className="text-sm">Alumni network or local academic forums</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-indigo-600" />
                  <span className="text-sm">Coaching centers and skill development institutes</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sample Pitch */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Award className="h-6 w-6 text-purple-600" />
              Suggested Pitch Line
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 italic">
                "We're working on a national initiative to help institutes like yours become more globally connected and opportunity-rich. UNCIF by Uniford offers internship access, funding support, student certification, and career portals — at no cost to the institute. Is there any way our team can help support your students, faculty, or placement goals?"
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
            Start Institute Outreach
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UncifCurriculumTask;
