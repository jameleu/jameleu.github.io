

export default function H_Scroll(cards) {
    const [carousel_ref] = useEmblaCarousel({loop: false}, [Autoplay()]);
    return(
        <div className={styles.carousel}>
            <div className={styles.slides_container}>
                {cards.map((card) => {
                    <Card param={card}/>
                })
                }
            </div>
        </div>
    );
}
