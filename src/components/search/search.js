import React, { Component } from "react";
import axios from "axios";
import Loader from "../assets/loader.gif";
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
    };
    this.cancel = "";
  }

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
        <div className='heros-container'>
          {heros.map((hero) => {
            return (
              <a key={hero.id} href={hero.image.url} className='heros-items'>
                <h6 className='image-name'>{hero.name}</h6>
                <div className='image-wrapper'>
                  <img className='image' src={hero.image.url} alt={hero} />
                </div>
              </a>
            );
          })}
        </div>
      );
    }
  };

  render() {
    const { query, loading, message } = this.state;

    return (
      <div className='container'>
        <h2 className='heading'>Hero Search</h2>

        <label className='search-label' htmlFor='search-input'>
          <input
            type='text'
            value={query}
            id='search-input'
            placeholder='Search...'
            onChange={this.handleOnInputChange}
          />
          <i className='fa fa-search search-icon' />
        </label>

        {message && <p className='message'>{message}</p>}

        <img
          src={Loader}
          className={`search-loading ${loading ? "show" : "hide"}`}
          alt='loader'
        />

        {this.renderSearchResults()}
      </div>
    );
  }
}

export default search;
