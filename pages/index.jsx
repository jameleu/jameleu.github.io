import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import styles from '../styles/home.module.scss';
import n_styles from '../components/name.module.scss';
import is_visible from '../components/is_visible.js';
import { animated, useSpring, useChain, useSpringRef, SpringRef } from "react-spring";
import Intro_Bio from '../components/intro_bio';
import { SlideLButton3D, SlideTButton3D, SlideSButton3D, FillRectButton3D } from '../components/button_3d';
import BubbleLine from "../components/bubbles.jsx";

import React, { useState, useRef, useEffect } from 'react';
import Typewriter from '../components/typewriter';

import FloatingBubbles from '../components/floating_bubbles';
import ToTopButton from '../components/to_top_button.jsx';
import Progress from '../components/progress.jsx';

import ParallaxCarousel from '../components/parallax_carousel';

//import Nav from '../components/nav.jsx';
import Footer from '../components/footer.jsx';

export default function Home() {

  const hi_ref = useRef(); //is hitbox right under hi when at top of page
  const hi_is_visible = is_visible(hi_ref);
  const appear = useSpring( {
      config: {mass: 3, tension: 60, friction: 20},
      from: {opacity: hi_is_visible ? 0 : 0, //0 because other animation (css one) will take care of appearing in. this is only
      // to animate when leaving. otherwise, this will override other animation
      },
      to: {opacity: hi_is_visible ? 1 : 0}
  });

  const target_ref = useRef();
  const target_is_visible = is_visible(target_ref);

  const f_name_ref = useRef();
  const f_name_is_visible = is_visible(f_name_ref, null, 0, "0%", true);

  const l_start = "-60vw";
  const l_opacity = 0;
  const l_ref = useSpringRef();

  const appear_from_left = useSpring( {
    ref: l_ref,
    config: {mass: 1, tension: 35, friction: 12},
    from: {opacity: l_opacity, x: l_start}, 
    to: {opacity: target_is_visible ? 1 : l_opacity,
         x: target_is_visible ? "0vw" : l_start
        }
  }); //nothing in reactspring to reuse this, to my knowledge

  const r_start = "60vw";
  const r_opacity = 0;
  const r_ref = useSpringRef();

  const appear_from_right = useSpring( {
    ref: r_ref,
    config: {mass: 1, tension: 43, friction: 12},
    from: {opacity: r_opacity, x: r_start}, 
    to: {opacity: target_is_visible ? 1 : r_opacity,
         x: target_is_visible ? "0vw" : r_start
        }
  });


  const t_start = "60vmin";
  const g_opacity = 0;
  const t_ref = useSpringRef();
  const appear_from_top = useSpring( {
    ref: t_ref,
    config: {mass: 2.5, tension: 60, friction: 17},
    from: {opacity: g_opacity, y: t_start}, 
    to: {opacity: target_is_visible ? 1 : g_opacity,
         y: target_is_visible ? "0vmin" : t_start
        }
  });

  const d_start = "-40vmin";
  const d_ref = useSpringRef();
  const appear_from_down = useSpring( {
    ref: d_ref,
    config: {mass: 1, tension: 70, friction: 5},
    from: {opacity: g_opacity, y: d_start}, 
    to: {opacity: target_is_visible ? 1 : g_opacity,
         y: target_is_visible ? "0vmin" : d_start
        }
  });

  useChain([l_ref, r_ref], [0, 0.5], 1000);
  useChain([t_ref, d_ref], [0, 0.3], 1000);

  const coding_list = [
    "I like to code in C++ and C.", 
    "I like to code in Javascript and React.",
    "I like to code in Python."
  ];

  const experiences_ref = useRef();
  const experiences_is_visible = is_visible(experiences_ref);

  const exp_start = "-500px";
  const exp_ref = useSpringRef();
  const exp_styles = useSpring( {
    ref: exp_ref,
    config: {mass: 1, tension: 70, friction: 5},
    from: {opacity: 0, y: exp_start}, 
    to: {opacity: experiences_is_visible ? 1 : 0,
         y: experiences_is_visible ? "0px" : exp_start
        }
  });

  const skills_ref = useRef();
  const skills_is_visible = is_visible(skills_ref);

  const skills_start = "-500px";
  const skills_styles = useSpring( {
    config: {mass: 1, tension: 70, friction: 5},
    from: {opacity: 0, y: skills_start}, 
    to: {opacity: skills_is_visible ? 1 : 0,
         y: skills_is_visible ? "0px" : skills_start
        }
  });

  const coding_ref = useRef();
  const coding_is_visible = is_visible(coding_ref);

  const coding_start = "-500px";
  const coding_styles = useSpring( {
    config: {mass: 1, tension: 70, friction: 5},
    from: {opacity: 0, y: coding_start}, 
    to: {opacity: coding_is_visible ? 1 : 0,
         y: coding_is_visible ? "0px" : coding_start
        }
  });

  const hobbies_ref = useRef();
  const hobbies_is_visible = is_visible(hobbies_ref);
  const start_y = "2vh";
  const start_x = "-500vw";
  const hobbies_style = useSpring( {
    config: {mass: 1, tension: 80, friction: 10, clamp: true},
    from: {opacity: 0, y: start_y, x: start_x, transform: "scale(3, 3)"}, 
    to: async (next) => {
        await next([{y: hobbies_is_visible ? "0vh" : start_y}, {x: hobbies_is_visible ? "0vw" : start_x}])
        await next([{opacity: hobbies_is_visible ? 1 : 0},
         {transform: hobbies_is_visible ? "scale(1,1)" : "scale(3, 3)"}, 
         ])
        },
  });

  const contact_ref = useRef();
  const contact_is_visible = is_visible(contact_ref);

  const contact_start = "-500px";
  const contact_styles = useSpring( {
    config: {mass: 1, tension: 80, friction: 8},
    from: {opacity: 0, y: contact_start}, 
    to: {opacity: contact_is_visible ? 1 : 0,
         y: contact_is_visible ? "0px" : contact_start
        }
  });

  console.log(hi_is_visible);

  return (
    <div className={styles.outer}>
      <div className={styles.background}> 
{/*       
        <section style={appear} className={styles.moving_background}>
        </section> */}
          
          <div className={styles.background_inner}>
          <div className={styles.orange_top}></div>
            
            <animated.p style={appear} className={hi_is_visible ? styles.title_hi : styles.title_hi_inv}> Hi! </animated.p>
            <div className={styles.hitbox} ref={hi_ref}> </div>          
          </div>

        <Progress></Progress>
        <Layout home>
          

        <div className={styles.foreground}>

          <div className={styles.border1}> </div>

          <section className={n_styles.self_introduction}>
            <div className={n_styles.name_statement_wrapper}>
              <div className={n_styles.my_name_wrapper}>
                <div id={n_styles.my_text}>
                  <animated.p style={appear_from_left}> M </animated.p> 
                  <div ref={target_ref} />
                  <animated.p style={appear_from_right}> y </animated.p> 

                </div>
                <div id={n_styles.name_text}>
                  <animated.p style={appear_from_top}> N </animated.p> 
                  <div ref={target_ref} />
                  <animated.p style={appear_from_down}> a </animated.p> 
                  <animated.p style={appear_from_top}> m </animated.p> 
                  <animated.p style={appear_from_down}> e </animated.p> 
                  <animated.p style={appear_from_down}> 's </animated.p> 
                </div>
              </div>
              <div className={n_styles.first_name}>
                <p className={f_name_is_visible ? n_styles.name_1 : n_styles.name_base}>J</p>
                <div ref={f_name_ref} />
                <p className={f_name_is_visible ? n_styles.name_2 : n_styles.name_base}>a</p>
                <p className={f_name_is_visible ? n_styles.name_3 : n_styles.name_base}>m</p>
                <p className={f_name_is_visible ? n_styles.name_4 : n_styles.name_base}>e</p>
                <p className={f_name_is_visible ? n_styles.name_5 : n_styles.name_base}>s</p>
                <p className={f_name_is_visible ? n_styles.exclam : n_styles.name_base}>!</p>
              </div>
            </div>
            <div className={n_styles.profile_wrapper}>
            <Image
                    priority
                    src="/images/profile_picture.jpg"
                    height={216}
                    width={216}
                    layout="responsive"
                    alt="profile_picture.jpg"
              />
            </div>
          </section>

          <div className={styles.border2}> </div>

          <section>
            <Intro_Bio/>
          </section>
          </div>
          <ParallaxCarousel/>
          <div className={styles.foreground}>
            <div className={styles.empty_space_2}> </div>
          <section className={styles.col_sect_a0}>
            <p className={styles.centered_h1}> Example of My Skills: </p>
            <FloatingBubbles/>
          </section>

          <section className={styles.col_sect_b}>
            <Typewriter text_list={coding_list} duration={"12s"}/>
            <div className={styles.centered}>
              <div className={styles.code_button}>
                <SlideLButton3D className={styles.code_button} text={"See my code!"} link={"https://docs.google.com/document/d/1-MAY-LXknfHSTmLBcJ8PC7YlMopGt07p4Cl6EZ08K2o/edit?usp=sharing"}> </SlideLButton3D>
              </div>
            </div>
          </section>
          <div className={styles.empty_space}></div>

          </div>
          <div className={styles.empty_space}></div>

          <section className={styles.col_sect_a} ref={hobbies_ref}>
            <animated.p style={hobbies_style} className={styles.centered_h1}> These are some other things that I enjoy: </animated.p> 
            <div className={styles.rows}>
                <SlideTButton3D text={"Baking"} link={"https://google.com"}/>
                <SlideSButton3D text={"Composing Music"} link={"https://google.com"}/>
                <FillRectButton3D text={"Writing"} link={"https://google.com"}/>
            </div>
          </section>
          
          <section className={styles.col_sect_b}>
              <div className={styles.centered}>
                <animated.div style={contact_styles}>
                  <div className={styles.col_sect_c}>
                  <p className={styles.centered_h1}> I'd love to meet you to discuss coding, careers, and more! </p>
                  <div ref={contact_ref} className={styles.float}>
                    <FillRectButton3D text={"Let's Connect!"} link={"mailto:jleung2101@gmail.com"}/>
                  
                  </div>
                  </div>
                </animated.div>
                <div ref={contact_ref}></div>
              </div>
          </section>
      </Layout>
      <ToTopButton></ToTopButton>

      <Footer></Footer>

    </div>

    <BubbleLine></BubbleLine>
</div>

  );
}