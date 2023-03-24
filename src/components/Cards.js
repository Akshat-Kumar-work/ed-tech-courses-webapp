import Card from "./Card";
const Cards = (props)=>{
    const courses = props.courses;
    let allCourses = [];
    
    //getCouses vala function sare courses ka data single array m dal kar return krdega
    const getCourses = ()=>{
        //yaha p courses ka mtlb hai jitne bhi courses hai unke objects, aur coursecategory har ek single course
        Object.values(courses).forEach ( (courseCategory)=>{
            //aur course har ek single course category m jo har ek course available hai 
            courseCategory.forEach((course)=>{
                allCourses.push(course) //usko allcourses wale array m daldo 
            })
        })
        return allCourses;
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
        {/* agar courses khali hai toh no data found return krdo aur agar bhare hai toh info return krdo */}
        {!courses ? (<div><p>no data found</p></div>) : (getCourses().map( (course) => {
           return <Card key={course.id} course={course}></Card>
        }) )}
 {/* agar hmare pass bhot sara data hai aur hume data ko elements m dalna hai toh sbse short tarika hai map ko use krna */}
       
        </div>
    )
}

export default Cards;