import Link from 'next/link'
import { getKindeServerSession, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server';
import { Button } from '@/components/ui/button';

const page = async () => {

  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  return (
    <div className='flex items-center justify-center h-screen px-4'>
      <div className="flex flex-col">
        <div className="flex items-center justify-between pb-7">
          <span className='text-sm underline'><Link href="/">Home</Link></span>
          <Button variant='secondary'>
            <LogoutLink className='text-sm underline'>Logout</LogoutLink>
          </Button>
        </div>
        <div className="text-3xl font-bold">You are logged in</div>
        <div className="flex flex-col">
          <div className="py-4">
            <p className='font-semibold text-lg opacity-60'>Hello {user?.given_name} {user?.family_name}, you are successfully logged in.</p>
          </div>
          <div className="flex flex-col items-end">
            <span className=' opacity-65 font-bold text-sm'>{user?.email}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page