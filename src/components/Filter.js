function Filter (props){
const data = props.filterData;
let category = props.category;


    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
        {/* map krdo call back function ko currentdata element k sath jo button m current data element ka title dalega */}
        {data.map( (currentdata)=>{

            //button ko return kar rahe hai data k sath har ek button m current data dalega
          return(  <button
            className={`text-lg px-2 py-1 rounded-md font-medium 
            text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
            ${category === data.title ? 
            "bg-opacity-60 border-white" :
            "bg-opacity-40 border-transparent"}
            `}
             key={currentdata.id}>
              {currentdata.title}  </button>)

        })}
        </div>
    )
}

export default Filter;