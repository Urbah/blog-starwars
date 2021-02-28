import React, {useContext} from 'react'
import {Context} from '../store/appContext'
import Card from './Card'
import { CardDeck } from 'react-bootstrap';

const CardList = (props) => {
    const {store} = useContext(Context);

    return (
        <div className='container-fluid'>
            <h2 className='text-capitalize my-3'>{props.typeData}</h2>
            <CardDeck className='row flex-row flex-nowrap scroll'>            
                {store[props.typeData].map((element, index)=>{
                    return (<div className='col-md-3 col-sm-4 p-0' key={index}>
                        <Card className='card-block' element={element} 
                            index={index} typeData={props.typeData}
                            attr1={props.attr1} attr2={props.attr2} attr3={props.attr3}>
                        </Card>
                    </div>
                    )
                })}
            </CardDeck>
        </div>
    )
}

export default CardList;