import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-white tracking-tighter">
              UDI <span className="text-cyan-400">STARLINK</span>
            </span>
            <p className="text-gray-500 text-sm mt-2">
              Revendedor Autorizado. Conectando o Brasil.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Termos</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
        <div className="mt-8 text-center md:text-left text-xs text-gray-600">
          &copy; {new Date().getFullYear()} UDI Starlink. Todos os direitos reservados. Imagens meramente ilustrativas.
        </div>
      </div>
    </footer>
  );
};