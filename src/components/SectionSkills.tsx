import { useSpring, useInView, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import SkillCard from "./SkillCards/SkillCard";
import { skills } from "./SkillCards/SkillCardsData";

export default function SectionSkills() {
     const [refSkills, inViewSkills] = useInView({
          rootMargin: "-40% 0%",
     });

     const [styleSkillsRow1, SkillsRow1Api] = useSpring(() => ({
          to: {
               x: inViewSkills ? 200 : 0,
          },
          config: { duration: 10000, friction: 50 },
     }));

     const [styleSkillsRow2, SkillsRow2Api] = useSpring(() => ({
          to: {
               x: inViewSkills ? 200 : 0,
          },
          config: { duration: 10000, friction: 50 },
     }));

     const bindSkillsRow1 = useDrag(
          ({ down, movement: [mx], memo = styleSkillsRow1.x.get() }) => {
               SkillsRow1Api.start({
                    x: down ? mx + memo : memo,
                    immediate: down,
               });
               styleSkillsRow1.x.set(mx + memo);
               return memo;
          },
          { bounds: { right: 300, left: -600 } }
     );

     const bindSkillsRow2 = useDrag(
          ({ down, movement: [mx], memo = styleSkillsRow2.x.get() }) => {
               SkillsRow2Api.start({
                    x: down ? mx + memo : memo,
                    immediate: down,
               });
               styleSkillsRow2.x.set(mx + memo);
               return memo;
          },
          { bounds: { right: 600, left: -300 } }
     );

     return (
          <section
               id="Skills"
               className="flex flex-col min-h-screen items-center pt-40 overflow-hidden bg-[url(/img/bg-light-radial.png),url(/img/bg-light-1.png),url(/img/bg-light-2.png)] [background-position:0%_50%,0%_0%,50%_50%] bg-no-repeat"
          >
               <div className="w-10/12 sm:w-8/12">
                    <div className="tabtitle">Skills</div>
                    <h2>Tools and Technologies</h2>
                    <p className="mt-5 mb-5">
                         I&apos;m continuously expanding my toolkit with fresh
                         resources, focusing especially on the JavaScript
                         ecosystem.
                    </p>
               </div>
               <animated.div
                    ref={refSkills}
                    className="flex flex-col items-center relative w-full"
               >
                    <animated.div
                         {...bindSkillsRow1()}
                         style={{
                              ...styleSkillsRow1,
                              touchAction: "none",
                         }}
                         className="flex flex-row gap-5 absolute ml-80 mt-40 hover:cursor-grab"
                    >
                         {skills.slice(6, 12).map((skill) => (
                              <SkillCard key={skill.label} skill={skill} />
                         ))}
                    </animated.div>
                    <animated.div
                         {...bindSkillsRow2()}
                         style={{
                              ...styleSkillsRow2,
                              touchAction: "none",
                         }}
                         className="flex flex-row gap-5 absolute mr-80 mt-10 hover:cursor-grab"
                    >
                         {skills.slice(0, 6).map((skill) => (
                              <SkillCard key={skill.label} skill={skill} />
                         ))}
                    </animated.div>
               </animated.div>
          </section>
     );
}
