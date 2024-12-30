import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Services = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-blue-600">Our Services</h1>
        <ul className="mt-6 space-y-4 text-lg text-gray-700">
          <li className="p-4 bg-white shadow-md rounded-md hover:bg-blue-50">
            <h2 className="text-xl font-semibold">Web Development</h2>
            <p>We create modern, responsive websites tailored to your needs.</p>
          </li>
          <li className="p-4 bg-white shadow-md rounded-md hover:bg-blue-50">
            <h2 className="text-xl font-semibold">Mobile App Development</h2>
            <p>Build seamless and efficient mobile applications for Android and iOS.</p>
          </li>
          <li className="p-4 bg-white shadow-md rounded-md hover:bg-blue-50">
            <h2 className="text-xl font-semibold">UI/UX Design</h2>
            <p>Design intuitive and visually appealing user interfaces.</p>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
