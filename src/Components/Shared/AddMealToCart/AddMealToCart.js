
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHooks from '../../../UseHooks/UseHooks';



const AddMealToCart = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('meals.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    const {foodId} = useParams();
    // // const [meals, setMeals] = useState([]);


    // // useEffect(()=>{
    // //     fetch('meals.json')
    // //     .then(res => res.json())
    // //     .then(data => setMeals(data))

    // // },[foodId]);
    // // console.log(meals)

    // const {meals} = useHooks();
    // console.log(meals)


    // const addToCartMeal = meals.map(meal=> console.log(meal.id));

    return (
        <div>
            <h1>This is Card: {foodId}</h1>

        </div>
    );
};

export default AddMealToCart;