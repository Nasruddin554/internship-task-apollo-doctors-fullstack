import { Button } from "./ui/button";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex flex-col md:flex-row">
        <div className="flex items-start mb-4 md:mb-0">
          <div className="relative w-20 h-20 mr-4 flex-shrink-0">
            <img 
              src={doctor.image || "https://tinyurl.com/4jrv4vzv"} 
              alt={doctor.name} 
              className="w-full h-full object-cover rounded"
            />
          </div>
          
          <div>
            <div className="flex items-center">
              <h3 className="font-medium text-lg mr-1">{doctor.name}</h3>
            </div>
            <p className="text-gray-600 text-sm">{doctor.title}</p>
            <div className="mt-1 flex items-center text-sm text-blue-600">
              <span className="font-medium">{doctor.years} YEARS • {doctor.degree}</span>
            </div>
            <p className="text-gray-500 text-sm mt-1">{doctor.location}</p>
            <p className="text-gray-500 text-sm">
              {doctor.clinic || 'Apollo 24|7 Virtual Clinic'} - {doctor.clinicLocation}
            </p>
            
            {doctor.rating && (
              <div className="flex items-center mt-2">
                <div className="flex items-center text-green-600">
                  <span className="ml-1">{doctor.rating}%</span>
                </div>
                <span className="text-xs text-gray-500 ml-2">
                  ({doctor.patients || 0}+ Patients)
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="md:ml-auto flex flex-col items-end justify-between">
          <div className="flex items-center">
            <span className="font-bold text-lg">₹{doctor.price}</span>
            {doctor.cashback && (
              <div className="ml-2 flex items-center text-xs bg-orange-100 text-orange-600 px-1 py-0.5 rounded">
                <span>₹{doctor.cashback} Cashback</span>
              </div>
            )}
          </div>
          
          <Button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white">
            Consult Online
          </Button>
          <p className="text-xs text-gray-500 mt-1">
            Available in {doctor.availability?.minutes || 0} minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;