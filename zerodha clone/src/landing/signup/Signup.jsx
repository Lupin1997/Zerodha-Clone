import {Form , Button } from "react-bootstrap"
import {Link} from "react-router-dom"
const Signup = () => {
  return (
    
    <div className="container">
       <h2 className="text-center mt-3" style={{color:"grey"}}>Sign Up</h2>
      <div className="row p-3 mt-5 border-top">
     
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Link ><Button variant="primary" type="submit">Submit
    </Button> </Link>
    
      
  </Form>
</div>
</div>
  )
}

export default Signup
