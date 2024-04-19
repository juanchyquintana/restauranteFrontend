import { Container } from "react-bootstrap";
import banner from "../../../assets/cocina/banner-cocina.jpg"
import { useEffect, useState } from "react";
import { obtenerConsultas } from "../../../helpers/consulta";
import ConsultaItem from "./ConsultaItem";
const Consultas = () => {
    const [consultas, setConsultas] = useState([])
    useEffect(()=>{
        consultarDB()
    },[])

    const consultarDB = async () =>{
        try {
            const datos = await obtenerConsultas()
            setConsultas(datos)
        } catch (error) {
            console.log("🚀 ~ consultarDB ~ error:", error)
        }
    }

    return (
        <main>
            <section className="banner-container nav-espacio">
                <img className="banner" src={banner} alt="plato con comida china" />
                <h1 className="bannerTitulo nav-espacio">查询 Consultas</h1>
            </section>    
            <Container className="my-5">
                {
                    consultas
                    ?(consultas
                        .slice()
                        .reverse()
                        .map(consulta => 
                            <ConsultaItem 
                                key={consulta._id} 
                                consulta={consulta} 
                                setConsultas={setConsultas}>
                            </ConsultaItem>))
                    :(<p> No hay consultas </p>)
                }
            </Container>
        </main>
    );
};

export default Consultas;