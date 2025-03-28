import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const getInitials = (name: string) => {
  const names = name.split(" ");
  const initials = names.map((name) => name.charAt(0).toUpperCase()).join("");
  return initials;
};

export const TestimonialCard = ({
  name,

  content,
  url,
}: {
  name: string;

  content: string;
  url: { label: string; href: string };
}) => {
  return (
    <Card className="w-full max-w-xl">
      <CardContent className="pt-6">
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarFallback>{getInitials(name)}</AvatarFallback>
            </Avatar>

            <div>
              <h3 className="font-semibold">{name}</h3>
              <a
                href={url.href}
                className="text-sm text-blue-500 hover:underline inline-block"
                target="_blank"
              >
                @{url.label}
              </a>
            </div>
          </div>

          <div className="text-gray-700">
            <p className="italic">"&nbsp;{content}&nbsp;"</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
