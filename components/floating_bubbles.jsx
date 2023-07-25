import { bubbles } from "./bubble_pos.jsx";
import { useRef, useEffect, useState } from "react";
import styles from "./floating_bubbles.module.scss";
import { Noise } from "noisejs";
import Image from "next/image";

//takes past random numbers generated to create new random numbers to decide aount to move each bubble

//const CANVAS_WIDTH = 3000;
// The amplitude. more=more range of movement
const NoiseAmount = 1;

// The frequency. Smaller for flat slopes, higher for jagged spikes. effectively is speed of animation since changes
// how big the random numbers generated from noise algorithm are, and these numbers are part of amount moved per frame 
const NoiseSpeed = 0.0004;
const MoveAmount = 2; //factor of num of pixels to move per frame

// Pixels to move per frame. At 60fps, this would be 18px a sec.
// const SCROLL_SPEED = 0.3;

const noise = new Noise();

function matches( node, selector ) {
 
    // Most modern browsers support the ".matches" method. However, IE9+ uses a
    // non-standard method name. As such, we can fall-back to the IE version when
    // the standard one doesn't exist and that should cover all the modern
    // browsers that are in use.
    // --
    // READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
    var nativeMatches = ( node.matches || node.msMatchesSelector );

    // CAUTION: If an invalid pseudo-selector is used in Firefox or IE, the
    // browser will throw a SyntaxError, "is not a valid selector". It will do
    // the same for .querySelector() as well, just an FYI.
    try {

        return( nativeMatches.call( node, selector ) );

    } catch ( error ) {

        // In the case of an error, we're going to assume it's a pseudo-selector
        // issue and NOT a general support issue (since we don't care about
        // really old browsers).
        return( false );

    }

}

export default function FloatingBubbles() {

    //store seed and noise and regular bubble attr's for each bubble without causing state change and rerender
    const bubblesRef = useRef(
        bubbles.map((bubble) => ({
          ...bubble,
          noiseSeedX: Math.floor(Math.random() * 64000),
          noiseSeedY: Math.floor(Math.random() * 64000),
          xWithNoise: bubble.x,
          yWithNoise: bubble.y,
        })),
      );

    const [is_ready, setReady] = useState(false);

    //initial delay to start animation
    useEffect( () => {
        setTimeout(start, 500); //start animation after _ ms since on start up, looks a bit choppy
    }, [])

    //startup function that calls the animation and makes the bubles visible based on state
    const start = () => {
        setReady(true);
        animate();
    }

    const animate = () => {
        bubblesRef.current = bubblesRef.current.map((bubble, index) => { //map each item and assign a temporary numerical index

            const curr_bubble = document.getElementById(`bubble-${index}`);

            const is_hovered_over = matches(curr_bubble, ":hover");

            //updating movement values for animation frame
            const X_RATIO = 0.055; //converting original data from px data to vh/vw
            const Y_RATIO = 0.14;

            var new_y = bubble.yWithNoise * Y_RATIO;
            var new_x = bubble.xwithNoise * X_RATIO;

            //store for potential next frame that need it
            var newNoiseSeedX = bubble.noiseSeedX;
            var newNoiseSeedY = bubble.noiseSeedY;
            
            //if is not hovered over, generate next animation frame. if it is hovered over, stop animation.
            if(!is_hovered_over) {
                newNoiseSeedX = bubble.noiseSeedX + NoiseSpeed;
                newNoiseSeedY = bubble.noiseSeedY + NoiseSpeed; //update seed
        
                const random_x = MoveAmount*noise.simplex2(newNoiseSeedX, 0); //random geneeration based on new seed based on last seed
                const random_y = MoveAmount*noise.simplex2(newNoiseSeedY, 0);
                new_y = bubble.y * Y_RATIO + random_y + NoiseAmount;
                new_x = bubble.x * X_RATIO + random_x + NoiseAmount;

                if(curr_bubble) { 
                    //update next frame of animation for this bubble
                    curr_bubble.style.transform = `translate(${new_x}vw, ${new_y}vh) scale(${bubble.s})`;
                    curr_bubble.style.zIndex = 0; //reset z index
                }
            }
            else { //if is hovered over:
              curr_bubble.style.zIndex = 9999; //for this bubble's children so they can
              //overcome stacking order of sibling bubbles so that being first in chronological order does not mean that it appears above others
            }
            return {
              ...bubble, //updating each bubble and its attributes (below)
              noiseSeedX: newNoiseSeedX,
              noiseSeedY: newNoiseSeedY,
              //x: (new_x < -200) ? CANVAS_WIDTH : new_x,
              xWithNoise: new_x,
              yWithNoise: new_y,
            };
          });
      
        //animate next frame recursively
        requestAnimationFrame(animate)

    };
    return (
        <div className={styles.bubble_wrapper}>
          
          <div className={styles.bubbles}>
          
            {bubbles.map((bubble, index) => (
              <div
                className={styles.bubble}
                id={`bubble-${index}`}
                key={`bubble-${index}`}
                style={{
                //   backgroundPosition: backgroundPositions[index],
                   opacity: is_ready ? 1 : 0, //fade in when animation is ready
                  transform: `translate(${bubble.x}px, ${bubble.y}px) scale(${bubble.s})`,
                }}>
                  <div className={styles.hitbox}> <div className={styles.popup}> 
                  <Image
                  priority
                  src="/images/text_bubble1.png"
                  className={styles.text_bubble}
                  height={108}
                  width={108}
                  alt="text_bubble.png"
            />
            <div className={styles.des}> {bubble.desc} </div>
                  
                  </div> 
                   </div>
                <div className={styles.bbl_txt}> 
                
                {bubble.skill} </div>
                
                </div>
            ))}
          </div>
        </div>
      );


}