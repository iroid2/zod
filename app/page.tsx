import RegisterForms from '@/components/RegisterForms'
import React from 'react'

export default function page() {
  return (
    <div className='p-10'>
      <h2 className='mx-auto font-extrabold max-w-md text-3xl text-center'>Form Validation using ZOD and React Hook forms</h2>
<div className="w-full max-w-sm p-4 mx-auto bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <RegisterForms/>
</div>

    </div>
  )
}
