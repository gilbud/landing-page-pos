const Service = () => {
  return (
    <div className='text-center py-10 bg-gray-300'>
      <h1 className='text-3xl'>Layanan Kami</h1>
      <p className='sm:mx-72 mt-4 mb-8'>
        Kami dengan senang hati memberikan berbagai solusi berdasarkan kebutuhan
        nyata. Berikut adalah beberapa layanan yang kami tawarkan.
      </p>
      <div className='flex flex-wrap justify-center gap-8 mb-10'>
        <div className='bg-white rounded-md shadow-md py-5 w-80'>
          <img src='./icon1.png' alt='' className='mx-auto' />
          <h1 className='mt-5 text-xl'>Pencatatan Transaksi</h1>
        </div>
        <div className='bg-white rounded-md shadow-md py-5 w-80'>
          <img src='./icon2.png' alt='' className='mx-auto' />
          <h1 className='mt-5 text-xl'>Pembayaran</h1>
        </div>
        <div className='bg-white rounded-md shadow-md py-5 w-80'>
          <img src='./icon3.png' alt='' className='mx-auto' />
          <h1 className='mt-5 text-xl'>Laporan Keuangan</h1>
        </div>
        <div className='bg-white rounded-md shadow-md py-5 w-80'>
          <img src='./icon4.png' alt='' className='mx-auto' />
          <h1 className='mt-5 text-xl'>Catatan Hutang</h1>
        </div>
        <div className='bg-white rounded-md shadow-md py-5 w-80'>
          <img src='./icon5.png' alt='' className='mx-auto' />
          <h1 className='mt-5 text-xl'>Persediaan Barang</h1>
        </div>
      </div>
      <div className='bg-white flex gap-5 justify-center p-8 sm:mx-20 '>
        <a href='#'>
          <img src='./ig.png' alt='' />
        </a>
        <a href='#'>
          <img src='./wa.png' alt='' />
        </a>
        <a href='#'>
          <img src='./linkin.png' alt='' />
        </a>
        <a href='#'>
          <img src='./twitter.png' alt='' />
        </a>
      </div>
    </div>
  )
}

export default Service
