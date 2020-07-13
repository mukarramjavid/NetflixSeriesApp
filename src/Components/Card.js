import React from 'react'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import SData from '../Data'
const Cards=()=>{
return(  
      <Container>
             <Row>
        {
            SData.map((val)=>{
                return(
                    <Col md={4} xs={12} sm={4} key={val.id} >
                        <Card className="CardStyle">
                            <Card.Img variant="top" src={val.img} />
                            <Card.Body>
                                <Card.Title className="movieTitle">{val.title}</Card.Title>
                                <Card.Text className="movieDesc">
                                {val.desc}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="btnClass">
                                <Button variant="outline-secondary" href={val.link} target="_blank" >Watch Now</Button>
                            </Card.Footer>
                        </Card><br/>
                    </Col>
                  )})
        }
            </Row>
   </Container>
   )
}
export default Cards;
