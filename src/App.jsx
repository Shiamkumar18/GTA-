
import React, { useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'

function App() {

  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%"
    })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,

        onUpdate: function () {
          if (this.progress() >= 0.9) {
            document.querySelector(".svg").remove();
            setShowContent(true);
            this.kill();
          }
        }

      })
  });

  useGSAP(() => {

    if (!showContent) return;

    gsap.to(".main",{
      scale:1,
      rotate:0,
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut"
    });

    gsap.to(".sky",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut"
    });
    
    gsap.to(".bg",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut"
    });

    gsap.to(".character",{
      scale:[.8],
      x:"-50%",
      bottom:"-60%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut"
    }); 

    gsap.to(".text",{
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut"
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`
      });
      gsap.to(".sky", {
        x: xMove
      });
      gsap.to(".bg", {
        x: xMove * 1.7
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600 " preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill='white'
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="\bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className='main w-full rotate-[-10deg] scale-[1.7]'>
          <div className='landing overflow-hidden relative w-full h-screen bg-black'>
            <div className='navbar absolute top-0 left-0 w-full px-5 py-5 z-[10]'>
              <div className='logo flex gap-3'>
                <div className='lines flex flex-col gap-[5px]'>
                  <div className='line w-10 h-1 bg-white'></div>
                  <div className='line w-8 h-1 bg-white'></div>
                  <div className='line w-5 h-1 bg-white'></div>
                </div>
                <h3 className='text-3xl -mt-[8px] leading-none text-white'>rockstar</h3>
              </div>
            </div>

            <div className='imagesdiv relative w-full h-screen overflow-hidden '>
              <img
                className='absolute sky  scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover'
                src="./sky.png"
                alt=""

              />
              <img
                className='absolute scale-[1.8] rotate-[-5deg] bg top-0 left-0 w-full h-full object-cover'
                src="./bg.png"
                alt=""

              />

              <div className=' text  text-white flex flex-col gap-3 absolute top-10 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-deg] '>
                <h1 className='text-[5.5rem] leading-none -ml-20'>grand</h1>
                <h1 className='text-[5.5rem] leading-none '>theft</h1>
                <h1 className='text-[5.5rem] leading-none -ml-20'>auto</h1>
              </div>

              <img className='absolute character -bottom-[80%] scale-[1] left-1/2 -translate-x-1/2 rotate-[-20deg]'
                src="./girlbg.png"
                alt="" />

            </div>
            <div className='btmbar text-white absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent'>
              <div className='flex gap-4 items-center'>
                <i className="ri-arrow-down-line"></i>
                <h3 className='font-[Helvetica_Now_Display]'>Scroll Down</h3>
              </div>
              <img className='absolute h-[45px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                src="./ps5.png"
                alt=""
              />
            </div>

          </div>
          <div className='w-full h-screen flex px-10 items-center justify-center'>
            <div className='cntnr text-white flex  w-full h-[80%] '>
              <div className='limg w-1/2 relative h-full'>
                <img className='absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2'
                src="./imag.png" 
                alt="" 
                />
              </div>
              <div className='rg w-[40%] py-10'>
                <h1 className='text-3xl'>Ohh! Shit </h1>
                <h1 className='text-2xl'>HERE WE GO AGAIN</h1>
                <p className='mt-10  font-[Helvetica_Now_Display]'>Grand Theft Auto (GTA) is an open-world action-adventure game series created by Rockstar Games.</p>
                <p className='mt-5 font-[Helvetica_Now_Display]'>It’s not just a game — it’s a lifestyle of action, power, and endless possibilities.</p>
                <p className='mt-5 font-[Helvetica_Now_Display]'>Grand Theft Auto (GTA) is one of the most popular open-world action-adventure game series created by Rockstar Games. The game allows players to explore detailed cities, complete exciting missions, and experience thrilling adventures full of action, driving, and storytelling. Known for its freedom, realistic graphics, and engaging gameplay, GTA lets players live the life of a criminal in a virtual world filled with endless possibilities. From GTA Vice City to GTA V, every version brings a new level of excitement and realism, making it a favorite among gamers worldwide.
                </p>
                <button className='bg-yellow-500 px-8 py-5 text-black rounded-xl text-3xl mt-5 border-2 border-white'>Download NOw</button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default App