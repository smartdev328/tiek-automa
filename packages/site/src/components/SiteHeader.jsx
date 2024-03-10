import { useState } from 'preact/hooks'

function SiteHeader() {
  const [mobileNavVisible, setMobileNavVisible] = useState(false)
  const closeNavbar = () => {
    setMobileNavVisible(false)
  }

  return (
    <>
      <div className='mt-2 relative z-50 h-14 flex items-center justify-between text-gray-900'>
        <div className=''>
          <a href='/'>
            <img className='w-48 lg:w-56 min-w-full' src='/assets/logo.svg' />
          </a>
        </div>
        <div className='hidden md:flex flex-1 items-center justify-center'>
          <nav className='flex-1 flex items-center justify-center font-bold'>
            <a href='/pricing' className='hover:text-gray-400 px-4'>
              Pricing
            </a>
            <a href='/blog' className='font-bold hover:text-gray-400 px-4'>
              Blog
            </a>
            <a href='/docs' className='font-bold hover:text-gray-400 px-4'>
              Docs
            </a>
            <a
              href='https://api-checker.AutomaWorld.com/'
              className='font-bold hover:text-gray-400 px-4'
            >
              Free Tools
            </a>
            <a href='/about/' className='font-bold hover:text-gray-400 px-4'>
              About
            </a>
          </nav>
          <div className='flex items-center justify-end'>
            <a
              href='https://api-checker.AutomaWorld.com/'
              className='rounded-lg font-bold text-blue-600 hover:text-blue-800 px-4 outline'
            >
              Free API Tester
            </a>
            <a href='https://app.AutomaWorld.com/console/signup' className='text-black pl-4'>
              <button className='rounded-lg p-2 bg-blue-600 text-white'>Free Account</button>
            </a>
            <a
              href='https://app.AutomaWorld.com/console/signin'
              className='font-bold hover:text-gray-400 px-4'
            >
              Sign in
            </a>
          </div>
        </div>
        <div className='md:hidden'>
          <button
            className='navbar-burger flex items-center text-blue-600'
            onClick={() => setMobileNavVisible(true)}
          >
            <svg
              className='block h-6 w-6 fill-current'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Mobile menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`navbar-menu relative z-50 ${mobileNavVisible ? '' : 'hidden'}`}>
        <nav className='fixed top-0 left-0 bottom-0 flex flex-col w-full mt-2 px-4 bg-white border-r overflow-y-auto'>
          <div className='flex items-center h-14 w-100 justify-between'>
            <a href='/'>
              <img className='w-48 lg:w-56 min-w-full' src='/assets/logo.svg' />
            </a>
            <button className='navbar-close' onClick={closeNavbar}>
              <svg
                className='h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </button>
          </div>
          <div class='mt-8 text-center'>
            <ul>
              <li className='mb-1'>
                <a
                  className='block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded'
                  href='/pricing'
                >
                  Pricing
                </a>
              </li>
              <li className='mb-1'>
                <a
                  className='block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded'
                  href='/blog'
                >
                  Blog
                </a>
              </li>
              <li className='mb-1'>
                <a
                  className='block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded'
                  href='/docs'
                >
                  Docs
                </a>
              </li>
              <li className='mb-1'>
                <a
                  className='block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded'
                  href='https://api-checker.AutomaWorld.com/'
                >
                  Free Tools
                </a>
              </li>
              <li className='mb-1'>
                <a
                  className='block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded'
                  href='/about'
                >
                  About
                </a>
              </li>
              <li className='mb-1'>
                <a
                  className='block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded'
                  href='/contact'
                >
                  Contact
                </a>
              </li>
              <li className='mt-8 mb-1'>
                <a
                  className='block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded'
                  href='https://app.AutomaWorld.com/console/signin'
                >
                  Sign in
                </a>
              </li>
              <li className='mb-1'>
                <a
                  className='block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded'
                  href='https://app.AutomaWorld.com/console/signup'
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default SiteHeader
