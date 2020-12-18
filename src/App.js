import React, { Component,useState }from 'react'

import axios from 'axios';

import Buscador from './components/Buscador';
import ListImages from './components/ListImages';
import Loading from './components/Loading';


class App extends Component {
  constructor(){
    super()
  }
  
  state = {
    dataSearch: '',
    images: [],
    pagina: '',
    isLoading: false,
    msgWarning: '',
  }


  previousPage = () => {
    let pagina = this.state.pagina

    if (pagina === 1) return null;
    pagina -= 1;
    this.setState({ pagina: pagina, isLoading : true }, () => { this.searchUrlApi() });
    window.scrollTo(0, 0)

  }

  nextPage = () => {
    let pagina = this.state.pagina

    pagina += 1;
    this.setState({ pagina: pagina, isLoading : true }, () => { this.searchUrlApi() });
    window.scrollTo(0, 0);

  }

  searchUrlApi = () => {
    this.setState({isLoading : true});
    const url = "https://pixabay.com/api/?key=19446160-514384b97dc5c7375ba5597d0&q=" + this.state.dataSerach + "&per_page=25&page=" + this.state.pagina;
    axios.get(url).then(response => {
      if(response.data.hits.length === 0){
        if(this.state.pagina > 1){
          alert("No se encontraron mas registros");
        }else{
          alert("No se encontraron registros");
        }
        this.setState({ images: []});
      } else{
        this.setState({ images: response.data.hits});
      }
      this.setState({ isLoading: false });
    });

  }

  searchData = (dataSerach) => {
    this.setState({
      dataSerach: dataSerach,
      pagina: 1
    }, () => {
      this.searchUrlApi();
    })
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron jumbotron-fluid">
          <p className="h2 text-center"><strong>Buscador de Imagenes </strong></p>
          <Buscador
            buscarDatos={this.searchData} />
        </div>
        <div className="row justify-content-center">
          <ListImages
            listImagenes={this.state.images}
            nextPage={this.nextPage}
            previousPage={this.previousPage}
          />
          
        </div>
        <div justify-content-center>
          {this.state.isLoading && <Loading />}
        </div>
      </div>
    );
  }
}
export default App;