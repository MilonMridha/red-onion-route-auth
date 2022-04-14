import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='box'>
            <div className='w-100 mx-auto'>
                <h3 className='text-center text-danger mb-3'>Please SignUp!!</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control className='rounded-pill' type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control className='rounded-pill' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control className='rounded-pill' type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control className='rounded-pill' type="password" placeholder="Confirm Password" />
                    </Form.Group>

                    
                    <Button className='w-50 d-block rounded-pill mx-auto' variant="danger" type="submit">
                    SignUp
                    </Button>
                </Form>
                <p className='text-center mt-2'>Already User? <Link to='/login' className='text-decoration-none'>Please Login</Link></p>
            </div>


        </div>
    );
};

export default SignUp;