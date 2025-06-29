
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OptionalTasks from "./pages/OptionalTasks";
import Careers from "./pages/Careers";
import BadgeGuide from "./pages/BadgeGuide";
import Tasks from "./pages/Tasks";
import TechSupportTask from "./pages/TechSupportTask";
import CommunityOutreachTask from "./pages/CommunityOutreachTask";
import DigitalMarketingTask from "./pages/DigitalMarketingTask";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/optional-tasks" element={<OptionalTasks />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/badge-guide" element={<BadgeGuide />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tech-support-task" element={<TechSupportTask />} />
          <Route path="/community-outreach-task" element={<CommunityOutreachTask />} />
          <Route path="/digital-marketing-task" element={<DigitalMarketingTask />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
