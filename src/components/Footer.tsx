import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="flex items-center justify-center gap-2 text-gray-400">
          Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Your Name
        </p>
        <p className="text-gray-500 mt-2">© 2025 All rights reserved.</p>
      </div>
    </footer>
  );
}
