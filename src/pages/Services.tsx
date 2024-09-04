import { useState } from 'react';

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const servicesList = [
        { id: 1, name: "Consulta Veterinária", description: "Consultas regulares com nossos veterinários." },
        { id: 2, name: "Vacinação", description: "Programa completo de vacinação para todos os tipos de animais." },
        { id: 3, name: "Cirurgias", description: "Realizamos cirurgias de pequeno a grande porte." },
        { id: 4, name: "Banho e Tosa", description: "Serviços completos de banho e tosa para deixar seu pet lindo e saudável." },
        { id: 5, name: "Hotel para Animais de Estimação", description: "Acomodação confortável para quando você precisa viajar." },
        { id: 6, name: "Treinamento de Obediência", description: "Treinamentos específicos para desenvolver obediência e comportamento." },
        { id: 7, name: "Pet Shop", description: "Loja com uma grande variedade de produtos para pets." },
        { id: 8, name: "Clínica de Emergência 24h", description: "Atendimento emergencial disponível 24 horas por dia." }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesList.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + servicesList.length) % servicesList.length);
    };

    return (
        <div id="servicos" className="w-full h-full bg-customBlue p-20">
            <h2 className="text-4xl font-bold text-center mb-8">Serviços 🐾</h2>

            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
                {servicesList.map((service) => (
                    <div key={service.id} className="bg-white shadow-lg rounded-lg p-4 m-2 cursor-pointer hover:scale-105 transform transition duration-300">
                        <h3 className="text-xl font-semibold break-words">{service.name}</h3>
                        <p className="text-gray-700 mt-2 break-words">{service.description}</p>
                    </div>
                ))}
            </div>

            <div className="md:hidden relative w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {servicesList.map((service) => (
                        <div key={service.id} className="w-full flex-shrink-0 p-4">
                            <div className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:scale-105 transform transition duration-300">
                                <h3 className="text-xl font-semibold break-words">{service.name}</h3>
                                <p className="text-gray-700 mt-2 break-words">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
                    onClick={prevSlide}
                >
                    &#10094;
                </button>
                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
                    onClick={nextSlide}
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default Services;
