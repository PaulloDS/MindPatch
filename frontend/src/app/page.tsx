import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <nav className="px-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-green-600"><Image src="/logo-2.png" width={100} height={100} alt="Logo"/></div>
          <div className="bg-white py-5 px-10 rounded-full shadow-md outline-1 outline-gray-300">
            <ul className="flex space-x-10 font-semibold">
              <li>
                <a href="" className="text-gray-600 hover:text-green-800">
                  Sobre
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-green-800">
                  Features
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-green-800">
                  Comunidade
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-green-800">
                  Demo
                </a>
              </li>
            </ul>
          </div>
          <a
            href="/auth/sign-in"
            className="p-4 bg-linear-to-r from-green-700 to-green-500 shadow-md drop-shadow-md text-white font-semibold px-8 rounded-full hover:scale-105 transition-all duration-300"
          >
            Divirta-se
          </a>
        </div>
      </nav>
      <HeroSection />
    </div>
  );
}
