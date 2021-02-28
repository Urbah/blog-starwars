import React, {useContext, useState, useEffect} from 'react'
import {Card, Button} from 'react-bootstrap'
import {Context} from '../store/appContext'
import {Link} from 'react-router-dom'
import people from '../../img/people.png'

const OneCard = (props) =>{
  const {store, actions} = useContext(Context);
  const [fav, setFav ] = useState(false);

  const clickFavorite = (e) =>{
    fav ? actions.deleteFavorite(store.favorites, props.element.name)
        : actions.addFavorites(store.favorites , props.element)
    setFav(!fav)
  }
  useEffect(() => {
      if(store.favoriteDeleted === props.element.name){
          setFav(false)
      }

  },[store.favoriteDeleted]);

    return (
    <Card className='mt-2'>
    <Card.Img variant="top" src={people} />
    <Card.Body>
      <Card.Title>{props.element.name}</Card.Title>
      <Card.Text>
        {props.attr1} : {props.element[props.attr1]}
      </Card.Text>
      <Card.Text>
        {props.attr2} : {props.element[props.attr2]}
      </Card.Text>
      <Card.Text>
        {props.attr3} : {props.element[props.attr3]}
      </Card.Text>
      <Button variant="outline-warning" className='fav-btn' onClick={(e)=>(clickFavorite(e))} >
        {fav ? 
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fillRule="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
        :
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart" fillRule="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
      </svg> }
      </Button>
      <Link className='btn btn-primary mx-2' to={`/detail/${props.typeData}/${props.index}`}>Detail</Link>
    </Card.Body>
  </Card>
)}

export default OneCard
