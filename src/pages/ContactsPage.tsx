import Icon from '@/components/ui/icon';

const offices = [
  {
    city: 'Москва (Главный офис)',
    address: 'ул. Тверская, д. 1, офис 301',
    phone: '+7 (495) 555-35-35',
    hours: 'Пн–Пт: 9:00–18:00',
    metro: 'Охотный ряд',
  },
  {
    city: 'Санкт-Петербург',
    address: 'Невский проспект, д. 50, офис 112',
    phone: '+7 (812) 555-35-35',
    hours: 'Пн–Пт: 9:00–18:00',
    metro: 'Гостиный двор',
  },
  {
    city: 'Екатеринбург',
    address: 'ул. Ленина, д. 25, офис 201',
    phone: '+7 (343) 555-35-35',
    hours: 'Пн–Пт: 9:00–18:00',
    metro: 'пл. 1905 года',
  },
];

export default function ContactsPage() {
  return (
    <div>
      <div className="hero-pattern text-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <span>Главная</span>
            <Icon name="ChevronRight" size={14} />
            <span className="text-white">Контакты</span>
          </div>
          <h1 className="text-2xl font-black">Контакты</h1>
          <p className="text-white/70 text-sm mt-1">Мы всегда готовы помочь</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Hotline */}
        <div className="bg-gov-blue rounded p-6 text-white mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/15 rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="Phone" size={26} className="text-gov-gold" />
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight">8-800-555-35-35</div>
              <div className="text-white/70 text-sm">Бесплатно по России · Круглосуточно</div>
            </div>
          </div>
          <a
            href="tel:88005553535"
            className="bg-gov-gold text-gov-dark font-bold px-8 py-3 rounded text-sm hover:bg-yellow-400 transition-colors whitespace-nowrap"
          >
            Позвонить
          </a>
        </div>

        {/* Contact channels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {[
            { icon: 'Mail', label: 'E-mail', value: 'info@gosstrakh.ru', note: 'Ответ в течение 24 часов' },
            { icon: 'MessageCircle', label: 'Онлайн-чат', value: 'На сайте', note: 'Пн–Пт: 9:00–21:00' },
            { icon: 'Send', label: 'Telegram', value: '@gosstrakh', note: 'Пн–Пт: 9:00–21:00' },
          ].map((ch, i) => (
            <div key={i} className="bg-white rounded border border-gray-200 p-5 text-center shadow-sm">
              <div className="w-12 h-12 bg-gov-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name={ch.icon} fallback="Mail" size={22} className="text-gov-blue" />
              </div>
              <div className="font-bold text-gov-dark text-sm">{ch.label}</div>
              <div className="text-gov-blue-mid font-semibold text-sm mt-1">{ch.value}</div>
              <div className="text-gray-500 text-xs mt-0.5">{ch.note}</div>
            </div>
          ))}
        </div>

        {/* Offices */}
        <h2 className="text-xl font-black text-gov-blue section-title mb-6">Офисы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {offices.map((office, i) => (
            <div key={i} className="bg-white rounded border border-gray-200 p-5 shadow-sm service-card">
              <h3 className="font-bold text-gov-dark mb-4 text-sm">{office.city}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="MapPin" size={15} className="text-gov-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-xs">{office.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={15} className="text-gov-blue flex-shrink-0" />
                  <span className="text-gray-700 text-xs">{office.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={15} className="text-gov-blue flex-shrink-0" />
                  <span className="text-gray-700 text-xs">{office.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Train" size={15} className="text-gov-gold flex-shrink-0" />
                  <span className="text-gray-700 text-xs">м. {office.metro}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback form */}
        <div className="bg-gov-gray rounded border border-gray-200 p-6">
          <h2 className="text-lg font-black text-gov-blue section-title mb-5">Написать нам</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-gov-dark mb-1.5">Ваше имя</label>
              <input
                type="text"
                placeholder="Иван Иванов"
                className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gov-blue bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gov-dark mb-1.5">Телефон или e-mail</label>
              <input
                type="text"
                placeholder="+7 (___) ___-__-__"
                className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gov-blue bg-white"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gov-dark mb-1.5">Сообщение</label>
            <textarea
              rows={4}
              placeholder="Опишите ваш вопрос или проблему..."
              className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gov-blue bg-white resize-none"
            />
          </div>
          <button className="btn-gov px-7 py-2.5 rounded text-sm">
            Отправить сообщение
          </button>
          <p className="text-gray-500 text-xs mt-3">
            Нажимая «Отправить», вы соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </div>
    </div>
  );
}
