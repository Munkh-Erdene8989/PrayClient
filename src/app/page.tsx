import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import EventsSection from '@/components/EventsSection';
import ProgramsSection from '@/components/ProgramsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSlider />
        
        {/* Hero Content Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
              Монгол тулгатны анхны <br />
              нандин шүтээн
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 text-lg leading-relaxed text-center mb-8">
                Эрдэнэ зуу хийд нь Өвөрхангай аймгийн Хархорин сумын Эрдэнэтолгой багт харъяалагддаг. 
                Тус байгууллага нь шүтэн бишрэх эрхийнхээ дагуу иргэдэд шашны энэрэнгүй үзэл, зөв үйлийг 
                төлөвшүүлэх сайн үйлсийн төлөө олон түмний чин сүсэг бишрэлд тулгуурлан хуулийн дагуу 
                буяны үйл ажиллагаа явуулж байна. Эрдэнэ зуу хийд нь бүтцийн хувьд Хамба лам, Да лам, 
                Гэсгүй лам, Унзад лам, Голч лам, Сул лам нийт 25 лам, аж ахуйн ажилчид 10, нийт 35 
                хүний бүрэлдэхүүнтэй ажиллаж байна.
              </p>
              
              {/* Banner Images Placeholder */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-video bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg flex items-center justify-center text-gray-400"
                  >
                    Banner {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <EventsSection />
        <ProgramsSection />
      </main>

      <Footer />
    </div>
  );
}
