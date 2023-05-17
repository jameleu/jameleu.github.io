import React, { useState, useEffect } from 'react';


export default function is_visible(target_ref, root = null, threshold = 0, root_margin = "0%", animate_once = false) {
    const [target, setTarget] = useState();
    
    const update_target = ([entry]) => {
        setTarget(entry)};

    const shown_once = target?.isIntersecting && animate_once;
    useEffect(() => {
        const supported = !!window.IntersectionObserver;
        if(!supported || !target_ref?.current || shown_once) {
            console.log("fail");
            return;
        }

        const observer = new IntersectionObserver(update_target, {threshold, root, root_margin})
        observer.observe(target_ref?.current);
        return () => observer.disconnect();
    }, [target, root, root_margin, threshold, animate_once]);

    return target?.isIntersecting;    
}