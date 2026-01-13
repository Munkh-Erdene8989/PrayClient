'use client';

const events = [
  {
    id: 1,
    title: 'НАЙДАН ЧОГО ХУРНА',
    description: 'Энэхүү 16 найдангийн тахилга хурлыг Эрдэнэ Зуу хийд сар болгоны шинийн 14-нд мөнхлөн хурдаг уламжлалтай.',
    date: '2026, 01 сарын 02',
  },
  {
    id: 2,
    title: 'САНДУЙН ЖҮД ХУРАЛ',
    date: '2026, 01 сарын 03',
  },
  {
    id: 3,
    title: 'ЛХОГОТОЙ ГҮГРЭГ ХУРНА',
    date: '2026, 01 сарын 05',
  },
  {
    id: 4,
    title: '"ЖАВШИ" хурна',
    date: '2026, 01 сарын 07',
  },
  {
    id: 5,
    title: '"ЛОВОНГИЙН ЧОГО" хурал',
    date: '2026, 01 сарын 08',
  },
];

export default function EventsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Эрдэнэ Зуу Хийд Хурал
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="text-yellow-600 font-semibold mb-2">{event.date}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
              {event.description && (
                <p className="text-gray-600 text-sm">{event.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
