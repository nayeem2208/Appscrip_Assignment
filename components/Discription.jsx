import '../styles/Header.css'

export default function Description(){
    return (
        <div className="description text-slate-900">
            <div className=" lg:w-3/6">
                <h3 className='text-left text-xs text-gray-500 mx-2 md:hidden' >HOME | <span className='text-slate-900'>SHOP</span></h3>
            <h2 className='mt-4 md:mt-2 lg:mt-0 text-lg sm:text-xl md:text-2xl '>DISCOVER OUR PRODUCTS</h2>
            <p className='text-xs md:text-base mt-2 md:mt-0'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
            </div>
        </div>
    )
}