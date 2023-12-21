const AboutUs = () => {
  return (
    <div className='flex justify-center gap-5 items-center py-10 bg-gray-50 flex-wrap px-2'>
      <img src='./aboutus.png' className='h-64 w-auto object-cover' alt='' />
      <div className='sm:max-w-md'>
        <h1 className='text-2xl  font-medium'>Tentang Kami</h1>
        <p>
          Selamat datang di iPOS UMKM! Kami didedikasikan untuk mendukung UMKM
          dalam mengelola keuangan dan inventaris barang dengan lebih efisien.
          Visi kami adalah mempermudah UMKM dalam bersaing dengan solusi
          teknologi terkini. Dengan tim ahli dalam keuangan dan teknologi, kami
          memberikan solusi terbaik untuk pertumbuhan bisnis Anda. Kami adalah
          mitra yang peduli, siap membantu UMKM tumbuh dan berkembang dalam
          pasar yang kompetitif.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
