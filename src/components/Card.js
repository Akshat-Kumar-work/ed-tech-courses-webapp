import {FcLike} from "react-icons/fc"
function Card ({course}){
    return(
        //isme ek card bnra hai
        <div className=" w-[300px] bg-slate-900 rounded-lg overflow-hidden bg-opacity-80">
            <div className=" relative">
                <img src={course.image.url}></img>
                <div>
                    <button className=" absolute w-[40px] h-[40px] bg-white right-2 bottom-3 rounded-full grid place-items-center opacity-80">
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
