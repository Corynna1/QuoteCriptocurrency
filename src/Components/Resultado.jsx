import styled from "@emotion/styled";

const ContenedorParrafo = styled.div`
  color: white;
  font-family: "Lato", "sans-serif";
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top:30px;
`
const Imagen = styled.img`
    display: block;
    width: 120px;

`

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`

const Precio = styled.p`
  font-size: 20px;
  span {
    font-weight: 700;
  }
`

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <ContenedorParrafo>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='imagen crypto'/>
        <div>
        <Precio>
        El precio es de: <span>{PRICE}</span>
      </Precio>

      <Texto>
        Precio mas alto del dia: <span>{HIGHDAY}</span>
      </Texto>

      <Texto>
        Precio mas bajo del dia: <span>{LOWDAY}</span>
      </Texto>

      <Texto>
        Variaciones en las ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
      </Texto>

      <Texto>
        Ultimas Actualizaciones: <span>{LASTUPDATE}</span>
      </Texto>
        </div>
    </ContenedorParrafo>
  );
};

export default Resultado;
