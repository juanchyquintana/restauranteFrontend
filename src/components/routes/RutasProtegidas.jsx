import { Navigate } from "react-router";

const RutasProtegidas = ({children}) => {
    const administrador = JSON.parse(sessionStorage.getItem('usuarioLotus')) || null;

    if(!(administrador && administrador.tipoUsuario === 'admin')){
        return <Navigate to={'/menu'} />
    }else{
        return children
    }
};

export default RutasProtegidas;