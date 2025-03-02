const Header = () => {
  return (
    <header className="bg-white shadow-sm border-t-2 border-b relative">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <nav className="space-x-6">
          <a className="text-[#fb923c] hover:text-gray-900" href="#">Home</a>
          <a className="text-gray-600 hover:text-gray-900" href="#">Shop</a>
          <a className="text-gray-600 hover:text-gray-900" href="#">Blog</a>
          <a className="text-gray-600 hover:text-gray-900" href="#">Pages</a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input className="border rounded-full px-4 py-1 pr-10" placeholder="Search here..." type="text" />
            <i className="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"></i>
          </div>
          <a className="text-gray-600 hover:text-gray-900" href="#"><i className="far fa-heart"></i></a>
          <div className="relative">
            <a className="text-gray-600 hover:text-gray-900" href="#"><i className="fa fa-shopping-cart"></i></a>
            <span className="absolute top-0 -right-2 bg-red-500 text-white text-xs rounded-full px-1">3</span>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-4 bottom-1 flex justify-center transform -translate-y-1/2">
        <div className="bg-white rounded-full shadow-md">
          <img alt="Beanie Logo" className="rounded-full" height="70" src="https://storage.googleapis.com/a1aa/image/XdCkKEe-jpqJOgw4zFKYurMyWEVt7f4Lz9PIjlBk1ng.jpg" width="70"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
