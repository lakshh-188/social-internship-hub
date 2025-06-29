
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { 
  FileText, 
  GraduationCap, 
  DollarSign, 
  Gift, 
  AlertCircle,
  CheckCircle,
  Users,
  Award
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Policy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <NavBar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 to-blue-900 text-white py-16 pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl mb-4">📜</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Uniford Social Internship Policy
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Version: 2025 | Last Updated: June 29, 2025
          </p>
          <Badge className="bg-blue-500 text-white text-lg px-4 py-2">
            Official Policy Document
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <FileText className="h-6 w-6 text-blue-600" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Uniford Foundation proudly offers Social Internships under its national and international campaigns to promote youth-led change in the fields of environment, education, health, and humanitarian efforts. These internships are designed to give students real-world impact experience while opening doors to further opportunities within the Uniford ecosystem.
            </p>
          </CardContent>
        </Card>

        {/* Types of Internships */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <GraduationCap className="h-6 w-6 text-purple-600" />
              Types of Social Internships
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-purple-800">Corporate & Organization Tie-Ups</h3>
                <p className="text-sm text-gray-600">
                  Projects or drives executed in collaboration with companies, NGOs, or government bodies.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-blue-800">Academic & Campus-Based Internships</h3>
                <p className="text-sm text-gray-600">
                  Designed for students enrolled in schools, colleges, or universities to promote civic responsibility and leadership development.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Award className="h-6 w-6 text-green-600" />
              Benefits of Social Internship
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold">Your Status</th>
                    <th className="text-left p-4 font-semibold">What You Receive After Internship Completion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">New Student (Not a Scholar Yet)</td>
                    <td className="p-4">Free Uniford Scholar ID Card (100% Fee Waived)</td>
                  </tr>
                  <tr className="border-b bg-gray-25">
                    <td className="p-4">Existing Scholar</td>
                    <td className="p-4">Renewal of ID Card for Next Year (No Additional Fee Required)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Important Clarification */}
        <Alert className="mb-8 border-yellow-200 bg-yellow-50">
          <AlertCircle className="h-4 w-4 text-yellow-600" />
          <AlertTitle className="text-yellow-800">Important Clarification on Refunds & Rewards</AlertTitle>
          <AlertDescription className="text-yellow-700">
            Many students misunderstand the term "Social Internship Refund". Here's what it actually means:
          </AlertDescription>
        </Alert>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <DollarSign className="h-6 w-6 text-yellow-600" />
              Clarification on Refunds & Rewards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                <h3 className="font-semibold text-lg mb-3 text-red-800">What We DON'T Offer</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>There is no default cash refund after submitting your social internship report</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                <h3 className="font-semibold text-lg mb-3 text-green-800">What "Refund" Actually Means</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Waived fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Extended benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Added privileges (ID renewals, bonus slots)</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Special Campaigns */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Gift className="h-6 w-6 text-orange-600" />
              Special Reward-Based Campaigns
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              In special projects or partner-driven campaigns, selected interns may receive cash rewards, goodies, or other perks. These are provided only in specific collaborations, not by default.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-orange-800">Examples of Special Campaigns</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Hair donation for cancer patients</li>
                  <li>• Tree donation drives for orphanages</li>
                  <li>• Blood donation campaigns with hospitals</li>
                  <li>• Environmental/health awareness drives with CSR partners</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-green-800">Possible Special Rewards</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Cash rewards</li>
                  <li>• Goodies (T-shirts, books, eco-kits)</li>
                  <li>• Travel reimbursements</li>
                  <li>• Spotlight features & certificates of excellence</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <AlertCircle className="h-6 w-6 text-red-600" />
              Important Notes & Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-sm text-red-800">
                  <strong>Note:</strong> Submission of your social internship report or form does not guarantee money.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="text-sm text-yellow-800">
                  <strong>Variability:</strong> Benefits vary case by case and depend on your campaign involvement and partner organization policies.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-blue-800">
                  <strong>Verification:</strong> All benefits are granted only after your internship audit is verified and approved by Uniford coordinators.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-sm text-green-800">
                  <strong>Value Recognition:</strong> Even if you're not eligible for specific rewards, your participation holds immense value through certification, skill-building, and networking opportunities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why This Policy Exists */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Users className="h-6 w-6 text-purple-600" />
              Why This Policy Exists
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Many students participate in good faith but expect immediate monetary benefit or assume all internships include cash rewards. This policy ensures transparency about how Uniford functions:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Our Goals</h4>
                <ul className="space-y-1 text-sm">
                  <li>• To build a value-first community</li>
                  <li>• To reward social effort meaningfully</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Our Approach</h4>
                <ul className="space-y-1 text-sm">
                  <li>• To give opportunity, not entitlement</li>
                  <li>• To align scholars with impact, not incentives alone</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <AlertCircle className="h-6 w-6 text-blue-600" />
              Still Have Doubts?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Please contact your department coordinator or refer to the FAQs section on the official portal for more clarification. You may also raise a support query via the Student Help Desk.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Policy;
