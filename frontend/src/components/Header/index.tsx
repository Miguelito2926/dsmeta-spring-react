import logo from '../../assets/img/logo.svg'

import './styles.css'



function Header (){
    return(

        <header>
        <div className ="dsmeta-logo-container">
            <img src={logo} alt="DSMeta"/>
            <h1>DSmeta</h1>
            <p>Desenvolvido por <a href="https://github.com/Miguelito2926"> Ednaldo Tavares</a></p>
    
        </div>

   </header>
   
    )
}
export default Header