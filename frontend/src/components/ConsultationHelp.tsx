
import React from "react";
import { Button } from "../components/ui/button";

const ConsultationHelp = () => {
  return (
    <div className="bg-blue-900 text-white p-6 rounded-lg">
      <div>
        <div className="mb-4">
          <img 
            src="/lovable-uploads/ea783261-3b48-4808-965e-997b7c8eb12f.png" 
            alt="Doctors" 
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
        </div>
        <h3 className="font-medium text-lg mb-2">
          Need help consult the right doctor?
        </h3>
        <p className="text-white/80 mb-4 text-sm">
          Call +91-8040245807 to book instantly
        </p>
        <Button variant="secondary" className="w-full">
          Call Now
        </Button>
      </div>
    </div>
  );
};

export default ConsultationHelp;
