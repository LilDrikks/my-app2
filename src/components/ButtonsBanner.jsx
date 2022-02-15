import styles from './Banner.module.scss'

import { CgPlayButton, CgInfo } from 'react-icons/cg'

const ButtonsBanner = () => {
    return (  
        <div className={styles.buttons}>
            <button>
                <CgPlayButton className={styles.cgPlayIcon} /> Assistir
            </button>
            <button className={styles.btnCgInfo}>
                <CgInfo className={styles.cgInfoIcon} /> Mais informações
            </button>
        </div>
    );
}
 
export default ButtonsBanner;