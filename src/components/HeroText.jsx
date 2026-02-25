import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from 'framer-motion'

const HeroText = () => {

    const words = ["Responsive", "Modern", "Interactive"]
    // create variable in array that animate the hero text from left to 0 postion

    // const Variants = {
    //     hidden: {
    //         opacity: 0,
    //         x: -50
    //     },
    //     visible: {
    //         opacity: 1,
    //         x: 0,
    //          transition: { duration: 0.8, ease: "easeOut" }
    //     }
    //}

    const Variants = {
        hidden: {
            opacity: 0,
            y: 40,
            filter: "blur(8px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    return (
        //mobile view  also responsive code
        <div className='relative z-10 mt-24 md:mt-40 px-6 md:px-0 text-center md:text-left'>
            {/* desktop view */}

          <div className="relative flex flex-col c-space">
                <motion.h1
                    // className='text-3xl font-medium  text-neutral-300'
                    className='text-6xl md:text-4xl font-semibold text-neutral-400 tracking-wide'
                    variants={Variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                >
                    Hii, I'm Pooja Athane
                </motion.h1>
                <div className="relative flex flex-col items-start">
                    <motion.p
                        // className='text-5xl font-medium text-neutral-300'
                        className="text-4xl md:text-5xl font-bold text-white leading-tight"
                        variants={Variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.1 }}
                    >
                        Frontend Developer<br /> Dedicated to Crafting
                    </motion.p>

                    {/* Animated words */}
                    <motion.div
                        className="relative "
                        variants={Variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}
                    >
                        <FlipWords
                            words={words}
                            className="font-black text-white text-8xl"
/>
                    </motion.div>
                    {/* Animated words */}

                    <motion.p
                        // className='text-4xl font-medium text-neutral-300'
                        className="text-4xl md:text-4xl font-semibold text-neutral-400 mt-4"
                        variants={Variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.3 }}
                    >
                        Web Experiences
                    </motion.p>
                </div>
            </div>

            {/* desktop view */}

        </div>
    )
}

export default HeroText
