import React, { useState } from 'react';
import { 
  Container,
  Row,
  Form,
  Button,
  InputGroup
} from 'react-bootstrap';
import './App.css';

function App() {
  const [result, setResult] = useState(0);
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [checkInput1, setCheckInput1] = useState('');
  const [checkInput2, setCheckInput2] = useState('');
  const [checkInput3, setCheckInput3] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const calculate = (operator) => {
    if(validation()) {
      switch (operator) {
        case '+':
          if(checkInput1 && checkInput2 && checkInput3) {
            setResult(+input1 + +input2 + +input3);
          } else if(checkInput1 && checkInput3) {
            setResult(+input1 + +input3);
          } else if(checkInput2 && checkInput3) {
            setResult(+input2 + +input3);
          } else if(checkInput1 && checkInput2) {
            setResult(+input1 + +input2);
          }
          break;
        case '-':
          if(checkInput1 && checkInput2 && checkInput3) {
            setResult(+input1 - +input2 - +input3);
          } else if(checkInput1 && checkInput3) {
            setResult(+input1 - +input3);
          } else if(checkInput2 && checkInput3) {
            setResult(+input2 - +input3);
          } else if(checkInput1 && checkInput2) {
            setResult(+input1 - +input2);
          }
          break;
        case '*':
          if(checkInput1 && checkInput2 && checkInput3) {
            setResult(+input1 * +input2 * +input3);
          } else if(checkInput1 && checkInput3) {
            setResult(+input1 * +input3);
          } else if(checkInput2 && checkInput3) {
            setResult(+input2 * +input3);
          } else if(checkInput1 && checkInput2) {
            setResult(+input1 * +input2);
          }
          break;
        case '/':
          if(checkInput1 && checkInput2 && checkInput3) {
            setResult(+input1 / +input2 / +input3);
          } else if(checkInput1 && checkInput3) {
            setResult(+input1 / +input3);
          } else if(checkInput2 && checkInput3) {
            setResult(+input2 / +input3);
          } else if(checkInput1 && checkInput2) {
            setResult(+input1 / +input2);
          }
          break;
        default:
          break;
      }
    }
  }

  const validation = () => {
    if((!checkInput1 && !checkInput2) || (!checkInput3 && !checkInput2) || (!checkInput1 && !checkInput3)) {
      setErrorMessage('Minimal 2 input');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000)
      return false;
    } else {
      return true;
    }
  }

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <h1>Kalkulator React</h1>
      </Row>
      <Row className="justify-content-center mt-5">
        {errorMessage && <h4 className="text-danger">Error! {errorMessage}</h4>}
      </Row>
      <Row className="justify-content-center mt-5">
        <Form>
          <Form.Group controlId="input1">
            <Form.Label>1st Number</Form.Label>
            <InputGroup>
              <Form.Control type="number" placeholder="Input 1" onChange={e => setInput1(e.target.value)}/>
              <InputGroup.Append>
                <InputGroup.Checkbox id="input1-checkbox" onChange={e => setCheckInput1(e.target.checked)}/>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="input2">
            <Form.Label>2nd Number</Form.Label>
            <InputGroup>
              <Form.Control type="number" placeholder="Input 2" onChange={e => setInput2(e.target.value)} />
              <InputGroup.Append>
                <InputGroup.Checkbox id="input2=checkbox" onChange={e => setCheckInput2(e.target.checked)} />
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="input3">
            <Form.Label>3rd Number</Form.Label>
            <InputGroup>
              <Form.Control type="number" placeholder="Input 3" onChange={e => setInput3(e.target.value)}/>
              <InputGroup.Append>
                <InputGroup.Checkbox id="input3-checkbox" onChange={e => setCheckInput3(e.target.checked)}/>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <Button variant="primary" className="ml-3 mr-3" onClick={() => calculate('+')}>
            +
          </Button>
          <Button variant="primary" className="mr-3" onClick={() => calculate('-')}>
            -
          </Button>
          <Button variant="primary" className="mr-3" onClick={() => calculate('*')}>
            *
          </Button>
          <Button variant="primary" className="mr-3" onClick={() => calculate('/')}>
            /
          </Button>
        </Form>
      </Row>
      <Row className="justify-content-center mt-3">
        <h5>Hasil: {result}</h5>
      </Row>
    </Container>
  );
}

export default App;
