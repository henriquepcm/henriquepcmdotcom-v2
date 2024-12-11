import { GitHubIcon } from "./Icons/GitHubIcon";
import { DiagonalArrowIcon } from "./Icons/DiagonalArrow";
import ExternalLink from "./ExternalLink";
import ProjectAnimation from "./Animations/ProjectAnimation";

const gitHubLinkStocks = {
     label: "Repository on GitHub",
     icon: <GitHubIcon className="size-4 text-henriquepcmpink" />,
     url: "https://github.com/henriquepcm/kiwi-stocks",
};

const liveLinkStocks = {
     label: "See this project live",
     icon: <DiagonalArrowIcon className="size-4 text-henriquepcmpink" />,
     url: "https://kiwistocks.vercel.app/",
};

const gitHubLinkBills = {
     label: "Repository on GitHub",
     icon: <GitHubIcon className="size-4 text-henriquepcmpink" />,
     url: "https://github.com/henriquepcm/kiwi-monthly-bills-tracker",
};

const liveLinkBills = {
     label: "See this project live",
     icon: <DiagonalArrowIcon className="size-4 text-henriquepcmpink" />,
     url: "https://kiwibillstracker.netlify.app/",
};

export default function SectionProjects() {
     return (
          <>
               <section
                    id="Projects"
                    className="flex flex-col min-h-screen justify-center items-center pt-44 bg-[url(/img/bg-light-radial.avif),url(/img/bg-light-1.avif),url(/img/bg-light-2.avif)] [background-position:50%_10%,100%_70%,0%_0%] bg-no-repeat"
               >
                    <div className="flex flex-col lg:flex-row lg:gap-10 items-end h-full w-10/12 sm:w-8/12">
                         <div className="lg:w-3/6">
                              <div className="tabtitle">Projects</div>
                              <h2>Kiwi Stocks</h2>
                              <p className="mt-5">
                                   A remote-first web app to easily compare
                                   stocks side-by-side. Users can compare and
                                   track stock indicators for companies listed
                                   on B3&apos;s IDIV stock index. The app
                                   provides detailed information on 48 Brazilian
                                   companies through 55 different indicators.
                              </p>
                              <div className="flex flex-col gap-2 mt-5 w-5/6 md:w-3/6 lg:w-11/12 xl:w-4/6">
                                   <ExternalLink {...gitHubLinkStocks} />
                                   <ExternalLink {...liveLinkStocks} />
                              </div>
                         </div>
                         <div className="lg:w-4/6">
                              <ProjectAnimation project="stocks" />
                         </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10 lg:mt-20 w-10/12 sm:w-8/12">
                         <div>
                              <h3>Problem</h3>
                              <p>
                                   There are numerous tools for checking stock
                                   data online. However, none allow users to
                                   compare data side-by-side or to choose
                                   specific indicators for comparison.
                              </p>
                         </div>
                         <div>
                              <h3>Solution</h3>
                              <p>
                                   Develop an intuitive web app that enables
                                   users to select stocks and indicators,
                                   viewing them side-by-side for easier
                                   comparison.
                              </p>
                         </div>
                         <div>
                              <h3>Tools and Technologies</h3>
                              <p>
                                   React, Next.js, TypeScript, API Rest, Redux,
                                   Tailwind CSS, localStorage, Jest, React
                                   Testing Library, GitHub Actions, CI/CD, Cron
                                   Jobs, VS Code, Figma.
                              </p>
                         </div>
                         <div>
                              <h3>My Role</h3>
                              <p>
                                   UI/UX Design, Front-End and Back-End
                                   Development.
                              </p>
                         </div>
                         <div>
                              <h3>Challenges</h3>
                              <p>
                                   The free API plan allows only 500 requests
                                   per month. To adhere to this limit, the app
                                   updates data only twice a week and includes
                                   just around 50 symbols.
                              </p>
                         </div>
                    </div>
               </section>
               <section className="flex flex-col min-h-screen justify-center items-center pt-44 bg-[url(/img/bg-light-radial.avif),url(/img/bg-light-1.avif),url(/img/bg-light-2.avif)] [background-position:0%_0%,0%_90%,90%_0%] bg-no-repeat">
                    <div className="flex flex-col lg:flex-row lg:gap-10 items-end h-full w-10/12 sm:w-8/12">
                         <div className="hidden lg:block lg:w-4/6">
                              <ProjectAnimation project="bills" />
                         </div>

                         <div className="lg:w-3/6">
                              <div className="tabtitle">Projects</div>
                              <h2>Kiwi Monthly Bills Tracker</h2>
                              <p className="mt-5">
                                   A remote-first web app to track fixed
                                   expenses. Users can add their monthly bills
                                   and mark them as paid/unpaid. At the
                                   beginning of each month, the bills can be
                                   unmarked to restart the cycle. Users also see
                                   a friendly message informing them whether
                                   they have a financial balance.
                              </p>
                              <div className="flex flex-col gap-2 mt-5 w-5/6 md:w-3/6 lg:w-11/12 xl:w-4/6">
                                   <ExternalLink {...gitHubLinkBills} />
                                   <ExternalLink {...liveLinkBills} />
                              </div>
                         </div>
                         <div className="lg:hidden">
                              <ProjectAnimation project="bills" />
                         </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10 lg:mt-20 w-10/12 sm:w-8/12">
                         <div>
                              <h3>Problem</h3>
                              <p>
                                   Many people struggle with managing their
                                   finances because they find finance apps
                                   overly complex and cluttered with unnecessary
                                   features.
                              </p>
                         </div>
                         <div>
                              <h3>Solution</h3>
                              <p>
                                   The first step in managing personal finances
                                   is to record all fixed expenses. With this in
                                   mind, I created a simple, user-friendly web
                                   app designed to encourage people to track
                                   their monthly bills easily.
                              </p>
                         </div>
                         <div>
                              <h3>Tools and Technologies</h3>
                              <p>
                                   React, TypeScript, Redux, styled-components,
                                   localStorage, Jest, React Testing Library,
                                   GitHub Actions, CI/CD, VS Code, VS Code,
                                   Figma.
                              </p>
                         </div>
                         <div>
                              <h3>My Role</h3>
                              <p>UI/UX Design and Front-End Development.</p>
                         </div>
                    </div>
               </section>
          </>
     );
}
