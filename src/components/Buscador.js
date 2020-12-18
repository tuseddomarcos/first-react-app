import React, { Component } from 'react'

class Buscador extends Component {
  searchRef = React.createRef();

  handleSerach = (e) => {
    e.preventDefault();
    this.props.buscarDatos(this.searchRef.current.value);
  }
  render() {
    return (
      <form onSubmit={this.handleSerach}>
        <div className="row">
          <div className="input-group input-group-lg mb-2">
            <input ref={this.searchRef} type="text" className="form-control" placeholder="Introducir Palabra. Ejemplo: Cafe" name="search" />
          </div>
          <div className="input-group input-group-lg">
            <button type="submit" className="btn btn-info btn-lg">
              <span className="glyphicon glyphicon-search"></span> Buscar</button>
          </div>
        </div>
      </form>
    );
  }
}
export default Buscador;