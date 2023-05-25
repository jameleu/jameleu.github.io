import { useEffect, useState } from "react";
import styles from "./typewriter.module.scss";

export default function Typewriter({text_list, duration}) {
    const [curr_text, set_text] = useState(text_list[0]);
    var iterator = 0; //to keep track of which text in text_list to use
    useEffect( () => {
        document.body.style.setProperty("--typewriter_key_presses", Math.ceil(curr_text.length/2));
    }, [curr_text]); //update steps in animation for typewriter based on the current text when it changes

    useEffect( () => { //useEffect to run this as side effect
        document.body.style.setProperty("--typewriter_duration", duration); //set animation duration
        const timer = setInterval(() => {
            iterator = (iterator + 1) % text_list.length; //cycle through text list's items
            set_text(text_list[iterator]);
        }, 12000); //timer runs this func every _ ms

        return () => clearInterval(timer); //cleanup upon return
    }, []);
    return(
    <div className={styles.container}>
        <p className={styles.text}> {curr_text} </p>
    </div>
    );
}