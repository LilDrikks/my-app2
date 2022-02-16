import styles from  './Footer.module.scss'

const Footer = () => {
        return ( 
                <div className={styles.footer}>
                        <p>Desenvolvido com carinho por mim <a href='https://github.com/LilDrikks' target="_blank" rel="noreferrer">@DesignDrikks</a></p>
                        <p>Todos os direitos reservados a <a href='https://netflix.com' target="_blank" rel="noreferrer">Netflix!!!</a></p>
                        <p>
                                Técnologias usadas: ReactJs [useState, useEffect, components],
                                JavaScript Vanilla [lógica de renderização e manipulação de dados],
                                Sass/Scss [media screen e effects], bibliotecas npm como react-icons, uuid, styles.
                        </p>
                </div>
         );
}
 
export default Footer;