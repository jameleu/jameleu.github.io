import styles from './intro_bio.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Image from 'next/image';
import {useEffect, useRef} from 'react';

export default function Intro_Bio() {
    //console.log(parent_div);
    //console.log("top: " + parent_div.current.offsetTop);
    const b_ref_beg = useRef();
    const b_ref_end = useRef();

    // const intro_bio_ref2 = useRef();

    useEffect( () => {

        const handle_scroll = () => {
            document.body.style.setProperty(
                "--curr_scroll",
                (window.pageYOffset - b_ref_beg.current.offsetTop) / (window.innerHeight + b_ref_end.current.offsetTop - b_ref_beg.current.offsetTop) // - window.outerHeight - window.innerHeight
                //note: curr_scroll_2 is deprecated!!!!!!
                // (window.pageYOffset - intro_bio_ref.current.offsetTop) / (intro_bio_ref.current.offsetTop)
                                
                //window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
            // );
            // document.body.style.setProperty(
            //     "--curr_scroll_2",
            //     (window.pageYOffset - intro_bio_ref2.current.offsetTop ) * 1.8 / (intro_bio_ref2.current.offsetTop)
            );
        };
        window.addEventListener("scroll", handle_scroll);
      return () => window.removeEventListener("scroll", handle_scroll);
    }, []);
      
    return(
        <>
        <section>
            <div className={styles.headers}>
                <div ref={b_ref_beg} className={styles.hitbox}></div>
                <p className={styles.header_school_R}> I'm a student at the </p>
                <p className={styles.header_school_L}> University of Michigan (Ann Arbor).</p>
                <div className={styles.logo_wrapper}>
                <Image
                  priority
                  src="/images/umich_logo.png"
                  className={styles.logo}
                  height={216}
                  width={216}
                  layout="responsive"
                  alt="umich_logo.png"
                  unoptimized
                />
                </div>
                <div ref={b_ref_end} className={styles.hitbox}></div>
            </div>
        </section>
        
        </>
    );

}