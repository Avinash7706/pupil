import React from 'react'
import tick from '../images/tick.png'
import finalInterView from '../images/final.png'
import mainImage from '../images/mainImage.png'
import mainImage2 from '../images/mainImage2.png'
// import grid from '../images/grid.svg'
import carrum from '../images/carrum.png'
import velocity from '../images/velocity.png'
import vakeel from '../images/vakeel.png'
import rev from '../images/rev.png'
import cp from '../images/cp.webp'
import codeVaysa from '../images/codeVaysa.webp'
import akash from '../images/akash.svg'
import epay from '../images/epay.png'
import greenTriangle from '../images/greenTriangle.jpg'
import grid from '../images/grid.svg'
import image1 from '../images/image1.avif'
import image2 from '../images/image2.png'
import image3 from '../images/image3.avif'
import image4 from '../images/image4.avif'
import image5 from '../images/image5.avif'

export default function HeroSection2() {
  const logos = [
    { src: velocity, alt: 'Velocity Logo', width: 160 },
    { src: cp, alt: 'Cash Foundations Logo', width: 180 },
    { src: vakeel, alt: 'Vakeel Logo', width: 140 },
    { src: carrum, alt: 'Carrum Mobility Logo', width: 100 },
    { src: codeVaysa, alt: 'CodeVyasa Logo', width: 120 },
    { src: epay, alt: 'ePayLater Logo', width: 160 },
    { src: akash, alt: 'Akash Logo', width: 160 },
    { src: rev, alt: 'Rev Logo', width: 160 },
    { src: greenTriangle, alt: 'Rev Logo', width: 160 }
  ];
  return (

    <div className="bg-[#f0efff]">
      <div className="relative overflow-hidden pt-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 relative z-20" style={{ backgroundImage: `url(${grid})` }}>
          <div className="relative w-full"> {/* MAIN RELATIVE CONTAINER */}
            {/* Top row with 3 images */}
            <div className='flex max-w-5xl marquee justify-between w-full px-5 sm:px-0 sm:pl-16 relative z-10'>
              <div className="rounded relative-3xl p-6 md:px-10 sm:w-[320px] w-full">
                <div className="overflow-hidden rounded-xl sm:rounded-2xl border-2 border-white sm:border-[10px] w-[70px] sm:w-[250px] sm:h-[300px]">
                  <img
                    src={mainImage}
                    alt="Main visual"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className='flex justify-center items-center sm:gap-6 sm:-mt-6 -mt-5 bg-[#f0efff]'>
                <div className="rounded-3xl w-[90px] sm:w-[240px] flex flex-col items-center text-center">
                  <div className='overflow-hidden border-white border-2 rounded-2xl w-full sm:h-[270px]'>
                    <img src={finalInterView} />
                  </div>
                </div>
                <div className="rounded-3xl  w-[90px] sm:w-[240px] flex flex-col items-center text-center relative">
                  <img src={tick} />
                </div>
              </div>
            </div>
            {/* BACKGROUND MARQUEE SCROLLING CARDS */}
            <div className="absolute inset-0 -z-10 marquee-track2 flex justify-center items-center overflow-hidden">
              {[...Array(5)].map((_, index) => (
                <div className="flex justify-center items-center p-4 h-auto" key={index}>
                  <div className="relative w-[250px] h-[220px] rounded-lg">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full flex items-center justify-center">
                      <img src={image5} />
                    </div>
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[60px] h-[60px] rounded-full flex items-center justify-center">
                      <img src={image1} />
                    </div>
                    <div className="absolute top-[56px] left-[40px] w-[60px] h-[60px] rounded-full flex items-center justify-center">
                      <img src={image5} />
                    </div>
                    <a href="#" className="absolute bottom-[40px] left-[40px] w-[60px] h-[60px] rounded-full flex items-center justify-center underline">
                      <img src={image2} />
                    </a>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[60px] h-[60px] rounded-full flex items-center justify-center">
                      <img src={image3} />
                    </div>
                    <div className="absolute bottom-[40px] right-[40px] w-[60px] h-[60px] rounded-full flex items-center justify-center">
                      <img src={image4} />
                    </div>
                    <div className="absolute top-[56px] right-[40px] w-[60px] h-[60px] rounded-full flex items-center justify-center">
                      <img src={image5} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden pb-20">
          {/* Top text */}
          <div className="mt-5 text-center text-gray-800 font-normal text-base">
            Join our partners already grow
          </div>

          {/* Shadow Overlays */}
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#eef0ff] to-transparent z-10" />
          <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#eef0ff] to-transparent z-10" />

          {/* Marquee Section */}
          <div className="marquee">
            <div className="mt-8 flex justify-center items-center gap-12 max-w-5xl mx-auto marquee-track">
              {[...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-20 object-contain"
                  height={60}
                  width={logo.width}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
