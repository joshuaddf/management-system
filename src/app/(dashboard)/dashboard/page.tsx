import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <span><Link href="/">Home</Link></span>
      <div className="">This is the dashboard</div>
    </div>
  )
}

export default page