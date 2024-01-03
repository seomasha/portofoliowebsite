import React from 'react'

function Header() {
  return (
    <div className="flex justify-between p-6">
        <h1 className="text-3xl"><span className="font-bold text-[#a67c00]">sead</span><span className="font-thin">masetic</span></h1>
        <h1 className="text-[#a67c00] text-xl border border-[#a67c00] py-3 px-6 rounded-3xl hover:bg-[#a67c00] hover:text-black transition cursor-pointer">Let's talk</h1>
    </div>
  )
}

export default Header