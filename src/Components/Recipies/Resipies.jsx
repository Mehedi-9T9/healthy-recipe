import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Resipe/Recipe";
import Cart from "./Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipies = () => {
    const [recipes,setRecipes]=useState([]);
    useEffect(()=>{
        fetch('recipesData.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

const toastHandler=()=>{
    toast("Sorry You can't Select multiple Item !")
}

const [selects,setSelects]=useState([])
    const wantToCookHandler =(recipe,id)=>{

        if(selects.length >0){
            for (let i = 0; i < selects.length; i++) {
            if (selects[i].resipe_id !== id) {
                const newSelecte = [...selects,recipe]
                setSelects(newSelecte)


            }else{
               toastHandler()
            }
        }

        }
        else{
            const newSelecte = [...selects,recipe]
            setSelects(newSelecte)
        }

  }
const [current,setCurrent]=useState([])

const preparingBtnHandler =(id)=>{
    const precing = selects.filter(select => select.resipe_id !== id)
    setSelects(precing)

    const currentItem =selects.find(select => select.resipe_id ==id)
    const newCurrent =[...current,currentItem]
    setCurrent(newCurrent)
}
    return (
        <div className="container mx-auto mt-[50px] md:mt-[100px]">
            <div className="text-center ">
                <h2 className="text-[#150B2B] text-4xl font-bold mb-6">Our Recipes</h2>
                <p className="text-[#6F697C] text-base font-normal">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className="flex mt-8 md:mt-12 flex-col-reverse md:flex-row gap-5">
                <div className="md:w-[60%] md:grid grid-cols-2 gap-6">
                     {
                         recipes.map((recipe,idx) =><Recipe key={idx} recipe={recipe} wantToCookHandler={wantToCookHandler}></Recipe>)
                    }
                </div>

                <div className="md:w-[40%] border-2 rounded-2xl">
                    <Cart selects={selects} preparingBtnHandler={preparingBtnHandler} current={current}></Cart>
                </div>
            </div>
            <ToastContainer />

        </div>
     );
}

export default Recipies;