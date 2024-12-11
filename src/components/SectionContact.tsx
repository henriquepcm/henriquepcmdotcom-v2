import ButtonSend from "./ButtonSend";
import ExternalLink from "./ExternalLink";
import { GitHubIcon } from "./Icons/GitHubIcon";
import { Linkedin } from "./Icons/LinkedIn";
import { BehanceIcon } from "./Icons/BehanceIcon";
import { DribbbleIcon } from "./Icons/DribbbleIcon";
import { PinIcon } from "./Icons/PinIcon";
import { ClockIcon } from "./Icons/ClockIcon";
import { EnvelopeIcon } from "./Icons/EnvelopeIcon";
import { useSendEmail } from "../hooks/useSendEmail";

const linkedInLink = {
     label: "LinkedIn",
     icon: <Linkedin className="size-4 text-henriquepcmpink" />,
     url: "https://www.linkedin.com/in/henriquepcm/",
};

const gitHubLink = {
     label: "GitHub",
     icon: <GitHubIcon className="size-4 text-henriquepcmpink" />,
     url: "https://github.com/henriquepcm",
};

const behanceLink = {
     label: "Behance",
     icon: <BehanceIcon className="size-4 text-henriquepcmpink" />,
     url: "https://www.behance.net/henriquepcm",
};

const dribbbleLink = {
     label: "Dribbble",
     icon: <DribbbleIcon className="size-4 text-henriquepcmpink" />,
     url: "https://dribbble.com/henriquepcm",
};

export default function SectionContact() {
     const { form, isFormSent, isPending, sendEmail } = useSendEmail();

     return (
          <section
               id="Contact"
               className="flex w-full min-h-screen items-center justify-center pt-44 bg-[url(/img/bg-light-radial.avif),url(/img/bg-light-1.avif),url(/img/bg-light-2.avif)] [background-position:0%_25%,100%_33%,80%_100%] bg-no-repeat"
          >
               <div className="flex flex-col items-center justify-center lg:flex-row w-10/12 md:w-6/12 lg:w-8/12 gap-28">
                    <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full gap-40">
                         <div
                              className={`${isFormSent ? "hidden" : ""}${
                                   isPending ? "opacity-50" : ""
                              }`}
                         >
                              <div className="tabtitle">Contact</div>
                              <h2>
                                   If my skills can help your amazing project
                                   succeed, I would love to hear from you!
                              </h2>

                              <form
                                   ref={form}
                                   onSubmit={sendEmail}
                                   className="flex flex-col mt-10 gap-5"
                              >
                                   <div className="flex gap-10">
                                        <div className="w-full flex flex-col">
                                             <input
                                                  id="first-name"
                                                  name="first-name"
                                                  className="w-full peer focus:border-henriquepcmpink"
                                                  type="text"
                                                  disabled={isPending}
                                                  required
                                             />
                                             <label
                                                  htmlFor="first-name"
                                                  className="peer-focus:text-henriquepcmpink -translate-y-[3.6rem]"
                                             >
                                                  First Name
                                             </label>
                                        </div>
                                        <div className="w-full flex flex-col">
                                             <input
                                                  id="second-name"
                                                  name="second-name"
                                                  className="w-full peer focus:border-henriquepcmpink"
                                                  type="text"
                                                  disabled={isPending}
                                                  required
                                             />
                                             <label
                                                  htmlFor="second-name"
                                                  className="peer-focus:text-henriquepcmpink -translate-y-[3.6rem]"
                                             >
                                                  Second Name
                                             </label>
                                        </div>
                                   </div>
                                   <div className="w-full flex flex-col">
                                        <input
                                             id="email"
                                             name="email"
                                             className="w-full peer focus:border-henriquepcmpink"
                                             type="email"
                                             pattern="[^@\s]+@[^@\s]+\.[^@\s]+$"
                                             title="e.g., user@example.com"
                                             disabled={isPending}
                                             required
                                        />
                                        <label
                                             htmlFor="email"
                                             className="peer-focus:text-henriquepcmpink -translate-y-[3.6rem]"
                                        >
                                             Email
                                        </label>
                                   </div>
                                   <div className="flex flex-col">
                                        <textarea
                                             id="message"
                                             name="message"
                                             className="peer focus:border-henriquepcmpink"
                                             disabled={isPending}
                                             required
                                        ></textarea>
                                        <label
                                             htmlFor="message"
                                             className="peer-focus:text-henriquepcmpink -translate-y-[11rem]"
                                        >
                                             Message
                                        </label>
                                   </div>
                                   <div className="h-16">
                                        <ButtonSend isPending={isPending} />
                                   </div>
                              </form>
                         </div>
                         <div
                              aria-hidden={isFormSent}
                              className={`${
                                   isFormSent ? "" : "hidden"
                              } flex flex-col items-center justify-center gap-5 w-full lg:w-4/6 2xl:w-3/6 transition-opacity duration-300 ease-in-out`}
                         >
                              <img
                                   src="./img/illustration-message-sent.avif"
                                   srcSet="./img/illustration-message-sent.avif 1x, ./img/illustration-message-sent-retina.avif 2x"
                                   className="w-10/12"
                                   loading="lazy"
                                   alt="Illustration of a desktop window confirming the message was successfully sent."
                              />
                              <h2>Thanks for reaching out!</h2>
                              <p className="text-center">
                                   Your message is on its way, and I&apos;ll get
                                   back to you as soon as possible.
                              </p>
                         </div>
                         <div className="flex flex-col items-center lg:items-end lg:w-3/6">
                              <div className="flex flex-col items-center gap-3">
                                   <img
                                        src="./img/henrique-pochmann-front-end-developer.avif"
                                        srcSet="./img/henrique-pochmann-front-end-developer.avif 1x, ./img/henrique-pochmann-front-end-developer-retina.avif 2x"
                                        className="w-24 rounded-full border-[0.35rem]"
                                        loading="lazy"
                                        alt="Avatar showing the face of the front-end developer Henrique Pochmann"
                                   />

                                   <div className="flex flex-col items-center justify-center mb-5">
                                        <span className="text-white text-sm">
                                             Henrique Pochmann
                                        </span>
                                        <div className="flex flex-col items-center justify-center">
                                             <span className="leading-8">
                                                  Front-End Developer
                                             </span>
                                             <span className="leading-3">
                                                  & UI/UX Designer
                                             </span>
                                        </div>
                                   </div>
                                   <ExternalLink {...linkedInLink} />
                                   <ExternalLink {...gitHubLink} />
                                   <ExternalLink {...behanceLink} />
                                   <ExternalLink {...dribbbleLink} />
                                   <div className="flex items-center justify-center w-full h-12 border-b border-henriquepcmbasepurple gap-2">
                                        <EnvelopeIcon className="size-4" />
                                        henriquepcm@gmail.com
                                   </div>
                                   <div className="flex items-center justify-center w-full h-12 border-b border-henriquepcmbasepurple gap-2">
                                        <ClockIcon className="size-4" />
                                        Timezone UTC-3
                                   </div>
                                   <div className="flex items-center justify-center w-full h-12 border-b border-henriquepcmbasepurple gap-2">
                                        <PinIcon className="size-4" />
                                        Based in Brazil
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
