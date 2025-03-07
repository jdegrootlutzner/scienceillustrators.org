import React from "react";
import { Button } from "./ui/button";

export function Navigation() {
  return (
    <header className="border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="text-xl font-bold">Science Illustrators</a>
          <nav className="hidden md:flex gap-6">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
          </nav>
        </div>
        <div>
          <Button>Contact</Button>
        </div>
      </div>
    </header>
  );
}