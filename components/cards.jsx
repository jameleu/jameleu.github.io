

export function Image_Card({image, alt, hdr, text}) {
    <div className={styles.card}> 
        <Image priority 
          src={image}
          className={styles.card_image}
          height={108}
          width={108}
          alt={alt}> </Image>
          <h2> {hdr} </h2>
        <p> {text} </p>
    </div>
}

export function Card({hdr, text}) {
    <div className={styles.card}>
        <h2> {hdr} </h2>
        <p> {text} </p>
    </div>
}