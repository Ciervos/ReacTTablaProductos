import React,{useState, useEffect} from 'react';
import Tablalista from '../tablalista/tablalista'
import './listadeproductos.scss';

const Listadeproductos = props =>{
 
    const[maindata,setMaindata] = useState([{
        id: 0,
        name: "Pijama",
        precio: "40.00"
    }]);
    
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [precio, setPrecio] = useState();

    const getId = event =>{
        setId(event.target.value);
    }
    const getName = event =>{
        setName(event.target.value);
    }

    const getPrecio = event =>{
        setPrecio(event.target.value);
    }

    const agregarLista = () =>{
        
    /*let inputcont = document.querySelector("#inputprincipal").value;    
    inputcont = inputcont.split(",");

    const nuevoelemento = {
             id: inputcont[0],
             name: inputcont[1],
             precio: inputcont[2],
         }*/
     
     const nuevoElemento = {
         id,
         name,
         precio,
     }    

        setMaindata([...maindata, nuevoElemento]);
  
    }

    const eliminarLista = () =>{
        console.log("me ejecuto -eliminarLista");
        /*let inputcont = document.querySelector("#inputprincipal").value;    
        inputcont = inputcont.split(",");
        let targetid =  inputcont[0];*/
        let targetid = id;
        let targetname = name;
        let targetprecio = precio;
        setMaindata(maindata => maindata.filter(item => item.id !== targetid));
        /*setMaindata(maindata => maindata.filter(item => item.name !== targetname));
        setMaindata(maindata => maindata.filter(item => item.precio !== targetprecio));*/  
    }


     useEffect(() => {
        console.log("Se ejecuta useEffect");
    }, [maindata]);
    
        return(
    <div className="lista-contenedorgeneral">
        <div><div className="input-contenedor"><input id="inputprincipal" onChange={getId} type="text" placeholder="ID"></input>
        <input id="inputprincipal" type="text" onChange={getName} placeholder="Nombre"></input>
        <input id="inputprincipal" type="text" onChange={getPrecio} placeholder="Precio"></input></div>
        <button type="submit" onClick={agregarLista}>Agregar</button>
        <button type="submit">Modificar</button>
        <button type="submit" onClick={eliminarLista}>Eliminar</button></div>
        <Tablalista maindata={maindata}></Tablalista>
    </div>
        );
    } 

export default Listadeproductos;
