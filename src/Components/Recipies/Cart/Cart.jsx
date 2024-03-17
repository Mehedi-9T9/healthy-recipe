import PropTypes from 'prop-types';

const Cart = ({selects,preparingBtnHandler,current}) => {

    const totalTime =current.reduce((prev, curr)=> prev + curr.preparing_time,0)
    const totalCalories =current.reduce((prev, curr)=> prev + curr.calories,0)

    return (
        <div className="p-5">
            <div className="text-center text-4xl font-bold border-b-2 p-6 ">
                <h2>Want to Cook: <span className="text-green-500">{selects.length}</span></h2>
            </div>
                <div className="flex  items-center text-center text-lg">
                    <p className="p-5">ID</p>
                    <p className="p-5">Name</p>
                    <p className="p-5 ml-10">Time</p>
                    <p className="p-5 ml-0">Calories</p>
               </div>
            <div>
                  {

                    selects.map((select,idx) =>
                        <div key={idx} className="flex justify-between items-center  bg-gray-300 rounded-xl mb-5">
                             <p className="p-5 font-bold">{select.resipe_id}</p>
                             <p>{select.resipe_name} </p>
                              <p>{select.preparing_time} Minutes</p>
                              <p>{select.calories} Calories</p>
                               <button className="btn bg-[#0BE58A] text-black rounded-3xl" onClick={()=>preparingBtnHandler(select.resipe_id)}>Preparing</button>
                        </div>)
                 }
            </div>
            <div className="text-center text-3xlnpm install --save prop-types md:text-4xl font-bold border-b-2 mt-12 p-6">
                <h2>Currently cooking: <span className="text-green-500">{current.length}</span> </h2>
            </div>
                <div className="flex  items-center text-center  text-lg ">
                    <p className="p-5">ID</p>
                    <p className="p-5">Name</p>
                    <p className="p-5 ml-18 md:ml-28">Time</p>
                    <p className="p-5 ml-0 md:ml-5">Calories</p>
               </div>
               <div className="border-b-2">
               {

                    current.map((curr,idx) =>
                    <div key={idx} className="flex justify-between items-center space-x-6 bg-gray-300 rounded-xl mb-5">
                    <p className="p-5 font-bold">{curr.resipe_id}</p>
                    <p>{curr.resipe_name} </p>
                    <p>{curr.preparing_time} Minutes</p>
                    <p>{curr.calories} Calories</p>
                    </div>)
                }
               </div>
               <div className="flex p-5 justify-between">
                    <p className="text-xl font-bold text-black">Times: <span className="text-green-500">{totalTime}</span> Mnt</p>
                    <p className="text-xl font-bold text-black">Total Calories: <span className="text-green-500">{totalCalories}</span> Calo</p>

               </div>
                </div>
     );
}

export default Cart;
Cart.propTypes={
    selects: PropTypes.array,
    preparingBtnHandler: PropTypes.func,
    current: PropTypes.array
}
