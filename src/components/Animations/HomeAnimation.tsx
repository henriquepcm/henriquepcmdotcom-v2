export default function HomeAnimation() {
     return (
          <div className="flex flex-col flex-grow justify-center items-center -translate-y-10 lg:-translate-y-0 relative">
               <div className="flex flex-row items-center translate-y-5">
                    <div className="hidden lg:flex flex-col">
                         <picture>
                              <source
                                   srcSet="./img/phone-kiwi-sideways-retina.avif"
                                   media="(min-resolution: 2dppx)"
                              />
                              <img
                                   fetchPriority="high"
                                   src="./img/phone-kiwi-sideways-regular.avif"
                                   alt="Sideways cell phone"
                                   className="w-[7rem] -translate-y-5"
                              />
                         </picture>

                         <picture>
                              <source
                                   srcSet="./img/phone-kiwi-sideways-shadow-retina.avif"
                                   media="(min-resolution: 2dppx)"
                              />
                              <img
                                   fetchPriority="high"
                                   src="./img/phone-kiwi-sideways-shadow.avif"
                                   alt=""
                                   className="w-[7rem] -translate-y-12 translate-x-12"
                              />
                         </picture>
                    </div>

                    <div className="flex flex-col">
                         <picture>
                              <source
                                   srcSet="./img/laptop-retina.avif"
                                   media="(min-resolution: 2dppx)"
                              />
                              <img
                                   fetchPriority="high"
                                   src="./img/laptop-regular.avif"
                                   alt="Laptop"
                                   className="w-[19rem] -translate-y-5 z-20"
                              />
                         </picture>

                         <picture>
                              <source
                                   srcSet="./img/laptop-shadow-retina.avif"
                                   media="(min-resolution: 2dppx)"
                              />
                              <img
                                   fetchPriority="high"
                                   src="./img/laptop-shadow.avif"
                                   alt=""
                                   className="w-[19rem] -translate-y-20 -translate-x-4 z-10"
                              />
                         </picture>
                    </div>
               </div>
               <div className="flex flex-col items-center absolute z-50 mt-[26rem] w-[18.8rem] lg:w-full">
                    <div className="flex justify-center items-center text-center leading-[3rem]">
                         <h1>Henrique Pochmann</h1>
                    </div>
                    <div className="flex justify-center uppercase text-white text-center leading-[1.5rem] tracking-[0.44rem]">
                         Front-end Developer & UI/UX Designer
                    </div>
               </div>
          </div>
     );
}
