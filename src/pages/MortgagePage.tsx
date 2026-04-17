import Icon from '@/components/ui/icon';

const banks = [
  'Сбербанк', 'ВТБ', 'Газпромбанк', 'Альфа-Банк', 'Россельхозбанк',
  'Открытие', 'Промсвязьбанк', 'Совкомбанк', 'Уралсиб', 'Абсолют Банк',
];

const coverTypes = [
  {
    icon: 'Home',
    title: 'Страхование имущества',
    desc: 'Защита квартиры или дома, заложенного по ипотеке. Обязательное требование банка.',
    required: true,
  },
  {
    icon: 'Heart',
    title: 'Страхование жизни',
    desc: 'Защита жизни и здоровья заёмщика. Снижает ставку по ипотеке на 0,5–2%.',
    required: false,
  },
  {
    icon: 'FileText',
    title: 'Страхование титула',
    desc: 'Защита права собственности на недвижимость. Актуально при покупке вторичного жилья.',
    required: false,
  },
];

export default function MortgagePage() {
  return (
    <div>
      {/* Page header */}
      <div className="hero-pattern text-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <span>Главная</span>
            <Icon name="ChevronRight" size={14} />
            <span className="text-white">Ипотека</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/15 rounded flex items-center justify-center">
              <Icon name="Home" size={26} className="text-gov-gold" />
            </div>
            <div>
              <h1 className="text-2xl font-black">Ипотечное страхование онлайн</h1>
              <p className="text-white/70 text-sm">Принимается всеми банками России · Онлайн оформление</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Coverage types */}
        <h2 className="text-xl font-black text-gov-blue section-title mb-6">Виды страхования</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {coverTypes.map((type, i) => (
            <div key={i} className="bg-white rounded border-l-4 border-gov-blue-mid border border-gray-200 p-5 shadow-sm">
              <div className="w-10 h-10 bg-gov-blue/10 rounded flex items-center justify-center mb-3">
                <Icon name={type.icon} fallback="Shield" size={20} className="text-gov-blue" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-gov-dark text-sm">{type.title}</h3>
                {type.required && (
                  <span className="text-xs bg-red-100 text-red-700 font-semibold px-2 py-0.5 rounded">Обязательно</span>
                )}
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Widget */}
          <div className="lg:col-span-2">
            <div className="widget-wrapper">
              <div className="widget-header">
                <Icon name="Home" size={18} className="text-gov-gold" />
                <span>Калькулятор и оформление ипотечного страхования</span>
              </div>
              <div className="widget-body">
                <iframe
                  src="https://ppdu.ru/9f12e860-20ad-445a-bf38-214798d47903"
                  style={{ width: '100%', border: 'none', minWidth: '320px', display: 'block', height: '800px' }}
                  id="ppdwiOffer"
                  scrolling="yes"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-5">
            {/* Banks */}
            <div className="bg-white rounded border border-gray-200 shadow-sm p-5">
              <h3 className="font-bold text-gov-blue mb-3 text-sm uppercase tracking-wide">Принимается в банках</h3>
              <div className="flex flex-wrap gap-2">
                {banks.map((bank, i) => (
                  <span key={i} className="text-xs bg-gov-gray text-gray-700 px-2 py-1 rounded border border-gray-200">
                    {bank}
                  </span>
                ))}
              </div>
            </div>

            {/* Savings */}
            <div className="bg-gov-gold/10 border border-gov-gold/30 rounded p-5">
              <Icon name="TrendingDown" size={22} className="text-gov-gold mb-2" />
              <div className="font-bold text-gov-dark mb-1">Сэкономьте на ставке</div>
              <div className="text-gray-700 text-xs leading-relaxed">
                Страхование жизни снижает ставку по ипотеке на <span className="font-bold text-gov-blue">0,5–2%</span> годовых, что экономит сотни тысяч рублей за срок кредита.
              </div>
            </div>

            {/* Image */}
            <div className="rounded overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/f3409363-2927-4b58-a630-76d43e50d7ef/files/d6efdb4e-c378-4187-aac5-d3f48b30130c.jpg"
                alt="Ипотечное страхование"
                className="w-full h-36 object-cover"
              />
            </div>

            {/* Hotline */}
            <div className="bg-gov-blue rounded p-5 text-white">
              <Icon name="Headphones" size={22} className="text-gov-gold mb-2" />
              <div className="font-semibold mb-1">Консультация бесплатно</div>
              <div className="text-white/70 text-xs mb-3">Подберём оптимальный полис под ваш банк</div>
              <a href="tel:88005553535" className="btn-primary block text-center justify-center">
                8-800-555-35-35
              </a>
            </div>
          </div>
        </div>
      </div>

      <script src="https://ppdu.ru/ppdw.js" async />
    </div>
  );
}