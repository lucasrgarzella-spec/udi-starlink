import React, { useState } from 'react';
import { Product } from '../types';
import { Check, ShoppingCart, Tag, Plus, Minus, MessageCircle } from 'lucide-react';

const products: Product[] = [
  {
    id: 'kit-standard',
    name: 'Kit Starlink Padrão',
    description: 'Ideal para residências e uso diário. Equilíbrio perfeito entre desempenho e custo.',
    price: 1400,
    category: 'hardware',
    image: 'https://lh3.googleusercontent.com/d/1iCm8CRaZ_6AR1pENjZWlqVHWShqluaXB',
    features: ['Wifi 5 Dual Band', 'Resistente a intempéries', 'Autorientável', 'Até 250 Mbps']
  },
  {
    id: 'cabo-usbc-3m',
    name: 'Cabo USB-C 3M',
    description: 'Cabo conversor USB Tipo C para alimentação Starlink. Compatível com Power Banks.',
    price: 150,
    category: 'accessory',
    image: 'https://lh3.googleusercontent.com/d/1NT2Dm2DkRCvAC7g9WYNot3McFmrBRGEk',
    features: ['50% OFF', 'Conector USB-C', 'Comprimento 3 Metros', 'Alta Durabilidade']
  },
  {
    id: 'cabo-fuse-3m',
    name: 'Cabo Bateria Mini 3M',
    description: 'Cabo com suporte de fusível automotivo ATC/ATO para Starlink Mini. Conexão direta.',
    price: 150,
    category: 'accessory',
    image: 'https://lh3.googleusercontent.com/d/1x1zwSMopvgi_QNdWFpEOjAuX_g_HxJpV',
    features: ['50% OFF', 'Fusível ATC/ATO', 'Terminais Olhal', 'Para Starlink Mini']
  },
  {
    id: 'cabo-12v-2m',
    name: 'Cabo Veicular 12V 2M',
    description: 'Cabo adaptador veicular (acendedor) para Starlink Mini. Ideal para viagens.',
    price: 130,
    category: 'accessory',
    image: 'https://lh3.googleusercontent.com/d/1h8YNy3SBXDIxZVADgWcQ7XikQkSl1vkZ',
    features: ['50% OFF', 'Plug 12V Veicular', 'Comprimento 2 Metros', 'Para Starlink Mini']
  },
  {
    id: 'adaptador-dewalt-20v',
    name: 'Adaptador DeWalt 20V (Cabo 2M)',
    description: 'Adaptador carregador de bateria direto 20V para Starlink Mini. Com fusíveis e terminais. (Sem bateria)',
    price: 230,
    category: 'accessory',
    image: 'https://lh3.googleusercontent.com/d/1qFS4NXPkoFpYEV4AAAtqMjkEY5TmflBh',
    features: ['50% OFF', 'Para Bateria DeWalt', 'Cabo 2 Metros', 'Para Starlink Mini']
  }
];

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Fallback se a imagem do Google Drive falhar
    e.currentTarget.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop';
  };

  const updateQuantity = (id: string, delta: number) => {
    setQuantities(prev => {
      const current = prev[id] || 1;
      const newValue = current + delta;
      return { ...prev, [id]: newValue < 1 ? 1 : newValue };
    });
  };

  const getQuantity = (id: string) => quantities[id] || 1;

  const handleBuyClick = (product: Product, quantity: number) => {
    const totalPrice = product.price * quantity;
    const phoneNumber = "5534984124994";
    
    // Constrói a mensagem do WhatsApp
    const message = `Olá! Vim pelo site da UDI Starlink e gostaria de fazer um pedido:\n\n` +
      `📦 *Produto:* ${product.name}\n` +
      `🔢 *Quantidade:* ${quantity}\n` +
      `💰 *Valor Total:* R$ ${totalPrice.toLocaleString('pt-BR')}\n\n` +
      `Gostaria de saber os próximos passos para pagamento e entrega.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Abre em nova aba
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Nossos Produtos</h2>
            <p className="text-gray-400">Escolha o equipamento ideal para sua necessidade.</p>
          </div>
          
          <div className="flex space-x-2 mt-6 md:mt-0">
            {['all', 'hardware', 'accessory'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                  selectedCategory === cat 
                    ? 'bg-white text-slate-900' 
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {cat === 'all' ? 'Todos' : cat === 'hardware' ? 'Equipamentos' : 'Acessórios'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const hasDiscount = product.features.some(f => f.includes('OFF'));
            const quantity = getQuantity(product.id);
            const totalPrice = product.price * quantity;
            
            return (
              <div key={product.id} className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all group flex flex-col relative">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    onError={handleImageError}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full uppercase border border-slate-700">
                     {product.category === 'hardware' ? 'Hardware' : 'Acessório'}
                  </div>
                  {hasDiscount && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-lg flex items-center">
                      <Tag className="w-3 h-3 mr-1" />
                      50% OFF
                    </div>
                  )}
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 flex-1">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => {
                       const isOffTag = feature.includes('OFF');
                       return (
                        <div key={idx} className={`flex items-center text-sm ${isOffTag ? 'text-red-400 font-bold' : 'text-gray-300'}`}>
                          {isOffTag ? <Tag className="h-4 w-4 mr-2 flex-shrink-0" /> : <Check className="h-4 w-4 text-cyan-500 mr-2 flex-shrink-0" />}
                          {feature}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-900 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Valor Unitário</p>
                        <span className="text-2xl font-bold">
                          R$ {product.price.toLocaleString('pt-BR')}
                        </span>
                      </div>

                      <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-1">
                        <button 
                          onClick={() => updateQuantity(product.id, -1)}
                          className={`p-2 rounded-md transition-colors ${quantity <= 1 ? 'text-slate-700 cursor-not-allowed' : 'text-gray-400 hover:bg-slate-800 hover:text-white'}`}
                          disabled={quantity <= 1}
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-bold text-white select-none">{quantity}</span>
                        <button 
                          onClick={() => updateQuantity(product.id, 1)}
                          className="p-2 rounded-md text-gray-400 hover:bg-slate-800 hover:text-white transition-colors"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <button 
                      onClick={() => handleBuyClick(product, quantity)}
                      className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-500 transition-all active:scale-95 flex items-center justify-center space-x-2 group shadow-lg shadow-green-900/20"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>Comprar via WhatsApp</span>
                      {quantity > 1 && (
                        <>
                          <span className="text-green-200 mx-1">|</span>
                          <span>Total: R$ {totalPrice.toLocaleString('pt-BR')}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};