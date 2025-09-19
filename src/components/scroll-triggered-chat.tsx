"use client";

import { motion } from "framer-motion";
import ChatPortfolio from "./chat-portfolio";

export default function ScrollTriggeredChat() {
  return (
    <div className="relative">
      {/* Add scroll indicators */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="space-y-2">
          <div className="w-2 h-8 bg-primary/20 rounded-full">
            <motion.div
              className="w-full bg-primary rounded-full"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-xs text-muted-foreground rotate-90 origin-center whitespace-nowrap">
            Scroll to chat
          </p>
        </div>
      </div>

      <ChatPortfolio />
    </div>
  );
}
