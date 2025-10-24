import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/placeholder-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center p-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Fishtopia: สวรรค์ของคนรักปลาและสัตว์น้ำ
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10">
            ค้นพบโลกใต้ทะเลที่สวยงามกับปลาสวยงาม ตู้ปลา กุ้งแคระ และอุปกรณ์ครบวงจร
          </p>
          <Link href="/products" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
            เลือกซื้อสินค้า
          </Link>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">สินค้าของเรา</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Fish */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <Image src="/placeholder-fish.jpg" alt="ปลาสวยงาม" width={500} height={300} layout="responsive" className="object-cover h-48 w-full"/>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">ปลาสวยงาม</h3>
              <p className="text-gray-600 dark:text-gray-300">หลากหลายสายพันธุ์ สีสันสดใส</p>
              <Link href="/products/fish" className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-medium">
                ดูเพิ่มเติม &rarr;
              </Link>
            </div>
          </div>

          {/* Aquariums */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <Image src="/placeholder-aquarium.jpg" alt="ตู้ปลา" width={500} height={300} layout="responsive" className="object-cover h-48 w-full"/>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">ตู้ปลาและอุปกรณ์</h3>
              <p className="text-gray-600 dark:text-gray-300">ครบครันสำหรับทุกขนาด</p>
              <Link href="/products/aquariums" className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-medium">
                ดูเพิ่มเติม &rarr;
              </Link>
            </div>
          </div>

          {/* Shrimp */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <Image src="/placeholder-shrimp.jpg" alt="กุ้งแคระ" width={500} height={300} layout="responsive" className="object-cover h-48 w-full"/>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">กุ้งแคระ</h3>
              <p className="text-gray-600 dark:text-gray-300">สีสันสวยงาม เลี้ยงง่าย</p>
              <Link href="/products/shrimp" className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-medium">
                ดูเพิ่มเติม &rarr;
              </Link>
            </div>
          </div>

          {/* Food & Accessories */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <Image src="/placeholder-food.jpg" alt="อาหารปลาและอุปกรณ์" width={500} height={300} layout="responsive" className="object-cover h-48 w-full"/>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">อาหารและอุปกรณ์</h3>
              <p className="text-gray-600 dark:text-gray-300">คุณภาพดี เพื่อสุขภาพสัตว์น้ำ</p>
              <Link href="/products/accessories" className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-medium">
                ดูเพิ่มเติม &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-blue-500 dark:bg-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">ทำไมต้อง Fishtopia?</h2>
          <p className="text-lg mb-8">
            เรามุ่งมั่นที่จะนำเสนอผลิตภัณฑ์คุณภาพสูงและบริการที่เป็นเลิศสำหรับคนรักสัตว์น้ำทุกท่าน ไม่ว่าคุณจะเป็นมือใหม่หรือผู้เชี่ยวชาญ Fishtopia มีทุกสิ่งที่คุณต้องการเพื่อสร้างสรรค์โลกใต้ทะเลในฝันของคุณ
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <li>
              <h3 className="text-xl font-semibold mb-2">สินค้าคุณภาพ</h3>
              <p className="text-gray-200">คัดสรรปลาและอุปกรณ์ที่ดีที่สุด</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold mb-2">บริการเป็นกันเอง</h3>
              <p className="text-gray-200">ให้คำปรึกษาและดูแลลูกค้าอย่างใกล้ชิด</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold mb-2">จัดส่งรวดเร็ว</h3>
              <p className="text-gray-200">สินค้าถึงมือคุณอย่างปลอดภัย</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action / Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">พร้อมที่จะเริ่มต้นแล้วหรือยัง?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          ติดต่อเราเพื่อสอบถามข้อมูลเพิ่มเติม หรือเยี่ยมชมร้านค้าของเราได้เลย!
        </p>
        <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
          ติดต่อเรา
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Fishtopia. All rights reserved.</p>
      </footer>
    </div>
  );
}
