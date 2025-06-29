
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Target, CheckCircle, BookOpen, Award, Compass, User, Globe, Lightbulb } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Tasks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <NavBar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Compass className="h-8 w-8 text-purple-600" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Uniford Volunteer Task Guide
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empower students to build their digital identity and unlock their potential through mentorship
            </p>
          </div>

          {/* Task Overview Card */}
          <Card className="mb-12 border-2 border-purple-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Award className="h-6 w-6" />
                Task Title: "Submit Portfolio Website & Get Uniford Verified Badge"
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-purple-600" />
                    About the Portfolio Website
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Uniford, in collaboration with UIRAD, provides each student with a professionally designed personal portfolio website. This is not a simple webpage — it is a psychologically-structured digital identity that helps students:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      Define their life goals, vision, and mission
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      Showcase their skills, projects, achievements, and career roadmap
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      Launch their blogs, books, ideas, and digital products
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      Present a powerful student brand to colleges, employers, or incubators
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-purple-600" />
                    Objective
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Help students reflect, plan, and take action using a custom-built portfolio.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Volunteer Responsibilities */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <User className="h-6 w-6 text-purple-600" />
                  Volunteer Responsibility
                </CardTitle>
                <CardDescription>
                  Volunteers will act as mentors and facilitators in guiding students through this process.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">🎯 Awareness & Motivation</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Explain the importance of a personal portfolio in career, internships, and opportunities</li>
                      <li>• Share real-life use-cases: placements, startup funding, networking, etc.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">📋 Step-by-Step Guidance</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Apply for their Uniford Portfolio Website</li>
                      <li>• Access the editing guides</li>
                      <li>• Add correct data about goals, education, skills, and achievements</li>
                      <li>• Integrate projects, blogs, books, or any other initiative</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">🆔 Scholar ID Promotion</h4>
                    <p className="text-sm text-gray-700 mb-2">Many students fear they have "nothing to showcase."</p>
                    <p className="text-sm text-gray-700">Introduce them to the Uniford Scholar ID, which unlocks social internships, events, competitions, pitch platforms, AI tools, premium courses, and digital assets.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Submission & Audit Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600 mb-2">📝 Maintain a Record</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• List of students you've guided</li>
                      <li>• Their Scholar ID numbers and portfolio URLs</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">📤 Submit to Department</h4>
                    <p className="text-sm text-gray-700">Share this list with your assigned department coordinator</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-600 mb-2">🏆 After Badge Issuance</h4>
                    <p className="text-sm text-gray-700">Once students receive the Uniford Verified Badge and Portfolio Certificate, the internal audit will mark your work as complete.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Section */}
          <Card className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Award className="h-6 w-6 text-amber-600" />
                Perks & Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Badge variant="secondary" className="p-3 text-center justify-center">
                  Volunteer Certificate
                </Badge>
                <Badge variant="secondary" className="p-3 text-center justify-center">
                  Exclusive Internship Roles
                </Badge>
                <Badge variant="secondary" className="p-3 text-center justify-center">
                  Premium Resource Access
                </Badge>
                <Badge variant="secondary" className="p-3 text-center justify-center">
                  Recommendation Letter
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Support Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  Department Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Every volunteer is assigned to a department team who will:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    Provide templates, demo portfolios, and guides
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    Help with student-specific queries
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    Assist in final report submission
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                  Resource Hub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="font-medium text-purple-700">📄 Editing Guide (PDF + Video)</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="font-medium text-blue-700">❓ FAQ Page</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="font-medium text-green-700">📋 Portfolio Format Structure by UIRAD</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sample Script */}
          <Card className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-blue-600" />
                Sample Script to Guide Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-700 text-lg leading-relaxed">
                "This portfolio is your personal brand. It shows who you are, what you're building, and where you're heading. It's not about how much you have — it's about how clearly you can dream and start. Uniford gives you a Scholar ID to access all the tools, internships, and experiences to fill this portfolio. You're not alone — we're here to guide you."
              </blockquote>
            </CardContent>
          </Card>

          {/* Final Reminders */}
          <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-600">⚠️ Final Reminder for Volunteers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">💝</span>
                  </div>
                  <h4 className="font-semibold text-red-600 mb-2">Be Empathetic</h4>
                  <p className="text-sm text-gray-700">Many students are afraid because they've never had opportunities.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <h4 className="font-semibold text-red-600 mb-2">Be Resourceful</h4>
                  <p className="text-sm text-gray-700">Uniford is giving them the platform. Help them use it fully.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h4 className="font-semibold text-red-600 mb-2">Be Consistent</h4>
                  <p className="text-sm text-gray-700">Track and follow up with the students you mentor.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg">
              Start Your Volunteer Journey
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tasks;
