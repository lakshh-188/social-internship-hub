
export interface Career {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  shortDescription: string;
  fullDescription: string;
  responsibilities: string[];
  milestones: {
    title: string;
    description: string;
  }[];
  grants: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  training: {
    description: string;
    noticePeriod: string;
  };
}

export const careers: Career[] = [
  {
    id: "representatives-leaders",
    title: "Representatives/Leaders",
    department: "Uni-Pitch",
    location: "Remote/Hybrid",
    type: "Full-time",
    shortDescription: "Lead the 'We Backed' initiative connecting students with unconditional opportunities through the Uni-Pitch portal and RPO Model.",
    fullDescription: "As a Representative/Leader, you'll spearhead our 'We Backed' initiative where Uniford Foundation provides unconditional support to students through opportunities, platforms & resources using our RPO Model. You'll act as a 'License Officer' playing a leadership role in collecting student queries about opportunities, resources, platforms, mentorship and support they're seeking, along with difficulties they face. Using the Uni-Pitch portal, you'll ensure every student gets unconditional opportunities without fees, filters, eligibility requirements, or social & financial discrimination, helping them escape the blaming trap of circumstances.",
    responsibilities: [
      "Collect student queries using your network, social media & collaboration with student-oriented clubs and societies",
      "Use the Uni-Pitch portal to gather student pitches and requirements for opportunities, mentorship and support",
      "Ensure students receive unconditional opportunities without any fees, filters, eligibility or discrimination",
      "Help students overcome difficulties and hurdles they face in accessing opportunities",
      "Create impact by collecting 'Letters of Appreciation' from students who received organizational help",
      "Build networks with student communities and educational institutions",
      "Maintain detailed records of student queries and successful resolutions",
      "Promote the RPO Model and 'We Backed' initiative among student communities"
    ],
    milestones: [
      {
        title: "Network Building (First Month)",
        description: "Establish connections with 20+ student clubs/societies, complete Uni-Pitch portal training"
      },
      {
        title: "Query Collection (1-3 Months)",
        description: "Collect 100+ student queries, establish streamlined support system"
      },
      {
        title: "Impact Creation (3-6 Months)",
        description: "Help 50+ students access opportunities, collect first 25 letters of appreciation"
      },
      {
        title: "Leadership Excellence (6-12 Months)",
        description: "Impact 500+ students, collect 100+ letters of appreciation, mentor new License Officers"
      }
    ],
    grants: [
      {
        title: "Impact-Based Grants",
        description: "₹1 Lakh grant for every 100 students successfully connected with opportunities"
      },
      {
        title: "Appreciation-Based Grants",
        description: "₹2-4 Lakh range for collecting 50+ verified letters of appreciation"
      },
      {
        title: "Network Expansion Grants",
        description: "Additional funding for establishing new student community partnerships"
      }
    ],
    benefits: [
      "Official License Officer certification",
      "Letter of Recommendation highlighting leadership impact",
      "Travel allowance for student community engagement",
      "Speaker opportunities at student conferences and events",
      "Fast-track promotion to senior leadership roles",
      "Access to exclusive student networking opportunities",
      "Featured profile on organization website",
      "Exclusive access to educational partnerships",
      "Performance-based bonus on successful student placements"
    ],
    training: {
      description: "Comprehensive training on Uni-Pitch portal usage, RPO Model implementation, student query handling, community engagement strategies, and impact measurement techniques.",
      noticePeriod: "18 days notice period with intensive training on License Officer responsibilities and student support methodologies."
    }
  },
  {
    id: "talent-hunter",
    title: "Talent Hunter",
    department: "Talent Hunt Alliance",
    location: "Remote/Hybrid",
    type: "Full-time",
    shortDescription: "Identify and support exceptional students through Campus to Corporate and Frontliner programs, helping them achieve Uniford Scholar and Stanburg Scholar status.",
    fullDescription: "As a Talent Hunter, you'll play a crucial role in identifying and nurturing exceptional students through our specialized programs like 'Campus to Corporate' and 'Frontliner'. Your mission is to select eligible students and provide them with Uniford Scholar ID cards, taking complete responsibility for their internships, resources, platforms and opportunities. Top performers receive the prestigious 'Stanburg' Scholar ID card for profile verification and worldwide opportunities. Your success directly impacts organizational standards as measured by scholar achievements, placements, grants and career opportunities.",
    responsibilities: [
      "Identify and select eligible students for Campus to Corporate and Frontliner programs",
      "Provide comprehensive support including internships, resources, platforms and opportunities to adopted scholars",
      "Facilitate Uniford Scholar ID card issuance and manage scholar responsibilities",
      "Evaluate scholar performance and recommend deserving candidates for Stanburg Scholar status",
      "Connect Stanburg scholars with worldwide opportunities through profile verification",
      "Track and document scholar achievements, placements and career progression",
      "Coordinate with educational institutions for annual seat launches",
      "Maintain relationships with corporate partners for placement opportunities"
    ],
    milestones: [
      {
        title: "Scholar Identification (First Month)",
        description: "Identify and onboard 20+ eligible students, complete program orientation"
      },
      {
        title: "Support System (1-3 Months)",
        description: "Establish support framework for 50+ scholars, facilitate first ID card issuances"
      },
      {
        title: "Achievement Tracking (3-6 Months)",
        description: "Track progress of 100+ scholars, recommend first Stanburg candidates"
      },
      {
        title: "Impact Excellence (6-12 Months)",
        description: "Support 200+ scholars, achieve 10+ placements, connect scholars with international opportunities"
      }
    ],
    grants: [
      {
        title: "Placement-Based Grants",
        description: "₹2 Lakh grant for every 10 scholars successfully placed through Talent Hunt Alliance"
      },
      {
        title: "Achievement Grants",
        description: "₹3-5 Lakh range for scholars achieving significant career milestones and opportunities"
      },
      {
        title: "Stanburg Excellence Grants",
        description: "Special grants for successful Stanburg scholar placements and international opportunities"
      }
    ],
    benefits: [
      "Talent Hunt Alliance certification and recognition",
      "Comprehensive Letter of Recommendation with placement statistics",
      "Travel allowance for campus visits and corporate meetings",
      "Networking access with top corporate leaders and educational institutions",
      "Priority consideration for senior Talent Hunt positions",
      "Exclusive access to international placement opportunities",
      "Featured success stories and scholar testimonials publication",
      "Access to premium corporate partnership programs",
      "Performance-based goodies, perks and bonus structure as per policy"
    ],
    training: {
      description: "Specialized training in talent identification, scholar support systems, Campus to Corporate program management, profile verification processes, and corporate relationship management.",
      noticePeriod: "18 days notice period with focused training on scholar management, placement strategies, and Talent Hunt Alliance methodologies."
    }
  },
  {
    id: "relation-manager",
    title: "Relation Manager",
    department: "UIEC & Social Welfare",
    location: "Remote/Hybrid",
    type: "Full-time",
    shortDescription: "Build and maintain relationships with institutions to promote UIEC standards and support social welfare initiatives.",
    fullDescription: "As a Relation Manager for UIEC (Uniford Institutional Empowerment Council) & Social Welfare, you'll play a crucial role in transforming institutes to international standards using grants & funds. Your responsibility will be to connect with institutes, raise awareness about our initiatives, and bring more institutions into our council. Additionally, you'll support our Social Welfare projects targeting special needs institutes and gifted students. Your impact will be measured by the 'letters of clearance' you collect, symbolizing successful education and awareness of institutes about our programs.",
    responsibilities: [
      "Develop and maintain relationships with educational institutions at various levels",
      "Create awareness about UIEC standards and benefits among institutional leadership",
      "Facilitate the process for institutions to join the UIEC council",
      "Document and track institution engagement and progress toward international standards",
      "Identify special needs institutes and gifted students for Social Welfare support",
      "Apply UIEC policy & terms to ensure proper implementation of standards",
      "Coordinate with grant committees to align institution needs with available funding",
      "Organize workshops and seminars to educate institutions about UIEC standards"
    ],
    milestones: [
      {
        title: "Relationship Building (First Month)",
        description: "Establish contacts with 20+ educational institutions, complete orientation to UIEC standards"
      },
      {
        title: "Awareness Creation (1-3 Months)",
        description: "Conduct 10+ awareness sessions, bring 5+ institutions into preliminary discussions"
      },
      {
        title: "Council Growth (3-6 Months)",
        description: "Successfully onboard 10+ institutions to UIEC council, collect first 20 letters of clearance"
      },
      {
        title: "Standard Implementation (6-12 Months)",
        description: "Help 5+ institutions implement international standards, identify 10+ special needs cases for support"
      }
    ],
    grants: [
      {
        title: "Institution Engagement Grants",
        description: "₹1 Lakh grant for every 20 institutions successfully educated about UIEC standards"
      },
      {
        title: "Council Growth Grants",
        description: "₹2-4 Lakh range for bringing 10+ quality institutions into the UIEC council"
      },
      {
        title: "Social Welfare Impact Grants",
        description: "Additional funding for successful implementation of support for special needs cases"
      }
    ],
    benefits: [
      "Professional certification in Institutional Relations Management",
      "Detailed Letter of Recommendation highlighting specific achievements",
      "Comprehensive travel allowance for institution visits and events",
      "Speaker opportunities at educational summits and conferences",
      "Fast-track path to senior positions within UIEC leadership",
      "Networking opportunities with educational leaders and policymakers",
      "Featured profile on UIEC website and publications",
      "Access to exclusive educational tenders and partnership opportunities",
      "Performance-based bonus structure on grants and project funding"
    ],
    training: {
      description: "Specialized training in institutional relationship management, UIEC standards and policies, grant proposal development, special needs assessment, and communication strategies for educational leadership engagement.",
      noticePeriod: "18 days notice period with focused training on UIEC policies, institutional assessment methods, and relationship building strategies."
    }
  }
];
