import React from 'react';
import specials from './Specials';


const Menu = () => {
    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <h2>This week's specials!</h2>
                <button>Online Menu</button>
            </div>
            <div className='cards'>
                {
                    specials.map(specials => <div key={specials.id} className='menu-items'>
                        <img src={specials.image} alt='' className='menuimg'/>
                        <div className='menu-content'>
                            <div className='heading'>
                                <h5>{specials.title}</h5>
                                <p>{specials.price}</p>
                            </div>
                        </div>
                        <p>{specials.description}</p>
                        <button className='orderbtn'>Order a delivery</button>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Menu;