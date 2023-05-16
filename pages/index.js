import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import styles from '../styles/home.module.scss';

import React, { useState, useEffect } from 'react';

export default function Home() {
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
            <p id={styles.m}>M</p> <p>y </p>
          </div>
          <div id={styles.name_text}>
            <p>N</p>
            <p>a</p>
            <p>m</p>
            <p>e</p>
          </div>

          <p>James</p>

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