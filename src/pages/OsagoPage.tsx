import Icon from '@/components/ui/icon';

const steps = [
  { num: '01', title: 'Введите данные', desc: 'Госномер автомобиля или данные из ПТС' },
  { num: '02', title: 'Выберите полис', desc: 'Сравните предложения 30+ страховщиков' },
  { num: '03', title: 'Оплатите онлайн', desc: 'Картой, СБП или через госуслуги' },
  { num: '04', title: 'Получите полис', desc: 'Электронный полис придёт на e-mail' },
];

const faqItems = [
  {
    q: 'Чем отличается электронное ОСАГО от бумажного?',
    a: 'Электронное ОСАГО (е-ОСАГО) полностью равнозначно бумажному. Полис регистрируется в базе РСА, его можно проверить онлайн. Распечатывать не обязательно — достаточно показать на экране телефона.',
  },
  {
    q: 'Когда начинает действовать ОСАГО?',
    a: 'Полис начинает действовать со дня, указанного при оформлении. Вы сами выбираете дату начала — она может быть сегодняшней или будущей.',
  },
  {
    q: 'Что нужно для оформления ОСАГО?',
    a: 'Паспорт, водительское удостоверение, ПТС или свидетельство о регистрации ТС, диагностическая карта (для авто старше 4 лет).',
  },
];

export default function OsagoPage() {
  return (
    <div>
      {/* Page header */}
      <div className="hero-pattern text-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <span>Главная</span>
            <Icon name="ChevronRight" size={14} />
            <span className="text-white">ОСАГО</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/15 rounded flex items-center justify-center">
              <Icon name="Car" size={26} className="text-gov-gold" />
            </div>
            <div>
              <h1 className="text-2xl font-black">Оформить ОСАГО онлайн</h1>
              <p className="text-white/70 text-sm">Электронный полис за 5 минут · Все страховщики</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Widget column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-gov-blue px-5 py-3 flex items-center gap-2">
                <Icon name="Shield" size={18} className="text-gov-gold" />
                <span className="text-white font-semibold text-sm">Калькулятор и оформление ОСАГО</span>
              </div>
              <div className="p-4">
                <iframe
                  src="https://b2c.pampadu.ru/index.html#549d4d35-44f8-4a37-bbd3-a3f354d3d8fc"
                  style={{ width: '100%', border: 'none', height: '650px', minWidth: '320px', overflow: 'hidden' }}
                  id="ppdwi"
                  scrolling="no"
                />
              </div>
            </div>
          </div>

          {/* Info column */}
          <div className="space-y-5">
            {/* Steps */}
            <div className="bg-white rounded border border-gray-200 shadow-sm p-5">
              <h3 className="font-bold text-gov-blue mb-4 text-sm uppercase tracking-wide">Как оформить</h3>
              <div className="space-y-4">
                {steps.map((step) => (
                  <div key={step.num} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gov-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gov-dark">{step.title}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's needed */}
            <div className="bg-gov-gray rounded border border-gray-200 p-5">
              <h3 className="font-bold text-gov-blue mb-3 text-sm uppercase tracking-wide">Что нужно</h3>
              <ul className="space-y-2">
                {['Паспорт владельца', 'Водительские права', 'ПТС / СТС автомобиля', 'Диагностическая карта'].map((doc, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <Icon name="CheckCircle" size={15} className="text-green-600 flex-shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div className="bg-gov-blue rounded p-5 text-white">
              <Icon name="Headphones" size={22} className="text-gov-gold mb-2" />
              <div className="font-semibold mb-1">Нужна помощь?</div>
              <div className="text-white/70 text-xs mb-3">Бесплатная консультация</div>
              <a href="tel:88005553535" className="block text-center bg-gov-gold text-gov-dark font-bold py-2 rounded text-sm hover:bg-yellow-400 transition-colors">
                8-800-555-35-35
              </a>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-10">
          <h2 className="text-xl font-black text-gov-blue section-title mb-6">Вопросы об ОСАГО</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white rounded border border-gray-200 p-5">
                <div className="font-semibold text-gov-dark mb-2 flex items-start gap-2">
                  <Icon name="HelpCircle" size={17} className="text-gov-blue flex-shrink-0 mt-0.5" />
                  {item.q}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-6">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <script src="https://b2c.pampadu.ru/ppdw.js" async />
    </div>
  );
}
