'use client'

import { useEffect, useRef } from 'react'
import {
  m,
  LazyMotion,
  useAnimation,
  useInView,
  domAnimation,
} from 'framer-motion'

interface TestFadeInProps {
  children: React.ReactNode
  className?: string
  duration?: number
  delay?: number
}

const easeIn = [0.2, 0.4, 0.33, 0.87]

export const SubFadeIn = ({
  children,
  className,
  duration = 0.8,
  delay = 0,
}: TestFadeInProps) => {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.2, once: true })

  const variants = {
    hidden: {
      opacity: 0,
      y: 10,
      scale: 1,
    },
    fullyVisible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration,
        ease: easeIn,
        delay: 0.3,
      },
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start('fullyVisible')
    }
  }, [controls, inView])

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

SubFadeIn.displayName = 'SubFadeIn'
