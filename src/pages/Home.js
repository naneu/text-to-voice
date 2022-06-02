import React from "react";

function Home() {
  return (
    <div>
      <section className="section">
        <div className="home">
          <div className="text">
            <h3>Text to speech software</h3>
            <p>
              An easy way to convert text to voice that’s fast and
              straightforward
            </p>
          </div>

          <div className="dropbox">
            <p>Drag and drop your file here</p>
            <p>Choose a file</p>
          </div>
          <div className="btn">
            <button className="convert">convert</button>
            <button className="download-btn">download</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
