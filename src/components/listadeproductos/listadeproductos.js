import React,{useState, useEffect} from 'react';
import Tablalista from '../tablalista/tablalista'
import './listadeproductos.scss';

const Listadeproductos = props =>{
 
    const[maindata,setMaindata] = useState([]);
    
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

    const modLista = () =>{
       let reemplazo = {
        id,
        name,
        precio,
    }    
    
    const lista = [...maindata];
    const index = lista.findIndex(maindata => maindata.id == id);
    lista.splice(index,1,reemplazo);

     setMaindata(lista)
    }


     /*useEffect(() => {
        console.log("Se ejecuta useEffect");
    }, [maindata]);*/
    
        return(
    <div className="lista-contenedorgeneral">
        <div><div className="input-contenedor"><input className="inputprincipal" onChange={getId} type="text" placeholder="ID"></input>
        <input className="inputprincipal" type="text" onChange={getName} placeholder="Nombre"></input>
        <input className="inputprincipal" type="text" onChange={getPrecio} placeholder="Precio"></input></div>
        <button id="add" type="submit" onClick={agregarLista}>Agregar</button>
        <button id="edit" type="submit" onClick={modLista}>Modificar</button>
        <button id="delete"type="submit" onClick={eliminarLista}>Eliminar</button></div>
        <Tablalista maindata={maindata}></Tablalista>
    </div>
        );
    } 

export default Listadeproductos;
