import { useState } from "react";
import { AiOutlineHome, AiOutlineMenu, AiOutlinePhone } from "react-icons/ai";
import { MdOutlinePets, MdOutlineShoppingCart } from "react-icons/md";

const Slidenav = () => {
    const [nav, setNav] = useState(false);
    
    const handleNav = () => {
        setNav(!nav);
    }

    return(
        <div>
            <AiOutlineMenu onClick={handleNav} size={20} className="absolute top-4 right-4 z-[99] md:hidden"/>
            { nav && 
                <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                    <a onClick={handleNav} href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineHome size={20}/>
                        <span className="pl-4">Home</span>
                    </a>
                    <a onClick={handleNav} href="#produtos" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <MdOutlineShoppingCart size={20}/>
                        <span className="pl-4">Produtos</span>
                    </a>
                    <a onClick={handleNav} href="#servicos" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <MdOutlinePets size={20}/>
                        <span className="pl-4">Serviços</span>
                    </a>
                    <a onClick={handleNav} href="#sobre-nos" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlinePhone size={20}/>
                        <span className="pl-4">Sobre Nós</span>
                    </a>
                </div> 
            }
            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">
                    <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineHome size={30}/>
                    </a>
                    <a href="#produtos" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <MdOutlineShoppingCart size={30}/>
                    </a>
                    <a href="#servicos" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <MdOutlinePets size={30}/>
                    </a>
                    <a href="#sobre-nos" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlinePhone size={30}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Slidenav;
