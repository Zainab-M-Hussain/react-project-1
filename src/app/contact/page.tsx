import Navbar from "../components/navbar";
import Footer from "../components/footer";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-blue-600">Contact Us</h1>
        <form className="max-w-lg mx-auto mt-6 bg-white p-6 shadow-md rounded-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
