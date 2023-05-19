import styles from './intro_bio.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Image from 'next/image';
import {useEffect, useState, useRef} from 'react';

export default function Intro_Bio() {
    //console.log(parent_div);
    //console.log("top: " + parent_div.current.offsetTop);
    const intro_bio_ref = useRef();

    useEffect( () => {

        const handle_scroll = () => {
            document.body.style.setProperty(
                "--curr_scroll",
                (window.pageYOffset - intro_bio_ref.current.offsetTop + window.outerHeight + 0.1085*window.innerHeight) / (intro_bio_ref.current.offsetTop - window.outerHeight)
                                
                //window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
            );
        };
        window.addEventListener("scroll", handle_scroll);
      return () => window.removeEventListener("scroll", handle_scroll);
    }, []);
      
    return(
        <div ref={intro_bio_ref} className={styles.headers}>
            <p className={styles.header_school_R}> I'm a student at the </p>
            <p className={styles.header_school_L}> University of Michigan (Ann Arbor)</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );

}