
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Social Internship Program</h3>
            <p className="text-gray-300 mb-4">
              Empowering students to make a meaningful difference in society while building valuable skills and earning recognition.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                onClick={() => window.open('https://www.instagram.com/uniford_scholar?igsh=MWU0aWRwYmhwZGJsMg==', '_blank')}
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                onClick={() => window.open('https://www.linkedin.com/company/unifordfoundation/?viewAsMember=true', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#tasks" className="hover:text-white transition-colors">Available Tasks</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors">Resources</a></li>
              <li><a href="#submission" className="hover:text-white transition-colors">Submission Process</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📱 24/7 WhatsApp Help Desk</li>
              <li>👥 Community Support Group</li>
              <li>📧 Email: support@socialinternship.org</li>
              <li>🌐 Visit: uniford.org</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for social impact
            <span className="mx-2">•</span>
            © 2024 Social Internship Program. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
