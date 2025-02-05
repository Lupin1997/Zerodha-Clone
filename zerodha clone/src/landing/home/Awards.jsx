export default function Awards() {
    return (
        <div className="container mt-5 mb-3">
            <div className="row align-items-center">
                <div className="col-md-6 text-center">
                    <img 
                        src="https://zerodha.com/static/images/index-education.svg" 
                        alt="Education Icon" 
                        className="mb-5" 
                        style={{ width: "90%" }}
                    />
                </div>

                <div className="col-md-6 ">
                    <div className=" mb-4">
                        <h2 style={{color:"light-grey"}}>Largest Stock Broker in India</h2>
                        <p className="fs-5">2+ million Zerodha clients contribute to over 15% in the economy.</p>
                    </div>
                    
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>

                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="https://zerodha.com/static/images/press-logos.png" alt="" style={{width:"90%"}} />

                </div>
            </div>
        </div>
    );
}
