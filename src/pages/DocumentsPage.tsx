import Icon from '@/components/ui/icon';

const documents = [
  {
    category: 'Правила страхования',
    docs: [
      { name: 'Правила страхования ОСАГО', format: 'PDF', size: '1.2 МБ', date: '01.01.2024' },
      { name: 'Правила ипотечного страхования', format: 'PDF', size: '890 КБ', date: '01.01.2024' },
      { name: 'Правила страхования имущества', format: 'PDF', size: '750 КБ', date: '01.01.2024' },
    ],
  },
  {
    category: 'Лицензии и свидетельства',
    docs: [
      { name: 'Лицензия ЦБ РФ № СИ-1234', format: 'PDF', size: '450 КБ', date: '01.01.2020' },
      { name: 'Свидетельство члена РСА', format: 'PDF', size: '320 КБ', date: '15.03.2020' },
      { name: 'Свидетельство члена ВСС', format: 'PDF', size: '310 КБ', date: '20.03.2020' },
    ],
  },
  {
    category: 'Финансовая отчётность',
    docs: [
      { name: 'Годовой отчёт 2023', format: 'PDF', size: '3.4 МБ', date: '30.04.2024' },
      { name: 'Бухгалтерская отчётность 2023', format: 'PDF', size: '2.1 МБ', date: '30.04.2024' },
      { name: 'Годовой отчёт 2022', format: 'PDF', size: '3.1 МБ', date: '30.04.2023' },
    ],
  },
  {
    category: 'Клиентские документы',
    docs: [
      { name: 'Политика конфиденциальности', format: 'PDF', size: '230 КБ', date: '01.01.2024' },
      { name: 'Пользовательское соглашение', format: 'PDF', size: '280 КБ', date: '01.01.2024' },
      { name: 'Согласие на обработку персональных данных', format: 'PDF', size: '190 КБ', date: '01.01.2024' },
    ],
  },
];

export default function DocumentsPage() {
  return (
    <div>
      <div className="hero-pattern text-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <span>Главная</span>
            <Icon name="ChevronRight" size={14} />
            <span className="text-white">Документы</span>
          </div>
          <h1 className="text-2xl font-black">Документы</h1>
          <p className="text-white/70 text-sm mt-1">Официальные документы и отчётность компании</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">

        {/* Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded p-4 flex items-start gap-3 mb-8">
          <Icon name="Info" size={18} className="text-gov-blue flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-900">
            Все документы размещены в соответствии с требованиями законодательства РФ и нормативными актами ЦБ РФ.
            Для получения бумажных копий обратитесь в офис или направьте запрос на info@gosstrakh.ru.
          </p>
        </div>

        {/* Documents by category */}
        <div className="space-y-8">
          {documents.map((section, si) => (
            <div key={si}>
              <h2 className="text-lg font-black text-gov-blue section-title mb-4">{section.category}</h2>
              <div className="bg-white rounded border border-gray-200 overflow-hidden shadow-sm">
                <table className="w-full gov-table">
                  <thead>
                    <tr className="bg-gov-blue text-white text-xs">
                      <th className="text-left px-5 py-3 font-semibold">Наименование документа</th>
                      <th className="text-center px-3 py-3 font-semibold hidden sm:table-cell">Формат</th>
                      <th className="text-center px-3 py-3 font-semibold hidden md:table-cell">Размер</th>
                      <th className="text-center px-3 py-3 font-semibold hidden sm:table-cell">Дата</th>
                      <th className="text-center px-3 py-3 font-semibold">Скачать</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.docs.map((doc, di) => (
                      <tr key={di} className="border-t border-gray-100 hover:bg-gov-blue/5 transition-colors">
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-2">
                            <Icon name="FileText" size={16} className="text-gov-blue flex-shrink-0" />
                            <span className="text-sm text-gov-dark font-medium">{doc.name}</span>
                          </div>
                        </td>
                        <td className="px-3 py-3 text-center hidden sm:table-cell">
                          <span className="text-xs bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded">
                            {doc.format}
                          </span>
                        </td>
                        <td className="px-3 py-3 text-center text-xs text-gray-500 hidden md:table-cell">{doc.size}</td>
                        <td className="px-3 py-3 text-center text-xs text-gray-500 hidden sm:table-cell">{doc.date}</td>
                        <td className="px-3 py-3 text-center">
                          <button className="inline-flex items-center gap-1 text-gov-blue hover:text-gov-blue-mid transition-colors">
                            <Icon name="Download" size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
