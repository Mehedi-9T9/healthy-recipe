const Bannar = () => {
    return (
        <div className="container mx-auto  ">
            <div className="hero h-[600px] " style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content ">
                <div className="w-[800px]">
                    <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary rounded-3xl">Get Started</button>
                    <button className="btn btn-primary ml-6 rounded-3xl">Get Started</button>
                </div>
             </div>
                </div>
        </div>
     );
}

export default Bannar;