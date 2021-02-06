import React from 'react'
import { Form, Grid, Header } from 'semantic-ui-react'

const Contact = (props) => {
    return (
        <div>
            <Grid>
                <Grid.Row centered>
                    <Grid.Column width={6}>
                        <Header>
                            Habla con nosotros
                        </Header>
                        <p>
                            Ponte en contacto con nuestro equipo. Solo se utilizara la información proporcionada para responder a los mensajes enviados.
                        </p>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='Email Address' placeholder='Email Address' />
                                <Form.Input fluid label='Name' placeholder='Name' />
                            </Form.Group>
                            <Form.TextArea label='Message' placeholder='What do you whant to to tell us?' />
                            <Form.Button>Send</Form.Button>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
export default Contact