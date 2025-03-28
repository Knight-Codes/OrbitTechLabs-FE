import {
  CircleGauge,
  MessageCircleQuestion,
  Code,
  PencilLine,
  FileCode,
  Link,
} from "lucide-react";

export const supportData = [
  {
    section: "Evaluate Your Current State",
    tiles: [
      {
        content:
          "Analyze your operational maturity to uncover strengths, weaknesses, and strategic growth opportunities.",
        icon: CircleGauge,
      },
      {
        content:
          "Assess your digital strategy with expert insights to enhance efficiency and unlock new possibilities.",
        icon: MessageCircleQuestion,
      },
    ],
  },
  {
    section: "Strategize and Plan",
    tiles: [
      {
        content:
          "Craft a comprehensive digital transformation roadmap for sustained success in a competitive landscape.",
        icon: Code,
      },
      {
        content:
          "Tap into our expertise to define clear objectives and actionable steps for impactful outcomes.",
        icon: PencilLine,
      },
    ],
  },
  {
    section: "Implement and Optimize",
    tiles: [
      {
        content:
          "Analyze your tech ecosystem to bridge gaps and accelerate the path to a high-performance digital infrastructure.",
        icon: FileCode,
      },
      {
        content:
          "Ensure seamless alignment between your tech team and digital strategy to drive business growth effectively.",
        icon: Link,
      },
    ],
  },
];
