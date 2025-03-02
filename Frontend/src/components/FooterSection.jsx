
const FooterSection = () => {
  return (
    <div>
      {/* Follow Our Instagram Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl text-center mb-8">FOLLOW OUR INSTAGRAM #BEANIE</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <img
            alt="Instagram Image 1"
            className="w-full h-auto"
            src="https://storage.googleapis.com/a1aa/image/CBg4k_W1NgFiTbQfJtLO_0nrFonfXM7MyedVzis5ViY.jpg"
          />
          <img
            alt="Instagram Image 2"
            className="w-full h-auto"
            src="https://storage.googleapis.com/a1aa/image/lhWBuF_FPS8j6Zmf7hjJAKvbIrd-S41YwoGGkeeopNI.jpg"
          />
          <img
            alt="Instagram Image 3"
            className="w-full h-auto"
            src="https://storage.googleapis.com/a1aa/image/luJ230TWYAPVYVGLO7nAniJmhS43J4x-K8RhaWFIIN8.jpg"
          />
          <img
            alt="Instagram Image 4"
            className="w-full h-auto"
            src="https://storage.googleapis.com/a1aa/image/vMp8RMNkVgMkjdOhp3qGYOhx_EKA_Oa1CHY0OIpECTI.jpg"
          />
          <img
            alt="Instagram Image 5"
            className="w-full h-auto"
            src="https://storage.googleapis.com/a1aa/image/66YZ2CM9_IjFkGhCjs8tXMMIw4ODyEV93Be48m4GnO0.jpg"
          />
          <img
            alt="Instagram Image 6"
            className="w-full h-auto"
            src="https://storage.googleapis.com/a1aa/image/KB7Rx8jy4Grqbe7oF6E9VHNg7inXvdjEn7VoCIitL-A.jpg"
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl  mb-4">HOME</h3>
              <ul className="space-y-2">
                <li>
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    Shop
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4">SHOP</h3>
              <ul className="space-y-2">
                <li>
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    Shop Single
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4">TERMS & CONDITION</h3>
              <ul className="space-y-2">
                <li>
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    Services
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4">ADDRESS LOCATION</h3>
              <ul className="space-y-2">
                <li>
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    prasdimasetyo@gmail.com
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    +1 234 567 890
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600">© 2023 Beanie. Designed by Dimas Prasetyo</p>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
