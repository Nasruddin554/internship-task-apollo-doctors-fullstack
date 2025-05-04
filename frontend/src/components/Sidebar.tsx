import React from "react";

const Sidebar = ({ onFilterChange }) => {
  const handleFilterChange = (filterType, value) => {
    onFilterChange({ [filterType]: value });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h2 className="font-bold text-lg mb-4">Filters</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Availability</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="mr-2"
                onChange={(e) => handleFilterChange('availableNow', e.target.checked)}
              />
              Available Now
            </label>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Price Range</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="price" 
                className="mr-2"
                onChange={() => handleFilterChange('maxPrice', 500)}
              />
              Under ₹500
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="price" 
                className="mr-2"
                onChange={() => handleFilterChange('maxPrice', 1000)}
              />
              Under ₹1000
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="price" 
                className="mr-2"
                onChange={() => handleFilterChange('maxPrice', '')}
              />
              Any Price
            </label>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Experience</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="experience" 
                className="mr-2"
                onChange={() => handleFilterChange('minYears', 5)}
              />
              5+ years
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="experience" 
                className="mr-2"
                onChange={() => handleFilterChange('minYears', 10)}
              />
              10+ years
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="experience" 
                className="mr-2"
                onChange={() => handleFilterChange('minYears', '')}
              />
              Any experience
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;