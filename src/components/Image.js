import React from 'react'

const Image = (props) =>{

    const {downloads,previewURL,largeImageURL, likes,views,tags} = props.imageLink
    return(
        <div className = "col-12 col-sm-6 col-lg-3 mb4">
            <div className = "card">
              <img className="card-img-top" src = {previewURL} alt = {tags}/>
              <div className = "card-body">
                <p className = "card-text"> 
                 <span className="glyphicon glyphicon-heart"></span> {likes} Me gusta</p>
                <p className = "card-text">
                <span className="glyphicon glyphicon-save"></span> {downloads} Descargas</p>
                <p className = "card-text">
                <span className="glyphicon glyphicon-eye-open"></span> {views} Visitas</p>
                <a href = {largeImageURL} target = "_blank" className = "btn btn-primary btn-block">
                <span className="glyphicon glyphicon-fullscreen"></span>  Ver Imagen</a> 
              </div>
            </div>
        </div>
    )
}
export default Image