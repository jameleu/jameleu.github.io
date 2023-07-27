import { Carousel } from '../components/carousel';
import styles from './parallax_carousel.module.scss';
import { exp_card_list } from '../components/card_list';
import { useEffect, useRef } from 'react'

export default function ParallaxCarousel() {
    const p_ref_beg = useRef(); //beg and end ref means that scroll detection only exists for this section
    const p_ref_end = useRef();

    useEffect( () => {

        const handle_scroll = () => {
            document.body.style.setProperty(
                "--curr_scroll_3",     //must take into account window inner height when trying to calculate distance and % completed properly for scroll in specific section mechanic
                (window.pageYOffset - p_ref_beg.current.offsetTop + window.innerHeight) / (window.innerHeight + p_ref_end.current.offsetTop - p_ref_beg.current.offsetTop) // - window.outerHeight - window.innerHeight
            );
        };
        window.addEventListener("scroll", handle_scroll);
      return () => window.removeEventListener("scroll", handle_scroll);
    }, []);
    return(
    <>
        <div ref={p_ref_beg} />
        <div className={styles.parallax}>
            <div className={styles.fixed_wrapper}>
                <section className={styles.headers2}>
                    <div className={styles.header_reason_T}> I'm interested in software engineering to enhance daily life with scalable user-driven code.</div>
                    {/* <div className={styles.shadow_T}>  </div> */}
                    <div className={styles.header_reason_B}> Some of my experience includes: </div>
                    {/* <div className={styles.shadow_B}> </div> */}
                </section>
                <Carousel cards= {exp_card_list} />
            </div>
        </div>
        <div ref={p_ref_end} />
    </>
    );
}