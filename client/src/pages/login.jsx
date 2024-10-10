import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingIn from '../components/SignIn';
import Footer from '../components/Footer';
import NavComp from '../components/NavComp';

function Login() {
    return (
        <div>
                    <section className='form-section  py-10 md:py-20  flex justify-center items-center text-center'>
                        <div className="container  w-1/2 ">
                            <div className=" justify-center  items-center  px-4 sm:px-8 bg-white py-6 pb-8 sm:py-9 sm:pb-12  mx-auto rounded-sm border-[3px] border-[#042181d9]/50 shadow-brand shadow-[#3A5A40]/40">
                                <h1 className='text-center  text-[#3A5A40] mb-3 font-medium font-heading text-3xl'>
                                     Login 
                                </h1>
                    <SingIn/>
                         
                                <ToastContainer limit={0} />
                            </div>
                        </div>
                    </section>

                    <Footer/>
                    </div>       
    )
}

export default Login
