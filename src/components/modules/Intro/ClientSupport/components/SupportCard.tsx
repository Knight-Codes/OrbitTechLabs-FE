import React from "react";

export const SupportCard = ({
  content,
  icon: Icon,
}: {
  content: string;
  icon: React.ElementType;
}) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
      <Icon className="w-6 h-6 text-indigo-600" />
    </div>
    <div>
      <p className="text-slate-500">{content}</p>
    </div>
  </div>
);
