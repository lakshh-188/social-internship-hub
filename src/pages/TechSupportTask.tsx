
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Users, 
  Target, 
  CheckCircle, 
  Globe, 
  Filter, 
  Award,
  Instagram,
  Linkedin,
  Search
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const TechSupportTask = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <NavBar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-16 pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🔧</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tech Support for Frontliners
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Connect deserving frontliners with free website and tech support from Uniford
          </p>
          <Badge className="bg-blue-500 text-white text-lg px-4 py-2">
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
              <Globe className="h-6 w-6 text-blue-600" />
              About the Initiative
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Uniford is offering free websites and tech support to empower frontliners such as early-stage business owners, social activists, NGOs & community leaders, and startups solving real-world problems.
            </p>
            <p className="text-gray-700 mb-6">
              This initiative is meant to remove digital barriers for changemakers. The website is completely free — only minimal formatting/editing charges apply, as detailed transparently on the 'Policy' page.
            </p>
            <div className="grid md:grid-cols-4 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">Business Owners</h3>
                <p className="text-sm text-gray-600">Early-stage entrepreneurs</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">Social Activists</h3>
                <p className="text-sm text-gray-600">Community changemakers</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">NGOs</h3>
                <p className="text-sm text-gray-600">Community leaders</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <Wrench className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h3 className="font-semibold">Startups</h3>
                <p className="text-sm text-gray-600">Problem solvers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Responsibility */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Target className="h-6 w-6 text-purple-600" />
              Your Responsibility
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              Your role is to act as a tech evangelist + relationship builder who connects deserving frontliners with Uniford's tech support.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-blue-800">Awareness</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Inform potential frontliners about this opportunity</li>
                  <li>• Explain how UNCIF can help them grow</li>
                  <li>• Share success stories and benefits</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-green-800">Outreach & Onboarding</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Personally reach out to frontliners</li>
                  <li>• Share onboarding page or registration link</li>
                  <li>• Guide them on claiming their free website</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-purple-800">Filtering & Screening</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Ensure individual/org is purpose-driven</li>
                  <li>• Verify genuine need and intent</li>
                  <li>• Check alignment with Uniford's mission</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Finding Frontliners */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Search className="h-6 w-6 text-indigo-600" />
              How to Find Frontliners
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Online Channels</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Instagram className="h-5 w-5 text-pink-500" />
                    <span className="text-sm">Instagram Business Pages (eco, shoplocal, NGO, campaign, startup)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">LinkedIn (Nonprofit, Entrepreneur, Startup, Local Business)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Website directories (JustDial, Indiamart, GoDaddy)</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Community Channels</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span className="text-sm">WhatsApp/Telegram groups</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-orange-600" />
                    <span className="text-sm">College cells (NSS, E-Cells, Incubators)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-red-600" />
                    <span className="text-sm">Local networks and events</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Green Flag vs Red Flag */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Filter className="h-6 w-6 text-yellow-600" />
              Green Flag vs Red Flag Criteria
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                <h3 className="font-semibold text-lg mb-3 text-green-800 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Green Flag Criteria ✅
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Purpose-based initiative</li>
                  <li>• Early-stage or resource-limited</li>
                  <li>• Willing to collaborate</li>
                  <li>• Creates social value</li>
                  <li>• Genuine need and intent</li>
                  <li>• Aligns with Uniford's mission</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                <h3 className="font-semibold text-lg mb-3 text-red-800 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Red Flag Criteria ❌
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Commercial motives only</li>
                  <li>• Already funded or fully developed</li>
                  <li>• Not responsive or disrespectful</li>
                  <li>• Involves unethical or misleading info</li>
                  <li>• No genuine social impact</li>
                  <li>• Misaligned with foundation values</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sample Script */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Award className="h-6 w-6 text-purple-600" />
              Sample Approach Script
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 italic">
                "Hey! I'm part of a global youth initiative backed by Uniford that offers free website support to early-stage changemakers like you — NGOs, startups, and impact-led businesses. We help you go digital, look premium, and expand your mission. You only pay a basic editing/setup fee — that's it. If you're interested, I'll connect you to our tech team. Let's grow together!"
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Start Connecting Frontliners
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TechSupportTask;
