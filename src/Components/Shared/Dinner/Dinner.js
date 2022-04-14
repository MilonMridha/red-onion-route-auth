import React from 'react';
import useHooks from '../../../UseHooks/UseHooks';
import SingleFoodItem from '../Breakfast/SingleFoodItem';

const Dinner = () => {
    const {dinner} = useHooks();
    return (
        <div className=' container mx-auto mt-5 g-4 row row-cols-1 row-cols-md-3'>
            {
                dinner.map(oneMeal => <SingleFoodItem
                key={oneMeal.id}
                oneMeal={oneMeal}
                ></SingleFoodItem>)
            }
        </div>
    );
};

export default Dinner;