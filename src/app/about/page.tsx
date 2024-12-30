import Navbar from '../components/navbar';
import Footer from '../components/footer';


const About = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8 bg-gray-100">
        <h1 className="text-4xl font-bold text-center text-blue-600">About Us</h1>
        <p className="mt-4 text-lg text-center">We are a team of passionate developers building modern web applications.</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
