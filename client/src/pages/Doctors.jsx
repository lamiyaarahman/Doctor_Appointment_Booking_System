import React, { useContext, useEffect, useState } from 'react';
import Layout from '../layout/layout';
import { useParams, useNavigate } from 'react-router-dom'; 
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <Layout>
      <p className='text-gray-600 md:mx-28 mx-10'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5 '>
        <div className='flex flex-col gap-4 text-sm text-gray-600 md:mx-28 mx-8'>
          <p onClick={()=>navigate('/doctors/General physician') } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`}>General physician</p>
          <p onClick={()=>navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>Gynecologist</p>
          <p onClick={()=>navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>Dermatologist</p>
          <p onClick={()=>navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}>Pediatricians</p>
          <p onClick={()=>navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>
          <p onClick={()=>navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}>Gastroenterologist</p>
        </div>
        <div className='flex flex-col items-center'>
        <div className=' grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 pt-5 gap-y-6 px-3 sm:px-0 md:mx-10 mx-8'>
          {filterDoc.length > 0 ? ( // Check if filterDoc has items before mapping
            filterDoc.map((item, index) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                className='border border-blue-100 rounded-lg overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                key={index}
              >
                <img className='ml-10 w-26 h-36' src={item.image} alt="" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-green-500'>
                    <p className='w-2 h-2 rounded-full bg-green-500'></p>
                    <p className='items-center'>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-md'>{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No doctors available</p> // Handle the case when filterDoc is empty
          )}
        </div>
        </div>
      
      </div>
    </Layout>
  );
};

export default Doctors;