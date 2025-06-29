
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Globe, 
  Users, 
  Target, 
  Search, 
  CheckCircle, 
  XCircle, 
  FileText, 
  MessageSquare, 
  Wrench 
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const TechSupportTask = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <NavBar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🔧</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tech Support for Frontliners
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Empower changemakers with free websites and digital solutions
          </p>
          <Badge className="bg-green-500 text-white text-lg px-4 py-2">
            Volunteer Opportunity
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* About Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Globe className="h-6 w-6 text-blue-600" />
              About the Initiative
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Uniford is offering free websites and tech support to empower frontliners such as:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Early-stage business owners
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Social activists
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    NGOs & community leaders
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Startups solving real-world problems
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm text-gray-700">
                💡 This initiative removes digital barriers for changemakers. The website is completely free — only minimal formatting/editing charges apply.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Volunteer Responsibility */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Users className="h-6 w-6 text-indigo-600" />
              Volunteer Responsibility
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Your role is to act as a <strong>tech evangelist + relationship builder</strong> who connects deserving frontliners with Uniford's tech support.
            </p>
          </CardContent>
        </Card>

        {/* Core Objectives */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Target className="h-6 w-6 text-purple-600" />
              Core Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Awareness</h3>
                <p className="text-sm text-gray-600">
                  Inform potential frontliners about this powerful opportunity and explain how UNCIF can help them grow.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Outreach & Onboarding</h3>
                <p className="text-sm text-gray-600">
                  Personally reach out to frontliners, share registration links, and guide them through the process.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Filtering & Screening</h3>
                <p className="text-sm text-gray-600">
                  Ensure individuals/orgs are purpose-driven, have genuine need, and align with Uniford's mission.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Coordination</h3>
                <p className="text-sm text-gray-600">
                  Connect green-flagged frontliners with the UNCIF department through proper channels.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Outreach Methods */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Search className="h-6 w-6 text-green-600" />
              Outreach Methods
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Social Media</h4>
                <ul className="text-sm space-y-1">
                  <li>• Instagram Business Pages</li>
                  <li>• LinkedIn filtering</li>
                  <li>• WhatsApp/Telegram groups</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Online Directories</h4>
                <ul className="text-sm space-y-1">
                  <li>• Website registrations</li>
                  <li>• Justdial, Indiamart</li>
                  <li>• GoDaddy directories</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Communities</h4>
                <ul className="text-sm space-y-1">
                  <li>• College cells (NSS, E-Cells)</li>
                  <li>• Local entrepreneur groups</li>
                  <li>• Offline connections</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Green vs Red Flags */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl mb-4">Screening Criteria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-green-800 mb-4">
                  <CheckCircle className="h-5 w-5" />
                  Green Flag Criteria ✅
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Purpose-based initiative</li>
                  <li>✓ Early-stage or resource-limited</li>
                  <li>✓ Willing to collaborate</li>
                  <li>✓ Creates social value</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-red-800 mb-4">
                  <XCircle className="h-5 w-5" />
                  Red Flag Criteria ❌
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>✗ Commercial motives only</li>
                  <li>✗ Already funded or fully developed</li>
                  <li>✗ Not responsive or disrespectful</li>
                  <li>✗ Involves unethical activities</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sample Script */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <MessageSquare className="h-6 w-6 text-indigo-600" />
              Sample Approach Script
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
              <p className="text-gray-700 italic">
                "Hey! I'm part of a global youth initiative backed by Uniford that offers free website support to early-stage changemakers like you — NGOs, startups, and impact-led businesses. We help you go digital, look premium, and expand your mission. You only pay a basic editing/setup fee — that's it. If you're interested, I'll connect you to our tech team. Let's grow together!"
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Tools & Benefits */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-blue-600" />
                Tools You Can Use
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Google Sheets – Manage outreach data</li>
                <li>• Canva/Docs – Create visual pitches</li>
                <li>• Uniford Policy Page – Pricing reference</li>
                <li>• WhatsApp Business/Email – Professional communication</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-600" />
                Volunteer Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Volunteer Certificate</li>
                <li>• Eligibility for tech/PR/branding roles</li>
                <li>• Recommendation letter (performance-based)</li>
                <li>• Premium resource access</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Start This Volunteer Task
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TechSupportTask;
