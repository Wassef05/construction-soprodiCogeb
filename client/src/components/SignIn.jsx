import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { loddingStart, signinSuccess, signinFailed ,signoutSuccess,signoutFailed} from '../redux/user/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { loading } = useSelector((state) => state.user)




    const onSubmit = async (formData) => {
        dispatch(loddingStart())
        try {
            const res = await fetch('http://localhost:4000/api/soprodi/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const userData = await res.json();
            console.log(userData)
    
            //===checking request success or not ===//
            if (userData.success === false) {
                dispatch(signinFailed(userData.message))
                toast.error(userData.message, {
                    autoClose: 2000,
                })
            } else {
                dispatch(signinSuccess(userData))
                if (userData.role === "admin") {
                    navigate('/profile')
                } else {
                    alert("not allowed");
                    window.location.reload();
                }
            }
        }
        catch (error) {
            alert("error");
            dispatch(signinFailed(error.message))
            toast.error(error.message, {
                autoClose: 2000,
            })
        }
    };
    const handleLogOut = async () => {
        try {
          const res = await fetch("http://localhost:4000/api/soprodi/auth/signout");
          const data = await res.json();
          if (data.success === false) {
            dispatch(signoutFailed(data.message));
            toast.error(data.message, {
              autoClose: 2000,
            });
          } else {
            dispatch(signoutSuccess());
            console.log("success")
          }
        } catch (error) {
          dispatch(signoutFailed(error.message));
          toast.error(error.message, {
            autoClose: 2000,
          });
        }
      };
    




    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <input {...register("email", { required: true })} type="email" placeholder="Email" className="form_input mt-5 w-full h-16" />
                {errors.email && <span className='text-red-700  font-semibold text-sm mb-2 mt-1'>Ce champ est obligatoire.</span>}
<br/>

                <input {...register("userPassword", { required: true })} type="password" placeholder="Password" className="form_input mt-5 w-full h-16" />
                {errors.password && <span className='text-red-700 font-semibold text-sm mb-2 mt-1'>Ce champ est obligatoire.</span>}


                <button
    type='submit'
    className="btn bg-[#311974] h-16 text-3xl text-white mt-5 rounded-md w-full ">
    Login
</button>


            </form>
            <ToastContainer limit={0} />
        </>
    )
}

export default SingIn