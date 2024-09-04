import { useState } from 'react';
import Caso_1 from '../assets/images/cases/caso_1.jpg';
import Caso_2 from '../assets/images/cases/caso_2.jpg';
import Caso_3 from '../assets/images/cases/caso_3.jpg';
import Caso_4 from '../assets/images/cases/caso_4.jpg';
import Card from '../components/Card';

const AboutUs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const successStories = [
        { 
            id: 1, 
            name: "Layla", 
            image: Caso_1,
            testimonial: "Graças ao cuidado e carinho da equipe, minha Layla está mais saudável e feliz do que nunca!" 
        },
        { 
            id: 2, 
            name: "Maia", 
            image: Caso_2,
            testimonial: "O atendimento da Família Quatro Patas foi fundamental para a recuperação da Maia. Somos muito gratos!" 
        },
        { 
            id: 3, 
            name: "Paçoca", 
            image: Caso_3,
            testimonial: "Minha Paçoca foi tratado com tanto amor e dedicação, que só tenho a agradecer!" 
        },
        { 
            id: 4, 
            name: "Pedro", 
            image: Caso_4,
            testimonial: "O Pedro recebeu o melhor cuidado possível aqui. Recomendo a todos que amam seus pets!" 
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % successStories.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + successStories.length) % successStories.length);
    };

    return (
        <div id="sobre-nos" className="w-full h-full bg-gray-100 p-20 text-justify md:text-start">
            <h2 className="text-4xl font-bold text-center mb-8">Sobre Nós 🐶</h2>
            <p className="text-lg mb-4">
                A Família Quatro Patas é um hospital veterinário e pet shop dedicado ao bem-estar e à saúde dos seus animais de estimação. Nossa equipe de profissionais apaixonados trabalha incansavelmente para proporcionar cuidados excepcionais e amorosos.
            </p>
            <p className="text-lg mb-4">
                Nossa missão é ser um farol de confiança e compaixão na vida dos animais e de suas famílias, oferecendo serviços de alta qualidade que promovem uma vida longa e feliz para todos os pets.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Valores</h3>
            <ul className="list-disc pl-8 mb-4">
                <li>Comprometimento com a excelência</li>
                <li>Cuidado e respeito pelos animais</li>
                <li>Integridade e transparência</li>
                <li>Inovação contínua</li>
            </ul>
            <h3 className="text-2xl font-semibold mb-4">Endereços e Contatos</h3>
            <ul className="list-disc pl-8 mb-4">
                <li>🚩 Endereço: Rua Anacleto Gonçalves Neves, n°112, Fartura - SP</li>
                <li>👩‍⚕️ Médica Veterinária: Ana Carolina Watanabe</li>
                <li>📞 Telefone: (14) 996858486</li>
                <li>✉ Email: ac.watanabe@outlook.com</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mb-4">Horários de Atendimento</h3>
            <ul className="list-disc pl-8 mb-4">
                <li>Segunda à Sexta: 9:00 - 18:00</li>
                <li>Sábado: 9:00 - 12:00</li>
                <li>Domingo: Fechado</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Destaques</h3>
            <p className="text-lg mb-4">Conheça algumas das histórias de sucesso e momentos especiais compartilhados com nossos clientes e pacientes:</p>
            <h3 className="text-2xl font-semibold mb-4">Histórias de Sucesso</h3>

            <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-4">
                {successStories.map((story) => (
                    <Card key={story.id} card={story} />
                ))}
            </div>

            <div className="md:hidden relative w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {successStories.map((story) => (
                        <div key={story.id} className="w-full flex-shrink-0 p-4">
                            <Card card={story} />
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

export default AboutUs;
