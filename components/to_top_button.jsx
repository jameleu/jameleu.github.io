import { useEffect } from "react";

export default function ToTopButton() {

    const to_top_ref = useRef();
    useEffect( () => {
        const handle_scroll = () => {

        }
    });
    
    return(
    <>

    <div className={container}>
        <div className={to_top} ref={to_top_ref}> To Top </div>

        <div className={cube-wrap}>
        
            <div className={cube}>
                <div className={side top}></div>
                <div className={side bottom}></div>
                <div className={side front}></div>
                <div className={side back}></div>
                <div className={side left}></div>
                <div className={side right}></div>
            </div>
        </div>
    </div>
    </>

);
}