import Icon from '@/components/ui/icon';

const team = [
  { name: 'Александр Петров', role: 'Генеральный директор', exp: '20 лет в страховании' },
  { name: 'Мария Козлова', role: 'Директор по развитию', exp: '15 лет в финтехе' },
  { name: 'Дмитрий Смирнов', role: 'Руководитель отдела выплат', exp: '12 лет в урегулировании' },
];

const milestones = [
  { year: '2009', event: 'Основание компании. Первые 1000 полисов ОСАГО' },
  { year: '2013', event: 'Запуск ипотечного страхования. Партнёрство с 10 банками' },
  { year: '2016', event: 'Первыми в России запустили оформление е-ОСАГО онлайн' },
  { year: '2019', event: 'Достигнут рубеж 1 000 000 выданных полисов' },
  { year: '2022', event: 'Партнёрство с 30+ страховыми компаниями' },
  { year: '2024', event: 'Более 2,4 млн клиентов по всей России' },
];

export default function AboutPage() {
  return (
    <div>
      <div className="hero-pattern text-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <span>Главная</span>
            <Icon name="ChevronRight" size={14} />
            <span className="text-white">О компании</span>
          </div>
          <h1 className="text-2xl font-black">О компании ГосСтрах</h1>
          <p className="text-white/70 text-sm mt-1">Надёжный страховой партнёр с 2009 года</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* About text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="text-xl font-black text-gov-blue section-title mb-5">Кто мы</h2>
            <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
              <p>
                <strong>ГосСтрах</strong> — официальный страховой портал, работающий с 2009 года. 
                Мы помогаем гражданам России оформить полисы ОСАГО и ипотечного страхования 
                быстро, выгодно и без лишней бюрократии.
              </p>
              <p>
                Наш сервис агрегирует предложения от 30+ лицензированных страховых компаний, 
                позволяя выбрать оптимальный полис по цене и условиям за считанные минуты.
              </p>
              <p>
                Все полисы регистрируются в базах РСА и ЦБ РФ. Лицензия Центрального банка 
                Российской Федерации № СИ-1234 от 01.01.2020.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://cdn.poehali.dev/projects/f3409363-2927-4b58-a630-76d43e50d7ef/files/7d1ad4b2-3fbe-40e7-91ef-b6899904690d.jpg"
              alt="О компании"
              className="rounded-lg w-full h-52 object-cover shadow-sm"
            />
          </div>
        </div>

        {/* Licenses */}
        <div className="bg-gov-gray rounded border border-gray-200 p-6 mb-12">
          <h2 className="text-xl font-black text-gov-blue section-title mb-5">Лицензии и членство</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: 'Award', label: 'Лицензия ЦБ РФ', value: '№ СИ-1234 от 01.01.2020' },
              { icon: 'Shield', label: 'Член РСА', value: 'Российский союз автостраховщиков' },
              { icon: 'Building', label: 'Член ВСС', value: 'Всероссийский союз страховщиков' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded border border-gray-200 p-4 flex items-start gap-3">
                <div className="w-10 h-10 bg-gov-blue/10 rounded flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} fallback="Shield" size={20} className="text-gov-blue" />
                </div>
                <div>
                  <div className="font-semibold text-gov-dark text-sm">{item.label}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <h2 className="text-xl font-black text-gov-blue section-title mb-6">История компании</h2>
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-14 text-right">
                  <span className="text-gov-blue font-black text-sm">{m.year}</span>
                </div>
                <div className="w-px bg-gov-blue-mid self-stretch ml-1" />
                <div className="flex-1 pb-1">
                  <div className="w-3 h-3 bg-gov-blue rounded-full -ml-5 -mt-0 absolute" />
                  <p className="text-gray-700 text-sm leading-relaxed ml-3">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-xl font-black text-gov-blue section-title mb-6">Руководство</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {team.map((person, i) => (
              <div key={i} className="bg-white rounded border border-gray-200 p-5 text-center shadow-sm">
                <div className="w-16 h-16 bg-gov-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="User" size={28} className="text-gov-blue" />
                </div>
                <div className="font-bold text-gov-dark text-sm">{person.name}</div>
                <div className="text-gov-blue-mid text-xs mt-0.5 font-semibold">{person.role}</div>
                <div className="text-gray-500 text-xs mt-1">{person.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
