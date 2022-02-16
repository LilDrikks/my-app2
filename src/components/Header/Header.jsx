import styles from './Header.module.scss'
const Header = ({headerBlack}) => {

    return (
        <header className={headerBlack ? styles.headerBlack : styles.header}>
            <div className={styles.paddingHeader}>
            <p className={styles.logo}>Cloneflix</p>
            <p  className={styles.user}></p>
            </div>
        </header>
      );
}
 
export default Header;