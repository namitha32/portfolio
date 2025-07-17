import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={`Software-Developer-Flat-Icon-Graphics-13375448-1.jpg`}
          alt="Your Profile"
          className="rounded-full w-64 h-64 object-cover shadow-lg transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="md:w-1/2 text-center md:text-left ">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in-down">
          Hello
        </h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 animate-fade-in-up">
          A Bit About Me
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0 animate-fade-in">
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you.
        </p>
        <div className="flex justify-center md:justify-start space-x-4 animate-fade-in delay-200">
          <Link href="/resume" passHref>
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 transform hover:-translate-y-1">
              Resume
            </button>
          </Link>
          <Link href="/projects" passHref>
            <button className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300 transform hover:-translate-y-1">
              Projects
            </button>
          </Link>
          <Link href="/contact" passHref>
            <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300 transform hover:-translate-y-1">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}