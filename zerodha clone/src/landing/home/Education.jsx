export default function Education() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                    <img 
                        src="https://zerodha.com/static/images/index-education.svg" 
                        alt="Education Icon" 
                        style={{ width: "75%" }} 
                        className="  img-fluid mb-5 "
                    />
                </div>
                

                <div className="col-12 col-md-6 ">
                    <h2 style={{color: 'grey'}} className="mb-3 ">Free and Open Market Education</h2>
                    <p>
                        Varsity, the largest online stock market education book in the world covering 
                        everything from the basics to advanced trading.
                    </p>
                    <a href="#" className="btn btn-link text-decoration-none mb-3">Varsity →</a>

                    <p>
                        TradingQ&A, the most active trading and investment community in India for all 
                        your market-related queries.
                    </p>
                    <a href="#" className="btn btn-link text-decoration-none">Trading Q&A →</a>
                    
                </div>
            </div>
        </div>
    );
}
