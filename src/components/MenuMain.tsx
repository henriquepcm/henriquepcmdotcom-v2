import ButtonContact from "./ButtonContact";

export default function MenuMain() {
     return (
          <nav
               aria-label="Website main menu"
               className="hidden lg:flex flex-row md:gap-5 lg:gap-10 items-center"
          >
               <ul className="flex flex-row md:gap-5 lg:gap-10 uppercase text-[0.6rem] text-white tracking-[0.15rem]">
                    <li>
                         <a href="#Home" aria-label="Go to the home section">
                              Home
                         </a>
                    </li>
                    <li>
                         <a href="#About" aria-label="Go to about section">
                              About
                         </a>
                    </li>
                    <li>
                         <a
                              href="#Projects"
                              aria-label="Go to projects section"
                         >
                              Projects
                         </a>
                    </li>
                    <li>
                         <a href="#Skills" aria-label="Go to Skills section">
                              Skills
                         </a>
                    </li>
               </ul>
               <ButtonContact />
          </nav>
     );
}
