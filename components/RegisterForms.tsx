"use client"
import { registerFormSchema } from '@/schema/schema'
import { iRegisterData } from '@/types/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { Updock } from 'next/font/google'
import React from 'react'
import { useForm } from 'react-hook-form'
import Uploadzones from './Uploadthing'

export default function RegisterForms() {
    const {register,handleSubmit,reset,formState:{errors}}=useForm<iRegisterData>(
        {
            resolver:zodResolver(registerFormSchema)
        }
    );
    async function handleRegister(data:any){
        console.log(data)
        reset()
    }
  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleRegister)}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" {...register("email")} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="iroid223 @company.com"  />
            {
                errors.email && (
                    <p className="text-red-400 text-2xl">{errors.email.message}</p>
                )
            }
        </div>
        <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your User Name</label>
            <input type="username" {...register("username")} name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="iroid"  />
            {
                errors.username && (
                    <p className="text-red-400">{errors.username.message}</p>
                )
            }
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" {...register("password")} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  />
            {
                errors.password && (
                    <p className="text-red-400 text-2xl">{errors.password.message}</p>
                )
            }
        </div>
        <Uploadzones/>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create account</button>
    </form>
  )
}
