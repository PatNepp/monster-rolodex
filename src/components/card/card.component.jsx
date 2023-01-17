import { Component } from "react";
import './card.styles.css'

class Card extends Component {
    render() {
        const { id, name, email, address } = this.props.monster
        
        return (
            <div className='card-container'>
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`}/>
                <h1>{name}</h1>
                <h3>{email}</h3>
                <h5>{`${address.street}, ${address.suite}, ${address.city}`}</h5>
            </div>
        )
    }
}

export default Card