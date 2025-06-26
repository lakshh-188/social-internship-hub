
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, Download, Mail, ExternalLink, FileText, Users, Award, Star } from "lucide-react";
import Footer from "@/components/Footer";

const BadgeGuide = () => {
  const roadmapSteps = [
    {
      step: 1,
      title: "Visit Application Pages",
      description: "Navigate to the official Uniford pages to generate your badge and offer letter",
      links: [
        { url: "https://www.uniford.org/offer-letter", text: "Generate Offer Letter" },
        { url: "https://www.uniford.org/badge-id", text: "Generate Badge ID" }
      ]
    },
    {
      step: 2,
      title: "Download & Submit Documents",
      description: "Download your generated documents and email them to our department",
      action: "Email to: info@uniford.org"
    },
    {
      step: 3,
      title: "Receive Confirmation",
      description: "Wait for official confirmation from our department team",
      note: "You'll receive acknowledgment within 2-3 business days"
    },
    {
      step: 4,
      title: "Begin Task Execution",
      description: "Start working on your assigned tasks and prepare your Linktree submission",
      requirement: "Follow the detailed task guide provided"
    },
    {
      step: 5,
      title: "Submit via Google Form",
      description: "Complete your Linktree submission through the official Google Form",
      deliverable: "Linktree with all required profile links"
    },
    {
      step: 6,
      title: "Receive Verification",
      description: "Get your verified badge and official certification upon successful completion",
      reward: "Official Uniford Scholar Badge & Certificate"
    }
  ];

  const profileRequirements = [
    { name: "Personal Portfolio Website", description: "Professional showcase of your skills and projects", required: true },
    { name: "Solvearn Profile", description: "Demonstrate your problem-solving capabilities", required: true },
    { name: "Y Combinator (YC)", description: "Connect with the startup ecosystem", required: true },
    { name: "LinkedIn", description: "Professional networking and career development", required: true },
    { name: "Wellfound", description: "Startup job opportunities and connections", required: true },
    { name: "Techstars", description: "Accelerator program network", required: true },
    { name: "Product Hunt", description: "Product discovery and innovation platform", required: true },
    { name: "Indie Hackers", description: "Independent maker community", required: true },
    { name: "On Deck", description: "Professional community and opportunities", required: true }
  ];

  const attachments = [
    { name: "Complete Task Guide PDF", type: "PDF", description: "Comprehensive guide for badge completion" },
    { name: "Portfolio Website Code & Guide", type: "ZIP", description: "Hi-tech international standard portfolio template" },
    { name: "Profile Creation Video Tutorial", type: "MP4", description: "Step-by-step video instructions" },
    { name: "Sample Linktree Examples", type: "PDF", description: "Best practice examples from successful applicants" },
    { name: "Submission Guidelines", type: "PDF", description: "Detailed submission requirements and formats" },
    { name: "FAQ & Troubleshooting Guide", type: "PDF", description: "Common questions and solutions" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Award className="mx-auto mb-6 w-16 h-16" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Badge Guide</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your comprehensive roadmap to earning the prestigious Uniford Scholar Badge and unlocking unlimited opportunities
          </p>
          <Badge className="bg-white/20 text-white text-lg px-6 py-2 hover:bg-white/30">
            International Recognition Program
          </Badge>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Roadmap Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              Application to Certification Roadmap
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow this step-by-step process to successfully complete your badge application and receive official certification
            </p>
          </div>

          <div className="grid gap-6">
            {roadmapSteps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden border-l-4 border-purple-500">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center font-bold text-purple-600 text-lg">
                      {step.step}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                      <CardDescription className="text-base">{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {step.links && (
                    <div className="flex flex-wrap gap-3 mb-4">
                      {step.links.map((link, linkIndex) => (
                        <Button key={linkIndex} variant="outline" className="gap-2" asChild>
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            {link.text}
                          </a>
                        </Button>
                      ))}
                    </div>
                  )}
                  {step.action && (
                    <Alert className="bg-blue-50 border-blue-200">
                      <Mail className="w-4 h-4" />
                      <AlertDescription className="font-medium">{step.action}</AlertDescription>
                    </Alert>
                  )}
                  {step.note && (
                    <p className="text-sm text-gray-600 mt-2">{step.note}</p>
                  )}
                  {step.requirement && (
                    <Badge variant="outline" className="mt-2">{step.requirement}</Badge>
                  )}
                  {step.deliverable && (
                    <Badge className="mt-2 bg-green-100 text-green-800">{step.deliverable}</Badge>
                  )}
                  {step.reward && (
                    <Badge className="mt-2 bg-yellow-100 text-yellow-800">{step.reward}</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Task Details Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              Badge Task Requirements
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Create and submit a comprehensive Linktree containing all required profile links. We provide you with professional portfolio website code, guides, and all necessary resources to ensure your success.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Linktree Submission Requirements</CardTitle>
              <CardDescription>
                Create profiles on the following platforms and include them in your Linktree submission
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {profileRequirements.map((profile, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <h3 className="font-semibold">{profile.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{profile.description}</p>
                    {profile.required && (
                      <Badge className="mt-2 bg-red-100 text-red-800 text-xs">Required</Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Alert className="bg-green-50 border-green-200">
            <Star className="w-4 h-4" />
            <AlertDescription>
              <strong>Special Bonus:</strong> We provide you with a hi-tech international standard portfolio website code along with comprehensive editing guides and video tutorials to ensure professional presentation.
            </AlertDescription>
          </Alert>
        </section>

        {/* Attachments Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Download className="w-8 h-8 text-indigo-600" />
              Resource Attachments
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download essential resources, guides, and examples to help you complete your badge requirements successfully
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attachments.map((attachment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-purple-600" />
                    <div>
                      <CardTitle className="text-lg">{attachment.name}</CardTitle>
                      <Badge variant="outline" className="mt-1">{attachment.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{attachment.description}</p>
                  <Button variant="outline" className="w-full gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-green-600" />
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about opportunities, programs, and career advancement through Uniford
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="opportunities" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                How can I access internships, become a Frontliner, and participate in opportunities like project expo, book writing, AI & automation internships, and certification platforms?
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-blue-800">The Challenge Students Face</h4>
                  <p className="text-gray-700 mb-4">
                    Many talented students experience brain drain and potential drain due to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>High application fees creating financial barriers</li>
                    <li>Limited access to quality platforms and opportunities</li>
                    <li>Lack of mentorship and professional guidance</li>
                    <li>Social and financial discrimination in selection processes</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-green-800">Our Solution: Uniford Scholar ID Card</h4>
                  <p className="text-gray-700 mb-4">
                    If you're eligible for the <strong>Uniford Scholar ID Card</strong>, our organization provides comprehensive support including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Internship Programs:</strong> Direct access to quality internships without fees</li>
                    <li><strong>UNSIP (Uniford Social Impact Program):</strong> Social impact projects and initiatives</li>
                    <li><strong>Frontliner Program:</strong> Leadership development and advanced opportunities</li>
                    <li><strong>Author Program:</strong> Book writing and publishing opportunities</li>
                    <li><strong>Platform Access:</strong> Unlimited access to educational and professional platforms</li>
                    <li><strong>Resource Support:</strong> All necessary tools and materials provided</li>
                    <li><strong>Certification Programs:</strong> Industry-recognized certifications</li>
                    <li><strong>Letters of Recommendation:</strong> Professional endorsements for career advancement</li>
                    <li><strong>Referral Networks:</strong> Access to our extensive professional network</li>
                    <li><strong>Featured Opportunities:</strong> Spotlight in our publications and events</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="caf" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                What is CAF and how does it help scholars get paid internships, direct interviews without technical filters, and other career opportunities?
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-purple-800">Introducing CAF (Common Application Framework)</h4>
                  <p className="text-gray-700 mb-4">
                    CAF is Uniford's revolutionary <strong>AI-based profile recommendation system</strong> designed to connect verified scholars with worldwide opportunities seamlessly.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 border rounded-lg">
                    <h5 className="font-semibold mb-3 text-gray-800">How CAF Works</h5>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• AI analyzes your verified scholar profile</li>
                      <li>• Matches your skills with global opportunities</li>
                      <li>• Provides personalized recommendations</li>
                      <li>• Facilitates direct connections with employers</li>
                      <li>• Bypasses traditional filtering processes</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 border rounded-lg">
                    <h5 className="font-semibold mb-3 text-gray-800">Opportunities Through CAF</h5>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Paid Internships:</strong> Direct placement without fees</li>
                      <li>• <strong>Job Opportunities:</strong> Global career positions</li>
                      <li>• <strong>Scholarships:</strong> Educational funding opportunities</li>
                      <li>• <strong>Grants:</strong> Research and project funding</li>
                      <li>• <strong>Invitations:</strong> Exclusive events and programs</li>
                      <li>• <strong>Featured Profiles:</strong> Industry recognition</li>
                    </ul>
                  </div>
                </div>

                <Alert className="bg-yellow-50 border-yellow-200">
                  <Star className="w-4 h-4" />
                  <AlertDescription>
                    <strong>Key Advantage:</strong> CAF eliminates traditional barriers like DSA tests, aptitude filters, and complex application processes. Our verified scholars get direct access to decision-makers through our referral and recommendation system.
                  </AlertDescription>
                </Alert>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of scholars who have transformed their careers through the Uniford Badge Program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Application Process
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Support Team
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default BadgeGuide;
