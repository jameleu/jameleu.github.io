import {Image_Card, Card} from "./cards.jsx";
import styles from "./carousel.module.scss";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'

export function Carousel({cards}) {
    const [carousel_ref] = useEmblaCarousel({align: 'start', loop: true}, [Autoplay()]);
    return(
        <div className={styles.carousel} ref={carousel_ref}>
            <div className={styles.slides_container}>
                <div className={styles.slide}>
                 HELLO
                </div>
                <div className={styles.slide}>
                 HI
                </div>
                <div className={styles.slide}>
                 HI
                </div>
                <div className={styles.slide}>
                 HI
                </div>
            </div>
        </div>
    );
}
/*
{cards.map((card) => {
    <Card hdr={card.hdr} text={card.text} />
})
}*/
