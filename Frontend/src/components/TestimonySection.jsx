
import { useState, useEffect } from 'react';
import { fetchTestimonials } from '../utlils/api'; 
  // Sample testimonials data
  // const testimonials = [
  //   {
  //     text: "Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales.",
  //     author: "John Doe",
  //   },
  //   {
  //     text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  //     author: "Jane Smith",
  //   },
  //   {
  //     text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.",
  //     author: "Mike Taylor",
  //   },
  //   {
  //     text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  //     author: "Sarah Johnson",
  //   }
  // ];

  
  const TestimonySection = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
    // Fetch testimonials data when the component is mounted
    useEffect(() => {
      const getTestimonials = async () => {
        const data = await fetchTestimonials();
        setTestimonials(data);
      };
      getTestimonials();
    }, []);
  
    // Function to go to the next testimonial
    const nextTestimonial = () => {
      if (currentTestimonialIndex < testimonials.length - 1) {
        setCurrentTestimonialIndex(currentTestimonialIndex + 1);
      }
    };
  
    // Function to go to the previous testimonial
    const prevTestimonial = () => {
      if (currentTestimonialIndex > 0) {
        setCurrentTestimonialIndex(currentTestimonialIndex - 1);
      }
    };
  
    // Show loading if testimonials are being fetched
    if (testimonials.length === 0) {
      return <div>Loading testimonials...</div>;
    }
  
    return (
      <section className="container mx-auto px-4 py-12 relative">
        {/* Left Navigation Button (Prev) */}
        {currentTestimonialIndex > 0 && (
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-4 w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-700"
          >
            &lt;
          </button>
        )}
  
        <section className="container w-[60rem] mx-auto px-4 py-8 text-center">
          <div>
            <p className="italic text-gray-700 text-xl mb-4">
              "{testimonials[currentTestimonialIndex].message}"
            </p>
            <p className="font-semibold text-lg text-gray-800">
              - {testimonials[currentTestimonialIndex].name}
            </p>
          </div>
        </section>
  
        {/* Right Navigation Button (Next) */}
        {currentTestimonialIndex < testimonials.length - 1 && (
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-4 w-12 h-12 rounded-full hover:bg-gray-700 flex items-center justify-center"
          >
            &gt;
          </button>
        )}
      </section>
    );
  };
  
  export default TestimonySection;
  