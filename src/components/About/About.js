import React, { useState, useEffect } from 'react'
import { Card, Container, Grid, Header, Image, List } from 'semantic-ui-react'
import api from '../../utils/api'

import './Home.css'
const About = (props) => {
    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        async function fetchTeam () {
    
          try {
            api.readAllMembers().then(members => {
              const profiles = []
              var i = 0
              members.forEach(element => {
                profiles[i] = element.data
                i++
              })
              setProfiles(profiles)
            })
          } catch (err) {
            console.error(err)
          }
        }
    
        fetchTeam()
      }, [])
    //    saveToApi("POST","")
    return (
        <div >
            <Grid>
                <Grid.Row/>
                <Grid.Row centered>
                    <Grid.Column textAlign="justified" width={9}>
                        <Grid>
                        <Grid.Row >
                        <Header as="h1">
                            Propósito Superior
                         </Header>
                         </Grid.Row>
                         <Grid.Row>
                        <Container fluid className="app-body">
                        Somos una organización sin ánimo de lucro que trabaja con agentes del estado, el sector privado, organismos internacionales organizaciones no gubernamentales, la academia y la sociedad civil en proyectos de movilidad sostenible en cinco dimensiones: eficiencia, seguridad vial, protección del medio ambiente, inclusión social y salud pública. 
                        <br/>
                        <Header as="h2">
                            Valores
                        </Header>
                        <List bulleted>
                            <List.Item>
                                Eficiencia: reducir de costos y tiempos de viaje de personas y productos y los costos de inversión, operación y mantenimiento para el estado
                            </List.Item>
                            <List.Item>
                                Seguridad Vial: proteger la vida y la integridad de todas las personas en la vía
                            </List.Item>
                            <List.Item>
                                Protección del Medio Ambiente: eliminar las emisiones de contaminantes que causan problemas en la salud de las personas y de gases y partículas con efecto de invernadero; mitigar el ruido y la degradación del ambiente natural; contribuir a la adaptación de la movilidad a los efectos del cambio climático 
                            </List.Item>
                            <List.Item>
                                Inclusión social: orientar las mejoras de acceso a la población de menores ingresos, las mujeres, los niños, niñas y jóvenes, adultos mayores y personas con discapacidad, bajo principios de accesibilidad universal
                            </List.Item>
                            <List.Item>
                                Salud pública: fomentar la actividad física y la salud mental de las personas en el marco de la movilidad
                            </List.Item>
                        </List>
                        </Container>
                        </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column centered width={16}>
                    <Image src='./images/bogota.jpg' fluid />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign="center" >
                        <Header as="h1">
                        Equipo Lider
                        </Header>
                    <Grid centered>
                        <Grid.Row >
                        {profiles.map(profile=>(
                            <Grid.Column mobile={16}tablet={8}computer={4}>
                                <Card fluid>
                                <Image  src={"/images/"+profile.image} circular/>
                                <Card.Content>
                                    <Card.Header>
                                        {profile.name}
                                    </Card.Header>
                                <Card.Description>{profile.description}</Card.Description>
                                </Card.Content>
                                </Card>
                            </Grid.Column>
                        ))}
                        </Grid.Row>
                    </Grid>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={12}>
                    <Header>Proyectos destacados en los cuales han participado los miembros de FVC3:
                        
                    </Header>
                    <br/>
                    
                    <List bulleted>
                        <List.Item>Seguridad Vial<List.List>
                            <List.Item>
                            Apoyo en la planeación e implantación del Plan de Seguridad Vial y el Programa de Gestión de la Velocidad de Bogotá (2016-2020)
                            </List.Item>
                            <List.Item>
                            Dirección de la campaña “Carros Más Seguros” de mejoramiento del conocimiento de consumidores sobre seguridad vial vehicular (2019-2020)
                            </List.Item>
                            <List.Item>
                            Apoyo en las actividades de incidencia en política pública de la coalición por la seguridad vial vehicular en Colombia (2020-2021)
                            </List.Item>
                            <List.Item>
                            Apoyo en la estrategia de reducción de velocidad en corredores principales en Cali, Colombia (2020-2021)
                            </List.Item>
                            <List.Item>
                            Investigaciones sobre el papel de la movilidad sostenible en la seguridad vial, el diseño seguro de corredores de buses, y el impacto de la gestión de la velocidad y del ambiente construido en los siniestros con víctimas en Bogotá
                            </List.Item>
                            </List.List>
                        </List.Item>
                        <List.Item>Trasnporte Público<List.List>
                            <List.Item>
                                Planeación e implantación del sistema de transporte masivo en buses de Bogotá (2000-2003)
                            </List.Item>
                            <List.Item>
                            Planeación de la Primera Línea Metro de Bogotá (1998-2000)
                            </List.Item>
                            <List.Item>
                            Planeación y evaluación del sistema Transantiago (2004, 2009) y evaluación de tarifas (2015, 2017), Santiago Chile
                            </List.Item>
                            <List.Item>
                            Planeación del sistema de buses Metropolitano, Lima, Perú (2004-2005)
                            </List.Item>
                            <List.Item>
                            Evaluación y mejoramiento del sistema Metrobús de Ciudad de México (2007-2009)
                            </List.Item>
                            <List.Item>
                            Apoyo en la planeación de sistemas de buses en Ahmedabad, Bangalore y Mumbai, India (2009-2012. 2015)
                            </List.Item>
                            <List.Item>
                            Apoyo en la formulación de estudios para el metro del área metropolitana de San Salvador, El Salvador (2020) 
                            </List.Item>
                            <List.Item>
                            Preparación de proyectos de transporte masivo en buses en Dar Es Salaam, Tanzania (2006); Accra, Ghana (2006); Bangkok, Tailandia (2005); Colombo, Sri Lanka (2008)
                            </List.Item>
                            <List.Item>
                            Apoyo en la vinculación de flotas eléctricas en Cali y Medellín, Colombia (2018-2019)
                            </List.Item>
                            <List.Item>
                            Desarrollo y aplicación de metodologías para evaluación de acceso universal en sistemas de transporte masivo, en Santiago, Bogotá, Medellín (2019-2020). 
                            </List.Item>
                            <List.Item>
                            Evaluación de la sostenibilidad de sistemas de transporte público en Colombia (estudios para Secretaría Distrital de Movilidad, 2015-2016 y Financiera de Desarrollo Nacional FDN, Colombia, 2017-2019) 
                            </List.Item>
                            <List.Item>
                            Estudio sobre inclusión de transporte público informal y semiformal en la reforma de transporte en América Latina, BID-WRI-GEF (2020).  
                            </List.Item>
                            <List.Item>
                            Diseño del corredor de la Carrera Séptima Bogotá (para transporte masivo en buses, peatones y bicicletas, 2017)
                            </List.Item>
                            </List.List>
                            </List.Item>
                        <List.Item>Peatones y Bicicletas
                            <List.List>
                            <List.Item>
                            Apoyo en los estudios de factibilidad para la implantación de la Ciclo-Alameda del Medio Milenio en Bogotá (2018-2019)
                            </List.Item>
                            <List.Item>
                            Política pública de la bicicleta en Bucaramanga, Colombia (2018-2019) y Guayaquil, Ecuador (2018-2019)
                            </List.Item>
                            <List.Item>
                            Documentación y recomendaciones al programa “Al Colegio en Bici”, Bogotá, Colombia; y apoyo a la estrategia “Ciempiés” (2018-2020)
                            </List.Item>
                            <List.Item>
                            Organización del Concurso De Buenas Prácticas En Ciclo-Infraestructura Para Ciudades Colombianas (2019)
                            </List.Item>
                            <List.Item>
                            Estudio de estructuración técnica, legal, financiera para la formalización de tricimóviles de pedaleo y pedaleo asistido en Bogotá (2019-2020)
                            </List.Item>
                            </List.List>    
                        </List.Item>
                        <List.Item>
                        Infraestructura de transporte
                        <List.List>
                            <List.Item>
                            Coordinación de la atención a la ola invernal y reconstrucción de la infraestructura de transporte nacional (2010-2012)
                            </List.Item>
                            <List.Item>
                            Diseño del programa de concesiones viales 4G (2010-2018)
                            </List.Item>
                        </List.List>
                        </List.Item>
                        <List.Item>
                            Otros Proyectos
                            <List.List>
                                <List.Item>
                                Apoyo al programa de Eco-logística Urbana en Colombia y Argentina de ICLEI (2019)
                                </List.Item>
                                <List.Item>
                                Política pública para el desarrollo orientado al transporte sostenible, con Findeter-CCAP (2019-2020) 
                                </List.Item>
                                <List.Item>
                                Estudio sobre inclusión en transporte, parte del Reporte de Recursos Mundiales 2019, con WRI
                                </List.Item>
                                <List.Item>
                                Preparación del capítulo sobre trasporte verde de la hoja de ruta para transporte sostenible para todos (SUM4ALL, 2018-2019)
                                </List.Item>
                            </List.List>
                        </List.Item>
                        <List.Item>
                        Cursos y capacitaciones
                        <List.List>
                            <List.Item>
                            Cursos cortos de formación en movilidad sostenible y transporte público (GIZ – SUTP) Bangkok 2004, Beijing 2005, Querétaro 2006, Ciudad de México 2007, Kuala Lumpur 2016, Cairo 2016, Estambul 2015, Manila 2016, Santiago 2018, Frankfurt 2018, Berlín 2018, 
                            </List.Item>
                            </List.List>
                        </List.Item>
                        <List.Item>
                            Enlaces relevantes
                            <List.List>
                                <List.Item>
                                    <a href="https://carrosmasseguros.org/">Iniciativa Carros Más Seguros</a>
                                </List.Item>
                                <List.Item>
                                <a href="https://lasillavacia.com/users/dhidalgo65">Columnas de Opinión La Silla Vacía, Red Cachaca </a>
                                </List.Item>
                                <List.Item>
                                <a href="https://www.eltiempo.com/opinion/columnistas/dario-hidalgo">Columnas de Opinión El Tiempo</a>
                                </List.Item>
                                <List.Item>
                                <a href="https://thecityfix.com/blog/author/dario-hidalgo/">Blogs TheCityFix</a>
                                </List.Item>
                                <List.Item>
                                <a href="https://scholar.google.es/citations?user=2ITvrmQAAAAJ&hl=en">Publicaciones Google Académico </a>
                                </List.Item>
                            </List.List>
                        </List.Item>
                    </List>
                    
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

// async function saveToApi (method,member) {

//     const transport = {
//       id: 4,
//       name: member.name,
//       image: member.image,
//       description: member.description
//     }
//     api
//       .createMember(transport)
//       .then(response => {
//         console.log(response)
//       })
//       .catch(e => {
//         console.log('An API error occurred', e)
//       })
//   }
export default About