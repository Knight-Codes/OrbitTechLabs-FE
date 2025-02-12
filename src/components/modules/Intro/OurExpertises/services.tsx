import { Smartphone, Monitor, Server } from "lucide-react";

export const services = [
  {
    label: "App Development",
    icon: <Smartphone className="w-16 h-16" />,
    description:
      "Native and cross-platform mobile applications built for performance",
    features: ["iOS", "Android", "React Native", "Flutter"],
  },
  {
    label: "UI Development",
    icon: <Monitor className="w-16 h-16" />,
    description:
      "Modern, responsive web interfaces with cutting-edge technologies",
    features: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    label: "API Development",
    icon: <Server className="w-16 h-16" />,
    description:
      "Robust, dependable and secured backend services and APIs.",
    features: ["REST", "GraphQL", "Node.js", "Python"],
  },
];
