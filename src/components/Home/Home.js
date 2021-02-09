import React from 'react'
import { Grid, Header, Image, List } from 'semantic-ui-react'
import Contact from '../Contact/Contact'
import './Home.css'
const Home = (props) => {
    return (
        <div className="app-body">
            <Grid divided='vertically'>
                <Grid.Row centered>
                    <Grid.Column computer={8} mobile={16} verticalAlign={'middle'}>
                        <br />
                        <br />
                        <Header className="largeText" >
                            Promovemos un mejor acceso de personas y productos, con una visión de cero fatalidades, cero emisiones y cero exclusiones.
                        </Header>
                        <br />
                    </Grid.Column>
                    <Grid.Column computer={7} mobile={16}>
                        <Image src={"./images/ejecuadrado.jpg"} circular />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row verticalAlign="middle" centered>
                    <Grid.Column mobile={16} computer={6}>
                        <Image src='./images/cicloviacuadrada.jpg'  circular size="large" />
                    </Grid.Column>
                    <Grid.Column mobile={16} computer={6}>
                        <Header as="h2">
                            Nuestro trabajo
                        </Header>
                        <p>Entendemos la movilidad sostenible como una combinación de acciones para evitar desplazamientos largos e innecesarios, cambiar las tendencias para promover más viajes a pie, en bicicleta y en transporte público, y mejorar las tecnologías y las operaciones de transporte. </p>
                        <p>En ese marco realizamos actividades de:  </p>
                        <List >
                            <List.Item><List.Icon name="address card"/><List.Content>Asistencia técnica</List.Content></List.Item>
                            <List.Item><List.Icon name="address card outline"/><List.Content>Investigación</List.Content></List.Item>
                            <List.Item><List.Icon name="compose"/><List.Content>Desarrollo de proyectos</List.Content></List.Item>
                            <List.Item><List.Icon name="wordpress forms"/><List.Content>Divulgación y promoción </List.Content></List.Item>
                            <List.Item><List.Icon name="student"/><List.Content>Construcción de capacidades, capacitación</List.Content> </List.Item>
                            <List.Item><List.Icon name="signup"/><List.Content>Gestión y acompañamiento</List.Content></List.Item>
                            <List.Item><List.Icon name="sort alphabet ascending"/><List.Content>Estimación de impactos y medición de resultados</List.Content></List.Item>
                            <List.Item><List.Icon name="shuffle"/><List.Content>Abogacía e incidencia en políticas públicas, entre otros.</List.Content></List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Contact />
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Home