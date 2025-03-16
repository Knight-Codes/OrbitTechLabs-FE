import {
  Rocket,
  Layout,
  ShoppingCart,
  NotebookPen,
  Brush,
  Construction,
  Bot,
  Sparkles,
  BriefcaseBusiness,
  Zap,
  Unplug,
  Blocks,
  Shapes,
  KeyRound,
  ArrowUpRight,
} from "lucide-react";
import WebDevelopmentAnimationData from "@/assets/animations/web-development.json";
import AppDevelopmentAnimation from "@/assets/animations/app-development.json";
import APIDevelopmentAnimation from "@/assets/animations/api-development.json";

export const servicesData: {
  title: string;
  description: string;
  animation: any;
  services: { icon: JSX.Element; text: string }[];
}[] = [
  {
    title: "App Development",
    description: `🤝 Let's build your next-level mobile app and Power up your mobile presence! We engineer high-performance Android, iOS, and cross-platform apps with a focus on optimized code, exceptional UX, and streamlined maintenance.  Enjoy seamless functionality across all devices and lightning-fast updates.  💻`,
    animation: AppDevelopmentAnimation,
    services: [
      {
        icon: <Bot className="w-5 h-5 text-blue-500" />,
        text: "Native App Development (Koltin)",
      },
      {
        icon: <span>⚛️</span>,
        text: "Cross-Platform (React Native/Flutter)",
      },
      {
        icon: <Sparkles className="w-5 h-5 text-teal-500" />,
        text: "Mobile App UI/UX Design",
      },
      {
        icon: <BriefcaseBusiness className="w-5 h-5 text-red-500" />,
        text: "Enterprise Mobile Solutions",
      },
      {
        icon: <Zap className="w-5 h-5 text-yellow-500" />,
        text: "App Store Submission & Optimization",
      },
    ],
  },
  {
    title: "Web Development",
    description: `🛠️ Building the digital backbone of your business is our specialty.  We combine front-end, back-end, and architectural prowess with cutting-edge tech and best practices to deliver comprehensive, secure, and highly reliable applications. 🌐`,
    animation: WebDevelopmentAnimationData,
    services: [
      {
        icon: <Rocket className="w-5 h-5 text-blue-500" />,
        text: "Single-Page Applications (SPAs)",
      },
      {
        icon: <Layout className="w-5 h-5 text-green-500" />,
        text: "Progressive Web Apps (PWAs)",
      },
      {
        icon: <ShoppingCart className="w-5 h-5 text-orange-500" />,
        text: "E-commerce Solutions",
      },
      {
        icon: <NotebookPen className="w-5 h-5 text-red-500" />,
        text: "Content Management Systems",
      },
      {
        icon: <Brush className="w-5 h-5 text-teal-500" />,
        text: "Custom Web Applications",
      },
      {
        icon: <Construction className="w-5 h-5 text-indigo-500" />,
        text: "Maintenance & Support",
      },
      {
        icon: <ArrowUpRight className="w-5 h-5 text-yellow-500" />,
        text: "Upgrade & Migration",
      },
    ],
  },
  {
    title: "API Development",
    description: `🚀 Powering your business with high-performance backend solutions. We build robust, scalable, and secure APIs and services using the latest technologies and industry best practices.  Expect maximum accuracy and unwavering reliability. 🛜`,
    animation: APIDevelopmentAnimation,
    services: [
      {
        icon: <Unplug className="w-5 h-5 text-blue-500" />,
        text: "RESTful APIs",
      },
      {
        icon: <Blocks className="w-5 h-5 text-green-500" />,
        text: "API Integration Services",
      },
      {
        icon: <Shapes className="w-5 h-5 text-purple-500" />,
        text: "Microservices Architecture",
      },
      {
        icon: <KeyRound className="w-5 h-5 text-orange-500" />,
        text: "API Security & Authentication",
      },
      {
        icon: <Zap className="w-5 h-5 text-yellow-500" />,
        text: "Real-time API Development (WebSockets)",
      },
    ],
  },
];
