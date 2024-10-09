import React, { useState } from "react";
import "../css/style.css";
import logo from "../assets/logo.svg";
import data from "../data.json";
import hamburger from "../assets/hamburger.svg";
import close from "../assets/close.svg";
import arrow from "../assets/arrow.svg";
import arrow_down from "../assets/arrow_down.svg";

const navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState("");

  return (
    <div className="container">
      <nav className="nav">
        <img src={logo} alt="logo" className="logo" />
        <ul className="nav-menu">
          <li className="nav-item nav_dashed">
            <div className="nav_hover">
              Putovanja <span>za sve generacije</span>
            </div>
            <ul className="dropdown">
              {Object.keys(data.putovanje_za_sve).map((categoryKey) => (
                <div key={categoryKey} className="category">
                  <h2>{categoryKey.replaceAll("_", " ")}</h2>{" "}
                  <ul className="category_ul">
                    {data.putovanje_za_sve[categoryKey].map((trip, index) => (
                      <li key={index} className="trip">
                        <h3>{trip.title}</h3>
                        <p>od {trip.startingPrice}€</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </li>
          <li className="nav-item nav_dashed">
            <div className="nav_hover">
              Putovanja <span>za mlade</span>{" "}
            </div>
            <ul className="dropdown">
              {Object.keys(data.putovanje_za_mlade).map((categoryKey) => (
                <div key={categoryKey} className="category">
                  <h2>{categoryKey.replaceAll("_", " ")}</h2>
                  <ul className="category_ul">
                    {data.putovanje_za_mlade[categoryKey].map((trip, index) => (
                      <li key={index} className="trip">
                        <h3>{trip.title}</h3>
                        <p>od {trip.startingPrice}€</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </li>
          <li className="nav-item">
            <div className="nav_hover">Leto 2025</div>
            <ul className="dropdown dropdown_leto">
              {Object.keys(data.leto_2025).map((categoryKey) => (
                <div key={categoryKey} className="category">
                  <h2>{categoryKey.replaceAll("_", " ")}</h2>
                  <ul className="category_ul">
                    {data.leto_2025[categoryKey].map((trip, index) => (
                      <li key={index} className="trip">
                        <h3>{trip.title}</h3>
                        <p>od {trip.startingPrice}€</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </li>
          <li className="nav-item">
            <div className="nav_hover">Hoteli</div>
            <ul className="dropdown dropdown_smaller">
              {Object.keys(data.hoteli).map((categoryKey) => (
                <div
                  key={categoryKey}
                  className={`category ${
                    categoryKey === "hoteli1"
                      ? "hotel1-class"
                      : categoryKey === "hoteli2"
                      ? "hotel2-class"
                      : ""
                  }`}
                >
                  <ul className="category_ul">
                    {data.hoteli[categoryKey].map((trip, index) => (
                      <li key={index} className="trip">
                        <h3>{trip.title}</h3>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </li>
          <li className="nav-item grey_bg">
            <div className="nav_hover">
              Poslovnice <span>Kontakti</span>
            </div>
            <ul className="dropdown dropdown_contact">
              <div>
                <h2>Radno vreme:</h2>
                <h5>Pon-Pet 10-19h, Sub 10-16h</h5>
                <p>
                  <strong>011 7450 444 /</strong> centrala <br></br> Dostupni
                  smo i na<br></br>
                  <span className="viber">Viber</span> i
                  <span className="whatsApp"> WhatsApp</span>
                </p>
                <strong>Balkanska 27, Beograd</strong>
              </div>
              <div className="contact_links">
                <a href="/">O nama</a>
                <a href="/">Kontakt</a>
                <a href="/">Provera duga</a>
              </div>
            </ul>
          </li>
        </ul>
        <div
          className="hamburger_menu"
          onClick={() => setIsMobile((prev) => !prev)}
        >
          {isMobile ? (
            <img src={close} alt="menu" />
          ) : (
            <img src={hamburger} alt="menu" />
          )}
        </div>
        {isMobile && (
          <div className="mobile_nav_dropdown">
            <div
              className="mobile_nav_dropdown_wrapper"
              onClick={() =>
                setToggleDropdown((prev) => (prev === "first" ? "" : "first"))
              }
            >
              <h3>Putovanja za sve generacije</h3>
              {toggleDropdown === "first" ? (
                <img src={arrow} alt="arrow" />
              ) : (
                <img src={arrow_down} alt="arrow" />
              )}
            </div>
            {toggleDropdown === "first" && (
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nostrum esse eius voluptatem, rem libero deserunt ducimus
                  rerum omnis aperiam provident illo assumenda tempora quibusdam
                  ipsa hic necessitatibus, error inventore. Laudantium?
                </p>
              </div>
            )}
            <div
              className="mobile_nav_dropdown_wrapper"
              onClick={() =>
                setToggleDropdown((prev) => (prev === "second" ? "" : "second"))
              }
            >
              <h3>Putovanja za mlade</h3>
              {toggleDropdown === "second" ? (
                <img src={arrow} alt="arrow" />
              ) : (
                <img src={arrow_down} alt="arrow" />
              )}{" "}
            </div>
            {toggleDropdown === "second" && (
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nostrum esse eius voluptatem, rem libero deserunt ducimus
                  rerum omnis aperiam provident illo assumenda tempora quibusdam
                  ipsa hic necessitatibus, error inventore. Laudantium?
                </p>
              </div>
            )}
            <div
              className="mobile_nav_dropdown_wrapper"
              onClick={() =>
                setToggleDropdown((prev) => (prev === "third" ? "" : "third"))
              }
            >
              <h3>Leto 2025</h3>
              {toggleDropdown === "third" ? (
                <img src={arrow} alt="arrow" />
              ) : (
                <img src={arrow_down} alt="arrow" />
              )}{" "}
            </div>
            {toggleDropdown === "third" && (
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nostrum esse eius voluptatem, rem libero deserunt ducimus
                  rerum omnis aperiam provident illo assumenda tempora quibusdam
                  ipsa hic necessitatibus, error inventore. Laudantium?
                </p>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default navbar;
