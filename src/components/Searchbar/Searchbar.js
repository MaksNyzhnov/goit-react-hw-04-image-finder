import { useState } from 'react';

const Searchbar = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    onSearch(value.trim());
  };

  const onInputChange = e => {
    setValue(e.target.value);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={onInputChange}
        />
      </form>
    </header>
  );
};

// class Searchbar extends React.Component {
//   state = {
//     value: '',
//   };

//   onSubmit = event => {
//     event.preventDefault();
//     onSearch(this.state.value.trim());
//   };
//   onInputChange = e => {
//     this.setState({ value: e.target.value });
//   };
//   render() {
//     return (
//       <header className="Searchbar">
//         <form className="SearchForm" onSubmit={this.onSubmit}>
//           <button type="submit" className="SearchForm-button">
//             <span className="SearchForm-button-label">Search</span>
//           </button>

//           <input
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.value}
//             onChange={this.onInputChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

export default Searchbar;
