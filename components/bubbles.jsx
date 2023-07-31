import { useEffect, useRef } from "react";
import styles from "./bubbles.module.scss";

export default function BubbleLine() {
    const cont_ref = useRef(); //container ref to handle it using unique js cmds in react

    const create_bubble = () => {
        //create bubble
        const curr_bubble = document.createElement("span");
        
        const max_bubble_size = 4;

        var bubble_size = Math.random() * max_bubble_size;
        
        //set current bubble's attributes and add it to the container
        curr_bubble.className=styles.bubble;
        curr_bubble.style.width = bubble_size + "vw";
        curr_bubble.style.height = bubble_size + "vw";
        curr_bubble.style.left = Math.random() * innerWidth + "px";
        cont_ref.current.appendChild(curr_bubble);

        setTimeout(() => {
            curr_bubble.remove();
        }, 10000); //get rid of bubble after _ ms
    }

    useEffect( () => {
        const timer = setInterval(create_bubble, 150); //run create_bubble every _ ms

        return () => clearInterval(timer); //cleanup upon return since are using as side effect
    }, []);

    return( 
        <div id={styles.bubble_container} ref={cont_ref}> </div>
    );
}