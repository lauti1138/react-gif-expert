/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

// nunca debemos dejar funciones que no hagan falta en nuestro functional component
// ya que cada vez que esta funcion se vuelva a renderizar va a volver a ejecutar nuestra funcion,
// por consecuencia va a volver a realizar nuestra peticion http


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category ); 

    return (

    <>
        <h3>{category}</h3>
        {
            // segunda manera mas resumida aun
            isLoading && ( <h2>Cargando...</h2> )
            //primera forma
            // isLoading
            // ? ( <h2>Cargando...</h2> )
            // : null
            // esto es un operador ternario, es decir resumir el if / else
        }

        <div className="card-grid">
            {
                images.map( (image )=> (
                    <GifItem 
                    key={image.id}
                    {...image}
                    // utilizando el operador spread como arriba, podemos exparcir todas las props que tengamos, esto es muy util, ya que en caso de tener 100 propiedades, podriamos tomarlas todas, sin necesidad de definirlas 
                    />
                ))
            }
        </div>


    </>

    )
}
