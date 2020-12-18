import React, { Component } from 'react'

import Image from './Image';
import Pagination from './Pagination';

class ListImages extends Component {
    mostrarImagenes = () => {
        var imagenes = this.props.listImagenes
        if (imagenes.length === 0) return null;

        return (
            <React.Fragment>
            <div className = "col-12 p-5 row">
                {imagenes.map(imagen => (
                    <Image
                        key = {imagen.id}
                        imageLink = {imagen}
                    />
                ))}
            </div>
            <Pagination 
                nextPage = {this.props.nextPage}
                previousPage = {this.props.previousPage}/>
            </React.Fragment>
        )
    }
    render() {  
        return (
            <>
                {this.mostrarImagenes()}
            </>
        );
    }
}
export default ListImages;