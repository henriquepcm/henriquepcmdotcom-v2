import { useSpring, useInView, animated } from "@react-spring/web";

type ExternalLinkProps = {
     label: string;
     icon: JSX.Element;
     url: string;
};

export default function ExternalLink({ label, icon, url }: ExternalLinkProps) {
     const [refLink, inViewLink] = useInView({
          rootMargin: "-10% 0%",
     });

     const styleExternalLink = useSpring({
          to: {
               opacity: inViewLink ? 1 : 0,
               x: inViewLink ? 0 : -10,
          },
          delay: 500,
          config: { duration: 50 },
     });

     return (
          <animated.div
               ref={refLink}
               style={styleExternalLink}
               className="flex gap-2 items-center justify-center h-12 w-full p-2 rounded-md border border-henriquepcmbasepurple transform duration-300 hover:border-henriquepcmpink group"
          >
               <div className="group-hover:translate-x-1 duration-300">
                    {icon}
               </div>
               <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transform duration-300 group-hover:translate-x-2"
                    href={url}
               >
                    {label}
               </a>
          </animated.div>
     );
}
