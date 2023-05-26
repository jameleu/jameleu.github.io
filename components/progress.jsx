import styles from "./progress.module.scss";
import { useEffect } from 'react';

export default function Progress() {
    useEffect( () => {
        const handle_scroll = () => {
            document.body.style.setProperty(
                "--whole_scroll_2",
                (window.pageYOffset / (document.body.offsetHeight - window.innerHeight))
            );
        }
        window.addEventListener("scroll", handle_scroll);

        return () => window.removeEventListener("scroll", handle_scroll);
    }, []);
    return( 
        <>
            <div className={styles.progress}></div>
        </>
        
    );
}