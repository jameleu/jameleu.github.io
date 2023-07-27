import styles from './intro_bio.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Image from 'next/image';
import {useEffect, useRef} from 'react';

export default function Intro_Bio() {
    //console.log(parent_div);
    //console.log("top: " + parent_div.current.offsetTop);
    const intro_bio_ref = useRef();

    const intro_bio_ref2 = useRef();

    useEffect( () => {

        const handle_scroll = () => {
            document.body.style.setProperty(
                "--curr_scroll",
                (window.pageYOffset - intro_bio_ref.current.offsetTop) * 0.7 / (intro_bio_ref.current.offsetTop)
                                
                //window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
            );
            document.body.style.setProperty(
                "--curr_scroll_2",
                (window.pageYOffset - intro_bio_ref2.current.offsetTop ) * 1.8 / (intro_bio_ref2.current.offsetTop)
            );
        };
        window.addEventListener("scroll", handle_scroll);
      return () => window.removeEventListener("scroll", handle_scroll);
    }, []);
      
    return(
        <>
        <section>
            <div ref={intro_bio_ref} className={styles.headers}>
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
                <div ref={intro_bio_ref2}></div>

            </div>
        </section>
        
        </>
    );

}