const Home = () => {
  return (
    <div>
      <div className='flex  flex-wrap items-center'>
        <div className='max-w-xl'>
          <h1 className='text-blue-600 font-medium'>POINT OF SALES TERBAIK!</h1>
          <h2 className='text-5xl text-gray-800  leading-tight font-medium capitalize'>
            Atur dan Kelola UMKM kamu lebih mudah dan efisien bersama kami
          </h2>
          <p className='mt-3 max-w-md'>
            Proses mendirikan UMKM semakin maju dan berkembang bersama aplikasi
            POS kami
          </p>
          <button className='mt-6 bg-blue-600 py-2 px-4 text-xl text-white font-medium rounded-md'>
            Coba Gratis
          </button>
        </div>
        <div>
          <img src='./hero.png' alt='' />
        </div>
      </div>
      <div className='sm:flex mt-5 gap-20 items-center '>
        <div className='max-w-lg'>
          <img src='./payment.png' className='w-full' alt='' />
        </div>
        <div className='text-gray-800 '>
          <h1 className='text-4xl font-medium'>Ingin Terima </h1>
          <h1 className='text-4xl font-medium'> Pembayaran non-Tunai ? </h1>
          <p className='mt-2'>
            Aplikasi POS-UMKM mendukung berbagai metode pembayaran dimulai dari
            gopay, ovo, sopheepay, transfer bank, qris, hingga debit
          </p>
          <div className='flex gap-4 justify-center mt-10'>
            <img
              className='border rounded-md w-auto h-14 object-cover hover:scale-105 transition-all'
              src='./dana.png'
              alt=''
            />
            <img
              className='border rounded-md w-auto h-14 object-cover hover:scale-105 transition-all'
              src='./gopay.png'
              alt=''
            />
            <img
              className='border rounded-md w-auto h-14 object-cover hover:scale-105 transition-all'
              src='./ovo.png'
              alt=''
            />
            <img
              className='border rounded-md w-auto h-14 object-cover hover:scale-105 transition-all'
              src='./qris.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
