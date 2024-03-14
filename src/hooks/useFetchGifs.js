/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
    // el useEffect es un hook de react que sirve para disparar efectos secundarios
    // los efectos secundarios son algun proceso que queramos ejecutar cuando algo ocurra
    // por ejemplo cuando el counter cambia yo quiero disparar un efecto
    // dentro vamos a tener 2 argumentos( el efecto lo cual es un callback), y luego tenemos una lista de dependencias(son las condiciones por las cuales nosotros queremos volver a ejecutar ese callback)
    useEffect( () => {
        // getGifs(category);
        getImages();
    },[])
    //el segundo dice ser opcional, pero es practicamente necesario
    //si dejamos las dependencias vacio [] significa que se va a ejecutar la primera vez que se crea, y se construye mi componente 


    return {
        images,
        isLoading
    }

}
