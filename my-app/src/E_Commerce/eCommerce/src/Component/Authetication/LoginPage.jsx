import React, { useRef,useState } from 'react'
import {useForm} from 'react-hook-form'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import './LoginPage.css'




const LoginPage = () => {


    // Define a validation schema using Zod library to validate the form inputs.
    const schema = z.object({
        email: z.string().email({message:"Please enter a valid email address"}).min(3),
        password: z.string().min(6,{message:"Password must be at least 6 characters long"})
    });
    
    //useForm hook from react-hook-form library is used to manage form state and validation. 
    // It provides methods like register and handleSubmit to handle form inputs and submission.
        const {
            register,
            handleSubmit,
            formState : {errors}
        } = useForm({
            resolver: zodResolver(schema)
        });

        const onSubmitdata= (formData)=>{ console.log(formData) }

    console.log(errors)

  return (
    <section className='align_center form_page '>
        <form className='authetication_form' onSubmit={handleSubmit(onSubmitdata)}>
            <h2 >Login Form</h2>

            <div className="form_inputs">
                <div>
                    <label htmlFor='email' >Email</label>
                    <input type='email' 
                           id='email'
                           className='form_text_input' 
                           placeholder='Enter_Your_Email'
                           {...register("email")}
                        //    {...register("email",{required:true, email:true,})}
                    />
                        {/* Display an error message if the email field is required and not filled out */}
                        {errors.email && <em className="form_error">{errors.email.message}</em>} 
                        {/* {errors.email?.type === "email" && <em className="form_error">Please enter a valid email </em>}  */}
                </div>
                <div>
                    <label htmlFor='password' >Password</label>
                    <input type='password' 
                           id='password'
                           className='form_text_input' 
                           placeholder='Enter_Your_Password' 
                           {...register("password")}
                        //    {...register("password", {required: true, minLength:6})}
                    />
                        {errors.password && <em className="form_error">{errors.password.message}</em>} 
                        {/* {errors.password?.type === "minLength" && <em className="form_error">Password must be at least 6 characters long</em>}  */}
                </div>

                <button className="search_button  form_submit">
                    Submit
                </button>
            </div>
        </form>
    </section>
  )
}

export default LoginPage

// const LoginPage = () => {


//     const emailRef = useRef(null);
//     const passwordRef = useRef(null);
//     const [userDetails, setUserDetails] = useState({
//         email: '',
//         password: ''
//     });

//     const [error, setError] = useState({
//         email: '',
//         password: ''
//     });

    
//     const handleSubmit = (event) => {
//         event.preventDefault();

//         console.log(userDetails);
//         //Password validation
       
//     }

//   return (
//     <section className='align_center form_page '>
//         <form className='authetication_form' onSubmit={handleSubmit}>
//             <h2 >Login Form</h2>

//             <div className="form_inputs">
//                 <div>
//                     <label htmlFor='email' >Email</label>
//                     <input type='email' 
//                            id='email' 
//                            className='form_text_input' 
//                            placeholder='Enter_Your_Email'
//                            onChange={(e)=>{setUserDetails({...userDetails,email:e.target.value})}}
//                             value={userDetails.email}
//                     />
//                         {/* Display an error message if the email field is required and not filled out */}
//                         {/* {errors.email && <em className="form_error">{errors.email.message}</em>}  */}
//                         {error.email?.type === "email" && <em className="form_error">Please enter a valid email </em>} 

//                 </div>
//                 <div>
//                     <label htmlFor='password' >Password</label>
//                     <input type='password' 
//                            id='password'
//                            className='form_text_input' 
//                            placeholder='Enter_Your_Password' 
//                             onChange={(e)=>{setUserDetails({...userDetails,password:e.target.value})}}
//                             value={userDetails.password}
//                     />
//                         {/* {errors.password && <em className="form_error">{errors.password.message}</em>}  */}
//                         {error.password?.type === "minLength" && <em className="form_error">Password must be at least 6 characters long</em>} 
//                 </div>

//                 <button className="search_button  form_submit">
//                     Submit
//                 </button>
//             </div>
//         </form>
//     </section>
//   )
// }

// export default LoginPage


