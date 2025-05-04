import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DoctorCard from "../components/DoctorCard";
import ConsultationHelp from "../components/ConsultationHelp";
import Container from "../components/layout/Container";
import { getDoctors } from "../services/doctorService";
import * as Select from '@radix-ui/react-select';
import { Button } from "../components/ui/button";

const Index = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ sort: "price_asc" });
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 1
  });

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const response = await getDoctors(filters);
        console.log("API Response:", response); // Debug log
        
        if (response && response.data) {
          // Transform the data to match DoctorCard's expected structure
          const transformedDoctors = response.data.map(doctor => ({
            ...doctor,
            availability: {
              minutes: doctor.availability_minutes,
              online: true // Assuming all are available online
            },
            // Convert string prices to numbers if needed
            price: parseFloat(doctor.price),
            cashback: parseFloat(doctor.cashback)
          }));
          
          setDoctors(transformedDoctors);
          setPagination(response.meta || {
            total: response.data.length,
            page: 1,
            limit: 10,
            totalPages: 1
          });
        } else {
          throw new Error("Invalid API response structure");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message || "Failed to fetch doctors.");
        setDoctors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <Container>
          <div className="py-8 text-center">Loading doctors...</div>
        </Container>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <Container>
          <div className="py-8 text-center text-red-500">Error: {error}</div>
        </Container>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <Container>
        {/* Breadcrumbs */}
        <div className="py-4 flex items-center text-sm">
          <a href="/" className="text-blue-500 hover:underline">Home</a>
          <span className="mx-2">›</span>
          <a href="/doctors" className="text-blue-500 hover:underline">Doctors</a>
          <span className="mx-2">›</span>
          <span className="text-gray-600">General Physicians</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <Sidebar onFilterChange={handleFilterChange} />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold mb-1">Consult General Physicians Online - Internal Medicine Specialists</h1>
                  <p className="text-gray-600">Showing {doctors.length} of {pagination.total} doctors</p>
                </div>

                <div className="mt-4 sm:mt-0">
                  <Select.Root 
                    value={filters.sort}
                    onValueChange={(value) => handleFilterChange({ sort: value })}
                  >
                    <Select.Trigger className="w-[180px]">
                      <Select.Value placeholder="Sort by" />
                    </Select.Trigger>
                    <Select.Content>
                      <Select.Item value="price_asc">Price: Low to High</Select.Item>
                      <Select.Item value="price_desc">Price: High to Low</Select.Item>
                      <Select.Item value="rating">Highest Rating</Select.Item>
                      <Select.Item value="experience">Most Experienced</Select.Item>
                    </Select.Content>
                  </Select.Root>
                </div>
              </div>

              {/* Doctor Cards */}
              <div className="space-y-4">
                {doctors.length > 0 ? (
                  doctors.map((doctor) => (
                    <DoctorCard 
                      key={doctor.id} 
                      doctor={{
                        ...doctor,
                        // Ensure image has a fallback
                        image: doctor.image || "https://tinyurl.com/4jrv4vzv"
                      }} 
                    />
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p>No doctors found matching your criteria</p>
                    <Button 
                      onClick={() => setFilters({ sort: "price_asc" })}
                      className="mt-4"
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>

              {/* Pagination - Add if needed */}
              {pagination.totalPages > 1 && (
                <div className="flex justify-center mt-8">
                  <div className="flex gap-2">
                    {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(page => (
                      <Button
                        key={page}
                        variant={pagination.page === page ? "default" : "outline"}
                        onClick={() => handleFilterChange({ page })}
                      >
                        {page}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Right - Consultation Help */}
          <div className="lg:w-64 flex-shrink-0">
            <ConsultationHelp />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Index;