import {Link} from 'react-router-dom';
export default function Navbar() {
    return (
        
            <nav style={{backgroundColor:"#FFF"}} className="navbar navbar-expand-lg bg-light border-bottom">
                <div className="container">
                    <Link className="navbar-brand p-2" to="/" > <img style={{width:"30%"}} src="https://zerodha.com/static/images/logo.svg" alt="logo"  /> </Link>                  
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className='nav-link active' aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active' aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                            <Link className='nav-link active' aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                            <Link className='nav-link active' aria-current="page" to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                            <Link className='nav-link active' aria-current="page" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                            <Link className='nav-link active' aria-current="page" to="/support">Support</Link>
                            </li>                            
                        </ul>                     
                    </div>
                </div>
            </nav>  
    );
}
