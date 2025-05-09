import 'react'
import gallary1 from "../assets/gallary/gallary.jpg"
import gallary5 from "../assets/gallary/gallary1.jpg"
import gallary2 from "../assets/gallary/gallary2.jpg"
import gallary3 from "../assets/gallary/gallary3.jpg"
import gallary4 from "../assets/gallary/gallary4.jpg"
import gallary6 from "../assets/gallary/gallary1.jpg"
import gallary7 from "../assets/gallary/gallary2.jpg"
import gallary8 from "../assets/gallary/gallary3.jpg"




const gallary = [
    {
        imge: gallary1,
    },
    {
        imge: gallary2,
    },
    {
        imge: gallary3,
    },
    {
        imge: gallary4,
    },
    {
        imge: gallary5,
    },
    {
        imge: gallary6,
    },
    {
        imge: gallary7,
    },
    {
        imge: gallary8,
    },
 
]

const Gallary = () => {
  return (
    <div className='lg:mt-[140px] mt-[150px]'>
      <div className='pt-6'>
        <h1 className='text-4xl font-semibold text-center py-5'>This is our Gallary </h1>
        <div className='grid lg:grid-cols-4 grid-cols-2 gap-8 mx-5 pb-10'>
            {gallary.map((item,index)=>(
                <div key={index}>
                    <img className=' rounded-md w-full' src={item.imge} alt="" />
                </div>
                
            ))}
        </div>
      </div>
    </div>
  )
}

export default Gallary
