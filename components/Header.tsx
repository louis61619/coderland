import Link from 'next/link'
// import Image from 'next/image'
import React, { useState } from 'react'
import { MdOutlineBookmarks, MdOutlineSearch, MdOutlineNotificationsNone } from 'react-icons/md'

function Header() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <header className="mx-auto flex justify-between p-5">
      <div className="flex items-center space-x-5">
        <Link href="/" passHref>
          <img
            className="h-9 cursor-pointer object-contain"
            src="/android-chrome-512x512.png"
            alt="logo"
          />
        </Link>

        {/* 在大於 md 也就是 min-width:768px 的時候會顯示 */}
        <div className="hidden items-center space-x-5 border-l border-black pl-5 text-xl md:inline-flex">
          Coder Land
        </div>
      </div>

      {isLogin ? (
        <div className="flex">
          <MdOutlineSearch />
          <MdOutlineBookmarks />
          <MdOutlineNotificationsNone />
        </div>
      ) : (
        <div className="flex items-center space-x-5 text-green-600">
          {/* <h3>Sign In</h3> */}
          <h3 className="cursor-pointer rounded-full border border-green-600 px-4 py-1">Sign In</h3>
        </div>
      )}

      {/* <img
        src="https://accountabilitlylab.org/wp-content/uploads/2020/03/Medium-logo.png"
        alt=""
      /> */}
    </header>
  )
}

export default Header
