import { useSpring, useInView, animated } from "@react-spring/web";

export default function HomeAnimation() {
     const [refHomeAnimation, inViewHomeAnimation] = useInView({
          rootMargin: "-50% 0%",
     });

     const styleLaptop = useSpring({
          from: {
               opacity: 0,
               filter: "blur(5rem)",
               transform: "scale(0.5)",
               x: -200,
          },
          to: {
               opacity: inViewHomeAnimation ? 1 : 0,
               filter: inViewHomeAnimation ? "blur(0)" : "blur(5rem)",
               transform: inViewHomeAnimation ? "scale(1)" : "scale(0.5)",
               x: inViewHomeAnimation ? 0 : -200,
          },

          delay: 0,
          config: { friction: 50 },
     });

     const stylePhone = useSpring({
          from: {
               opacity: 0,
               filter: "blur(5rem)",
               transform: "scale(0.5)",
               x: 200,
          },
          to: {
               opacity: inViewHomeAnimation ? 1 : 0,
               filter: inViewHomeAnimation ? "blur(0)" : "blur(5rem)",
               transform: inViewHomeAnimation ? "scale(1)" : "scale(0.5)",
               x: inViewHomeAnimation ? 0 : 200,
          },
          delay: 500,
          config: { friction: 50 },
     });

     const styleH1 = useSpring({
          from: {
               opacity: 0,
               y: -10,
          },
          to: {
               opacity: inViewHomeAnimation ? 1 : 0,
               y: inViewHomeAnimation ? 0 : -10,
          },
          delay: 1000,
          config: { friction: 50 },
     });

     const styleRole = useSpring({
          from: {
               opacity: 0,
               y: -10,
          },
          to: {
               opacity: inViewHomeAnimation ? 1 : 0,
               y: inViewHomeAnimation ? 0 : -10,
          },
          delay: 1500,
          config: { friction: 50 },
     });

     return (
          <div className="flex flex-col flex-grow justify-center items-center -translate-y-10 lg:-translate-y-0 relative">
               <animated.div
                    ref={refHomeAnimation}
                    className="flex flex-row items-center translate-y-5"
               >
                    <animated.div
                         style={stylePhone}
                         className="hidden lg:flex flex-col"
                    >
                         <img
                              fetchPriority="high"
                              src="./img/phone-kiwi-sideways-regular.png"
                              srcSet="./img/phone-kiwi-sideways-regular.png 1x, ./img/phone-kiwi-sideways-retina.png 2x"
                              className="w-[7rem] -translate-y-5"
                              alt="Sideways cell phone"
                         />

                         <img
                              fetchPriority="high"
                              src="./img/phone-kiwi-sideways-shadow.png"
                              srcSet="./img/phone-kiwi-sideways-shadow.png 1x, ./img/phone-kiwi-sideways-shadow-retina.png 2x"
                              className="w-[7rem] -translate-y-12 translate-x-12"
                              alt=""
                         />
                    </animated.div>

                    <animated.div style={styleLaptop} className="flex flex-col">
                         <img
                              fetchPriority="high"
                              src="./img/laptop.png"
                              srcSet="./img/laptop-regular.png 1x, ./img/laptop-retina.png 2x"
                              className="w-[19rem] -translate-y-5 z-20"
                              alt="Laptop"
                         />

                         <img
                              fetchPriority="high"
                              src="./img/laptop-shadow.png"
                              srcSet="./img/laptop-shadow.png 1x, ./img/laptop-shadow-retina.png 2x"
                              className="w-[19rem] -translate-y-20 -translate-x-4 z-10"
                              alt=""
                         />
                    </animated.div>
               </animated.div>
               <div className="flex flex-col items-center absolute z-50 mt-[26rem] w-[18.8rem] lg:w-full">
                    <div className="flex justify-center items-center text-center leading-[3rem]">
                         <animated.h1 style={styleH1}>
                              Henrique Pochmann
                         </animated.h1>
                    </div>
                    <animated.div
                         style={styleRole}
                         className="flex justify-center uppercase text-white text-center leading-[1.5rem] tracking-[0.44rem]"
                    >
                         Front-end Developer & UI/UX Designer
                    </animated.div>
               </div>
          </div>
     );
}
