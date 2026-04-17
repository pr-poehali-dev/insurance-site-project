import { useState } from 'react';
import Icon from '@/components/ui/icon';

const navItems = [
  { id: 'home', label: 'Главная' },
  { id: 'osago', label: 'ОСАГО' },
  { id: 'mortgage', label: 'Ипотека' },
  { id: 'about', label: 'О компании' },
  { id: 'faq', label: 'FAQ' },
  { id: 'documents', label: 'Документы' },
  { id: 'contacts', label: 'Контакты' },
];

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ activePage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top government stripe */}
      <div className="gov-stripe py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Icon name="Phone" size={12} />
              8-800-555-35-35
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Icon name="Mail" size={12} />
              info@gosstrakh.ru
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-white/80">
            <span>Пн–Пт: 9:00–18:00</span>
            <span className="hidden sm:block">|</span>
            <span className="hidden sm:block">Горячая линия: 24/7</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white border-b-2 border-gov-blue shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 bg-gov-blue rounded flex items-center justify-center flex-shrink-0">
              <Icon name="Shield" size={24} className="text-white" />
            </div>
            <div className="text-left">
              <div className="text-gov-blue font-black text-xl leading-tight tracking-tight font-golos">
                ГосСтрах
              </div>
              <div className="text-[11px] text-gray-500 leading-tight">
                Страховой портал России
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-sm ${
                  activePage === item.id
                    ? 'text-gov-gold border-b-2 border-gov-gold bg-gov-blue/5'
                    : 'text-gray-700 hover:text-gov-blue hover:bg-gov-blue/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gov-blue"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white mobile-menu-open">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
                className={`w-full text-left px-5 py-3 text-sm font-medium border-b border-gray-50 ${
                  activePage === item.id
                    ? 'text-gov-blue bg-gov-blue/5 border-l-4 border-l-gov-gold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
