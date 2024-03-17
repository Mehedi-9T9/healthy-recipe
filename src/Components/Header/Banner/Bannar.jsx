const Bannar = () => {
    return (
        <div className="container mx-auto  ">
            <div className="hero md:h-[600px] rounded-2xl" style={{backgroundImage: 'url(Bannar.png)'}}>

            <div className="hero-content text-center text-neutral-content ">
                <div className="md:w-[800px]">
                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-green-500 rounded-3xl text-xl font-semibold text-black ">Explore More</button>
                    <button className="btn btn-outline text-white border-white rounded-3xl ml-5 text-xl font-semibold">Our Feedback</button>
                </div>
             </div>
                </div>
        </div>
     );
}

export default Bannar;