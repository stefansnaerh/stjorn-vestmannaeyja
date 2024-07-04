'use client'

import { useEffect, useRef } from 'react'
import {
  m,
  LazyMotion,
  useAnimation,
  useInView,
  domAnimation,
} from 'framer-motion'

interface FadeProps {
  children: React.ReactNode
  className?: string
  duration?: number
  delay?: number // Prop for specifying the delay
}

const easeIn = [0.2, 0.4, 0.33, 0.87]

export const FadeIn = ({
  children,
  className,
  duration = 0.8,
  delay = 0, // Default to 0 if not specified
}: FadeProps) => {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.2, once: true })

  useEffect(() => {
    let animationTimeout: ReturnType<typeof setTimeout>
    if (inView) {
      // Set a timeout based on the delay prop before starting the animation
      animationTimeout = setTimeout(() => {
        controls.start('visible')
      }, delay * 1000) // Convert seconds to milliseconds
    }

    return () => clearTimeout(animationTimeout) // Cleanup the timeout when the component unmounts or inView changes
  }, [controls, inView, delay])

  const variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration,
        ease: easeIn,
        delay: 0, // Since we're handling the delay with a timeout, we set this to 0
      },
    },
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        className={className}
        animate={controls}
        initial="hidden"
        variants={variants}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}

FadeIn.displayName = 'FadeIn'
