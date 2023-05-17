import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import styles from '../styles/home.module.scss';
import n_styles from '../components/name.module.scss';
import is_visible from '../components/is_visible.js';
import { animated, useSpring, useChain, useSpringRef } from "react-spring";

import React, { useState, useRef, useEffect } from 'react';

export default function Home() {

  const target_ref = useRef();
  const target_is_visible = is_visible(target_ref);

  const l_start = "-500px";
  const l_opacity = 0;
  const l_ref = useSpringRef();

  const appear_from_left = useSpring( {
    ref: l_ref,
    config: {mass: 1, tension: 35, friction: 12},
    from: {opacity: l_opacity, x: l_start}, 
    to: {opacity: target_is_visible ? 1 : l_opacity,
         x: target_is_visible ? "0px" : l_start
        }
  }); //nothing in reactspring to reuse this, to my knowledge

  const r_start = "500px";
  const r_opacity = 0;
  const r_ref = useSpringRef();

  const appear_from_right = useSpring( {
    ref: r_ref,
    config: {mass: 1, tension: 43, friction: 12},
    from: {opacity: r_opacity, x: r_start}, 
    to: {opacity: target_is_visible ? 1 : r_opacity,
         x: target_is_visible ? "0px" : r_start
        }
  });


  const t_start = "500px";
  const g_opacity = 0;
  const t_ref = useSpringRef();
  const appear_from_top = useSpring( {
    ref: r_ref,
    config: {mass: 2.5, tension: 60, friction: 17},
    from: {opacity: g_opacity, y: t_start}, 
    to: {opacity: target_is_visible ? 1 : g_opacity,
         y: target_is_visible ? "0px" : t_start
        }
  });

  const d_start = "-500px";
  const d_ref = useSpringRef();
  const appear_from_down = useSpring( {
    ref: r_ref,
    config: {mass: 1, tension: 70, friction: 5},
    from: {opacity: g_opacity, y: d_start}, 
    to: {opacity: target_is_visible ? 1 : g_opacity,
         y: target_is_visible ? "0px" : d_start
        }
  });

  useChain([l_ref, r_ref], [0, 0.5], 1000);
  useChain([t_ref, d_ref], [0, 0.3], 1000);

  const one_five = [1, 2, 3, 4, 5];
  const my_name = {1 : 'J', 2  : 'a', 3: 'm', 4: 'e', 5: 's'};

  return (
      <div className={styles.background}> 
        <div className={styles.background_inner}>
          <p className={styles.title_hi}> Hi! </p>
        </div>
      <Layout home>

      <div className={styles.foreground}>


        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section>
          <div id={styles.my_text}>
            <animated.p style={appear_from_left}> M </animated.p> 
            <div ref={target_ref} />
            <animated.p style={appear_from_right}> y </animated.p> 

          </div>
          <div id={styles.name_text}>
            <animated.p style={appear_from_top}> N </animated.p> 
            <div ref={target_ref} />
            <animated.p style={appear_from_down}> a </animated.p> 
            <animated.p style={appear_from_top}> m </animated.p> 
            <animated.p style={appear_from_down}> e </animated.p> 
            <animated.p style={appear_from_down}> 's </animated.p> 


          </div>
          <div className={n_styles.first_name}>
            <p className={n_styles.name_1}>J</p>
            <p className={n_styles.name_2}>a</p>
            <p className={n_styles.name_3}>m</p>
            <p className={n_styles.name_4}>e</p>
            <p className={n_styles.name_5}>s</p>
          </div>

          <div id={styles.j_text}>
            
          </div>
        </section>

        <div className={styles.border}> </div>

        <section>
          <p id={styles.name_text}> BLAHBLAHBLAH </p>
        </section>

    </div>
    </Layout>


    </div>


  );
}