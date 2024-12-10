import { CodeTag } from "./Icons/CodeTag";

export default function Footer() {
     return (
          <footer className="flex items-end justify-center w-full h-96 pb-10">
               <div className="flex flex-col w-10/12 lg:w-8/12">
                    <CodeTag className="size-[1.1rem] text-white mb-2" />
                    <div>
                         Made in Brazil. Code & UI/UX by Henrique P.
                         henriquepcm.com 2014-{new Date().getFullYear()}.
                         Cheers!
                    </div>
               </div>
          </footer>
     );
}
