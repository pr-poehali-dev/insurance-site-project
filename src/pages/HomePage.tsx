import Icon from '@/components/ui/icon';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const services = [
  {
    id: 'osago',
    icon: 'Car',
    title: 'ОСАГО',
    description: 'Оформите полис ОСАГО онлайн за 5 минут. Электронный полис на e-mail сразу после оплаты.',
    badge: 'Онлайн за 5 мин',
    color: 'border-gov-blue-mid',
  },
  {
    id: 'mortgage',
    icon: 'Home',
    title: 'Ипотека',
    description: 'Страхование ипотечной недвижимости и жизни заёмщика. Принимается всеми банками России.',
    badge: 'Все банки',
    color: 'border-gov-gold',
  },
];

const advantages = [
  { icon: 'Clock', title: 'Оформление за 5 минут', desc: 'Без визита в офис, без очередей' },
  { icon: 'FileCheck', title: 'Официальный полис', desc: 'Регистрация в РСА и ЦБ РФ' },
  { icon: 'BadgeCheck', title: 'Гарантия выплат', desc: 'Лицензия ЦБ РФ № СИ-1234' },
  { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Звонок бесплатный: 8-800-555-35-35' },
  { icon: 'Percent', title: 'Лучшая цена', desc: 'Сравниваем предложения 30+ страховщиков' },
  { icon: 'Smartphone', title: 'Полис на e-mail', desc: 'Мгновенно после оплаты' },
];

const stats = [
  { value: '15+', label: 'лет на рынке' },
  { value: '2,4 млн', label: 'выданных полисов' },
  { value: '98%', label: 'клиентов довольны' },
  { value: '30+', label: 'страховых компаний' },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="hero-pattern text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="animate-fadeInUp">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded px-3 py-1.5 text-sm mb-5">
                <Icon name="Shield" size={14} className="text-gov-gold" />
                <span>Официальный страховой портал</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-black leading-tight mb-4">
                Страхование ОСАГО<br />и Ипотеки онлайн
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Оформите полис за 5 минут не выходя из дома. 
                Официальные полисы с регистрацией в ЦБ РФ и РСА.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('osago')}
                  className="bg-gov-gold text-gov-dark font-bold px-6 py-3 rounded text-sm hover:bg-yellow-400 transition-colors flex items-center gap-2"
                >
                  <Icon name="Car" size={18} />
                  Оформить ОСАГО
                </button>
                <button
                  onClick={() => onNavigate('mortgage')}
                  className="bg-white/15 border border-white/30 text-white font-semibold px-6 py-3 rounded text-sm hover:bg-white/25 transition-colors flex items-center gap-2"
                >
                  <Icon name="Home" size={18} />
                  Страхование ипотеки
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://cdn.poehali.dev/projects/f3409363-2927-4b58-a630-76d43e50d7ef/files/0f31daf2-1154-49d9-b111-96d2df781f9e.jpg"
                alt="Страховая компания"
                className="rounded-lg shadow-2xl w-full object-cover h-72 opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gov-blue-mid py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center text-white py-2">
                <div className="text-2xl font-black text-gov-gold">{s.value}</div>
                <div className="text-sm text-white/75 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 px-4 bg-gov-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-gov-blue section-title mb-8">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white service-card rounded p-6 cursor-pointer ${service.color}`}
                onClick={() => onNavigate(service.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gov-blue/10 rounded flex items-center justify-center">
                    <Icon name={service.icon} fallback="Shield" size={24} className="text-gov-blue" />
                  </div>
                  <span className="text-xs bg-gov-gold/20 text-gov-dark font-semibold px-2 py-1 rounded">
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gov-blue mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-gov-blue-mid font-semibold text-sm">
                  <span>Оформить онлайн</span>
                  <Icon name="ArrowRight" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-gov-blue section-title mb-8">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((adv, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded border border-gray-100 hover:border-gov-blue/30 transition-colors">
                <div className="w-10 h-10 bg-gov-blue/10 rounded flex items-center justify-center flex-shrink-0">
                  <Icon name={adv.icon} fallback="Shield" size={20} className="text-gov-blue" />
                </div>
                <div>
                  <div className="font-semibold text-gov-dark text-sm">{adv.title}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{adv.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gov-blue py-12 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Icon name="Shield" size={40} className="text-gov-gold mx-auto mb-4" />
          <h2 className="text-2xl font-black mb-3">Оформите полис прямо сейчас</h2>
          <p className="text-white/75 mb-6 text-sm">Электронный полис придёт на e-mail сразу после оплаты</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => onNavigate('osago')}
              className="bg-gov-gold text-gov-dark font-bold px-7 py-3 rounded text-sm hover:bg-yellow-400 transition-colors"
            >
              ОСАГО
            </button>
            <button
              onClick={() => onNavigate('mortgage')}
              className="border-2 border-white text-white font-bold px-7 py-3 rounded text-sm hover:bg-white hover:text-gov-blue transition-colors"
            >
              Ипотека
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}