'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Тухай</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition">
                  Бидний тухай
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-yellow-400 transition">
                  Мэдээ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition">
                  Холбоо барих
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Туслах</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-yellow-400 transition">
                  Хөтөлбөр
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-gray-300 hover:text-yellow-400 transition">
                  Сургалт
                </Link>
              </li>
              <li>
                <Link href="/ceremony" className="text-gray-300 hover:text-yellow-400 transition">
                  Хурал
                </Link>
              </li>
            </ul>
          </div>

          {/* User Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Хэрэглэгч</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/prayer" className="text-gray-300 hover:text-yellow-400 transition">
                  Цахим айлтгал
                </Link>
              </li>
              <li>
                <Link href="/annual" className="text-gray-300 hover:text-yellow-400 transition">
                  Жилийн засал
                </Link>
              </li>
              <li>
                <Link href="/lamps" className="text-gray-300 hover:text-yellow-400 transition">
                  Зул өргөх
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Холбоо барих</h3>
            <ul className="space-y-2 text-gray-300">
              <li>+976 7771 7788</li>
              <li>erdenezuu108@gmail.com</li>
              <li className="text-sm">Монгол улс, Өвөрхангай аймаг, Хархорин сум</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-gray-400 text-sm mb-4">
            Энэхүү Вэб сайтыг бүтээлцсэн
          </div>
          <div className="text-center text-gray-500 text-xs mb-4">
            Өвөрхангай аймгийн, Хархорин сумын нутгийн зөвлөл
            <br />
            &quot;Мөнгөн Ганзай&quot; ХХК С. Золхүү | &quot;Эм Зэт Эм Эйжэнси&quot; ХХК Д. Баттөмөр, Г. Ганзориг | &quot;Ивээх Оюу Ингүмэл&quot; ХХК Д. Оюун-Эрдэнэ
          </div>
          <div className="text-center text-gray-400 text-sm">
            © 2025 Эрдэнэ Зуу Хийд
          </div>
        </div>
      </div>
    </footer>
  );
}
