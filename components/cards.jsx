

export function Image_Card(image, alt, text) {
    <div className={styles.card}> 
        <Image priority 
          src={image}
          className={styles.card_image}
          height={108}
          width={108}
          alt={alt}> </Image>
        <p> {text} </p>
    </div>
}

export function Card(text) {
    <div className={styles.card}>
        <h2> </h2>
        <p> {text} </p>
    </div>
}