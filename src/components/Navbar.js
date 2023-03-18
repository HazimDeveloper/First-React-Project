function Navbar(props){
    return(
        <div>
            <h1>{!props.NavHeading ? "Navbar" : props.NavHeading }</h1>
            <ul>
                <li><a href="#">Home</a> </li>
                <li><a href="#">About</a> </li>
                <li ><a href="#"> Blog</a></li>
                <li ><a href="#"> {props.Contact}</a></li>
            </ul>
        </div>
    )
}

export default Navbar;