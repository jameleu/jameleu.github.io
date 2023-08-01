import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './dot_buttons.jsx'
import styles from './embla.module.scss'
import Image from 'next/image'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './arrow_buttons.jsx'
import Autoplay from 'embla-carousel-autoplay'


const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel({options}, [Autoplay()])

  const onButtonClick = useCallback((emblaApi) => {
    const { autoplay } = emblaApi.plugins()
    if (!autoplay) return
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onButtonClick
  )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onButtonClick)

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((obj) => (
            <div className={styles.embla__slide}>
              {/* <div className={styles.embla__slide__number}>
                <span>{index + 1}</span> //slide num
              </div> */}
              <div className={styles.slide_block}>
                <div className={styles.s_header}> {obj.header} </div>
                <div className={styles.blt_img_cont}>
                <ul className={styles.blt_set}>
                  <li className={styles.inv}>  {obj.img != "null" ?  
                  <div className={styles.img}>
                    <Image
                    priority
                    src={obj.img}
                    height={216}
                    width={216}
                    layout="responsive"
                    alt="experiences_picture.png"
                    />
                  </div>
                  : <div/>} </li>
                  {obj.text.map((bullet_point) => (
                    <li className={styles.blt_pnt}> {bullet_point} </li>
                  ))}
                 
                </ul>
                
                </div>
                {/* {<div className={styles.s_text}> {obj.text} </div>} */}
              </div>
            </div>
          ))}
          
        </div>
        
      </div>
      <div className={styles.prev}>
         <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>
      <div className={styles.next}>
         <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
      <div className={styles.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={index === selectedIndex ? styles.selected : styles.not_selected}
          />
        ))}
      </div>
    </div>
  )
}

export default EmblaCarousel
