import { Col, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

export default function Bebida({ bebida }) {
  const {handleModalClick,  handleBebidaId} = useBebidas()



  return (
    <Col md={6} lg={3}>
      <Card className='mb-4'>
        <Card.Img variant='top'
          src={bebida.strDrinkThumb}
          alt={`Imagen de ${bebida.strDrink}`}
        />
        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>
        </Card.Body>

        <Button
          variant='warning'
          className="w-100 text-uppercase mt-2 mb-2 "
          onClick={()=> {
            handleModalClick()
            handleBebidaId(bebida.idDrink)
          }}
          >
          Ver Receta
        </Button>
      </Card>
    </Col>
  )
}
