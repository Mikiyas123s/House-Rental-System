import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";

import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import Footer from "../components/Footer";

import StyledHero from "../components/StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;


  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> No such Home could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Homes
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      size,
      price,
      extras,
      images
    } = room;
    const [...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
            Back to Homes
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
          <button  className='text-base bg-black text-white w-40 py-3 mt-6 hover:bg-gray-800 duration-300'>
Proceed to checkout And Rent
</button>
        </section>
      
        <Footer></Footer>
      </>
    );
  }
}
