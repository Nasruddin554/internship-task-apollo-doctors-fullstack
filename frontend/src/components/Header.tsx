
import React from "react";
import { Button } from "../components/ui/button";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Header */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <div className="text-orange-500 font-bold text-2xl mr-8">
              Apollo<span className="text-blue-500">24|7</span>
            </div>
            <div className="hidden md:flex items-center">
              <div className="text-gray-600 text-sm mr-1">Select Location</div>
              <div className="flex items-center">
                <span className="font-medium">Select Address</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative w-full max-w-md mx-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search Doctors, Specialities, Conditions etc."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
            Login
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex items-center overflow-x-auto scrollbar-hide py-3">
          <div className="flex space-x-6 text-sm font-medium">
            <NavItem href="#" title="Buy Medicines" />
            <NavItem href="#" title="Find Doctors" active />
            <NavItem href="#" title="Lab Tests" />
            <NavItem href="#" title="Circle Membership" />
            <NavItem href="#" title="Health Records" />
            <NavItem href="#" title="Diabetes Reversal" />
            <NavItem href="#" title="Buy Insurance" badge="New" />
          </div>
        </nav>
      </div>
    </header>
  );
};

interface NavItemProps {
  href: string;
  title: string;
  active?: boolean;
  badge?: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, title, active, badge }) => {
  return (
    <a
      href={href}
      className={`relative whitespace-nowrap pb-2 border-b-2 ${
        active ? "border-blue-500 text-blue-500" : "border-transparent text-gray-600 hover:text-blue-500"
      }`}
    >
      {title}
      {badge && (
        <span className="absolute -top-1 -right-6 bg-green-500 text-white px-1 text-xs rounded">
          {badge}
        </span>
      )}
    </a>
  );
};

export default Header;
