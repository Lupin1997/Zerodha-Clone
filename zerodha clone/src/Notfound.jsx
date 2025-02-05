import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
    <div className="container p-5 mb-5">
            <div className="row text-center">
                <h1 className="mt-3" style={{color:"grey"}}> 404 Not Found </h1>
                <p className="fs-5">Sorry, the page you are looking for is not available.</p>
                <button className="P-3 btn btn-primary fs-5 mb-3" style={{width:"20%", margin:"0 auto"  }}> <Link className='nav-link active' aria-current="page" to="/signup">Sign Up Now </Link> </button>
            </div>
        </div>
  )
}

export default Notfound
