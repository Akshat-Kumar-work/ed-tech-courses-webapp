import NavBar from "./components/NavBar";
import Filter from "./components/Filter";
import { apiUrl,filterData } from "./data";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import {toast} from 'react-toastify'; 
import Spinner from "./components/Spinner";

function App() {
  const [courses, setCourses] = useState([])
  const [loading , setLoading] = useState(true)


  async function fetchdata (){
    //jab tk data nahi load hua setloading ko true krdo
    setLoading(true)
    try{
      //calling api
      let res = await fetch(apiUrl);
      //converting data into json format
      let output = await res.json();
      //saving data into courses variable
      setCourses(output.data)
    }
    catch(error){ 
      toast.error("something went wrong");
    }
    //jab data load hogya set loading ko false krdo
    setLoading(false)
  }

  //jab pura component render hojae tab fetch data ko call krdo 
  useEffect( ()=>{
  fetchdata()
  },[]);


  return (
    <div className=" min-h-screen flex flex-col bg-slate-900 bg-opacity-70">

    <div> <NavBar></NavBar></div>
     
      {/* passing data using props from filterData component */}
      <div> <Filter filterData={filterData}></Filter> </div>
     
      <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      {loading? (<Spinner/>):( <Cards courses={courses}></Cards>)}
     
      </div>
      
    </div>
  );
}

export default App;
