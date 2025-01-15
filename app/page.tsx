import { Button } from '@/components/ui/button'
import { ArrowBigDownIcon, ArrowDown01Icon, ArrowRight, Save } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='relative'>
<div className="flex justify-between bg-slate-100 p-[2rem] fixed w-[100%]">
<Link href={""}>
<Image className='w-[120px]' src="/logobig.png" alt="logo" height={328} width={89}/>
</Link>
<div className="flex gap-[2rem] text-[1.1rem]">
<Link className='text-orange-600' href={""}>Home</Link>
<Link href={""}>Solutions</Link>
<Link href={""}>Projects</Link>
<Link href={""}>Features</Link>
<Link href={""}>Faqs</Link>
<Link className='flex' href={""}>Landing 
<ArrowBigDownIcon/>
</Link>
</div>
<Button className='bg-orange-500 hover:bg-orange-700 text-[1.1rem]'><Link className='flex justify-center items-center gap-3' href={""}><Save/>
Download </Link></Button>
</div>
<div className="pt-[8rem]  w-[100%] pl-[4rem] h-[100vh]  ">
<div className="hero mx-auto mt-[1rem]  ">
<div className="text-white flex flex-col justify-center items-center pt-[5rem]">
<p className='z-50 hub'>AI knowledge hub</p>
<p className='text-[5rem] z-50'>Build Quickly, Earn More</p>
<p className='z-50 text-center mb-[2rem] text-[1.10rem]'>Leverage customer data to create exceptional and robust product <br /> experiences that drive conversions.</p>
<Button className='z-50 bg-orange-500 hover:bg-orange-700'>
  <Link className='flex items-center justify-center gap-6' href={""}>Read more <ArrowRight/></Link>
</Button>
</div>
</div>
</div>
<div className=" absolute w-screen  top-[6rem] z-5 oval">
  <p></p>
</div>
    </div>
  )
}
