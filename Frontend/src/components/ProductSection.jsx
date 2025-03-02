// const products = [
//     {
//       category: "New Arrivals",
//       items: [
//         { name: "Coconut Kiss", price: "$2.99", description: "A strong and concentrated shot of coffee.", image: "https://via.placeholder.com/50" },
//         { name: "Pumpkin Spice Surprise", price: "$3.49", description: "A shot of espresso diluted with hot water.", image: "https://via.placeholder.com/50" },
//         { name: "Toffee Temptation", price: "$3.99", description: "Equal parts of espresso, steamed milk, and foam, topped with cocoa.", image: "https://via.placeholder.com/50" },
//         { name: "Gingerbread Galore", price: "$4.49", description: "Creamy espresso with steamed milk and a thin layer of foam.", image: "https://via.placeholder.com/50" },
//         { name: "Salted Caramel Sip", price: "$3.99", description: "A nutty and indulgent latte with a hint of macadamia flavor.", image: "https://via.placeholder.com/50" },
//       ]
//     },
//     {
//       category: "Best Selling",
//       items: [
//         { name: "Cinnamon Swirl", price: "$2.99", description: "A strong and concentrated shot of coffee.", image: "https://via.placeholder.com/50" },
//         { name: "Hazelnut Heaven", price: "$3.49", description: "A shot of espresso diluted with hot water.", image: "https://via.placeholder.com/50" },
//         { name: "Peppermint Perk", price: "$3.99", description: "Equal parts of espresso, steamed milk, and foam, topped with cocoa.", image: "https://via.placeholder.com/50" },
//         { name: "Berry Blast", price: "$4.49", description: "Creamy espresso with steamed milk and a thin layer of foam.", image: "https://via.placeholder.com/50" },
//         { name: "Macadamia Nut Latte", price: "$3.99", description: "A nutty and indulgent latte with a hint of macadamia flavor.", image: "https://via.placeholder.com/50" },
//       ]
//     }
//   ];
import  { useState, useEffect } from 'react';
import { fetchProducts } from '../utlils/api'; // Make sure to import the fetch function



const FeatureSection = () => {
  // Image URLs (to be used for all products)
  const imageUrls = [
    "https://storage.googleapis.com/a1aa/image/j5rc4Q6ZcrTEVD-2CqHdSdBd2eGEI9o15w096EEk7EQ.jpg",
    "https://storage.googleapis.com/a1aa/image/GK8T2vpEzK1Z6inzkMSezUjkas4veSW1DpQKt_De6P0.jpg",
    "https://storage.googleapis.com/a1aa/image/dRH7u7Xznm6ul5Mb2tZKbNzBd-j6aekBUdhh8EmQLj0.jpg",
    "https://storage.googleapis.com/a1aa/image/dRH7u7Xznm6ul5Mb2tZKbNzBd-j6aekBUdhh8EmQLj0.jpg",
    "https://storage.googleapis.com/a1aa/image/j5rc4Q6ZcrTEVD-2CqHdSdBd2eGEI9o15w096EEk7EQ.jpg",
    "https://storage.googleapis.com/a1aa/image/GK8T2vpEzK1Z6inzkMSezUjkas4veSW1DpQKt_De6P0.jpg"
  ];

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products when the component mounts
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data); // Set the products to state
      setLoading(false); // Set loading to false after data is fetched
    };

    getProducts();
  }, []); // Empty array to run the effect only once after the initial render

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Loading...</p>
      </div>
    );
  }

  // Group products into categories (for simplicity, assuming all products are in one category)
  const categories = [
    {
      category: 'New Arrivals',
      items: products.slice(0, 5), // Show only the first 5 products
    },
    {
      category: 'Best Selling',
      items: products.slice(5, 10), // Show the next 5 products (adjust according to your data)
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl mb-4">{category.category}</h2>
            <ul>
              {category.items.map((item, idx) => {
                // For Best Selling, we reverse the imageUrls order
                const imageIndex = category.category === 'Best Selling' ? (imageUrls.length - 1 - idx) % imageUrls.length : idx % imageUrls.length;
                return (
                  <li key={idx} className="mb-4 flex items-center">
                    <img
                      src={imageUrls[imageIndex]}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div className="w-full">
                      {/* Name and Price aligned in a flex container */}
                      <h3 className="text-xl flex justify-between">
                        <span>{item.name}</span>
                        <span className="text-gray-500">{item.price}</span>
                      </h3>

                      {/* Description underneath */}
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </li>
                );
              })}
              {/* Optionally add a 'VIEW ALL' link */}
              {category.items.length > 5 && (
                <li>
                  <a href="#" className="hover:underline">VIEW ALL</a>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>

      {/* Subscribe section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">SUBSCRIBE US</h2>
        <p className="mb-4">Subscribe to our newsletter for discount codes and updates.</p>
        <div className="flex justify-center items-center space-x-4">
          <input
            type="email"
            placeholder="Write your email address here..."
            className="border border-gray-300 rounded-lg py-2 px-4 w-1/3"
          />
          <button className="border-2 border-black text-black font-bold py-2 px-6 rounded-lg hover:bg-black hover:text-white">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
