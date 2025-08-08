import { FcLike,FcLikePlaceholder  } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ course ,setLikedCourses,likedCourese}) {
    function clickHandler()
    {
       if(likedCourese.includes(course.id))
       {
            // all the courses are liked frist and here the logic is to remove it
            setLikedCourses((prev)=>prev.filter((cid)=> cid !== course.id));
            toast.warning("Liked Removed")
       }
       else
       {
           //this denotes the course is not liked and we have to add it to likedCours array
           if(likedCourese.length === 0)
           {
            // empty array
            setLikedCourses([course.id])
           }
           else
           {
             //something is present in the array
             
           }
            
           toast.success("Liked");
       }


    }
  return(
    <div className="w-[300px] bg-blue-950 bg-opacity-80 rounded-md overflow-hidden shadow-md shadow-gray-500">
    <div className="relative">
        <img src={course.image.url} alt=""></img>

        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 top-36
            grid place-items-center">

            <button onClick={clickHandler}>
               
                {
                   likedCourese.includes(course.id) ?   (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)
                }
            </button> 

        </div>
    </div>

    <div className='p-4'>
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className='mt-2 text-white'>
            {
                
                course.description.length >100 ? (course.description.substr(0,100)) +"..." : (course.description)
            
            }
        </p>

    </div>
</div>
  );
}
export default Card;