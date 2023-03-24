import Card from "./Card";
import { useState } from "react";

const Cards = (props)=>{
   
    let courses = props.courses;
    let category = props.category;
    console.log(category)

    //likedcourses naam ka variable bnaya likedcourses ko store krwane k lie , aur starting m koi bhi course like nahi hai
    const [likedCourses, setLikedCourses] = useState([]);
    
    //getCouses vala function sare courses ka data single array m dal kar return krdega
    function  getCourses  (){

        //agar category all hai toh sara data pass krdo
        if(category === "All"){
            let allCourses = [];
            //yaha p courses ka mtlb hai jitne bhi courses hai unke objects, aur coursecategory har ek single course
            Object.values(courses).forEach ( (courseCategory)=>{
                //aur course har ek single course category m jo har ek course available hai 
                courseCategory.forEach((course)=>{
                    allCourses.push(course) //usko allcourses wale array m daldo 
                })
            })
            return allCourses;
        }
            
        else{
            return courses[category]
        }

     

       
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
         {/* agar hmare pass bhot sara data hai aur hume data ko elements m dalna hai toh sbse short tarika hai map ko use krna */}
        {/* getcourses sare courses ko ek array m return kr raha hai aur us se hum ek ek course ko card m bhej rhe hai */}
        {
        getCourses().map(
            //declared call back function using arrow method 
            (course) =>
            (
            <Card 
            key={course.id} 
            course={course} 
            noOfLikedcourses={likedCourses}
            setLikedCourses={setLikedCourses}>
            </Card>
             )
            
        ) } 
       
        </div>
    )
}

export default Cards;