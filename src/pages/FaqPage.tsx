import { useState } from 'react';
import Icon from '@/components/ui/icon';

const categories = ['Все', 'ОСАГО', 'Ипотека', 'Оплата', 'Полис'];

const faqs = [
  {
    category: 'ОСАГО',
    q: 'Что такое ОСАГО и зачем он нужен?',
    a: 'ОСАГО — обязательное страхование гражданской ответственности владельцев транспортных средств. Без действующего полиса ОСАГО нельзя управлять автомобилем. При ДТП страховая компания возмещает ущерб пострадавшей стороне.',
  },
  {
    category: 'ОСАГО',
    q: 'Сколько стоит ОСАГО?',
    a: 'Стоимость зависит от региона, мощности двигателя, стажа и возраста водителя, коэффициента бонус-малус (КБМ). Используйте наш калькулятор, чтобы узнать точную стоимость для вашего автомобиля.',
  },
  {
    category: 'ОСАГО',
    q: 'Можно ли купить ОСАГО без диагностической карты?',
    a: 'Да, для автомобилей не старше 4 лет диагностическая карта не нужна. Для более старших автомобилей карта ТО обязательна.',
  },
  {
    category: 'Ипотека',
    q: 'Обязательно ли страховать ипотеку?',
    a: 'Страхование недвижимости (залога) является обязательным по закону. Страхование жизни формально не обязательно, но большинство банков требуют его как условие выдачи кредита или снижения ставки.',
  },
  {
    category: 'Ипотека',
    q: 'Как часто нужно продлевать ипотечное страхование?',
    a: 'Полис ипотечного страхования оформляется на 1 год и продлевается ежегодно на весь срок ипотеки. Мы заблаговременно напомним вам о продлении.',
  },
  {
    category: 'Ипотека',
    q: 'Могу ли я сменить страховщика при ипотеке?',
    a: 'Да, вы вправе ежегодно менять страховщика при условии, что новая компания аккредитована вашим банком. Мы подберём страховщика, принятого конкретным банком.',
  },
  {
    category: 'Оплата',
    q: 'Какими способами можно оплатить?',
    a: 'Оплата доступна банковской картой (Visa, MasterCard, МИР), через Систему быстрых платежей (СБП), а также через некоторые банковские приложения.',
  },
  {
    category: 'Оплата',
    q: 'Безопасна ли оплата на сайте?',
    a: 'Да. Платежи обрабатываются через защищённый шлюз с шифрованием SSL. Мы не храним данные банковских карт.',
  },
  {
    category: 'Полис',
    q: 'Когда я получу полис после оплаты?',
    a: 'Электронный полис отправляется на указанный e-mail в течение нескольких минут после успешной оплаты. В редких случаях — до 30 минут.',
  },
  {
    category: 'Полис',
    q: 'Как проверить подлинность полиса?',
    a: 'Полис ОСАГО можно проверить на официальном сайте РСА по номеру. Ипотечный полис — на сайте страховой компании.',
  },
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = faqs.filter(f => activeCategory === 'Все' || f.category === activeCategory);

  return (
    <div>
      <div className="hero-pattern text-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <span>Главная</span>
            <Icon name="ChevronRight" size={14} />
            <span className="text-white">FAQ</span>
          </div>
          <h1 className="text-2xl font-black">Часто задаваемые вопросы</h1>
          <p className="text-white/70 text-sm mt-1">Ответы на популярные вопросы о страховании</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-7">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? 'btn-secondary' : 'btn-outline'}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {filtered.map((item, i) => (
            <div key={i} className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gov-gray transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex items-start gap-3 flex-1 mr-4">
                  <span className="text-xs bg-gov-blue/10 text-gov-blue font-semibold px-2 py-0.5 rounded flex-shrink-0 mt-0.5">
                    {item.category}
                  </span>
                  <span className="font-semibold text-gov-dark text-sm">{item.q}</span>
                </div>
                <Icon
                  name={openIndex === i ? 'ChevronUp' : 'ChevronDown'}
                  size={18}
                  className="text-gov-blue flex-shrink-0"
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 animate-fade-in">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support block */}
        <div className="mt-10 bg-gov-blue rounded p-6 text-white text-center">
          <Icon name="MessageCircle" size={32} className="text-gov-gold mx-auto mb-3" />
          <h3 className="font-black text-lg mb-2">Не нашли ответ?</h3>
          <p className="text-white/70 text-sm mb-4">Задайте вопрос нашим специалистам — ответим быстро</p>
          <a href="tel:88005553535" className="btn-primary inline-flex">
            Позвонить: 8-800-555-35-35
          </a>
        </div>
      </div>
    </div>
  );
}