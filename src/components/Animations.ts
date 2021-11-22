// Framer Motion Notes
// Everything animated is wrapped in a motion.<thing>, usually motion.div.

// Animations are in three parts: initial, animate, and exit.

// initial = inactive
// animate = active
// exit = inactive OR exit (for things that warp both ways)

// adding layout automatically scales etc i think
// but you still need a transition


export function animOpacity(duration: number) {
    return {
        inactive: {
            opacity: 0,
        },
        active: {
            opacity: 1,
            transition: {
                duration: duration,
                delayChildren: 0.5,
            }
        }
    }
}

export function animBounceRight(x: number, stiffness: number, delay: number = 0, damping: number = 10, mass: number = 1) {
    return {
        inactive: {
            x: x + "px",
            opacity: 0,
        },
        active: {
            x: "0px",
            opacity: 1,
            transition: transitSpring(stiffness, delay, damping, mass)
        }
    }
}

export function transitSpring(stiffness: number, delay: number = 0, damping: number = 10, mass: number = 1) {
    return {
        delay: delay,
        type: "spring",
        stiffness: stiffness,
        damping: damping,
        mass: mass,
    }
}
