import styles from './Banner.module.scss'

const OverviewBanner = ({item}) => {
    //Condicional para identificar os 200 characters da string overview
    let overview = item.overview
    let lorem = 
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, exercitationem
     nemo soluta totam voluptate repudiandae quis repellat asperiores.
      Doloremque suscipit aliquam animi nam enim officia
    eaque sapiente corporis magnam minima.`


    if(overview.length > 200){
        /*Cria uma substring apartir da string overview pegando da posição 1 a 
        200 e no fim  concatena os 3 pontinhos*/
        overview = overview.substring(0, 200)+'...'
    }
    return ( <p className={styles.overview}>{overview ? overview : lorem}</p> );
}
 
export default OverviewBanner;