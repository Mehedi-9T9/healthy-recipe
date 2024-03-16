import { IoMdContact } from "react-icons/io";
const Navbar = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>

    </div>
    <a className="btn btn-ghost text-4xl font-bold">Healthy <span className="text-green-500">Recipe</span> </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg font-normal text-[#585167]">
      <li><a>Home</a></li>
      <li><a>Recipies</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>

    </ul>
  </div>
  <div className="navbar-end flex ">
  <label className="input input-bordered md:flex items-center gap-2 rounded-3xl hidden">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M21 20.9998L15.803 15.8028M15.803 15.8028C17.2096 14.3962 17.9998 12.4885 17.9998 10.4993C17.9998 8.51011 17.2096 6.60238 15.803 5.19581C14.3964 3.78923 12.4887 2.99902 10.4995 2.99902C8.51029 2.99902 6.60256 3.78923 5.19599 5.19581C3.78941 6.60238 2.99921 8.51011 2.99921 10.4993C2.99921 12.4885 3.78941 14.3962 5.19599 15.8028C6.60256 17.2094 8.51029 17.9996 10.4995 17.9996C12.4887 17.9996 14.3964 17.2094 15.803 15.8028Z" stroke="#150B2B" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  <input type="text" className="grow" placeholder="Search" />
</label>
<div className="bg-green-500 p-3 rounded-full text-3xl ml-6">
<IoMdContact />
</div>

  {/* <div className="avatar rounded-full bg-green-500 ml-10 ">
       <div className="w-12 rounded-full flex justify-center items-center ">
       <div className="">
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M23.9761 24.9668C23.0444 23.7333 21.8391 22.7329 20.455 22.0446C19.0709 21.3562 17.5459 20.9987 16.0001 21.0001C14.4543 20.9987 12.9292 21.3562 11.5451 22.0446C10.1611 22.7329 8.95571 23.7333 8.02406 24.9668M23.9761 24.9668C25.7941 23.3497 27.0762 21.2182 27.655 18.8549C28.2337 16.4916 28.0804 14.0082 27.2153 11.7341C26.3503 9.45992 24.8144 7.50246 22.8113 6.12129C20.8081 4.74012 18.4325 4.00049 15.9994 4.00049C13.5663 4.00049 11.1906 4.74012 9.18753 6.12129C7.18443 7.50246 5.6485 9.45992 4.78344 11.7341C3.91838 14.0082 3.76506 16.4916 4.34382 18.8549C4.92257 21.2182 6.20606 23.3497 8.02406 24.9668M23.9761 24.9668C21.7814 26.9243 18.9409 28.0043 16.0001 28.0001C13.0588 28.0046 10.219 26.9246 8.02406 24.9668M20.0001 13.0001C20.0001 14.061 19.5786 15.0784 18.8285 15.8285C18.0783 16.5787 17.0609 17.0001 16.0001 17.0001C14.9392 17.0001 13.9218 16.5787 13.1716 15.8285C12.4215 15.0784 12.0001 14.061 12.0001 13.0001C12.0001 11.9392 12.4215 10.9218 13.1716 10.1717C13.9218 9.42152 14.9392 9.00009 16.0001 9.00009C17.0609 9.00009 18.0783 9.42152 18.8285 10.1717C19.5786 10.9218 20.0001 11.9392 20.0001 13.0001Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
       </div>
  </div>
</div> */}

  </div>
</div>
        </div>
     );
}

export default Navbar;