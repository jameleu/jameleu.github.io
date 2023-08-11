import EmblaCarousel from '../components/embla_carousel/embla_carousel.jsx';
import styles from './parallax_carousel.module.scss';
import { useEffect, useRef } from 'react'

export default function ParallaxCarousel() {
    const p_ref_beg = useRef(); //beg and end ref means that scroll detection only exists for this section
    const p_ref_end = useRef();

    const my_slides = [
        {"header": "Northrop Grumman Test Bots", 
        "text": 
            [
            "Caught 104+ minor & 11 integral defects in map software w/Python-Robot automation bots that used image recognition (Sikuli) and Microsoft GUI component recognition (White Library) to navigate the map and menus to test features.",
            "Also automated typing and using mouse scroll to search and filter to verify querying features, saving the company $10k+",
            "Fetched 100k+ entries w/SQL for testing validation data & accessed it w/hash tables, binary search, & csv parsing"
            ]
            ,
            "img" : "/images/triton.png",
            "img_h" : "3000",
            "float": "left"},
        {"header": "Northrop Grumman XML Corrector", 
        "text": 
            [
            "Wrote Python-Regexp script that maintains and corrects XMLs, freeing 1000+ hours of manual work",
            "In 10,000 line file, script made 114,286+ changes (<=1s runtime)",
            "Utilized stack to keep track of balanced delimiters without false error raises for the outer tags when there are missing inner tags.",
            "Iteratively looked for missing tags in future lines to extract and move them to their correct positions in past lines",
            'Differentiated between edge cases in regexp to add missing characters and replace and delete incorrectly converted characters',
            "Wrote detailed documentation on usage and maintainability"
            ]
            ,
        "img" : "/images/ng.png",
        "img_h" : "216",
        "float": "right"
        },
        {"header": "MRobosub High Performance ML Training", 
        "text": 
            [
            "Coded Python/Bash program using Slurm/Torch/Yolov5 that trained ML models 324.85% faster by multithreading",
            "Program performs adaptive data transfer and organization to and from school high performance computers",
            "Program allocates GPU/resources, adjusts settings based on parameters given, and trains ML model in a virtual environment multiple times with different settings if specified"
            ]
            ,
        "img" : "/images/slurm.png",
        "img_h" : "216",
        "float": "left"
        },
       
        {"header": "MRobosub Website", 
        "text": 
            [
            "Sorted documentation library on website in logarithmic time given user filter input, optimized w/React fast refresh",
            "Increased viewer retention and click throughs on website by 121% w/hover-interactive about me cards for teammates",
            "Using CSS, crafted parallax effect w/moving background, pie chart visuals, adaptively sized video, and animated stats that counted up w/real life physics-based acceleration", 
            "Designed multi-layer React state system to show the animated stats and team member cards of the team currently selected. Animated flipping transition between stats and trailing transition between different teams' cards.",
            "Used Javascript promises for asynchronous transition"
            ]
            ,
        "img" : "/images/mrobosub_logo.png",
        "img_h" : "216",
        "float": "left"
        },
        {"header": "Personal Website", 
        "text": 
            [
            "Coded in React, Next.js, JS, CSS, HTML. Embla is used for carousel formatting, but all other components (like carousel buttons) are made from scratch using math and code",
            "Coded formatting that adapts to screen size and containers, changing rule sets as needed",
            "Designed realistic physics-based animations (React Spring) and CSS animations that animate on scroll position, as well as object visibility calculated from window-object convergence",
            "Tracked scroll position within whole container and sections of website using calculations with document offsets, reference top offsets, and inner/outer window size",
            "For the bubble's floating movement, used Perlin Noise to generate naturally smooth sequence of pseudo-random numbers to determine bubbles' position. Pop up text has adaptive size despite the lack of the usual hierarchical child to parent influenced sizing",
            "Created typewriter animation that uses before pseudo-element to hide the text and slowly reveal the text by an amount calculated to be one letters-width for the given font size."
            ]
            ,
        "img" : "null"},
{"header": "School Projects: Data Structures and OOP", 
            "text": 
            [
            "Implemented Binary Search Tree Class To Create Map that I used to write a machine learning natural language processing program to label forum posts with a preset topic. Each post was treated as a bag of words, and the program utilized various logarithmic conditional probability formulas denominated by training posts to assign the most likely label for that post",
            "Implemented query system using hash tables that inserted, deleted, and found where and all instances",
            "Created survival game that handled enemy spawning and defeat with priority queues while also optimally calculating mean, median, and other statistics in constant time after each round",
            "Card trick taking game with AI utilizing object oriented programming in C++ with shuffling, recognized hands, special card hierarchy adaptive to the initial cards chosen, and different routes players can take based on their choices"
            ],
            "img" : "null"},
        {"header": "School Projects: Algorithms, Misc.", 
            "text": [
            "For exploration game where avoided obstacles and enemies while reaching the end, created graph search and route tracing bot with two operating modes: BFS and DFS",
            "Implemented Prim's to get lower bound for branch and bound algorithm in order to calculate minimal path while visiting all points (TSP)",
            "Wrote seam-carving algorithm to turn image into abstract data type matrix, calculate the energy of each pixel as the squared difference between opposing neighboring pixels, calculate the cost of each pixel as the energy added to the minimum energy of its neighbors, and deleting the zig-zag column or row with the least total energy cost",
            "Implemented union-find algorithm, linked list with full library methods like delete and find and insert, 01-knapsack dynamic programming solution, self-balancing tree, string class, heaps, hash table with linear probing", 
            ],
        "img" : "null"},




    ];

    useEffect( () => {

        const handle_scroll = () => {
            document.body.style.setProperty(
                "--curr_scroll_3",     //must take into account window inner height when trying to calculate distance and % completed properly for scroll in specific section mechanic
                (window.pageYOffset - p_ref_beg.current.offsetTop + window.innerHeight * 0.8) / (window.innerHeight + p_ref_end.current.offsetTop - p_ref_beg.current.offsetTop) // - window.outerHeight - window.innerHeight
            );                                                                  //multiply inner height by constant for slight custom calibration
        };
        window.addEventListener("scroll", handle_scroll);
      return () => window.removeEventListener("scroll", handle_scroll);
    }, []);
    return(
    <>
        <div ref={p_ref_beg} />
        <div className={styles.parallax}>
            <div className={styles.fixed_wrapper}>
                <section className={styles.headers2}>
                    <div className={styles.header_reason_T}> I'm interested in software engineering to enhance daily life with scalable user-driven code.</div>
                    {/* <div className={styles.shadow_T}>  </div> */}
                    <div className={styles.header_reason_B}> Some of my experience includes: </div>
                    {/* <div className={styles.shadow_B}> </div> */}
                </section>
                <EmblaCarousel slides={my_slides} options={{align: 'start', loop: true}} />
                                                        {/* object in parameter {} */}
            </div>
        </div>
        <div ref={p_ref_end} />
    </>
    );
}