import Icon from '@/components/ui/icon';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="gov-footer text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-gov-blue-mid rounded flex items-center justify-center">
                <Icon name="Shield" size={20} className="text-white" />
              </div>
              <span className="text-lg font-black font-golos">ГосСтрах</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Официальный страховой портал. Лицензия ЦБ РФ № СИ-1234 от 01.01.2020
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                <Icon name="MessageCircle" size={14} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                <Icon name="Send" size={14} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                <Icon name="Phone" size={14} className="text-white" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gov-gold font-semibold mb-3 text-sm uppercase tracking-wide">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => onNavigate('osago')} className="hover:text-white transition-colors text-left">
                  ОСАГО онлайн
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('mortgage')} className="hover:text-white transition-colors text-left">
                  Ипотечное страхование
                </button>
              </li>
              <li><span className="cursor-pointer hover:text-white transition-colors">Страхование имущества</span></li>
              <li><span className="cursor-pointer hover:text-white transition-colors">Страхование жизни</span></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-gov-gold font-semibold mb-3 text-sm uppercase tracking-wide">Информация</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left">
                  О компании
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('documents')} className="hover:text-white transition-colors text-left">
                  Документы
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors text-left">
                  Часто задаваемые вопросы
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contacts')} className="hover:text-white transition-colors text-left">
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-gov-gold font-semibold mb-3 text-sm uppercase tracking-wide">Контакты</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Icon name="Phone" size={14} className="text-gov-gold mt-0.5 flex-shrink-0" />
                <span>8-800-555-35-35<br /><span className="text-xs text-gray-500">Бесплатно, 24/7</span></span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Mail" size={14} className="text-gov-gold mt-0.5 flex-shrink-0" />
                <span>info@gosstrakh.ru</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={14} className="text-gov-gold mt-0.5 flex-shrink-0" />
                <span>г. Москва, ул. Тверская, д. 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© 2024 ГосСтрах. Все права защищены.</span>
          <div className="flex items-center gap-4">
            <span className="cursor-pointer hover:text-gray-300 transition-colors">Политика конфиденциальности</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-gray-300 transition-colors">Пользовательское соглашение</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
