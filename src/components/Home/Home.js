import React from 'react'
import { Grid, Header, Image,List } from 'semantic-ui-react'
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
                        <p>En ese marco realizamos actividades de:  </p>
                        <List bulleted>
                            <List.Item>	Asistencia técnica</List.Item>
<List.Item>	Investigación</List.Item>
<List.Item>	Desarrollo de proyectos</List.Item>
<List.Item>	Divulgación y promoción </List.Item>
<List.Item>	Construcción de capacidades, capacitación </List.Item>
<List.Item>	Gestión y acompañamiento</List.Item>
<List.Item>	Estimación de impactos y medición de resultados</List.Item>
<List.Item>	Abogacía e incidencia en políticas públicas, entre otros.</List.Item>
</List>
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