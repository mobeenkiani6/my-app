import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar1(props) {
  const handleModeChange = (event) => {
    props.toggleMode(event.target.value);
  };

  return (
    <nav className={`navbar navbar-expand-lg mb-3 navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li> */}
          </ul>
          <div className="form-check form-check-inline text-primary">
            <input className="form-check-input" type="radio" name="mode" id="darkMode" value="dark" onChange={handleModeChange} />
            <label className="form-check-label" htmlFor="darkMode">Dark</label>
          </div>
          <div className="form-check form-check-inline text-primary">
            <input className="form-check-input" type="radio" name="mode" id="redMode" value="danger" onChange={handleModeChange} />
            <label className="form-check-label" htmlFor="redMode">Red</label>
          </div>
          <div className="form-check form-check-inline text-primary">
            <input className="form-check-input" type="radio" name="mode" id="greenMode" value="success" onChange={handleModeChange} />
            <label className="form-check-label" htmlFor="greenMode">Green</label>
          </div>
          <div className="form-check form-check-inline text-primary">
            <input className="form-check-input" type="radio" name="mode" id="lightMode" value="light" onChange={handleModeChange} defaultChecked />
            <label className="form-check-label" htmlFor="lightMode">Light</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar1.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};
