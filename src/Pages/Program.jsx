import 'react'
const course= { name: "React JS", description: "Learn React from basics to advanced" };
const Program = () => {
  return (
    <div>
        {course ? (
        <div className="p-4 bg-green-100 rounded-md">
          <h2 className="text-lg font-bold">Course: {course.name}</h2>
          <p>Description: {course.description}</p>
        </div>
      ) : (
        <div className="p-4 bg-red-100 rounded-md text-gray-500">
          No course available
        </div>
      )}
      
    </div>
  )
}

export default Program
