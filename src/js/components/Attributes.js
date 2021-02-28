import React, {useContext} from 'react'
import {Context} from '../store/appContext'

const Attributes = (props) =>{
    const {store} = useContext(Context);
    const typeData = props.typeData;
    const index = props.index;

    switch (typeData){
        case 'people':
            return (
                <div className='row justify-content-center my-4'>
                    <div className='col-2 text-center'>
                        <h2>Gender</h2>
                        <h3>{store[typeData][index]['gender']}</h3>
                    </div>

                    <div className='col-2 text-center'>
                        <h2>Hair color</h2>
                        <h3>{store[typeData][index]['hair_color']}</h3>
                    </div>

                    <div className='col-2 text-center'> 
                        <h2>Height</h2>
                        <h3>{store[typeData][index]['height']}</h3>
                    </div>

                    <div className='col-2 text-center'>
                        <h2>Mass</h2>
                        <h3>{store[typeData][index]['mass']}</h3>
                    </div>

                    <div className='col-2 text-center'> 
                        <h2>Skin color</h2>
                        <h3>{store[typeData][index]['skin_color']}</h3>
                    </div>
                </div>
                )
        case 'planets':
            return (
                <div className='row justify-content-center my-4'>
                    <div className='col-2 text-center'>
                        <h2>Climate</h2>
                        <h3>{store[typeData][index]['climate']}</h3>
                    </div>

                    <div className='col-2 text-center'>
                        <h2>diameter</h2>
                        <h3>{store[typeData][index]['diameter']}</h3>
                    </div>

                    <div className='col-2 text-center'> 
                        <h2>Gravity</h2>
                        <h3>{store[typeData][index]['gravity']}</h3>
                    </div>

                    <div className='col-2 text-center'>
                        <h2>Population</h2>
                        <h3>{store[typeData][index]['population']}</h3>
                    </div>

                    <div className='col-2 text-center'> 
                        <h2>Terrain</h2>
                        <h3>{store[typeData][index]['terrain']}</h3>
                    </div>
                </div>
                )
        case 'vehicles':
            return (
                <div className='row justify-content-center my-4'>
                    <div className='col-2 text-center'>
                        <h2>Cargo capacity</h2>
                        <h3>{store[typeData][index]['cargo_capacity']}</h3>
                    </div>

                    <div className='col-2 text-center'>
                        <h2>Consumables</h2>
                        <h3>{store[typeData][index]['consumables']}</h3>
                    </div>

                    <div className='col-2 text-center'> 
                        <h2>Crew</h2>
                        <h3>{store[typeData][index]['crew']}</h3>
                    </div>

                    <div className='col-2 text-center'>
                        <h2>Length</h2>
                        <h3>{store[typeData][index]['length']}</h3>
                    </div>

                    <div className='col-2 text-center'> 
                        <h2>Model</h2>
                        <h3>{store[typeData][index]['model']}</h3>
                    </div>
                </div>
                )
     }
    }

export default Attributes;