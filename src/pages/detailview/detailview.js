import React, { Component } from "react";
import Modal from "../../components/modal/modal";

import "./detailview.css";

class detailview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {},
      loading: true,
      isOpen: false,
    };
  }

  async componentDidMount() {
    const url =
      "https://www.superheroapi.com/api.php/10218834518192496/search/all";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[1], loading: false });
    console.log(data.results[0]);
  }

  onClose = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }
    return (
      <div className='card' style={{ width: "400px" }}>
        <div className='image-wrapper'>
          <img
            className='card-img-top'
            src={this.state.person.image.url}
            alt='card-img-top'
            style={{}}
          />
        </div>
        <h2> {this.state.person.name}</h2>
        <div className='button-container' onClick={this.onClose}>
          <button className='button hover'>see more</button>
          <Modal className='modal' show={this.state.isOpen}>
            <div className='card-columns'>
              <div className='card bg-primary'>
                <div className='card-header'>
                  <b>Appearance</b>
                </div>
                <div className='card-body text-center'>
                  <p className='card-text'>
                    {this.state.person.appearance.gender}
                    <br />
                    {this.state.person.appearance.height}
                    <br />
                    {this.state.person.appearance.race}
                    <br />
                    {this.state.person.appearance.weight}
                  </p>
                </div>
              </div>
              <div className='card bg-warning'>
                <div className='card-header'>
                  <b>Biography</b>
                </div>
                <div className='card-body text-center'>
                  <p className='card-text'>
                    {this.state.person.biography.aliases}
                    <br />
                    {this.state.person.biography.alignment}
                    <br />
                    {this.state.person.biography["alter-egos"]}
                    <br />
                    {this.state.person.biography["first-appearance"]}
                    <br />
                    {this.state.person.biography["full-name"]}
                    <br />
                    {this.state.person.biography["place-of-birth"]}
                    <br />
                    {this.state.person.biography.publisher}
                  </p>
                </div>
              </div>
              <div className='card bg-success'>
                <div className='card-header'>
                  <b>PowerStats</b>
                </div>
                <div className='card-body text-center'>
                  <p className='card-text'>
                    {this.state.person.powerstats.combat}
                    <br />
                    {this.state.person.powerstats.durability}
                    <br />
                    {this.state.person.powerstats.intelligence}
                    <br />
                    {this.state.person.powerstats.power}
                    <br />
                    {this.state.person.powerstats.speed}
                    <br />
                    {this.state.person.biography.strength}
                  </p>
                </div>
              </div>
              <div className='card bg-danger'>
                <div className='card-header'>
                  <b>Connections</b>
                </div>
                <div className='card-body text-center'>
                  <p className='card-text'>
                    {this.state.person.connections["place-of-birth"]}
                    <br />
                    {this.state.person.connections.relatives}
                  </p>
                </div>
              </div>
              <div className='card bg-dark'>
                <div className='card-header'>
                  <b>Work</b>
                </div>
                <div className='card-body text-center'>
                  <p className='card-text'>
                    {this.state.person.work.base}
                    <br />
                    {this.state.person.work.occupation}
                  </p>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default detailview;
