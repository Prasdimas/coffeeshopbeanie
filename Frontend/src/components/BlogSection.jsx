import { fetchBlogs } from '../utlils/api';
import { useState, useEffect } from 'react';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch the blog data when the component mounts
    const getBlogs = async () => {
      const data = await fetchBlogs();
      setBlogs(data);  // Update state with the fetched blogs
    };

    getBlogs();  // Call the function to fetch blogs
  }, []);  // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl text-center mb-8">Latest Coffee Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-700">{blog.content.substring(0, 150)}...</p>
            </div>
          ))
        ) : (
          <p>Loading blogs...</p>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
