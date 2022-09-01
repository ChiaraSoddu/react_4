import { Component } from 'react';
import { Container, Row, Col, Carousel, ListGroup } from 'react-bootstrap';
import menu from '../data/menu.json'

class Home extends Component {

    state = {
        selectedPasta: null //null è il valore iniziale di selectedPasta    
    }
    // lo state si resetta aggiornando la pagina

    render () {
        return (<Container className='mb-10'>
        <Row className="justify-content-center">
            <Col xs={12} md={6}>
                <div className='text-center my-3'>
                    <h1>Benvenuti!</h1>
                    <h3>Non serviamo secondi piatti :)</h3>
                </div>
                
            <Carousel>

{
    menu.map((pasta)=>{
        return (
            <Carousel.Item key={pasta.id} onClick={()=>{
                console.log('cliccato!')
                this.setState({
                    selectedPasta: pasta,
                    //questo mi cambia il valore di selectedPasta
                })
            }}>
        <img
          className="d-block w-100"
          src={pasta.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{pasta.name}</h3>
          <p>{pasta.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      
        )
    })
}

      
    </Carousel>
            </Col>
        </Row>
        <Row className='justify-content-center'>
            <Col xs={12} md={6} className='text-center mt-4'>
            <ListGroup>

                {
                this.state.selectedPasta?.comments.map((review) => (
                    <ListGroup.Item key={review.id}>{review.author} - {review.comment}</ListGroup.Item>
                    ))
                },

                
            </ListGroup>
            </Col>
        </Row>
    </Container>)
    }
}

export default Home