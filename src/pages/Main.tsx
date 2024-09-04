import Background from '../assets/images/background.png';

const Main = () => {
    return(
        <div id="main" className="relative bg-customBlue/70 w-full h-full">
            <img src={Background} className="object-cover" alt="Background"/>
            <div className="w-full h-full absolute top-0 left-0 bg flex items-center justify-center">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start">
                    <h1 id="main-h1" className="hidden sm:block sm:text-5xl text-2xl font-bold text-center">Família Quatro Patas</h1>
                    <h2 className="hidden sm:flex sm:text-5xl text-1xl pt-4 font-bold text-center lg:text-left">Petshop e Hospital Veterinário!</h2>
                </div>
            </div>
        </div>
    )
}

export default Main;
