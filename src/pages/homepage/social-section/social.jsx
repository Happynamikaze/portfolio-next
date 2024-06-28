import styles from './social.module.css';
import text from '@/config/text';
import { FaCodepen, FaDiscord, FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import {motion} from 'framer-motion';

const { titles } = text;

export default function Social() {

    const socialEl = [
        // { icon: <FaFacebookF />, link: 'https://www.facebook.com/', name: "Facebook" },
        { icon: <FaEnvelope />, link: 'mailto:sarabjeetcing@gmail.com', name: "Envelope" },
        { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/sarabjeet-singh-6390b9223/', name: "LinkedinIn" },
        { icon: <FaGithub />, link: 'https://github.com/Happynamikaze', name: "Github" },
        { icon: <FaXTwitter />, link: ' https://x.com/WarClouser', name: "XTwitter" },
        { icon: <FaWhatsapp />, link: 'https://wa.me/+919518647120', name: "Whatsapp" },
        { icon: <FaInstagram />, link: 'https://www.instagram.com/warclouser/', name: "Instagram" },
        // { icon: <FaCodepen />, link: 'https://codepen.io/', name: "Codepen" },
        // { icon: <FaDiscord />, link: 'https://discord.com/users/', name: "Discord" }
    ];

    let idx;

    const options = {
        initial: {
            opacity:0,
            y:50
        },
        whileInView: {
            opacity:1,
            y:0
        },
        transition: {
            duration: .5
        }
    }

    return (
        <section className={`${styles['social-section']} spacer-y`}>
            <div className="container position-relative z-2">
                <motion.h2 {...options} className='mb-40' dangerouslySetInnerHTML={{ __html: titles.social }}></motion.h2>
                <ul className={`list-unstyled ${styles['social-list']} m-0`}>
                    {socialEl.map((data, idx) => (
                        <motion.li {...options} transition={{duration: .5, delay: .1 * idx}} key={idx}>
                            <a href={data.link} target='_blank' className={`${styles['social-btn']} theme_button`} aria-label={data.name}>
                                {data.icon}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    )
}