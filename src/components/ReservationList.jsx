import { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { parseISO, format } from 'date-fns'

class ReservationList extends Component {

    state= {
        reservations: [],
        loading: true,
        error: false
    }

    componentDidMount = () => {
        this.fetchReservations()
    }

    fetchReservations = async() => {
        try{
            let response = await fetch('https://striveschool-api.herokuapp.com/api/reservation' /*,
            {
                method: 'GET'
            }*/)

            if (response.ok) {
                let data = await response.json()
                console.log(data)
                this.setTimeout(() => {
                    this.setState(
                    {
                    reservations: data,
                    loading: false}
                )
                }, 500);
                
            }else{
                alert('something went wrong')
                this.setState({
                    loading:false,
                    error:true
                })
            }

        }catch(error){
            console.log(error)
            this.setState({
                loading:false,
                error:true
            })
        }
    }

    render(){
        return(        

            <Container className='mb-10'>
                <Row className="justify-content-center">
                    <Col xs={12} md={6} className="mt-4">
                        <h2 className="text-center">Attuali prenotazioni:</h2>
                        <div className='text-center'>
                            

                            

                            {
                                this.state.error && (
                                    <Alert variant='danger'>
                                        errore nel recupero delle informazioni
                                    </Alert>
                                )                               
                            },

                            {
                                this.state.loading && (
                                  <Spinner animation='border' varian='success' />  
                                )
                            }

                            
                        </div>
                        <ListGroup>
                            {
                                this.state.reservations.lenght === 0 && 
                                !this.state.loading && 
                                !this.state.error &&
                                (
                                    <ListGroup.Item>
                                        Non ci sono prenotazioni
                                    </ListGroup.Item>
                                )                        
                            },

                            {
                                this.state.reservations.map(reservation => (
                                    <ListGroup.Item key={reservation._id}>{reservation.name} per {reservation.numberOfPeople} -{' '} 
                                    {format(parseISO(reservation.dateTime), 'd MMMM yyyy')}
                                    </ListGroup.Item>
                                ))
                            }


                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ReservationList