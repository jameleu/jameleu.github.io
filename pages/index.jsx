import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import styles from '../styles/home.module.scss';
import n_styles from '../components/name.module.scss';
import is_visible from '../components/is_visible.js';
import { animated, useSpring, useChain, useSpringRef } from "react-spring";
import Intro_Bio from '../components/intro_bio';
import { SlideLButton3D, SlideSButton3D, FillRectButton3D } from '../components/button_3d';

import React, { useState, useRef, useEffect } from 'react';
import FloatingBlocks from '../components/floating_blocks';

export default function Home() {

  const target_ref = useRef();
  const target_is_visible = is_visible(target_ref);

  const f_name_ref = useRef();
  const f_name_is_visible = is_visible(f_name_ref, null, 0, "0%", true);

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
            <p className={f_name_is_visible ? n_styles.name_1 : n_styles.name_base}>J</p>
            <div ref={f_name_ref} />
            <p className={f_name_is_visible ? n_styles.name_2 : n_styles.name_base}>a</p>
            <p className={f_name_is_visible ? n_styles.name_3 : n_styles.name_base}>m</p>
            <p className={f_name_is_visible ? n_styles.name_4 : n_styles.name_base}>e</p>
            <p className={f_name_is_visible ? n_styles.name_5 : n_styles.name_base}>s</p>
          </div>

          <div id={styles.j_text}>
            
          </div>
        </section>

        <div className={styles.border}> </div>

        <section>
          <Intro_Bio/>
        </section>
        <section>
          <FloatingBlocks/>
        </section>
        <section>
          <SlideLButton3D text={" I enjoy sleeping to eating to coding!"}> </SlideLButton3D>
        </section>
        <section>
          ZoomiN/FadeIn: These are some other things that I enjoy, too:
        </section>
        <section>
          Let's connect!
        </section>

    </div>
    </Layout>


    </div>


  );
}