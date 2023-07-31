import styles from './button_3d.module.scss';

export function SlideLButton3D({text, link}) {
    return( 
        <a href={link} target="_blank" className={styles.slide_L}> {text} </a>
    );
}

export function SlideTButton3D({text, link}) {
    return( 
        <a href={link} target="_blank" className={styles.slide_T}> {text} </a>
    );
}

export function SlideSButton3D({text, link}) {
    return( 
        <a href={link} target="_blank" className={styles.slide_skew}> {text} </a>
    );
}

export function FillRectButton3D({text, link}) {
    return( 
        <a href={link} target="_blank" className={styles.fill}> {text} </a>
    );
}