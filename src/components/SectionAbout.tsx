import ExternalLink from "./ExternalLink";
import KiwiAppAnimation from "./Animations/KiwiAppAnimation";
import { WindowIcon } from "./Icons/WindowIcon";
import { ToolsIcon } from "./Icons/ToolsIcon";
import { BulbIcon } from "./Icons/BulbIcon";
import { EditIcon } from "./Icons/EditIcon";
import { MicrophoneIcon } from "./Icons/MicrophoneIcon";
import { DollarBillIcon } from "./Icons/DollarBillIcon";
import { DownloadIcon } from "./Icons/DownloadIcon";

const linkProps = {
     label: "Download my Resume (PDF)",
     icon: <DownloadIcon className="size-6 text-henriquepcmpink" />,
     url: "./downloads/EN - Henrique Pochmann Resume Front-end Developer & UI UX Designer.pdf",
};

export default function SectionAbout() {
     return (
          <section
               id="About"
               className="flex flex-row justify-center items-center pt-44 min-h-screen bg-[url(/img/bg-light-radial.avif),url(/img/bg-light-1.avif),url(/img/bg-light-2.avif)] [background-position:70%_40%,0%_0%,100%_50%] bg-no-repeat"
          >
               <div className="flex flex-row justify-center items-center gap-28">
                    <div className="flex flex-col w-10/12 sm:w-8/12">
                         <div className="flex flex-col h-full lg:flex-row gap-10 mb-10 sm:mb-5">
                              <div className="lg:w-3/6">
                                   <div className="tabtitle">About</div>
                                   <h2 className="mb-5">
                                        I’m a versatile front-end developer with
                                        10+ years of experience.
                                   </h2>
                                   <p className="mb-5">
                                        Throughout my career, I have built a
                                        solid combo of development, design, and
                                        entrepreneurial abilities.
                                   </p>

                                   <div className="w-5/6 md:w-3/6 lg:w-5/6 xl:w-4/6">
                                        <ExternalLink {...linkProps} />
                                   </div>
                              </div>
                              <div className="lg:w-3/6">
                                   <KiwiAppAnimation />
                              </div>
                         </div>
                         <div className="flex flex-col">
                              <span className="mb-8">
                                   Some cool things &apos;ve made:
                              </span>
                              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                                   <li>
                                        <WindowIcon className="size-5 text-white mb-3" />
                                        Built dozens of responsive websites
                                        among corporate sites, blogs, landing
                                        pages, squeeze pages, and web apps etc.
                                   </li>
                                   <li>
                                        <ToolsIcon className="size-5 text-white mb-3" />
                                        My extensive experience in the
                                        advertising industry working as an Art
                                        Director and Web Designer sharpened my
                                        UI/UX design skills.
                                   </li>
                                   <li>
                                        <BulbIcon className="size-5 text-white mb-3" />
                                        Co-founded an agency as the creative
                                        lead, where I oversaw two interns and
                                        hired freelance developers according to
                                        the projects.
                                   </li>
                                   <li>
                                        <EditIcon className="size-5 text-white mb-3" />
                                        Created a blog that published 300+ posts
                                        and garnered 1 million page views, and
                                        partnered with brands like Shutterstock,
                                        Udemy, and Wix.
                                   </li>

                                   <li>
                                        <MicrophoneIcon className="size-5 text-white mb-3" />
                                        Launched a podcast with more than 80
                                        episodes, reaching 350,000 plays and
                                        maintaining a 4.9-star rating on Apple
                                        Podcasts.
                                   </li>

                                   <li>
                                        <DollarBillIcon className="size-5 text-white mb-3" />
                                        Developed and marketed two digital
                                        products and a subscription campaign
                                        that generated regular revenue to
                                        finance the blog and podcast.
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </section>
     );
}
