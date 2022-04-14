import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const SingleFoodItem = ({ oneMeal }) => {
    const { id, image, name, about, price } = oneMeal;

    const navigate = useNavigate();
    const handleAddToCart = () => {
        navigate('/breakfast/' + id)
    }

    return (
        <div onClick={handleAddToCart}>
            <Card className='shadow rounded' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <h5>${price}</h5>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleFoodItem;