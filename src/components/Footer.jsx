import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative flex items-center justify-center py-10 px-4 mt-12 border-t border-border bg-card">
      
      <p className="text-sm text-center text-muted-foreground px-12">
        &copy; {new Date().getFullYear()} GaniGustio. All rights reserved.
      </p>

      <a
        href="#hero"
        className="absolute right-4 md:right-8 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
      
    </footer>
  );
};