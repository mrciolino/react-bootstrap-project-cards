import { Container } from 'react-bootstrap';
import Projects from './components/Projects';
import { Icon } from '@iconify/react';
import Data from './data.json';
import logo from './logo.svg';
import './App.css';

const Header = () => {
  return (
    <header className="App-header d-flex justify-content-between">
      <div>
        <img src={logo} className="App-logo" alt="logo" /> React-Bootstrap-Project-Cards
      </div>
      <div>
        <a className="p-3" href="https://github.com/mrciolino/react-bootstrap-project-cards" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:github" className="icon mb-1" style={{ color: 'white' }} />
        </a>
        <a className="p-3" href="https://www.npmjs.com/package/react-bootstrap-project-cards" target="_blank" rel="noopener noreferrer">
          <Icon icon="logos:npm-icon" className="icon mb-1" />
        </a>
      </div>
    </header>
  )
}

const HowTo = () => {
  return (
    <Container className='rounded'>
      <div className='howto row p-3'>
        <div className='col-6'>
          <h1>How to use</h1>
          <p>Install the package</p>
          <p><code>  npm install react-bootstrap-project-cards</code></p>
          <p>Import the component</p>
          <p><code>  import Projects from 'react-bootstrap-project-cards'</code></p>
          <p>Import the data</p>
          <p><code>  import Data from './data.json'</code></p>
          <p>Use the component</p>
          <p><code> &lt;Projects data=&#123;Data.projects&#125; /&gt;  </code></p>
        </div>
        <div className='col-6'>
          <h1>Example Data</h1>
          <pre className="json" style={{ color: "var(--bs-code-color)" }}>
            <code> {JSON.stringify(Data, null, 2)} </code>
          </pre>
        </div>
      </div>
    </Container >
  )
}

const Footer = () => {
  return (
    <div className="App-footer justify-content-center p-3" style={{ marginTop: "5vh" }}>
      Made with <Icon icon="mdi:heart" className="icon mb-1" /> and <Icon icon="material-symbols:code" className="icon mb-1" />&nbsp;with <Icon icon="logos:react" className="icon mb-1" /> and <Icon icon="logos:bootstrap" className="icon mb-1" />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <h1 className='p-5'>Style</h1>
        <Projects data={Data.projects} />
        <h1 className='p-5'>Usage</h1>
        <HowTo />
      </Container >
      <Footer />
    </div>
  );
}

export default App;
