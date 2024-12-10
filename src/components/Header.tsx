import { useBeyondViewport } from "../hooks/useBeyondViewport";
import Logo from "./Logo";
import MenuMain from "./MenuMain";
import MenuMobile from "./MenuMobile";

export default function Header() {
     const { isBeyondViewport } = useBeyondViewport();

     return (
          <header>
               <div
                    className={`flex justify-center w-full fixed top-0 left-0 z-[99] ${
                         isBeyondViewport &&
                         "bg-black bg-opacity-30 backdrop-blur-sm"
                    }`}
               >
                    <div className="flex justify-between items-center h-20 w-10/12 max-w-[1920px] relative">
                         <Logo />
                         <MenuMain />
                         <MenuMobile />
                    </div>
               </div>
          </header>
     );
}
