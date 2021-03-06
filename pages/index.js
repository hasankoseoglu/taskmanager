import Head from 'next/head'
import Link from 'next/link'
import React, {useState} from 'react'

export default function Home() {
  const[isOpen, toggleScreen] = useState(false)
  return (
    <>
      <Head>
        <title>Task Manager</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='h-screen flex'>
        <div className={'fixed md:static inset-y-0 bg-white left-0 w-64 py-4 border-r overflow-auto md:translate-x-0 transform $isOpen ? translate-x-0 ease-out transition-medium'}>
          <div className='flex justify-between items-center'>
            <img src="/images/logo.svg" alt="Logo" className='w-52' />
            <button
             className='text-gray-700 md:hidden' onClick={() => toogleSidebar(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className='mt-8 px-6'>
            <h3 className='text-sm font-semibold text-gray-600  tracking-wide uppercase'>Dasboard</h3>
            <div className='mt-4 -mx-3'>
              <a href='#' className='flex item-center px-3 py-2 justify-between'>
                <span className='text-sm font-medium text-gray-700'>Anasayfa</span>
                <span className='text-xs font-extrabold text-gray-700'>22</span>
              </a>
              <Link href="/">
                <a href='#' className='flex item-center px-3 py-2 justify-between'>
                  <span className='text-sm font-medium text-gray-700'>Yapılacak İşler</span>
                  <span className='text-xs font-extrabold text-gray-700'>2</span>
                </a>
              </Link>
              <Link href="/">
                <a href='#' className='flex item-center px-3 py-2 justify-between rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500'>
                  <span className='text-sm font-medium text-white'>Tamamlanan İşler</span>
                  <span className='text-xs font-extrabold text-white'>18</span>
                </a>
              </Link>
            </div>

            <div className='-mx-3'>
              <Link href="/">
                <a href='#' className='flex item-center px-3 py-2 justify-between'>
                  <span className='text-sm font-medium text-gray-700'>Hesap Bilgileri</span>
                  <span className='text-xs font-extrabold text-gray-700'>2</span>
                </a>
              </Link>
            </div>
          </nav>
        </div>

        <div className='flex-1 min-w-0 bg-gray-100'>
          <header className='flex flex-col px-6 mt-3 border-b border-gray-200'>
            <div className='flex justify-between items-center py-3'>

              <div className='flex items-center'>

                <button className='text-gray-600 lg:hidden'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                <div className='relative w-64 ml-4'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg></span>
                  <input className='block w-full h-10 text-sm border-gray-400 rounded-md py-2 pl-10 pr-4 focus:placeholder-gray-500 outline-none focus:ring-red-600 focus:ring-2 active:placeholder-gray-400 placeholder-gray-400'
                    placeholder='Arama Yap...' />
                </div>
              </div>









              <div className='flex items-center'>

                <button className='bg-gray-200 p-1 rounded-2xl'>
                  <span className='py-3 px-3 text-sm font-bold flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    Yeni Ticket Oluştur</span>
                </button>

                <button className='relative pl-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className='absolute top-0 right-0 text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center bg-red-500 text-white'>2</span>
                </button>

                <button className='pl-3'>
                  <img src="/images/avatar.jpg" className='w-8 h-8 rounded-full object-cover' alt="" />
                </button>
              </div>
            </div>

          </header>
          <div className='flex-1 bg-gray-50 overflow-auto'>
            <main className='min-h-screen p-3 inline-flex space-x-2'>
              <div className='flex flex-col w-80 rounded-md'>
                <h3 className='p-3 text-md font-medium text-gray-700 leading-titght'>Yapılacaklar</h3>
                <div className='flex-1 min-h-0'>
                  <ul className='pt-1 pb-3 px-3'>
                    <li className='mt-1 mb-3'>
                      <a href="#" className='block p-5 rounded-md bg-white shadow'>
                        <div className='flex justify-between items-center'>
                          <div className='bg-red-500 rounded px-3 py-1'>
                            <span className='text-xs font-medium text-red-900 leading-tight'>İptal Bekliyor</span>
                          </div>
                          <div className='flex items-center text-sm text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span className='font-medium ml-1'>6</span>
                          </div>
                        </div>
                        <div className='mt-5 mb-3'>
                          <p className='text-sm font-semibold leading-tight text-gray-700'>
                            But of course as a project grows, you’ll inevitably find yourself repeating common utility combinations to recreate the same design in many different places.
                          </p>
                        </div>
                        <div>

                          <div className='flex items-center'>
                            <div class="mt-3 flex -space-x-2 overflow-hidden">
                              <img class="inline-block w-6 h-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                              <img class="inline-block w-6 h-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </div>
                            <div class="mt-3 text-sm pl-4 font-medium">
                              <a href="#" class="text-blue-500">+ 2 kişi</a>
                            </div>
                          </div>
                        </div>

                      </a>
                    </li>
                    <li className='mt-3 mb-3'>
                      <a href="#" className='block p-5 rounded-md bg-white shadow'>
                        <div className='flex justify-between items-center'>
                          <div className='bg-red-500 rounded px-3 py-1'>
                            <span className='text-xs font-medium text-red-900 leading-tight'>İptal Bekliyor</span>
                          </div>
                          <div className='flex items-center text-sm text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span className='font-medium ml-1'>6</span>
                          </div>
                        </div>
                        <div className='mt-5 mb-3'>
                          <p className='text-sm font-semibold leading-tight text-gray-700'>
                            But of course as a project grows, you’ll inevitably find yourself repeating common utility combinations to recreate the same design in many different places.
                          </p>
                        </div>
                        <div>

                          <div className='flex items-center'>
                            <div class="mt-3 flex -space-x-2 overflow-hidden">
                              <img class="inline-block w-6 h-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                              <img class="inline-block w-6 h-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </div>
                            <div class="mt-3 text-sm pl-4 font-medium">
                              <a href="#" class="text-blue-500">+ 2 kişi</a>
                            </div>
                          </div>
                        </div>

                      </a>
                    </li>

                  </ul>
                </div>
              </div>
              <div className='flex flex-col w-80 rounded-md'>
                <h3 className='p-3 text-md font-medium text-gray-700 leading-titght'>Süreci Devam Edenler</h3>
                <div className='flex-1'>
                  <ul className='pt-1 pb-3 px-3'>
                    <li className='mt-1 mb-3'>
                      <a href="#" className='block p-5 rounded-md bg-white shadow'>
                        <div className='flex justify-between items-center'>
                          <div className='bg-green-500 rounded px-3 py-1'>
                            <span className='text-xs font-medium text-green-900 leading-tight'>Yeni Abone</span>
                          </div>
                          <div className='flex items-center text-sm text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span className='font-medium ml-1'>6</span>
                          </div>
                        </div>
                        <div className='mt-5 mb-3'>
                          <p className='text-sm font-semibold leading-tight text-gray-700'>
                            But of course as a project grows, you’ll inevitably find yourself repeating common utility combinations to recreate the same design in many different places.
                          </p>
                        </div>
                        <div>

                          <div className='flex items-center'>
                            <div class="mt-3 flex -space-x-2 overflow-hidden">
                              <img class="inline-block w-6 h-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                              <img class="inline-block w-6 h-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </div>
                            <div class="mt-3 text-sm pl-4 font-medium">
                              <a href="#" class="text-blue-500">+ 2 kişi</a>
                            </div>
                          </div>
                        </div>

                      </a>
                    </li>
                    <li className='mt-3 mb-3'>
                      <a href="#" className='block p-5 rounded-md bg-white shadow'>
                        <div className='flex justify-between items-center'>
                          <div className='bg-blue-400 rounded px-3 py-1'>
                            <span className='text-xs font-medium text-blue-900 leading-tight'>Nakil Bekliyor</span>
                          </div>
                          <div className='flex items-center text-sm text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span className='font-medium ml-1'>6</span>
                          </div>
                        </div>
                        <div className='mt-5 mb-3'>
                          <p className='text-sm font-semibold leading-tight text-gray-700'>
                            But of course as a project grows, you’ll inevitably find yourself repeating common utility combinations to recreate the same design in many different places.
                          </p>
                        </div>
                        <div>

                          <div className='flex items-center'>
                            <div class="mt-3 flex -space-x-2 overflow-hidden">
                              <img class="inline-block w-6 h-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                              <img class="inline-block w-6 h-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                              <img class="inline-block w-6 h-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </div>
                            <div class="mt-3 text-sm pl-4 font-medium">
                              <a href="#" class="text-blue-500">+ 3 kişi</a>
                            </div>
                          </div>
                        </div>

                      </a>
                    </li>
                    <li className='mt-3 mb-3'>
                      <a href="#" className='block p-5 rounded-md bg-white shadow'>
                        <div className='flex justify-between items-center'>
                          <div className='bg-pink-500 rounded px-3 py-1'>
                            <span className='text-xs font-medium text-pink-200 leading-tight'>Eksik Evrak</span>
                          </div>
                          <div className='flex items-center text-sm text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span className='font-medium ml-1'>6</span>
                          </div>
                        </div>
                        <div className='mt-5 mb-3'>
                          <p className='text-sm font-semibold leading-tight text-gray-700'>
                            But of course as a project grows, you’ll inevitably find yourself repeating common utility combinations to recreate the same design in many different places.
                          </p>
                        </div>
                        <div>

                          <div className='flex items-center'>
                            <div class="mt-3 flex -space-x-2 overflow-hidden">
                              <img class="inline-block w-6 h-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                              <img class="inline-block w-6 h-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </div>
                            <div class="mt-3 text-sm pl-4 font-medium">
                              <a href="#" class="text-blue-500">+ 2 kişi</a>
                            </div>
                          </div>
                        </div>

                      </a>
                    </li>

                  </ul>
                </div>
              </div>
              <div className='flex flex-col w-80 rounded-md'>
                <h3 className='p-3 text-md font-medium text-gray-600'>Tamamlananlar</h3>
                <div className='flex-1 min-h-0'>
                  <ul className='pt-1 pb-3 px-3'>
                    <li className='mt-1 mb-3'>
                      <a href="#" className='block p-5 rounded-md bg-white shadow'>
                        <div className='flex justify-between items-center'>
                          <div className='bg-red-500 rounded px-3 py-1'>
                            <span className='text-xs font-medium text-red-900 leading-tight'>İptal Bekliyor</span>
                          </div>
                          <div className='flex items-center text-sm text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span className='font-medium ml-1'>6</span>
                          </div>
                        </div>
                        <div className='mt-5 mb-3'>
                          <p className='text-sm font-semibold leading-tight text-gray-700'>
                            But of course as a project grows, you’ll inevitably find yourself repeating common utility combinations to recreate the same design in many different places.
                          </p>
                        </div>
                        <div>

                          <div className='flex items-center'>
                            <div class="mt-3 flex -space-x-2 overflow-hidden">
                              <img class="inline-block w-6 h-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                              <img class="inline-block w-6 h-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </div>
                            <div class="mt-3 text-sm pl-4 font-medium">
                              <a href="#" class="text-blue-500">+ 2 kişi</a>
                            </div>
                          </div>
                        </div>

                      </a>
                    </li>
                    <li className='mt-3 mb-3'>
                      <a href="#" className='block p-5 rounded-md bg-white shadow'>
                        <div className='flex justify-between items-center'>
                          <div className='bg-red-500 rounded px-3 py-1'>
                            <span className='text-xs font-medium text-red-900 leading-tight'>İptal Bekliyor</span>
                          </div>
                          <div className='flex items-center text-sm text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span className='font-medium ml-1'>6</span>
                          </div>
                        </div>
                        <div className='mt-5 mb-3'>
                          <p className='text-sm font-semibold leading-tight text-gray-700'>
                            But of course as a project grows, you’ll inevitably find yourself repeating common utility combinations to recreate the same design in many different places.
                          </p>
                        </div>
                        <div>

                          <div className='flex items-center'>
                            <div class="mt-3 flex -space-x-2 overflow-hidden">
                              <img class="inline-block w-6 h-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                              <img class="inline-block w-6 h-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </div>
                            <div class="mt-3 text-sm pl-4 font-medium">
                              <a href="#" class="text-blue-500">+ 2 kişi</a>
                            </div>
                          </div>
                        </div>

                      </a>
                    </li>

                  </ul>
                </div>
              </div>


            </main>
          </div>
        </div>
      </div>
    </>
  )
}
