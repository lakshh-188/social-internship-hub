
import { Button } from "@/components/ui/button";
import { MessageCircle, Users } from "lucide-react";

export const FloatingActions = () => {
  return (
    <>
      {/* WhatsApp Help Desk - Right Side */}
      <div className="fixed right-6 bottom-6 z-50">
        <Button
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
          onClick={() => window.open('https://api.whatsapp.com/send/?phone=7347099610&text=Hello%21+I+have+a+question.&type=phone_number&app_absent=0', '_blank')}
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span className="ml-2 hidden md:inline">Help Desk</span>
        </Button>
      </div>

      {/* WhatsApp Community - Left Side */}
      <div className="fixed left-6 bottom-6 z-50">
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
          onClick={() => window.open('https://chat.whatsapp.com/ER5FIvvJMx084uHakFbWvv', '_blank')}
        >
          <Users className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span className="ml-2 hidden md:inline">Join Community</span>
        </Button>
      </div>
    </>
  );
};
