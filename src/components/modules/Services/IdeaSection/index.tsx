import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Rocket,
  ArrowRight,
  Target,
  Code,
  Puzzle,
} from "lucide-react";
import Link from "next/link";

export const IdeaSection = () => {
  return (
    <Card className="w-full max-w-6xl mt-12 shadow-none border-0">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-shrink-0 grid grid-cols-2 gap-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <Target className="w-6 h-6 text-blue-500" />
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <Code className="w-6 h-6 text-purple-500" />
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <Puzzle className="w-6 h-6 text-green-500" />
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <Sparkles className="w-6 h-6 text-orange-500" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
              Got a vision to bring to life?
              {/* <Rocket className="w-6 h-6 text-blue-500 inline animate-bounce" /> */}
            </h2>

            <p className="text-gray-600 text-lg">
              From concept to launch, we bring your ideas to life. Our expertise
              spans prototyping, MVP development, and full-scale product
              solutions for startups and established businesses alike.
            </p>

            <Link href="/contact">
              <button className="group flex items-center gap-2 text-primary-600 transition-colors mt-4">
                <span className="font-semibold tracking-wider">
                  Start the conversation
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
