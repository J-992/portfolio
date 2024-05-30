import React from 'react'
import { NavLink } from 'react-router-dom';



const renderContent = {
    1: (
        <h1 className='rounded-lg px-8 py-2 bg-white items-center justify-center flex shadow-md'>
            Double click to enter!
        </h1>
    ),
    2: (
        <h1 className='rounded-lg px-8 py-2 bg-white items-center justify-center flex shadow-md'>
            Dont fall in!
        </h1>
    ),
    3: (
        <h1 className = 'rounded-lg px-8 py-2 bg-white items-center justify-center flex shadow-md'>
            Welcome!
        </h1 >
    ),
4: (
    <h1 className='rounded-lg px-8 py-2 bg-white items-center justify-center flex shadow-md'>
        These are trees!
    </h1>
),
    5: (
        <h1 className='rounded-lg px-8 py-2 bg-white items-center justify-center flex shadow-md'>Click around the island to explore!
            Note: This site still has a couple bugs that I have yet to fix :)
        </h1>
    )
}


const HomeInfo = (currentStage) => {
    return renderContent[currentStage.stage] || null;
}

export default HomeInfo