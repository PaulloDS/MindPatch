import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/logo-2.png" width={40} height={40} alt="Logo" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                DevJourney
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transformando a forma como desenvolvedores aprendem e evoluem.
              Junte-se à nossa comunidade e acelere sua carreira.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Plataforma</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors duration-300"
                >
                  Desafios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors duration-300"
                >
                  Ranking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors duration-300"
                >
                  Comunidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors duration-300"
                >
                  Certificações
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Suporte</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors duration-300"
                >
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors duration-300"
                >
                  Documentação
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors duration-300"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors duration-300"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 DevJourney. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1 mt-4 md:mt-0">
            Feito com <Heart className="w-4 h-4 text-red-500" /> para
            desenvolvedores
          </p>
        </div>
      </div>
    </footer>
  );
}
