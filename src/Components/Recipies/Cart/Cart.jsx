import WantToCart from "./WantToCart/WantToCart";

const Cart = () => {
    return (
        <div className="">
            <div className="text-center text-4xl font-bold border-b-2 p-6 ">
                <h2>Want to Cook:</h2>
            </div>
                <div className="flex  items-center text-center text-lg">
                    <p className="p-5">ID</p>
                    <p className="p-5">Name</p>
                    <p className="p-5 ml-10">Time</p>
                    <p className="p-5 ml-5">Calories</p>
               </div>
            <div>
                <WantToCart></WantToCart>

            </div>
            <div className="text-center text-4xl font-bold border-b-2 mt-12 p-6">
                <h2>Currently cooking: 02</h2>
            </div>
                <div className="flex  items-center text-center bg-green-300 text-lg ">
                    <p className="p-5">ID</p>
                    <p className="p-5">Name</p>
                    <p className="p-5 ml-10">Time</p>
                    <p className="p-5 ml-5">Calories</p>
               </div>
        </div>
     );
}

export default Cart;
