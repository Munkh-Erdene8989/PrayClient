'use client';

const programs = [
  {
    id: 1,
    title: 'БАЯН НАМСРАЙ БУРХНЫ ИХ ТАХИЛГА',
    description: 'Хаврын эхэн сарын хуучны 16 буюу 2025-03-15 ны өдөр 10:00 цагт хурна. Хуралд бэлтгэх зүйлс: Тавгийн идээ, шар хадаг',
  },
  {
    id: 2,
    title: 'ЭРДЭНЭЗУУ ХИЙДЭД МАЙДАР ЭРГЭНЭ!',
    description: 'Майдар эргэх ёслол 2025 оны 4-р сарын 5-ны өдөр (Хаврын дунд сарын шинийн 8-нд) Эрдэнэ Зуу хийдэд болно.',
  },
  {
    id: 3,
    title: 'Ганжуур их эрдэнийн эш лүн',
    description: 'Түгээмлийн эзэн, Брайвүн ширээт Ганжуурва Догдан ринбүчи: "Ганжуур их эрдэнэ"-ийн эш лүнг 3 дахь жилдээ үргэлжлүүлэн айлдана. Хэзээ: 2025.04.07 - 2025.06.09',
  },
  {
    id: 4,
    title: 'Эрдэнэ Зуу Хийд Цахим айлтгал',
    description: 'Таны гарт бяцхан шидтэн. Эрдэнэ Зуу Хийд нь сүсэгтэн олон та бүхэндээ цахим ертөнцөөр дамжуулан ном айлтгал бичүүлэх таатай боломжийг танилцуулж байна.',
  },
];

export default function ProgramsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Эрдэнэ Зуу Хийд Хөтөлбөр
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Хэрэгжүүлж буй хөтөлбөр</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program) => (
              <div
                key={program.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
              >
                <h4 className="text-lg font-bold text-yellow-600 mb-3">{program.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
