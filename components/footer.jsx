import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IconContext } from "react-icons"
import style from "./footer.module.scss";

export default function Footer() {

    return (
        <div className={style.container}>
            <a className={style.bigger_email} href="mailto:jleung2101@gmail.com">
                jleung2101@gmail.com
            </a>
            <div className={style.other_contact}>
                <p className={style.phone}> (626) 679-4916 </p>
                <p className={style.divider}> | </p>
                <a className={style.email} href= "mailto:jameleu@umich.edu" > jameleu@umich.edu </a>
            </div>
            <div className={style.socials}>
            <IconContext.Provider value={{ color: 'rgb(150, 148, 174)', style: {fontSize: "3vmax"}}}>
            <a className={style.social} href="https://github.com/jameleu" target="_blank"> <AiFillGithub className={style.icon}> </AiFillGithub> </a>
                <a className={style.social} href="https://www.linkedin.com/in/jameleu/" target="_blank"> <AiFillLinkedin className={style.icon}></AiFillLinkedin> </a>
            </IconContext.Provider>
            </div>
            <p className={style.bottom_txt_1}> James Leung </p>
            <p className={style.bottom_txt_2}> 2023 </p>
            <br></br>
        </div>
    );
}