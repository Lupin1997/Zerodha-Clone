function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="https://zerodha.com/static/images/nithin-kamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Nithin Kamath"
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="https://zerodha.com/static/images/Nikhil.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Nitin"
          />
          <h4 className="mt-5">Nikhil Kamath</h4>
          <h6>Founder, CFO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Nikhil is an astute and experienced investor, and he heads financial
            planning at Zerodha. An avid reader, he always appreciates a good
            game of chess.
          </p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
      <div className="row p-3 mt-5">
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="https://zerodha.com/static/images/Seema.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Seema"
          />
          <h4 className="mt-5">Seema Patil</h4>
          <h6>Director</h6>
        </div>
        <div className="col-6 p-3">
          <p>
          Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast
          </p>
          
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default Team;
