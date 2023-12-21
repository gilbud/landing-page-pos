const Home = () => {
  return (
    <div>
      <div className='flex  flex-wrap items-center justify-between sm:px-20 px-2 sm:mb-48'>
        <div className='max-w-xl'>
          <h2 className='text-4xl text-gray-800  leading-tight font-medium '>
            Bangun Keuangan yang Kuat untuk Bisnis Anda
          </h2>
          <p className='mt-3 max-w-md'>
            Aplikasi keuangan yang dirancang untuk membantu Anda mengelola dana
            dengan cerdas dan menghadapi tantangan bisnis dengan percaya diri.
          </p>
          <button className='mt-8 bg-gray-800 py-2 px-4 text-xl text-white font-medium rounded-md hover:scale-105 transition-all'>
            Coba Sekarang
          </button>
        </div>
        <div>
          <img src='./hero.png' alt='' />
        </div>
      </div>
      <div className=' bg-gray-800 sm:pt-56 pb-32 sm:relative z-0'>
        <div className='flex flex-wrap gap-5 justify-center pt-20 mt-52 sm:absolute -top-96 left-36 '>
          <div className='rounded-sm bg-white shadow-sm p-4 w-80  '>
            <img className=' mx-auto p-4' src='./easy.png' alt='' />
            <h1 className='text-2xl font-medium mb-2'>Mudah dan Cepat</h1>
            <p>
              Kelola keuangan Anda dengan mudah! catat pengeluaran dan pemasukan
              tanpa repot untuk keuangan yang terkelola dengan baik. Unduh
              sekarang dan raih kendali finansial Anda!
            </p>
          </div>
          <div className='rounded-sm bg-white shadow-sm p-4 w-80 '>
            <img className=' mx-auto p-4' src='./report.png' alt='' />
            <h1 className='text-2xl font-medium mb-2'>Laporan Lengkap</h1>
            <p>
              Berdayakan keuangan Anda dengan laporan yang benar-benar lengkap!
              Saksikan transparansi finansial sejati dengan analisis mendalam
              dari setiap pengeluaran dan pemasukan.
            </p>
          </div>
          <div className='rounded-sm bg-white shadow-sm p-4 w-80 '>
            <img className=' mx-auto p-4' src='./manajemen.png' alt='' />
            <h1 className='text-2xl font-medium mb-2'>Manajemen Pelanggan</h1>
            <p>
              Mudah, Cepat, dan Efisien! Aplikasi pencatatan keuangan kami
              memberikan kemudahan manajemen pelanggan sehingga Anda bisa fokus
              pada pertumbuhan bisnis Anda.
            </p>
          </div>
        </div>
        <div className='sm:mx-80 mt-10 sm:mt-20'>
          <p className='text-white text-xl text-center font-medium '>
            Mudahkan pencatatan, tingkatkan keputusan bisnis! Aplikasi keuangan
            kami menjadi teman setia UMKM dengan pencatatan yang cepat dan
            manajemen pelanggan yang handal.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
