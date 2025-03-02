
const ContentSection = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Row 1 */}
        <div className="relative">
          <img
            alt="Bag of filter coffee with coffee beans spilled out"
            className="w-full h-full object-cover"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/hKsL0rs__pYJO_-fo9E3X_wdJX95f6-lHKjKMI-Wmrk.jpg"
            width="600"
          />
        </div>
        <div className="bg-white p-6 flex flex-col justify-center items-center text-center border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">INSTANT COFFEES</h2>
          <p className="text-gray-600 mb-4">
            Euismod eget id posuere nisi ut me duis in lectus elementum tincidunt augue ut neger in tincidunt amet et ultrices.
          </p>
          <a className="text-[#f97316] font-semibold" href="#">
            SHOP CATEGORY
          </a>
        </div>
        <div className="relative">
          <img
            alt="Coffee maker with a cup of coffee"
            className="w-full h-full object-cover"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/Em09sMB-c2ysd0-VC_RBF82Iigtv8vLv_S807vopq3k.jpg"
            width="600"
          />
        </div>
        <div className="bg-white p-6 flex flex-col justify-center items-center text-center border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">COFFEE ACCESSORIES</h2>
          <p className="text-gray-600 mb-4">
            Euismod eget id posuere nisi ut me duis in lectus elementum tincidunt augue ut neger in tincidunt amet et ultrices.
          </p>
          <a className="text-[#f97316] font-semibold" href="#">
            SHOP CATEGORY
          </a>
        </div>

        {/* Row 2 */}
        <div className="bg-white p-6 flex flex-col justify-center items-center text-center border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">COFFEE GIFT SETS</h2>
          <p className="text-gray-600 mb-4">
            Euismod eget id posuere nisi ut me duis in lectus elementum tincidunt augue ut neger in tincidunt amet et ultrices.
          </p>
          <a className="text-[#f97316] font-semibold" href="#">
            SHOP CATEGORY
          </a>
        </div>
        <div className="relative">
          <img
            alt="Jar of coffee scrub with a wooden spoon"
            className="w-full h-full object-cover"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/SirHXVn2Yzf_9PiNGjheFmomSW0QLCGe9Z51kQ8xbb0.jpg"
            width="600"
          />
        </div>
        <div className="bg-white p-6 flex flex-col justify-center items-center text-center border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">COFFEE MAKERS</h2>
          <p className="text-gray-600 mb-4">
            Euismod eget id posuere nisi ut me duis in lectus elementum tincidunt augue ut neger in tincidunt amet et ultrices.
          </p>
          <a className="text-[#f97316] font-semibold" href="#">
            SHOP CATEGORY
          </a>
        </div>
        <div className="relative">
          <img
            alt="Cup of coffee with a pumpkin on a wooden table"
            className="w-full h-full object-cover"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/T_bxdqvnrukEolmQDfpgh_9rBvW_XpwzfINwJclT9FU.jpg"
            width="600"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
