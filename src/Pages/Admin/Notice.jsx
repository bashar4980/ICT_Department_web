import { useForm } from "react-hook-form";
import useFetch from "../../Hook/useFetch"


const Notice = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const noticeHandelsubmit = (data) => {
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
          Date: data.Date,
          Image: imgData.data.url,
        };
  
        if (imgData.success)
                
          fetch("http://localhost:3000/notice", {
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
    "http://localhost:3000/notices", "notices"

  )

  
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  const deleteHandeler =(data)=>{
   
    fetch(`http://localhost:3000/notices/${data._id}`,{
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
      <div className="all_notices">
        <div className="addNotices flex justify-center mb-5">
          {/* Add Notice Form form  */}

          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">Add Notice</h1>
            </div>

            <form
              onSubmit={handleSubmit(noticeHandelsubmit)}
              className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
              <input
                type="text"
                placeholder="Notice title"
                className="input focus:outline-white input-bordered  shadow-sm w-full"
                {...register("Name", { required: true })}
              />
              {errors.Name && <span>This field is required</span>}

             

                    
              <input
                type="date"
                {...register("Date", { required: true })}
                className="w-full input input-bordered rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Date"
              />
              {errors.Date && <span>This field is required</span>}

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

          {/* Add Notice form  */}
        </div>
        <h1 className="text-xl font-semibold">All Teachers</h1>

        <div className="overflow-x-auto">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
      
                  <th>Customize</th>
                </tr>
              </thead>
              <tbody>
                {
                 data && 
                 
                 
                   data.map(notice => {
                    return(
                      <tr key={notice._id}>
                      <td>{notice.Name}</td>
                      
                    
                      <button onClick={()=>{
                        deleteHandeler(notice)
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

export default Notice;
