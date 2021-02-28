import React, {useContext, useEffect}  from 'react'
import CardList from '../components/CardList'

import {Context} from '../store/appContext'

const Home = () => {
    const {actions} = useContext(Context);
    useEffect(()=>{
        actions.fetchWorld('planets');
        actions.fetchWorld('people');
        actions.fetchWorld('vehicles');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return(
        <>
            <CardList typeData='people' attr1='gender' attr2='birth_year' attr3='height'/>
            <CardList typeData='planets' attr1='climate' attr2='diameter' attr3='population'/>
            <CardList typeData='vehicles'attr1='cargo_capacity' attr2='model' attr3='length'/>
        </>
    )
}

export default Home;

      

