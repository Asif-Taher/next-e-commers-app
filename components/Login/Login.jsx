'use client'
import React from 'react'
import { useState } from 'react'

export default function Login() {
    const [currentStart, setCurrentState] = useState("Login")
    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }

    return (
        <div>
            <div className="mx-10">
                <form onSubmit={onSubmitHandler} className="flex flex-col m-auto w-[90%]  sm:max-w-96 mt-14 gap-4">
                    <div className="inline-flex items-center gap-2 justify-center">
                        <p className="text-2xl">{currentStart}</p>
                        <hr className="bg-gray-400 text h-1 w-10" />
                    </div>
                    {
                        currentStart === "Login" ? "" : <input className="border py-1 px-3 rounded-md" type="text" placeholder="Name" required />

                    }
                    <input className="border py-1 px-3 rounded-md" type="email" placeholder="Email" required />
                    <input className="border py-1 px-3 rounded-md" type="password" placeholder="password" required />
                    <div className="flex justify-between text-sm mt-[8px]">
                        <p className="cursor-pointer">Forget Your Password?</p>
                        {
                            currentStart === "Login" ? <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">Create Account</p>
                                : <p onClick={() => setCurrentState('Login')} className="cursor-pointer">Login Here</p>
                        }
                    </div>
                    <div className="text-center mt-4">
                        <button className="border py-2 px-5 bg-black text-white rounded-md w-[200px] active:bg-gray-400">{currentStart === "Login" ? "Sign In" : "Sign Up"}</button>

                    </div>
                </form>
            </div>
        </div>
    )
}
