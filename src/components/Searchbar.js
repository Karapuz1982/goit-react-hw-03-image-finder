// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class Searchbar extends Component {
//   state = {
//     query: '',
//   };

//   handleChange = (event) => {
//     this.setState({ query: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.props.onSubmit(this.state.query);
//   };

//   render() {
//     return (
//       <header className="searchbar">
//         <form className="form" onSubmit={this.handleSubmit}>
//           <button type="submit" className="button">
//             <span className="button-label">Пошук</span>
//           </button>

//           <input
//             className="input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Шукати зображення та фотографії"
//             value={this.state.query}
//             onChange={this.handleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default Searchbar;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
                />
               ы
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
