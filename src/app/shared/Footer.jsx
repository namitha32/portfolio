import React from 'react';
import Link from 'next/link'; 
import { FaPhone, FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className=" text-black py-10 px-6 left-0 right-0 h-screen bottom-0 border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 justify-center items-center">
 
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-lg font-semibold mb-2 flex items-center">
            <FaPhone className="mr-2" /> Phone
          </span>
          <p className="text-md">+91 123-123-1234</p>
        </div>


        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-lg font-semibold mb-2 flex items-center">
            <FaEnvelope className="mr-2" /> Email
          </p>
          <p className="text-md">info@example.com</p> 
        </div>


        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-lg font-semibold  mb-2">Follow Me</p>
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
              <FaLinkedin size={24} />
              <span className="sr-only">LinkedIn</span> 
            </Link>
            <Link href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <FaTwitter size={24} />
              <span className="sr-only">Twitter</span> 
            </Link>
           
          </div>
        </div>

   
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} By Namitha.</p> 
          <p className="text-sm">Powered by Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;