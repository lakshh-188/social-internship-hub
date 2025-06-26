import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, Download, Mail, ExternalLink, FileText, Users, Award, Star, Globe, BookOpen, Video, FileCode, Code, Sparkles, Heart, Rocket, Gift } from "lucide-react";
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
      description: "Start working on your assigned tasks and prepare your portfolio submission",
      requirement: "Follow the detailed task guide provided"
    },
    {
      step: 5,
      title: "Submit Portfolio Website",
      description: "Complete your portfolio website submission through the official Google Form",
      deliverable: "Hi-tech international standard portfolio website"
    },
    {
      step: 6,
      title: "Receive Verification",
      description: "Get your verified badge and official certification upon successful completion",
      reward: "Official Uniford Scholar Badge & Certificate"
    }
  ];

  const attachments = [
    { 
      name: "Portfolio Website Code", 
      type: "GitHub Repository", 
      description: "Complete hi-tech international standard portfolio website source code",
      url: "https://github.com/Uniford-187/Portfolio.git",
      icon: <Code className="w-6 h-6 text-blue-600" />
    },
    { 
      name: "Portfolio Repository", 
      type: "GitHub", 
      description: "Access the complete portfolio project repository",
      url: "https://github.com/Uniford-187/Portfolio",
      icon: <FileCode className="w-6 h-6 text-gray-600" />
    },
    { 
      name: "Portfolio Editing Guide", 
      type: "Web Guide", 
      description: "Interactive mentorship guide for portfolio customization",
      url: "https://portfolio.uniford.org/mentor-me",
      icon: <BookOpen className="w-6 h-6 text-green-600" />
    },
    { 
      name: "Portfolio Code Guide", 
      type: "Technical Guide", 
      description: "Technical documentation and coding guidelines",
      url: "https://portfolio.uniford.org/tech-mentor",
      icon: <FileText className="w-6 h-6 text-purple-600" />
    },
    { 
      name: "Submission Form", 
      type: "Google Form", 
      description: "Official submission form for your completed portfolio",
      url: "https://forms.gle/CQakDqcsjZvoev3L9",
      icon: <ExternalLink className="w-6 h-6 text-orange-600" />
    },
    { 
      name: "Portfolio Guide Video", 
      type: "YouTube Tutorial", 
      description: "Step-by-step video tutorial for portfolio creation",
      url: "https://youtu.be/ALJay23JD90?si=axq0Wkoh84eXZnxH",
      icon: <Video className="w-6 h-6 text-red-600" />
    },
    { 
      name: "Portfolio Guide Blog", 
      type: "Medium Article", 
      description: "Comprehensive written guide for portfolio editing",
      url: "https://medium.com/@RisingUnicorns/guide-to-edit-portfolio-1cba1296ad3e",
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />
    }
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

        {/* Task Guide Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-purple-600" />
              Task Guide
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Your step-by-step guide to creating and submitting your professional portfolio website
            </p>
          </div>

          <Card className="mb-8 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="text-4xl">🎨</div>
                <CardTitle className="text-2xl text-purple-800">
                  Uniford Portfolio Website — Easy Task Guide
                </CardTitle>
              </div>
              <div className="flex items-center justify-center gap-2 text-lg text-purple-700 mb-4">
                <div className="text-2xl">👋</div>
                <span className="font-semibold">Hello Champion! Ready to show the world your talent?</span>
              </div>
              <CardDescription className="text-base text-purple-600 max-w-2xl mx-auto">
                We have already given you a cool, international-level Portfolio Website. You just have to:
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Quick Overview */}
              <div className="bg-white p-6 rounded-xl border border-purple-200">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl">✔️</div>
                    <p className="font-semibold text-gray-800">Add your name & details</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl">✔️</div>
                    <p className="font-semibold text-gray-800">Edit your info (even if you are still preparing — that's totally okay!)</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl">✔️</div>
                    <p className="font-semibold text-gray-800">Submit your website link</p>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <div className="flex items-center justify-center gap-2 text-xl font-bold text-purple-600">
                    <span>Let's go!</span>
                    <Rocket className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* What You Have to Do */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold mb-4 text-green-800 flex items-center gap-3">
                  <div className="text-2xl">🟢</div>
                  What You Have to Do:
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span className="text-gray-700">Open the website files we gave you</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span className="text-gray-700">Find the places where your name, picture, and info are written</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span className="text-gray-700">Edit your personal details like:</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-100">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="text-lg">✔️</div>
                        <span className="font-semibold">Your Name</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="text-lg">✔️</div>
                        <div>
                          <span className="font-semibold">About You</span>
                          <p className="text-gray-600 text-xs">Example: "I am a student passionate about AI & learning new things."</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="text-lg">✔️</div>
                        <div>
                          <span className="font-semibold">Skills</span>
                          <p className="text-gray-600 text-xs">Example: "Web Development, Problem Solving"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guidance for incomplete sections */}
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h4 className="text-lg font-bold mb-4 text-blue-800 flex items-center gap-2">
                  <div className="text-xl">📝</div>
                  Don't Have Something Yet? No Problem!
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <h5 className="font-semibold text-blue-700 mb-2">Projects/Internships</h5>
                    <p className="text-sm text-gray-700 italic">"Currently preparing, building my skills." or "We are in the planning phase."</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <h5 className="font-semibold text-blue-700 mb-2">Certificates</h5>
                    <p className="text-sm text-gray-700 italic">"Learning in progress, excited to earn certificates soon."</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100 md:col-span-2">
                    <h5 className="font-semibold text-blue-700 mb-2">Startup/Initiative</h5>
                    <p className="text-sm text-gray-700 italic">"Exploring ideas, in early planning stage."</p>
                  </div>
                </div>
              </div>

              {/* How to Edit */}
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold mb-4 text-orange-800 flex items-center gap-3">
                  <div className="text-2xl">🛠️</div>
                  How to Edit It (Easy Steps):
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-orange-100">
                      <div className="text-xl">💻</div>
                      <span className="text-gray-700">Open the files on your laptop or phone</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-orange-100">
                      <div className="text-xl">✏️</div>
                      <span className="text-gray-700">Find the sections like About Me, Projects, Certificates</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-orange-100">
                      <div className="text-xl">📝</div>
                      <span className="text-gray-700">Type your real info or "Working/Preparing" wherever you don't have something yet</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-orange-100">
                      <div className="text-xl">🌐</div>
                      <span className="text-gray-700">Save the changes</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-orange-100">
                      <div className="text-xl">📤</div>
                      <span className="text-gray-700">Upload your website to Vercel, Netlify, or GitHub Pages</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-orange-100">
                      <div className="text-xl">🔗</div>
                      <span className="text-gray-700">Copy your website link and Submit it to us</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Message */}
              <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200 border-2">
                <Star className="w-5 h-5 text-pink-600" />
                <AlertDescription className="text-base">
                  <div className="space-y-2">
                    <h4 className="font-bold text-pink-800 flex items-center gap-2">
                      <div className="text-xl">🎯</div>
                      Super Important!
                    </h4>
                    <div className="space-y-1 text-pink-700">
                      <div className="flex items-start gap-2">
                        <div className="text-lg">🌟</div>
                        <span>It's totally fine if you are still learning or building your profile.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="text-lg">🌟</div>
                        <span>Be honest, show you are working towards it — that's what real achievers do!</span>
                      </div>
                    </div>
                  </div>
                </AlertDescription>
              </Alert>

              {/* What You Get */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
                <h3 className="text-xl font-bold mb-4 text-indigo-800 flex items-center gap-3">
                  <div className="text-2xl">📦</div>
                  What You Get From Us:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-indigo-100">
                    <Gift className="w-6 h-6 text-indigo-600" />
                    <span className="font-medium text-gray-800">A ready-made, modern Portfolio Website</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-indigo-100">
                    <FileText className="w-6 h-6 text-indigo-600" />
                    <span className="font-medium text-gray-800">Step-by-Step Guide PDF</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-indigo-100">
                    <Video className="w-6 h-6 text-indigo-600" />
                    <span className="font-medium text-gray-800">Video to show how to edit</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-indigo-100">
                    <Globe className="w-6 h-6 text-indigo-600" />
                    <span className="font-medium text-gray-800">Example website for reference</span>
                  </div>
                </div>
              </div>

              {/* Sample Website Button */}
              <div className="text-center bg-white p-8 rounded-xl border-2 border-green-200">
                <Button size="lg" className="gap-3 bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4" asChild>
                  <a href="https://portfolio.uniford.org/" target="_blank" rel="noopener noreferrer">
                    <Globe className="w-6 h-6" />
                    🔗 See Sample Portfolio Website
                  </a>
                </Button>
                <p className="text-sm text-gray-600 mt-3">Check out the professional standard you'll achieve!</p>
              </div>

              {/* Final Call to Action */}
              <div className="text-center bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
                <div className="flex items-center justify-center gap-3 text-2xl font-bold text-orange-800 mb-2">
                  <div className="text-3xl">🎉</div>
                  Once Done — Submit & Earn Your Uniford Badge!
                </div>
                <p className="text-orange-700">You're just one step away from joining our exclusive community!</p>
              </div>

              <Alert className="bg-green-50 border-green-200">
                <Heart className="w-4 h-4 text-green-600" />
                <AlertDescription className="text-base">
                  <strong>Special Advantage:</strong> For portfolio website we give you a coded hi-tech international standard portfolio website code + Guide to edit and all important Guide notes along with this you can find submission form, guide pdf, video, sample example etc in attachment section.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Attachments Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Download className="w-8 h-8 text-indigo-600" />
              Resources Attachments
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access all essential resources, code, guides, and tutorials to successfully create your portfolio website
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attachments.map((attachment, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {attachment.icon}
                    <div>
                      <CardTitle className="text-lg">{attachment.name}</CardTitle>
                      <Badge variant="outline" className="mt-1">{attachment.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{attachment.description}</p>
                  <Button variant="outline" className="w-full gap-2" asChild>
                    <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Access Resource
                    </a>
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
              Get detailed answers to important questions about opportunities, programs, and career advancement through Uniford
            </p>
          </div>

          <div className="space-y-6">
            <Card className="overflow-hidden border-2 border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-200">
                <CardTitle className="text-xl text-green-800 flex items-center gap-3">
                  <Award className="w-6 h-6" />
                  How can I access internships, become a Frontliner, and participate in opportunities?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <h4 className="font-bold mb-3 text-red-800 text-lg flex items-center gap-2">
                      <ExternalLink className="w-5 h-5" />
                      The Challenge Students Face
                    </h4>
                    <p className="text-gray-700 mb-4 text-base leading-relaxed">
                      Many talented students experience brain drain and potential drain due to systemic barriers that prevent them from accessing quality opportunities.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-red-100">
                        <h5 className="font-semibold text-red-700 mb-2">Financial Barriers</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• High application fees</li>
                          <li>• Limited financial resources</li>
                          <li>• Cost of premium platforms</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-red-100">
                        <h5 className="font-semibold text-red-700 mb-2">Access Issues</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Limited quality platforms</li>
                          <li>• Lack of mentorship</li>
                          <li>• Social discrimination</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h4 className="font-bold mb-4 text-green-800 text-lg flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Our Solution: Uniford Scholar ID Card
                    </h4>
                    <p className="text-gray-700 mb-4 text-base leading-relaxed">
                      If you're eligible for the <strong className="text-green-800">Uniford Scholar ID Card</strong>, our organization provides comprehensive support without any fees or discrimination.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="bg-white p-4 rounded-lg border border-green-100">
                          <h5 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            Career Development
                          </h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Internship Programs:</strong> Direct access without fees</li>
                            <li>• <strong>Frontliner Program:</strong> Leadership development</li>
                            <li>• <strong>Letters of Recommendation:</strong> Professional endorsements</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-green-100">
                          <h5 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            Learning & Growth
                          </h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>UNSIP:</strong> Social impact projects</li>
                            <li>• <strong>Author Program:</strong> Book writing opportunities</li>
                            <li>• <strong>Certification Programs:</strong> Industry recognition</li>
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white p-4 rounded-lg border border-green-100">
                          <h5 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            Platform Access
                          </h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Platform Access:</strong> Educational & professional tools</li>
                            <li>• <strong>Resource Support:</strong> All necessary materials</li>
                            <li>• <strong>Referral Networks:</strong> Professional connections</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-green-100">
                          <h5 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            Recognition
                          </h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Featured Opportunities:</strong> Spotlight in publications</li>
                            <li>• <strong>Event Participation:</strong> Exclusive programs</li>
                            <li>• <strong>Achievement Support:</strong> Comprehensive backing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-purple-200">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-200">
                <CardTitle className="text-xl text-purple-800 flex items-center gap-3">
                  <Star className="w-6 h-6" />
                  What is CAF and how does it help with career opportunities?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                    <h4 className="font-bold mb-3 text-purple-800 text-lg flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Introducing CAF (Common Application Framework)
                    </h4>
                    <p className="text-gray-700 mb-4 text-base leading-relaxed">
                      CAF is Uniford's revolutionary <strong className="text-purple-800">AI-based profile recommendation system</strong> designed to connect verified scholars with worldwide opportunities seamlessly, eliminating traditional barriers and filters.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 border-2 border-blue-200 rounded-xl">
                      <h5 className="font-bold mb-4 text-blue-800 text-lg flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        How CAF Works
                      </h5>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0 mt-0.5">1</div>
                          <p className="text-gray-700 text-sm">AI analyzes your verified scholar profile comprehensively</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0 mt-0.5">2</div>
                          <p className="text-gray-700 text-sm">Matches your skills with global opportunities in real-time</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0 mt-0.5">3</div>
                          <p className="text-gray-700 text-sm">Provides personalized, targeted recommendations</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0 mt-0.5">4</div>
                          <p className="text-gray-700 text-sm">Facilitates direct connections with decision-makers</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 border-2 border-green-200 rounded-xl">
                      <h5 className="font-bold mb-4 text-green-800 text-lg flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        Opportunities Through CAF
                      </h5>
                      <div className="space-y-3">
                        <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                          <h6 className="font-semibold text-green-700 text-sm mb-1">Career Opportunities</h6>
                          <p className="text-xs text-gray-600">Paid internships, job placements, direct interviews</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                          <h6 className="font-semibold text-green-700 text-sm mb-1">Financial Support</h6>
                          <p className="text-xs text-gray-600">Scholarships, grants, research funding</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                          <h6 className="font-semibold text-green-700 text-sm mb-1">Professional Growth</h6>
                          <p className="text-xs text-gray-600">Exclusive invitations, featured profiles, industry recognition</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Alert className="bg-yellow-50 border-yellow-300 border-2">
                    <Star className="w-5 h-5 text-yellow-600" />
                    <AlertDescription className="text-base">
                      <strong className="text-yellow-800">Key Advantage:</strong> CAF eliminates traditional barriers like DSA tests, aptitude filters, and complex application processes. Our verified scholars get direct access to decision-makers through our referral and recommendation system, bypassing conventional screening methods entirely.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </div>
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
