const HeroSection = () => {
  return (
    <>
    <section className="container mx-auto my-5 flex flex-col md:flex-row items-center bg-[#fff7ed]">
      <img alt="Specialty Coffee Bag" className="w-full md:w-1/2 h-auto rounded-md" height="300" src="https://storage.googleapis.com/a1aa/image/90Kehb1Qj33kTFQ6Kn6nBQDB6z57SQasr68R0RdpkPY.jpg" width="600"/>
      <div className="w-full md:w-1/2 text-center md:text-center px-3 md:pl-12 ">
        <h2 className="text-4xl font-bold mb-4">SPECIAL <span className="text-[#fb923c]">COFFEE</span></h2>
        <p className="text-gray-600 mb-6">Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales.</p>
        <button className="bg-transparent border-2 border-gray-800 text-gray-800 px-6 py-2 rounded hover:bg-gray-800 hover:text-white transition">
          ORDER NOW
        </button>
      </div>
    </section>
     <section className="container w-[60rem] mx-auto px-4 py-8 text-center">
     <p className="italic text-gray-700 text-xl">
     Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis
     convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales.
     </p>
   </section>
   </>
  );
};

export default HeroSection;
