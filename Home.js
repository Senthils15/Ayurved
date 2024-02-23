import React from "react";
import "../css/Home.css";
import home from "../Assets/home.png";
import bannerBtm from "../Assets/banner-btm.png";
import knowledgeRight from "../Assets/knowledge-right.png";
import knowledgeLeft from "../Assets/knowledge-left.png";
import homeTwo from "../Assets/home-two.png";
import logo from "../Assets/logo2.png";
import homeLeaf from "../Assets/about-btn.png";
import { Link } from "react-router-dom";
function Home() {
  // window.scrollTo(0, 0);

  return (
    <div className="home">
      <div className="home-top">
        <img className="img-one" src={home}></img>
      </div>
      <img className="banner-btm-home" src={bannerBtm}></img>
      <div className="knowledge-section">
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <h2 className="title-one">Knowledge of</h2>
          <h3 className="title-two">Life</h3>
        </div>
        <div className="knowledge-flex">
          <div className="knowledge-left">
            <h3 className="knowledge-title">Natural System</h3>
            <p>
              Ayurveda (knowledge of life ), a natural system of medicine
              originated in India more than 3000 years ago.Ayurveda encourages
              certain lifestyle interventions and natural therapies regain
              balance between the body, mins, spirit and the environment.
            </p>
          </div>
          <div className="knowledge-right">
            <img src={knowledgeRight}></img>
          </div>
        </div>
        <div className="knowledge-flex">
          <div className="knowledge-right">
            <img src={knowledgeLeft}></img>
          </div>
          <div className="knowledge-left-two">
            <h3 className="knowledge-title">Traditional Holistic Solutions</h3>
            <p>
              We provide natural way of traditional holistic solutions
              (Siddha,Ayurveda,Yoga) which starts with finding the root cause
              and address issues in all bodily systems. Goals of treatment aid
              the person by eliminating impurities, reducing symptoms,
              increasing harmony in life.
            </p>
            <p>
              We focus individuals based on overall wellbeing by providing
              special diet,herbal remedies, lifestyle changes, massage therapy
              ,yoga,meditation.We provide Dosha/Prakriti pulse reading
              assessment.
            </p>
          </div>
        </div>
      </div>
      <div className="read-more">
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            float: "right",
            cursor: "pointer",
          }}
        >
          <h2 className="title-one">Read</h2>
          <h3 className="title-two">More . . .</h3>
        </div>
      </div>
      <div className="our-remedies"></div>
      <div className="home-section-two">
        <img className="home-main-img" src={homeTwo}></img>
        <img className="home-main-logo" src={logo}></img>
      </div>
      <div className="home-about-section">
        <div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <h2 className="title-one">About</h2>
            <h3 className="title-two">Us</h3>
          </div>
          <p>
            Dr. Deepika Ravisankar*, BSMS, PG Diploma in yoga, Diagnostic
            medical sonography(canada). Varma and pancha karma specialist,
            Expert in panchakarma massage for head ache, joint pain, back pain,
            neck pain, prenatal, postnatal mommy massage and newborn massage.
          </p>
        </div>
      </div>
      <div className="home-read-more-btn">
        <Link to="/about">
          <img src={homeLeaf} alt="Home Leaf" />
        </Link>
        <p className="read">Read More</p>
      </div>
    </div>
  );
}
export default Home;
