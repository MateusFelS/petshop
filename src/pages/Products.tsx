import { useState } from 'react';
import ProductCard from '../components/Card'; // Importe o componente
import Roupas from '../assets/images/products/roupas.jpg';
import Roupas_2 from '../assets/images/products/roupas_2.jpg';
import Roupas_3 from '../assets/images/products/roupas_3.jpg';
import Roupas_4 from '../assets/images/products/roupas_4.jpg';
import Roupas_5 from '../assets/images/products/roupas_5.jpg';
import Coleiras from '../assets/images/products/coleiras.jpg';
import Limpeza from '../assets/images/products/limpeza.jpg';
import Racao from '../assets/images/products/racao.jpg';

const products = [
  { id: 1, name: 'Roupas', image: Roupas },
  { id: 2, name: 'Roupas', image: Roupas_2 },
  { id: 3, name: 'Roupas', image: Roupas_3 },
  { id: 4, name: 'Roupas', image: Roupas_4 },
  { id: 5, name: 'Roupas', image: Roupas_5 },
  { id: 6, name: 'Coleiras', image: Coleiras },
  { id: 7, name: 'Shampoo', image: Limpeza },
  {id: 8, name: 'Ração', image: Racao},
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div id="produtos" className="w-full bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Nossos Produtos 😸</h2>
      <div className="relative w-full max-w-[1200px] mx-auto">
         <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} card={product} />
          ))}
        </div>
        <div className="sm:hidden relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="w-full flex-shrink-0 p-4">
                <ProductCard key={product.id} card={product}/>
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
    </div>
  );
};

export default Products;
