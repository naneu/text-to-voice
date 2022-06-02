import React from "react";

function Preview() {
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

          <div className="preview">
            <form>
              <label>write your text here</label>
              <textarea
                type="text"
                placeholder="write or copy paste some text ..."
              />
              <button className="preview-btn">preview</button>
            </form>
          </div>
      
        </div>
      </section>
    </div>
  );
}

export default Preview;
