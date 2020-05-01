import React, { Component } from "react";
import axios from "axios";
import Loader from "../assets/loader.gif";
import Modal from "../modal/modal";
import "./search.css";

class search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      heros: {},
      error: "",
      message: "",
      loading: false,
      IsOpen: false,
    };
    this.cancel = "";
  }

  onClose = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  /**  @param {String} query */

  fetchSearchResults = () => {
    const searchUrl = `https://www.superheroapi.com/api.php/10218834518192496/search/all`;

    if (this.cancel) {
      this.cancel.cancel();
    }

    this.cancel = axios.CancelToken.source();

    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        const resultNotFoundMsg = !res.data.results.length
          ? "There are no more search results. Please try a new search."
          : "";
        console.log(res.data);
        this.setState({
          heros: res.data.results,

          message: resultNotFoundMsg,
          loading: false,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: "Failed to fetch results.Please check network",
          });
        }
      });
  };

  handleOnInputChange = (event) => {
    event.preventDefault();
    const query = event.target.value;

    if (!query) {
      this.setState({
        query,
        heros: {},
        message: "",
      });
    } else {
      this.setState({ query, loading: true, message: "" }, () => {
        this.fetchSearchResults(1, query);
      });
    }
  };

  renderSearchResults = () => {
    const { heros } = this.state;

    if (Object.keys(heros).length && heros.length) {
      return (
        <div className='results-container'>
          {this.state.heros.map((hero, index) => {
            return (
              <div className='card' key={index} onClick={this.onClose}>
                <a href={hero.image.url} className='result-items'>
                  <h6 className='image-username'>{hero.name}</h6>
                  <div className='image-wrapper'>
                    <img className='image' src={hero.image.url} alt={hero} />
                  </div>
                </a>
                <button className='button hover'>
                  see more
                  <Modal show={this.state.isOpen}>
                    <div className='card-columns'>
                      <div className='card bg-primary'>
                        <div className='card-header'>
                          <b>Appearance</b>
                        </div>
                        <div className='card-body text-center'>
                          <p className='card-text'>
                            {hero.appearance.gender}
                            <br />
                            {hero.appearance.height}
                            <br />
                            {hero.appearance.race}
                            <br />
                            {hero.appearance.weight}
                          </p>
                        </div>
                      </div>
                      <div className='card bg-warning'>
                        <div className='card-header'>
                          <b>Biography</b>
                        </div>
                        <div className='card-body text-center'>
                          <p className='card-text'>
                            {hero.biography.aliases}
                            <br />
                            {hero.biography.alignment}
                            <br />
                            {hero.biography["alter-egos"]}
                            <br />
                            {hero.biography["first-appearance"]}
                            <br />
                            {hero.biography["full-name"]}
                            <br />
                            {hero.biography["place-of-birth"]}
                            <br />
                            {hero.biography.publisher}
                          </p>
                        </div>
                      </div>
                      <div className='card bg-success'>
                        <div className='card-header'>
                          <b>PowerStats</b>
                        </div>
                        <div className='card-body text-center'>
                          <p className='card-text'>
                            {hero.powerstats.combat}
                            <br />
                            {hero.powerstats.durability}
                            <br />
                            {hero.powerstats.intelligence}
                            <br />
                            {hero.powerstats.power}
                            <br />
                            {hero.powerstats.speed}
                            <br />
                            {hero.biography.strength}
                          </p>
                        </div>
                      </div>
                      <div className='card bg-danger'>
                        <div className='card-header'>
                          <b>Connections</b>
                        </div>
                        <div className='card-body text-center'>
                          <p className='card-text'>
                            {hero.connections["place-of-birth"]}
                            <br />
                            {hero.connections.relatives}
                          </p>
                        </div>
                      </div>
                      <div className='card bg-dark'>
                        <div className='card-header'>
                          <b>Work</b>
                        </div>
                        <div className='card-body text-center'>
                          <p className='card-text'>
                            {hero.work.base}
                            <br />
                            {hero.work.occupation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Modal>
                </button>
              </div>
            );
          })}
        </div>
      );
    }
  };

  render() {
    const { query, loading, message } = this.state;

    return (
      <div className='wrapper'>
        {/*Heading*/}
        <h1>Search Hero</h1>
        <form className='search-form'>
          {/*Search Input*/}
          <label className='search-label' htmlFor='search-input'>
            <input
              type='text'
              value={query}
              id='search-input'
              placeholder='Search...'
              onChange={this.handleOnInputChange}
            />
          </label>
        </form>

        {/*Error Message*/}
        {message && <p className='message'>{message}</p>}
        {/*Loader*/}
        <img
          src={Loader}
          className={`search-loading ${loading ? "show" : "hide"}`}
          alt='loader'
        />
        {/*Result*/}
        {this.renderSearchResults()}
      </div>
    );
  }
}

export default search;
