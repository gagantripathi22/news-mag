import React, { useState } from 'react'

const Footer = () => {
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
    <>
      <div className="footer h-[80px] w-screen flex flex-row items-center bg-gray-100 px-10">
        <h1 className="text-3xl font-RobotoSlab font-bold w-fit h-fit lg:ml-auto  ml-auto mr-auto lg:mr-0">
          The Rivage
        </h1>
      </div>
      <div className="footer h-[90px] lg:h-[200px] w-screen flex flex-col justify-center bg-black px-10">
        <div className="navbar-main hidden lg:flex flex-row">
          {navItems.map((cat) => (
            <div className="cursor-pointer group">
              <h5 className="font-RobotoSlab text-gray-500 pr-7 group-hover:text-gray-600">{cat.name}</h5>
            </div>
          ))}
        </div>
        <div className="navbar-main flex flex-row mt-0 lg:mt-8">
          <h5 className="font-RobotoSlab w-fit text-gray-500 lg:pr-7 text-center ml-auto mr-auto lg:ml-0 lg:mr-0">© 2022 The Rivage</h5>
        </div>
      </div>
    </>
  )
}

export default Footer