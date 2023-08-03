import { useEffect, useRef } from "react";
import styles from "./to_top_button.module.scss";
import { IconContext } from "react-icons"
import { AiOutlineUp } from "react-icons/ai"

export default function ToTopButton() {
    const to_top_ref = useRef();
    useEffect( () => {
        const handle_scroll = () => {
            document.body.style.setProperty(
                "--whole_scroll_1",
                (window.pageYOffset / (document.body.offsetHeight - window.innerHeight))
            );
            if(window.pageYOffset > 200) {
                to_top_ref.current.classList.add(styles.to_top_active);
            }
            else {
                to_top_ref.current.classList.remove(styles.to_top_active);
            }
        }
        window.addEventListener("scroll", handle_scroll);

        return () => window.removeEventListener("scroll", handle_scroll);

    }, []);
    
    return(
    <>

    <div className={styles.container}>
        <a href="#" className={styles.to_top} ref={to_top_ref}> 
            <IconContext.Provider value={{ style: {fontSize: "2.5vmax"}}}>
                <AiOutlineUp/>
            </IconContext.Provider>
            <p className={styles.to_top_text}>To Top</p>
             </a>

        <div className={styles.cube_wrap}>
        
            <div className={styles.cube}>
                <div className={styles.top}></div>
                <div className={styles.bottom}></div>
                <div className={styles.front}></div>
                <div className={styles.back}></div>
                <div className={styles.left}></div>
                <div className={styles.right}></div>
            </div>
        </div>
    </div>
    </>

);
}