import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionAbout from "./components/SectionAbout";
import SectionContact from "./components/SectionContact";
import SectionHome from "./components/SectionHome";
import SectionProjects from "./components/SectionProjects";
import SectionSkills from "./components/SectionSkills";

export default function App() {
     return (
          <div className="max-w-[1920px]">
               <Header />
               <main>
                    <SectionHome />
                    <SectionAbout />
                    <SectionProjects />
                    <SectionSkills />
                    <SectionContact />
               </main>
               <Footer />
          </div>
     );
}

{
     /* Grid to align elements */
     /*  
     <div className="grid-overlay">
          {[...Array(24)].map((_, i) => (
               <div key={i}></div>
          ))}
     </div> */
}
