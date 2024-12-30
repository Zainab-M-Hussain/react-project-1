import Navbar from '../app/components/navbar';
import Footer from '../app/components/footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-4xl font-bold text-center">Welcome to My Next.js Project</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
