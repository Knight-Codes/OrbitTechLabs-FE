import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const TopDrawerContext = React.createContext<{
  setOpen: (open: boolean) => void;
} | null>(null);

export function TopDrawer({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  return (
    <TopDrawerContext.Provider value={{ setOpen }}>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        {children}
      </Dialog.Root>
    </TopDrawerContext.Provider>
  );
}

// Trigger Component
TopDrawer.Trigger = function Trigger({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Dialog.Trigger asChild>{children}</Dialog.Trigger>;
};

// Content Component
TopDrawer.Content = function Content({
  title = "Explore",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  const context = React.useContext(TopDrawerContext);
  if (!context)
    throw new Error("TopDrawer.Content must be used within a TopDrawer");

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
      <Dialog.Content
        className={cn(
          "fixed top-0 left-0 w-full bg-white shadow-md z-10",
          "transform -translate-y-full transition-transform duration-300",
          "data-[state=open]:translate-y-0"
        )}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={() => context.setOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4">{children}</div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
