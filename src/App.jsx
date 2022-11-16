import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import criptoimg from "./img/bit.png";
import Formulario from "./Components/Formulario";
import Resultado from "./Components/Resultado";
import Spinner from "../src/Components/Spinner"


const Container = styled.div`
  background-color: black;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  max-width: 900px;
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 50px;
  padding: 30px;
  width: 100%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Heading = styled.h1`
  font-family: "Lato", "sans-serif";
  color: #f8fafc;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 20px;
  font-size: 34px;
  
`;

const HomeImg = styled.img`
  max-width: 600px;
  width: 100%;
  height: 80%;
  margin: 100px auto 0 auto;
  display: block;

`;

const Sentence = styled.p`
  font-family: "Lato", "sans-serif";
  color: #2ba2c6;
  text-align: center;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 18px;
  
`


function App() {

  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado]= useState({})
  const [cargando, setCargando]= useState(false)
  useEffect(()=>{
    if(Object.keys(monedas).length>0){
      
      const cotizarCripto = async () => {
        setCargando(true)
        setResultado({})

        const { moneda, criptomoneda} = monedas

            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            setResultado(resultado.DISPLAY[criptomoneda][moneda])

            setCargando(false)
      }
      
      cotizarCripto()
    }

  }, [monedas])


  return (
      <Container>

        <HomeImg
        src={criptoimg}
        alt='imagen de cripto'/>

        <div>
            <Heading>Cryptocurrency Quote</Heading>
            <Sentence>We are entry point to the crypto world.</Sentence>
            
            <Formulario
            setMonedas={setMonedas}/>

            {cargando && <Spinner/>}

            {resultado.PRICE && <Resultado resultado={resultado}/>}
           
        </div>

      </Container>
    
  );
}

export default App;
