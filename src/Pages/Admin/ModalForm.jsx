import { useForm } from "react-hook-form";


const ModalForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
     const  teacherHandelsubmit=(data)=>{
           
      }
    
  return (
    <div>
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
  )
}

export default ModalForm