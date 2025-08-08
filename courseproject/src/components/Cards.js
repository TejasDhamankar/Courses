import { useState } from "react";
import Card  from "./Card";

function Cards({courses,category})
{

    // for liked courses
    const[likedCourese,setLikedCourses] = useState([]);


    
 
    //this function returns all the courses fetched from api call
    function getCourses() 
    {
      let allcourses =[];
      if(category === "All")
      {
      Object.values(courses).forEach((categoryArray) => 
        {
            categoryArray.forEach((course) => {
                allcourses.push(course);
            });
  
        });
        return allcourses;
      }
      else
      {
        return courses[category];
      }
        
      }


   return(
    <div className="flex flex-wrap justify-center gap-4 mb-4">
       {
        getCourses().map((course)=>{
          return <Card course={course} key = {course.id} likedCourese={likedCourese} setLikedCourses={setLikedCourses} />
        })
       }
    </div>
   );
}

export default Cards;
