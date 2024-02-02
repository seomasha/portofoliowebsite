import React from 'react'

function Header() {
  return (
    <div className="flex justify-between p-6">
        <h1 className="sm:text-3xl text-2xl"><span className="font-bold text-[#a67c00]">sead</span><span className="font-thin">masetic</span></h1>
        <h1 className="text-[#a67c00] sm:text-xl border border-[#a67c00] sm:py-3 sm:px-6 p-2 rounded-3xl hover:bg-[#a67c00] hover:text-white transition cursor-pointer">Open for work</h1>
    </div>
  )
}

export default Header