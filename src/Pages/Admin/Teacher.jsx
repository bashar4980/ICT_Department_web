import { useForm } from "react-hook-form";
import useFetch from "../../Hook/useFetch"


const Teachers = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const teacherHandelsubmit = (data) => {
    const Api_key = "2483b2c42ba1fe0a6537341b25506478";
    const Image = data.Image[0];
    const formData = new FormData();
    formData.append("image", Image);

    fetch(`https://api.imgbb.com/1/upload?key=${Api_key}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const teacher = {
          Name: data.Name,
          title: data.title,
          email: data.email,
          Image: imgData.data.url,
        };
  
        if (imgData.success)
                
          fetch("http://localhost:3000/teacher", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(teacher),
          })
          .then(res =>res.json())
          .then(data =>{
            if(data.acknowledged){
              alert("Add Successfully")
            }
          })
        
       
      
        
      });
  };
  const {data , isLoading , error} = useFetch(
    "http://localhost:3000/teachers", "teachers"

  )

  
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  const deleteHandeler =(data)=>{
    
   
    fetch(`http://localhost:3000/teachers/${data}`,{
      method: 'DELETE', 
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            
           alert("Successfully delete")
        }
    })
    
  }
  
  return (
    <div className="addnotice_container mt-20">
      <div className="all_teachers">
        <div className="addteahers flex justify-center mb-5">
          {/* Add teachers form  */}

          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">Add Teachers</h1>
            </div>

            <form
              onSubmit={handleSubmit(teacherHandelsubmit)}
              className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
              <input
                type="text"
                placeholder="Teacher Name"
                className="input focus:outline-white input-bordered  shadow-sm w-full"
                {...register("Name", { required: true })}
              />
              {errors.Name && <span>This field is required</span>}

              <input
                type="email"
                placeholder="Email"
                className="input focus:outline-white input-bordered  shadow-sm w-full"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}

              <select
                {...register("title", { required: true })}
                className="select input-bordered focus:outline-white  w-full rounded-lg  shadow-sm  "
              >
                <option selected>Professor</option>
                <option>Associate Professor</option>
                <option>Assistant Professor</option>
              </select>
              {errors.title && <span>This field is required</span>}
              <input
                type="file"
                {...register("Image", { required: true })}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Name"
              />
              {errors.Image && <span>This field is required</span>}

              <button type="submit" className="btn btn-primary px-10 ">
                Add
              </button>
            </form>
          </div>

          {/* Add teachers form  */}
        </div>
        <h1 className="text-xl font-semibold">All Teachers</h1>

        <div className="overflow-x-auto">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Customize</th>
                </tr>
              </thead>
              <tbody>
                {
                 data && 
                 
                 
                   data.map(teacher => {
                    return(
                      <tr key={teacher._id}>
                      <td>{teacher.Name}</td>
                      <td>{teacher.title}</td>
                      
                      <button onClick={()=>{
                        deleteHandeler(teacher._id)
                      }} className="btn btn-warning btn-sm ">Delete</button>
                    </tr>
                    )
                  })
                 
                 
              
                }
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
