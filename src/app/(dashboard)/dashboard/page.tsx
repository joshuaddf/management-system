import Link from 'next/link'
import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const page = async () => {

  const {  getUser } = await getKindeServerSession();
  const user = await getUser();

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className="flex flex-col">
        <span className='text-xl'><Link href="/">Home</Link></span>
        <div className="text-4xl font-semibold">This is the dashboard</div>
        <div className="flex flex-col">
          <span>{user?.email}</span>
          <span>{user?.given_name}</span>
          <span>{user?.family_name}</span>
        </div>
      </div>
    </div>
  )
}

export default page