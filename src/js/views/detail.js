import React, {useContext} from 'react'
import {useParams} from 'react-router'
import {Context} from '../store/appContext'
import people from '../../img/people.png'
import Attributes from '../components/Attributes'

const Detail = (props) => {
    const {store} = useContext(Context);
    console.log('----props.match.params----------',props.match.params);
    let {typeData} = useParams();
    let {index} =  useParams();

    return (
    <div className='container'>
        <div className='row  my-4'>
            <div className='col-6'>
                <img src={people} width='600' height='400' alt='empty img'/>
            </div>
            <div className='col-6'>
                <h1>{store[typeData][index].name}</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                    dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem 
                    ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum 
                    iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui 
                    dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
            </div>
            <hr            />
            <div className='attributes col-12'>
                <Attributes typeData={typeData} index={index}/>   
            </div>
        </div>
    </div>
    )
}

export default Detail;