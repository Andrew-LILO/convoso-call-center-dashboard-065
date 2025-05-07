import React from "react";

const TopNav: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <div className="flex items-center">
        {/* Placeholder for Logo/Dashboard Title */}
        <h1 className="text-lg font-semibold">Convoso Dashboard</h1>
      </div>
      <div className="ml-auto flex items-center gap-2">
        {/* Placeholder for Global Filters Area */}
        <div className="text-sm text-muted-foreground">
          [Global Filters Placeholder]
        </div>
        {/* Placeholder for Theme Toggle or User Menu */}
      </div>
    </header>
  );
};

export default TopNav;

