import './search-box.styles.css'

const SearchBox = ({onChange, className, placeholder}) => {
    return(
        <div>
            <input 
                className={`search-box ${className}`} 
                type='search' 
                placeholder={placeholder}
                onChange={onChange} 
            />
        </div>
    )
}

// class SearchBox extends Component {
//     render() {
//         const {onChange, className, placeholder} = this.props

//         return(
//             <div>
//                 <input 
//                     className={`search-box ${className}`} 
//                     type='search' 
//                     placeholder={placeholder}
//                     onChange={onChange} 
//                 />
//             </div>
//         )
//     }
// }

export default SearchBox