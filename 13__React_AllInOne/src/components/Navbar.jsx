import React from "react";
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-[#d2d2d2] border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://i.ytimg.com/vi/ly3m6mv5qvg/sddefault.jpg"
                            className="mr-3 h-14 rounded-4xl"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 bg-gray-200 hover:bg-gray-50 focus:ring-4 focus:ring-gray-400 rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none font-bold"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0  font-bold">
                            <li>
                                <NavLink to="/"
                                    className={({isActive}) =>
                                        `${isActive ?  " text-orange-700" : "text-gray-700"}
                                        block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/basics"  // about name is from createBrowserRouter from main.jsx for routing  
                                    className={({isActive}) =>
                                        `${isActive ?  " text-orange-700" : "text-gray-700"}
                                        block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Basics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/custom-hooks"    //contact name is from createBrowserRouter from main.jsx for routing 
                                    className={({isActive}) =>
                                        `${isActive ?  " text-orange-700" : "text-gray-700"}
                                        block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Custom Hooks
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dynamic-routes" 
                                    className={({isActive}) =>
                                        `${isActive ?  " text-orange-700" : "text-gray-700"}
                                        block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Dynamic Routes
                                </NavLink>
                            </li>                          
                            <li>
                                <NavLink to="/context-api" 
                                    className={({isActive}) =>
                                        `${isActive ?  " text-orange-700" : "text-gray-700"}
                                        block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Context Api
                                </NavLink>
                            </li>                          
                            <li>
                                <NavLink to="/local-storage" 
                                    className={({isActive}) =>
                                        `${isActive ?  " text-orange-700" : "text-gray-700"}
                                        block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Local Storage
                                </NavLink>
                            </li>                          
                            <li>
                                <NavLink to="/redux-toolkit" 
                                    className={({isActive}) =>
                                        `${isActive ?  " text-orange-700" : "text-gray-700"}
                                        block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Redux Toolkit
                                </NavLink>
                            </li>                          
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;