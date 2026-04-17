import Icon from '@/components/ui/icon';

const features = [
  { icon: 'CreditCard', title: 'Дебетовые карты', desc: 'Кэшбэк до 10%, бесплатное обслуживание' },
  { icon: 'Landmark', title: 'Кредитные карты', desc: 'Льготный период до 120 дней' },
  { icon: 'Banknote', title: 'Кредиты наличными', desc: 'От 4,9% годовых, решение за 2 минуты' },
  { icon: 'PiggyBank', title: 'Вклады и накопления', desc: 'До 18% годовых в надёжных банках' },
  { icon: 'ArrowLeftRight', title: 'Рефинансирование', desc: 'Снизьте ставку по действующим кредитам' },
  { icon: 'Wallet', title: 'Рассрочка', desc: 'Без переплат, без первоначального взноса' },
];

export default function MoneyPage() {
  return (
    <div>
      {/* Page header */}
      <div className="hero-pattern text-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <span>Главная</span>
            <Icon name="ChevronRight" size={14} />
            <span className="text-white">Деньги онлайн</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/15 rounded flex items-center justify-center">
              <Icon name="CreditCard" size={26} className="text-gov-gold" />
            </div>
            <div>
              <h1 className="text-2xl font-black">Деньги онлайн — Банковские карты</h1>
              <p className="text-white/70 text-sm">Карты, кредиты, вклады — лучшие предложения банков России</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded border-l-4 border-gov-blue-mid border border-gray-200 p-4 flex items-start gap-3 shadow-sm">
              <div className="w-10 h-10 bg-gov-blue/10 rounded flex items-center justify-center flex-shrink-0">
                <Icon name={f.icon} fallback="CreditCard" size={20} className="text-gov-blue" />
              </div>
              <div>
                <div className="font-bold text-gov-dark text-sm">{f.title}</div>
                <div className="text-gray-500 text-xs mt-0.5">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Widget — full width */}
        <div className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-gov-blue px-5 py-3 flex items-center gap-2">
            <Icon name="CreditCard" size={18} className="text-gov-gold" />
            <span className="text-white font-semibold text-sm">Подбор банковских карт и кредитов онлайн</span>
          </div>
          <div className="w-full overflow-x-auto">
            <iframe
              src="https://ppdu.ru/9f12e860-20ad-445a-bf38-214798d47903"
              style={{ width: '100%', border: 'none', minWidth: '320px', display: 'block', height: '900px' }}
              id="ppdwiOfferMoney"
              scrolling="yes"
            />
          </div>
        </div>

        {/* Info block */}
        <div className="mt-8 bg-gov-gold/10 border border-gov-gold/30 rounded p-5 flex items-start gap-3">
          <Icon name="Info" size={18} className="text-gov-gold flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700">
            Все предложения предоставлены лицензированными банками России. Сравниваем условия в режиме реального времени. 
            Заявка не влияет на кредитную историю до момента одобрения.
          </p>
        </div>
      </div>

      <script src="https://ppdu.ru/ppdw.js" async />
    </div>
  );
}
