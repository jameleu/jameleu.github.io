import styles from './button_3d.module.scss';

export function SlideLButton3D({text}) {
    return( 
        <button className={styles.slide_L}> {text} </button>
    );
}

export function SlideTButton3D({text}) {
    return( 
        <button className={styles.slide_T}> {text} </button>
    );
}

export function SlideSButton3D({text}) {
    return( 
        <button className={styles.slide_skew}> {text} </button>
    );
}

export function FillRectButton3D({text}) {
    return( 
        <button className={styles.fill}> {text} </button>
    );
}