import Image from 'next/image';
import React, { useState } from 'react';
import useBreakpoint from 'use-breakpoint';

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1024 };

function Footer() {
  const [hide, setHide] = useState([true, true, true]);
  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');
  return (
    <footer className='mt-8 flex flex-col items-center bg-darkBlack pt-[47px]'>
      <div className='mx-auto flex w-full flex-col justify-between sm:w-3xl lg:w-4xl lg:flex-row xl:w-6xl 2xl:w-7xl '>
        <div className='w-full px-10 lg:w-[232px]'>
          <div className='flex justify-between'>
            <h3 className='mb-4 text-base text-white'>CONTACT INFO</h3>
            <div className='relative'>
              <svg
                onClick={() =>
                  setHide((hide) => [false].concat(hide[1], hide[2]))
                }
                className={`absolute h-4 w-4 fill-current stroke-white text-white lg:hidden ${
                  !hide[0] ? 'hidden' : ''
                }`}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path d='M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z' />
              </svg>
              <svg
                onClick={() =>
                  setHide((hide) => [true].concat(hide[1], hide[2]))
                }
                className={`absolute h-4 w-4 fill-current stroke-white text-white lg:hidden ${
                  hide[0] ? 'hidden' : ''
                }`}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z' />
              </svg>
            </div>
          </div>
          <ul
            className={`origin-top scale-y-100 transition duration-300 ${
              hide[0] && breakpoint != 'desktop' ? ' max-h-0 scale-y-0' : ''
            } mb-4 lg:mb-0`}
          >
            <li className='my-2.5 flex items-start'>
              <Image
                width={14}
                height={20}
                className='mr-2 mt-2'
                alt='map marker'
                src='/images/map-marker.png'
              ></Image>
              <p className='font-medium leading-9 text-darkGrey'>
                71 Pennington Lane Vernon Rockville, CT 060666
              </p>
            </li>
            <li className='my-2.5 flex items-center'>
              <Image
                width={16}
                height={16}
                className='mr-2'
                alt='telephone'
                src='/images/telephone.png'
              ></Image>
              <p className='font-medium text-darkGrey'>+91 123 456 789</p>
            </li>
            <li className='my-2.5 flex items-center'>
              <Image
                width={17}
                height={15}
                className='mr-2'
                alt='fax'
                src='/images/fax.png'
              ></Image>
              <p className='font-medium text-darkGrey'>0123-456-789</p>
            </li>
            <li className='my-2.5 flex items-center'>
              <Image
                width={15}
                height={11}
                className='mr-2'
                alt='email'
                src='/images/email.png'
              ></Image>
              <p className='font-medium text-darkGrey'>demo@Yourstore.com</p>
            </li>
          </ul>
        </div>
        <div className='flex w-full flex-col items-center px-10 lg:w-[282px]'>
          <div className='flex w-full justify-between self-start lg:hidden'>
            <h3 className='mb-4 text-base text-white'>ABOUT INFO</h3>
            <div className='relative'>
              <svg
                onClick={() =>
                  setHide((hide) => [hide[0]].concat(false, [hide[2]]))
                }
                className={`absolute h-4 w-4 fill-current stroke-white text-white lg:hidden ${
                  !hide[1] ? 'hidden' : ''
                }`}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path d='M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z' />
              </svg>
              <svg
                onClick={() =>
                  setHide((hide) => [hide[0]].concat(true, [hide[2]]))
                }
                className={`absolute h-4 w-4 fill-current stroke-white text-white lg:hidden ${
                  hide[1] ? 'hidden' : ''
                }`}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z' />
              </svg>
            </div>
          </div>
          <div
            className={`origin-top scale-y-100 transition duration-300 ${
              hide[1] && breakpoint != 'desktop' ? ' max-h-0 scale-y-0' : ''
            } mb-4 lg:mb-0`}
          >
            <Image
              alt='logo'
              width={188}
              height={80}
              src='/images/footer-logo.png'
            ></Image>
            <p className='mt-[24px] mb-[17px] text-center text-sm font-medium text-darkGrey'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum simply dummy.
            </p>
            <ul className='flex items-center gap-2'>
              <li className='relative flex h-[34px] w-[34px] cursor-pointer justify-center overflow-hidden rounded bg-darkGrey hover:bg-coral before:absolute before:top-0 before:left-0 before:h-full before:w-full before:-translate-x-full before:rounded before:bg-white before:opacity-30 before:transition before:duration-1000 before:empty-content hover:before:translate-x-0'>
                <a className='flex items-center justify-center'>
                  {/* facebook icon */}
                  <svg
                    className='h-5 w-5 fill-current text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 320 512'
                  >
                    <path d='m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z' />
                  </svg>
                </a>
              </li>
              <li className='relative flex h-[34px] w-[34px] cursor-pointer justify-center overflow-hidden rounded bg-darkGrey hover:bg-coral before:absolute before:top-0 before:left-0 before:h-full before:w-full before:-translate-x-full before:rounded before:bg-white before:opacity-30 before:transition before:duration-1000 before:empty-content hover:before:translate-x-0'>
                <a className='flex items-center justify-center'>
                  {/* twitter icon */}
                  <svg
                    className='h-5 w-5 fill-current text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z' />
                  </svg>
                </a>
              </li>
              <li className='relative flex h-[34px] w-[34px] cursor-pointer justify-center overflow-hidden rounded bg-darkGrey hover:bg-coral before:absolute before:top-0 before:left-0 before:h-full before:w-full before:-translate-x-full before:rounded before:bg-white before:opacity-30 before:transition before:duration-1000 before:empty-content hover:before:translate-x-0'>
                <a className='flex items-center justify-center'>
                  {/* youtube icon */}
                  <svg
                    className='h-5 w-5 fill-current text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                  >
                    <path d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z' />
                  </svg>
                </a>
              </li>
              <li className='relative flex h-[34px] w-[34px] cursor-pointer justify-center overflow-hidden rounded bg-darkGrey hover:bg-coral before:absolute before:top-0 before:left-0 before:h-full before:w-full before:-translate-x-full before:rounded before:bg-white before:opacity-30 before:transition before:duration-1000 before:empty-content hover:before:translate-x-0'>
                <a className='flex items-center justify-center'>
                  {/* google plus icon */}
                  <svg
                    className='h-5 w-5 fill-current text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 640 512'
                  >
                    <path d='M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z' />
                  </svg>
                </a>
              </li>
              <li className='relative flex h-[34px] w-[34px] cursor-pointer justify-center overflow-hidden rounded bg-darkGrey hover:bg-coral before:absolute before:top-0 before:left-0 before:h-full before:w-full before:-translate-x-full before:rounded before:bg-white before:opacity-30 before:transition before:duration-1000 before:empty-content hover:before:translate-x-0'>
                <a className='flex items-center justify-center'>
                  {/* pinterest icon */}
                  <svg
                    className='h-5 w-5 fill-current text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 384 512'
                  >
                    <path d='M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z' />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full px-10 lg:w-1/4'>
          <div className='flex justify-between'>
            <h3 className='mb-4 text-base text-white'>INFORMATION</h3>
            <div className='relative'>
              <svg
                onClick={() =>
                  setHide((hide) => [hide[0]].concat([hide[1]], false))
                }
                className={`absolute h-4 w-4 fill-current stroke-white text-white lg:hidden ${
                  !hide[2] ? 'hidden' : ''
                }`}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path d='M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z' />
              </svg>
              <svg
                onClick={() =>
                  setHide((hide) => [hide[0]].concat([hide[1]], true))
                }
                className={`absolute h-4 w-4 fill-current stroke-white text-white lg:hidden ${
                  hide[2] ? 'hidden' : ''
                }`}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z' />
              </svg>
            </div>
          </div>
          <ul
            className={`origin-top scale-y-100 transition duration-300 ${
              hide[2] && breakpoint != 'desktop' ? ' max-h-0 scale-y-0' : ''
            } mb-4 lg:mb-0`}
          >
            <li className='flex h-[30px] items-center'>
              <a className='font-medium text-darkGrey'>About Us</a>
            </li>
            <li className='flex h-[30px] items-center'>
              <a className='font-medium text-darkGrey'>Delivery Information</a>
            </li>
            <li className='flex h-[30px] items-center'>
              <a className='font-medium text-darkGrey'>Privacy Policy</a>
            </li>
            <li className='flex h-[30px] items-center'>
              <a className='font-medium text-darkGrey'>Trems and Conditions</a>
            </li>
            <li className='flex h-[30px] items-center'>
              <a className='font-medium text-darkGrey'>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-[50px] flex w-full border-t border-grey-medium py-[23px]'>
        <div className='mx-auto lg:w-4xl xl:w-6xl 2xl:w-7xl'>
          <div className='flex w-full flex-col items-center justify-between lg:flex-row'>
            <p className='mb-2 text-darkGrey lg:mb-0'>
              Powered By OpenCart Your Store © 2022
            </p>
            <Image
              width={232}
              height={25}
              alt='payment'
              src='/images/payment.png'
            ></Image>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
