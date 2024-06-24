import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
       
        console.log(data)}
  return (
    
    <div>
      <div className="flex h-screen items-center justify-center w-screen">
        <div >
        <div className="modal-box bg-white w-[1000px] h-full">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
      
          <h2 className="font-bold text-center text-2xl">Registration Form</h2>
          <div className="container d-flex justify-content-center align-items-center mt-5">
    <div className="row">
        <div className="">
            <div className=" ">
                {/* <img src="https://process.filestackapi.com/Ar1JhJgKrRMCHY5XInB1Iz/resize=width:742,fit:clip/cache=expiry:max/https://cdn.filepicker.io/api/file/joI1b3uCSeGNt5F7XMzM"
                    alt="" className="card-img-top" /> */}
                <div className="card-body">
                    
                        <div className="mb-3">
                            <label className="" htmlFor="name">Name</label>
                            <input className="px-3 py-2 border rounded-md flex items-center gap-2 w-full " type="text" id="name" name="name"  placeholder="Enter your full name" {...register("name", { required: true })}/>
                            <br />
                         {errors.name && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-3">
                            <label className="" htmlFor="phone">Pnone no.</label>
                            <input className="px-3 py-2 border rounded-md flex items-center gap-2 w-full " type="text" id="phone" name="phone"  placeholder="Enter your phone no." {...register("phone", { required: true })}/>
                            <br />
                         {errors.phone && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-3">
                            <label className="" htmlFor="email" >Email</label>
                            <input className="px-3 py-2 border rounded-md flex items-center gap-2 w-full " type="Email" id="email" name="email" placeholder="Enter your email address" {...register("email", { required: true })}/>
                            <br />
                         {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-3">
                            <label className=""  htmlFor="college">College</label>
                            <input className="px-3 py-2 border rounded-md flex items-center gap-2 w-full " type="text" id="college" name="college" placeholder="Enter your collage name" {...register("college", { required: true })}/>
                            <br />
                         {errors.college && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-3">
                            <label className="" htmlFor="year">Year of study</label>
                            <input className="px-3 py-2 border rounded-md flex items-center gap-2 w-full " type="number" id="year" name="year"  {...register("year", { required: true })}/>
                            <br />
                         {errors.year && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="password">Password</label>
                            <br />
                            <input className="px-3 py-2 border rounded-md flex items-center gap-2 w-full" type="password" id="password" name="password" {...register("password", { required: true })}/>
                            <br />
                         {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <button className="btn bg-green-600 hover:bg-green-700 btn-block border-none">Register</button>
                        <div className="flex justify-around mt-4">
                            <p className="text-center">Already have account? <button className="underline text-blue-500 cursor-pointer"  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }>Login</button></p>{" "}
                  <Login />
                        </div>
                   
                </div>
            </div>
        </div>
        </div>
        
    </div>
    </form>
</div>

        </div>
        
      </div>
    </div>
  );
}

export default SignUp;
