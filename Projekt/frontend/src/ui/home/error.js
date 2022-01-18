import { Link } from "react-router-dom";

const Error = () => {
    return(
        <div>
            <h1>ERROR</h1>
            <p><Link to="/" className="Btn Delete">Reload</Link></p>
        </div>)
}

export default Error