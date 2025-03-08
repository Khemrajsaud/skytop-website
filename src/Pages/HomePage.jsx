// import 'react'

// import { MdAdd } from "react-icons/md";
// import { RiSubtractLine } from "react-icons/ri";
// import { useState } from 'react';



// const HomePage = () => {
//   const [toggle ,setToggle] = useState(false)
//   return (
//     <>
   

//   <div className=' '>
//     <div onClick={()=> setToggle(!toggle)} className='flex items-center'>
//       <h1 >BIlling Information </h1>
//       {toggle ?<RiSubtractLine/>  : <MdAdd/>}
      
//     </div>
//     <div className={`${toggle ? "" : "hidden"}`}>
//       <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe</h1>

//     </div>

//   </div>
//   </>
//   )
// }

// export default HomePage

import { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
 import { FaLightbulb, FaUserShield } from "react-icons/fa";
 import { MdStars } from "react-icons/md";
 import { GiPodium } from "react-icons/gi";

const factors = [
  {
    icon: FaLightbulb,
    title: "Empowerment",
    content:
      "We foster a culture of encouragement and support to help our students achieve their goals.",
  },
  {
    icon: FaUserShield,
    title: "Innovation",
    content:
      "Our courses are designed to inspire creativity and new ideas in a dynamic learning environment.",
  },
  { 
    icon: MdStars,
    title: "Quality",
    content:
      "We are committed to providing the highest standard of education and resources for our students.",
  },
  {
    icon: GiPodium,
    title: "Respect",
    content:
      "We embrace diversity and promote an inclusive environment where everyone is valued.",
  },
];

const CollapsibleSections = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mt-10 space-y-4">
      {factors.map((factor, index) => (
        <div
          key={index}
          className="bg-gray-200 p-4 rounded-lg cursor-pointer"
          onClick={() => toggleSection(index)}
        >
          <div className="flex justify-between items-center">
        
            <h2 className="text-lg font-semibold">{factor.icon}{factor.title}</h2>
            {openIndex === index ? (
              <MdRemove className="text-xl" />
            ) : (
              <MdAdd className="text-xl" />
            )}
          </div>
          {openIndex === index && (
            <p className="mt-2 text-gray-700">{factor.content}</p>
            
          )}
        </div>
      ))}
    </div>
  );
};

export default CollapsibleSections;

