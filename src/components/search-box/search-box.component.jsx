import { Component } from "react";

class SearchBox extends Component {
    render() {
        const {onChange, className, placeholder} = this.props

        return(
            <div>
                <input 
                    className={className} 
                    type='search' 
                    placeholder={placeholder}
                    onChange={onChange} 
                />
            </div>
        )
    }
}

export default SearchBox