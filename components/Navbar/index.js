import React, { useState } from 'react'

const Navbar = () => {
  const [navItems, setNavItems] = useState([
    {
      name: "Politics"
    },
    {
      name: "Sports"
    },
    {
      name: "Gaming"
    },
    {
      name: "Technology"
    },
    {
      name: "World"
    },
    {
      name: "Hollywood"
    },
    {
      name: "Ukrain"
    },
    {
      name: "Terrorism"
    },
    {
      name: "Crime"
    },
    {
      name: "Fashion"
    },
  ]);
  return (
    <div className="w-screen flex flex-col items-center justify-center ml-auto mr-auto">
      <div className="navbar-main w-full py-5 lg:py-[40px] flex items-center justify-center">
        <h1 className="text-3xl lg:text-5xl font-RobotoSlab font-bold w-fit ml-auto mr-auto">
          The Rivage
        </h1>
      </div>
      <div className="navbar-navigation w-full max-w-[1600px] h-9 border-t-2 border-b-2 px-[140px] hidden lg:flex felx-col items-center justify-between">
        {navItems.map((item) => (
          <div className="h-full px-5 hover:bg-gray-100 flex items-center cursor-pointer">
            <h5 className="font-RobotoSlab text-[14px]">{item.name}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar