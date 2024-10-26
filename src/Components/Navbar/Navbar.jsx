import React from 'react'


const Navbar = () => {
  return (
    <>
    <nav className='p-2 bg-[#e3f0f8] '>
        <div className="container">
            <div className="manu_row ">
                <div className="main_manu_row">
                    <div className="first">
                        <ul className=' flex gap-4 '>
                            <div className="item mt-9 flex gap-4">
                            <li><a  className='font-normal text-lg hover:text-slate-600 ease-in-out duration-200 ' href="/About">ABOUT US</a></li>
                            <li><a  className='font-normal text-lg hover:text-slate-600 ease-in-out duration-200 ' href="/Stories">STORIES </a></li>
                            </div>
                            <div className=" w-21 ml-[330px] mr-[128px] ">
                                <a  href="/"><img className='bg-transparent ' src="/imge/f.png" alt="logo" /></a>
                            </div>
                            <div className="input  className='  mt-[25px] relative ">
                                <input className='w-[254px] h-[43px] pl-3 rounded-md outline-none border-none '  type="text" placeholder='Search'/>
                                <button className='' >
                                    <img className='absolute top-[6px] left-[220px] w-7' src="/imge/search.png" alt="" />
                                </button>
                            </div>
                            <div className="icon flex mt-[32px] gap-8 ml-9">
                                <a href="/Profile"><img className='w-[30px]' src="/imge/user.png" alt="profile" /></a>
                                <a href="/Cart"><img className='w-[30px]' src="/imge/woman-bag.png" alt="profile" /></a>
                            </div>
                        </ul>
                    </div>
                

                </div>
                <div className="manu_row ">
                    <ul className='flex gap-5 justify-center items-center mt-3 overflow-hidden'>
                        <li><a className='font-normal truncate text-red-500  ease-linear duration-200 hover:font-semibold ' href="/Giftuing">GIFTING</a></li>
                        <li><a className='font-normal truncate text-blue-950  ease-linear duration-200 hover:font-semibold ' href="/New">NEW</a></li>
                        <li><a className='font-normal truncate text-blue-950  ease-linear duration-200 hover:font-semibold ' href="/Bestsellers">BEST SELLERS</a></li>
                        <li><a className='font-normal truncate text-blue-950  ease-linear duration-200 hover:font-semibold ' href="/Skincare">SKINCARE</a></li>
                        <li><a className='font-normal truncate text-blue-950  ease-linear duration-200 hover:font-semibold ' href="/Lipcare">LIP CARE</a></li>
                        <li><a className='font-normal truncate text-blue-950  ease-linear duration-200 hover:font-semibold ' href="/Body">BODY</a></li>
                        <li><a className='font-normal truncate text-blue-950  ease-linear duration-200 hover:font-semibold ' href="/Fragrance">FRAGRANCE</a></li>
                        <li><a className='font-normal truncate text-red-500  ease-linear duration-200 hover:font-semibold ' href="/Offers">OFFERS</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar