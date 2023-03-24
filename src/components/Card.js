import {FcLike} from "react-icons/fc"
import {toast} from 'react-toastify'; 


function Card ( props){
    let course = props.course;
    let likedCourses = props.noOfLikedcourses;
    let setLikedCourses = props.setLikedCourses;


    function clickHandler(){
        //check karo likedcourses k andar kya current course ki id hai ya nahi
          if(likedCourses.includes(course.id)){
           //agar likedCourses k andar current course jo hai uski id include hoti hai toh mtlb vo phle se liked hai 
           //agar vo phle se liked hai aur clickhandler event chla hai toh mtlb usko liked courses se htana hai
           //setlikedcourses m previous state se sare courses remove kro jinki id equal hai current course ki id ke
           //ya fir , jo equal nahi hai sirf unko hi filter krke rkhlo
           //humne ek filter lgaya , vo course hi uss filter k agy jaega jiski id not equal hogi  current course ki id k
           //y filter previous state courses k harr ek element par check function chlaega, function k parameter m single previous state di hai
           setLikedCourses( (previousStateCOURSES)=>{
                 previousStateCOURSES.filter( function check (previousStateCOURSE) {
                     return previousStateCOURSE!==course.id  }   )
            });
           toast.warning("Like Removed");
          }
          else{
            //current course phle se like nahi hai
            //insert kro y course liked courses m 
            if(likedCourses.length===0){ //agar likedcourses m kuch bhi nahi hai toh current course ko daldo
                setLikedCourses([course.id])
            }
            else{
                //agar liked courses m phle se bhi elements hai toh, phle vale bhi daldo aur jo naya aya hai usko bhi daldo
                setLikedCourses( (previousStateCOURSES)=> [...previousStateCOURSES , course.id])
            }
            
            toast.success("Liked Succesfully")
          }
    }
    return(
        //isme ek card bnra hai
        <div className=" w-[300px] bg-slate-900 rounded-lg overflow-hidden bg-opacity-80">
            <div className=" relative">
                <img src={course.image.url}></img>
                <div className=" absolute w-[40px] h-[40px] bg-white right-2 bottom-3 rounded-full grid place-items-center opacity-80">
                    <button onClick={clickHandler}>
                      <FcLike fontSize="1.75rem"/>
                      </button>
                </div>
            </div>

            <div className=" p-4 ">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p> 
                <p className=" mt-2 text-white ">{course.description}</p>
            </div>
        </div>
    )
}
export default Card;
