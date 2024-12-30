import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-blue-600">Our Portfolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="p-4 bg-white shadow-md rounded-md hover:bg-blue-50">
            <h2 className="text-xl font-semibold">Project 1</h2>
            <p>A modern e-commerce website built with React and Tailwind CSS.</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-md hover:bg-blue-50">
            <h2 className="text-xl font-semibold">Project 2</h2>
            <p>An interactive mobile app for managing personal finances.</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-md hover:bg-blue-50">
            <h2 className="text-xl font-semibold">Project 3</h2>
            <p>A portfolio website showcasing creative work and skills.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
