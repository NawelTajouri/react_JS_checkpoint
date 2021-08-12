import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form} from 'react-bootstrap';

import './App.css';

function App() {
  return (

    <div className="App">
      <div className="outer">
      <div className="container">
        <div className="HeadForm mb-2">
          <h5>Sign In</h5>
        </div>
        
        <Form className="MyForm">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="formLabel">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="formLabel">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

        </Form>
        <div className="Mybutton">
        <Button className="btn mt-3" variant="primary" type="submit">
            Submit
          </Button>
        </div>
        
      </div>
      </div>
      
      
    </div>
  );
}

export default App;
