


import { useState, useEffect } from 'react';
import { fetchProducts } from '../utlils/api'; 

const ShopSection = () => {
  // const coffeeItems = [
  //   { name: "CARAMELICIOUS", price: "$29.00", img: "https://storage.googleapis.com/a1aa/image/j5rc4Q6ZcrTEVD-2CqHdSdBd2eGEI9o15w096EEk7EQ.jpg" },
  //   { name: "HAZELNUT HEAVEN", price: "$29.00", img: "https://storage.googleapis.com/a1aa/image/GK8T2vpEzK1Z6inzkMSezUjkas4veSW1DpQKt_De6P0.jpg" },
  //   { name: "MAPLE MAGIC", price: "$29.00", img: "https://storage.googleapis.com/a1aa/image/dRH7u7Xznm6ul5Mb2tZKbNzBd-j6aekBUdhh8EmQLj0.jpg" },
  //   { name: "ESPRESSO BLISS", price: "$25.00", img: "https://storage.googleapis.com/a1aa/image/dRH7u7Xznm6ul5Mb2tZKbNzBd-j6aekBUdhh8EmQLj0.jpg" },
  //   { name: "MOCHA MYSTERY", price: "$32.00", img: "https://storage.googleapis.com/a1aa/image/j5rc4Q6ZcrTEVD-2CqHdSdBd2eGEI9o15w096EEk7EQ.jpg" },
  //   { name: "LATTE LUXURY", price: "$27.00", img: "https://storage.googleapis.com/a1aa/image/GK8T2vpEzK1Z6inzkMSezUjkas4veSW1DpQKt_De6P0.jpg" }
  // ];
  // Static image URLs for the coffee items
  const imageUrls = [
    "https://storage.googleapis.com/a1aa/image/j5rc4Q6ZcrTEVD-2CqHdSdBd2eGEI9o15w096EEk7EQ.jpg",
    "https://storage.googleapis.com/a1aa/image/GK8T2vpEzK1Z6inzkMSezUjkas4veSW1DpQKt_De6P0.jpg",
    "https://storage.googleapis.com/a1aa/image/dRH7u7Xznm6ul5Mb2tZKbNzBd-j6aekBUdhh8EmQLj0.jpg",
    "https://storage.googleapis.com/a1aa/image/dRH7u7Xznm6ul5Mb2tZKbNzBd-j6aekBUdhh8EmQLj0.jpg",
    "https://storage.googleapis.com/a1aa/image/j5rc4Q6ZcrTEVD-2CqHdSdBd2eGEI9o15w096EEk7EQ.jpg",
    "https://storage.googleapis.com/a1aa/image/GK8T2vpEzK1Z6inzkMSezUjkas4veSW1DpQKt_De6P0.jpg"
  ];

  const itemsPerPage = 3;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch products data when the component is mounted
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the products array for the current page
  const currentItems = products.slice(startIndex, endIndex);

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl text-left">SHOP BEST COFFEE</h2>
        {/* Pagination Icons */}
        <div className="flex space-x-2">
          <button 
            onClick={prevPage} 
            className="px-2 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 disabled:opacity-100"
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          <button 
            onClick={nextPage} 
            className="px-2 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 disabled:opacity-100"
            disabled={currentPage === Math.ceil(products.length / itemsPerPage)}
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Loop through the current items to display */}
        {currentItems.map((item, index) => (
          <div key={index} className="text-left">
            {/* Use the image URL from the static list */}
            <img alt={item.name} className="w-full h-auto mb-4 rounded-md" height="300" src={imageUrls[index % imageUrls.length]} width="300" />
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopSection;
