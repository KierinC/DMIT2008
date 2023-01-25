import Head from 'next/head'

// External Library Components
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// My own Custom Components
import ComponentLibrariesList from '@/components/ComponentsLibrariesList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Container>
        <Row>
          <h1>Example of using Bootstrap</h1>
        </Row>
        <Row>
          <Col>
            <h4>Available Componenet Libraries</h4>
            <ComponentLibrariesList/>
          </Col>
          <Col>
            <h4>Wow Buttons!</h4>
            <Button variant="outline-light">Coolest Button Ever</Button>
          </Col>
        </Row>
      </Container>
      </main>
    </>
  )
}