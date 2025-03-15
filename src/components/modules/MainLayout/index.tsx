import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className="flex-1 min-h-[calc(100vh-theme(height.navbar)-theme(height.footer))] px-4 py-6">
      {children}
    </main>
  );
};

export default Main;
