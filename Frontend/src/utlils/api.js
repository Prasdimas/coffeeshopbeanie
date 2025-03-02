export const fetchProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/products/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };

  export const fetchTestimonials = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/testimonis/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return [];
    }
  };

export const fetchBlogs = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/blogs/');
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return [];
    }
  };
  