import { useState } from "react"
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
import {AddCategory,GifGrid} from './components'
// utilizando esta forma podemos resumir las importaciones, ya que creamos un index, el cual los contiene a todos
// y al ser llamado index no hace falta marcarlo en la ruta, ya que siempre que ingresemos a esa carpeta por defecto va a buscar el archivo index en caso de no identificarlo
// esto se le llama archivo de barril, y es util en caso de tener muchos componentes, o archivos los cuales debo importar

function GifExpertApp() {

    const [categories, setCategories] = useState([ 'One Punch']);

    // // el setCategories es lo que nosotros debemos llamar cuando queremos cambiar las categorias
    // const onAddCategory = () => {
    //     // con ... hago una copia y al final agrego lo siguiente
    //     setCategories(['Dinosaurios',...categories]); // de esta forma cambiamos el orden, y aparecera mas arriba el nuevo elemento, empujando los anteriores
    //     // setCategories([...categories,'Dinosaurios']);
    //     // setCategories( cat => [ ...cat, 'Dinosaurios']); // otra forma de hacer lo mismo
    // } // primera forma

    const onAddCategory = ( newCategory ) => {

        // de esta manera podriamos validar si el newCategory se encuentra en las categorias, significa que esta repetido, y corta la funcion asi no se agrega
        if( categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }


  return (

    <>
        <h1>Gif Expert App</h1>

        <AddCategory 
            // primera forma de hacerlo
            // setCategories= {setCategories}

            // usualmente cuando lleva el prefijo on es porque estan emitiendo algo, un evento
            onNewCategory = { event => onAddCategory(event)}
        />

        {/* <ol> */}

        {categories.map( category => (

                <GifGrid 
                    category={category} 
                    key={category}/>
                // es necesario darle una key ya que sino nos dara error
                // <div key={category}>
                //     <h3>{category}</h3>
                //     <li >{category}</li>
                // </div>
            ))
        }
        {/* </ol> */}
    </>

    )
}

export default GifExpertApp