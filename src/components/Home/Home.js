import React from 'react'
import { Button, Grid, Header, Image, Form } from 'semantic-ui-react'
import Contact from '../Contact/Contact'
import './Home.css'
const Home = (props) => {
    return (
        <div className="App">
            <Grid divided='vertically'>
                <Grid.Row>
                    <Grid.Column width={9}>
                        <br />
                        <br />
                        <Header className="largeText" >
                        Promovemos un mejor acceso de personas y productos, con una visión de cero fatalidades, cero emisiones y cero exclusiones.
                        </Header>
                        <br />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size="large" />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row verticalAlign="middle" centered>
                    <Grid.Column width={6}>
                        <Header as="h2">
                        Nuestro trabajo
                        </Header>
                        <p>Entendemos la movilidad sostenible como una combinación de acciones para evitar desplazamientos largos e innecesarios, cambiar las tendencias para promover más viajes a pie, en bicicleta y en transporte público, y mejorar las tecnologías y las operaciones de transporte. </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size="large" />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                <Contact/>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Home