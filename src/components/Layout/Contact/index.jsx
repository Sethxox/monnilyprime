import styles from "./style.module.scss";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "../Magnetic";

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}></div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2024 © Edition</p>
            </span>
            <span>
              <h3>Version</h3>
              <p>11:49 PM GMT+2</p>
            </span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <p>Facebook</p>
              </Magnetic>
            </span>
            <Magnetic>
              <p>Instagram</p>
            </Magnetic>
            <Magnetic>
              <p>Twitter</p>
            </Magnetic>
            <Magnetic>
              <p>Linkedin</p>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
