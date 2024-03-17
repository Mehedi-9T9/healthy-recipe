
const Cart = ({selects,preparingBtnHandler,current}) => {
    // const {select}=selects
    // console.log(select);
    return (
        <div className="p-5">
            <div className="text-center text-4xl font-bold border-b-2 p-6 ">
                <h2>Want to Cook: <span className="text-green-500">{selects.length}</span></h2>
            </div>
                <div className="flex  items-center text-center text-lg">
                    <p className="p-5">ID</p>
                    <p className="p-5">Name</p>
                    <p className="p-5 ml-10">Time</p>
                    <p className="p-5 ml-5">Calories</p>
               </div>
            <div>
                  {

                    selects.map((select,idx) =>
                        <div key={idx} className="flex justify-between items-center space-x-6 bg-gray-300 rounded-xl mb-5">
                             <p className="p-5 font-bold">{select.resipe_id}</p>
                             <p>{select.resipe_name} </p>
                              <p>{select.preparing_time}</p>
                              <p>{select.calories}</p>
                               <button className="btn bg-[#0BE58A] text-black rounded-3xl" onClick={()=>preparingBtnHandler(select.resipe_id)}>Preparing</button>
                        </div>)
                 }


            </div>
            <div className="text-center text-4xl font-bold border-b-2 mt-12 p-6">
                <h2>Currently cooking: <span className="text-green-500">{current.length}</span> </h2>
            </div>
                <div className="flex  items-center text-center  text-lg ">
                    <p className="p-5">ID</p>
                    <p className="p-5">Name</p>
                    <p className="p-5 ml-10">Time</p>
                    <p className="p-5 ml-5">Calories</p>
               </div>
               {

                    current.map((curr,idx) =>
                        <div key={idx} className="flex justify-between items-center space-x-6 bg-gray-300 rounded-xl mb-5">
                        <p className="p-5 font-bold">{curr.resipe_id}</p>
                        <p>{curr.resipe_name} </p>
                         <p>{curr.preparing_time}</p>
                        <p>{curr.calories}</p>

    </div>)
}


        </div>
     );
}

export default Cart;
