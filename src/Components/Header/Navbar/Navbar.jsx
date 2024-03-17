import { IoMdContact } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
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
  <FaSearch />
  <input type="text" className="grow" placeholder="Search" />
</label>
<div className="bg-green-500 p-3 rounded-full text-3xl ml-6">
<IoMdContact />
</div>


  </div>
</div>
        </div>
     );
}

export default Navbar;