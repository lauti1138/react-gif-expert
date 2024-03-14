/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState } from "react"


// export const AddCategory = ({setCategories}) =>  { // primer metodo, recibiendo esta propiedad
    export const AddCategory = ({onNewCategory}) =>  {

    const [inputValue, setInputValue] = useState('');

    // const onInputChange = (event) => {
    //     setInputValue(event.target.value);
    // }
    // lo desestructuramos para no repetir event
    const onInputChange = ( {target} ) => {
        setInputValue(target.value);
    }

    // Esta funcion la utilizamos para impedir que al apretar enter, o enviar el formulario, se reinicie la pagina y perdamos la informacion
    const onSubmit = (event) => {
        event.preventDefault();

        // con esto damos una validacion, la cual en caso de tener 0 o 1 caracter no acepta el input
        if( inputValue.trim().length <= 1) return;


        // con esto podemos agregar el valor que se encuentra en el input pero antes, debemos enviar por parametro la prop que mandamos por el padre del componente
        // esto es del primer metodo
        // setCategories( categories => [ inputValue, ...categories ]);

        // segundo metodo
        onNewCategory( inputValue.trim() );

        // reiniciamos el input
        setInputValue('');
    }


  return (
        <>
        {/* Lo ponemos dentro de un form al input, ya que queremos tener el evento onSubmit, el cual lo contienen los form */}
        {/* <form onSubmit={ (event) => onSubmit( event )}> */}
        <form onSubmit={ onSubmit}>
            <input 
                //Parecen atributos html, pero son propertys
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                // onChange={ (event) => onInputChange(event) }
                // estoy mandando una funcion, cuyo primer argumento es el argumento que estoy mandando a la funcion que quiero ejecutar, y puedo obviarlo mandando la referencia de la funcion
                onChange={ onInputChange }
            />
            {/* <button>Agregar</button> */}
        </form>
        </>
    )
}
