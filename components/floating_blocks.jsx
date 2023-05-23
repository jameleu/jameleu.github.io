
import styles from './floating_blocks.module.scss';
import { useSpring, animated } from "react-spring"

export default function FloatingBlocks() {
    
    const floating_style = useSpring({
        loop: {reverse: true, delay: 300},
        from: {
            y: "0rem"
        },
        to: {
            y: "2rem"
        },
        delay: 2000,
        config: {
            mass:1, tension: 40, clamp: true, friction: 8
        },
    })

    return(
        <div className={styles.container}>
            <animated.div style={floating_style} className={styles.block}> HI! </animated.div>
        </div>
    );
}