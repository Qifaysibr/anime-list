'use client';
import { cn } from "@/libs/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const HoverEffect = ({
                                items,
                                className
                            }) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        (<div
            className={cn("grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 md:gap-12  px-4", className)}>
            {items.map((item, idx) => (
                <Link
                    href={item?.link}
                    key={`item?.link` + idx}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}>
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.95 },
                                }}
                                exit={{
                                    opacity: 1,
                                    transition: { duration: 0.55, delay: 0.2 },
                                }} />
                        )}
                    </AnimatePresence>
                    <Card>
                        <Image
                            className="aspect-square w-full rounded-lg object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                            src={item.image}
                            width={600}
                            height={400}
                            alt="anime"
                        />
                        <CardTitle>{item.title}</CardTitle>
                        {/*<CardDescription>{item.description}</CardDescription>*/}
                    </Card>
                </Link>
            ))}
        </div>)
    );
};

export const Card = ({
                         className,
                         children
                     }) => {
    return (
        (<div
            className={cn(
                "rounded-2xl h-full w-full p-2 overflow-hidden bg-black/[0.3] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}>
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>)
    );
};
export const CardTitle = ({
                              className,
                              children
                          }) => {
    return (
        (<h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>)
    );
};
// export const CardDescription = ({
//                                     className,
//                                     children
//                                 }) => {
//     return (
//         (<p
//             className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
//             {children}
//         </p>)
//     );
// };
