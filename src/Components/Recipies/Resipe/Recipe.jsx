import { useState } from "react";
import { IoMdTime} from "react-icons/io";
import { FaFire } from "react-icons/fa";

const Recipe = ({recipe}) => {
  const {resipe_img,resipe_name,short_description, ingredients,preparing_time,calories}=recipe
  // const [value,setValue] =useState([])
  // setValue(ingredients)
  // console.log(value);

return (
<div className="">
      <div className="card  bg-base-100 border shadow-xl mt-5 md:mt-0">
                <figure className="px-10 pt-10">
                  <img src={resipe_img} alt="Shoes" className="rounded-xl w-[330px] h-[200px]" />
                 </figure>
            <div className="card-body ">
                  <h2 className="card-title text-xl font-bold text-[#282828]">{resipe_name}</h2>
                  <p className="border-b-2 text-base font-normal text-[#878787] py-5">{short_description}</p>
                  <h2 className="text-lg font-medium text-[#282828]">Ingredients: {ingredients.length} </h2>
                    <div className="ml-3 text-[#878787] text-lg font-base">
                         {
                             ingredients.map((item,idx) =><li key={idx}>{item}</li>)
                            }
                    </div>
                    <div className="flex gap-x-5 items-center">
                    <IoMdTime />
                    <p>{preparing_time}</p>
                    <FaFire />
                    <p>{calories}</p>

                    </div>


                  <div className="card-actions mt-6">
                  <button className="btn bg-green-500 text-black text-lg font-semibold rounded-3xl">Want To Cook</button>
                  </div>
            </div>
      </div>
</div>
     );
}

export default Recipe;