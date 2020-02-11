import React,{useState, useEffect} from 'react';
import Tablalista from '../tablalista/tablalista'
import './listadeproductos.scss';

const Listadeproductos = props =>{
 
    const[maindata,setMaindata] = useState([{
        id: 0,
        name: "Pijama",
        precio: "40.00"
    }]);
    
    const agregarLista = () =>{
        
    let inputcont = document.querySelector("#inputprincipal").value;    
    inputcont = inputcont.split(",");

    const nuevoelemento = {
             id: inputcont[0],
             name: inputcont[1],
             precio: inputcont[2],
         }

        setMaindata([...maindata, nuevoelemento]);
  
    }

    const eliminarLista = () =>{
        console.log("me ejecuto -eliminarLista");
        let inputcont = document.querySelector("#inputprincipal").value;    
        inputcont = inputcont.split(",");
        let targetid =  inputcont[0];
        setMaindata(maindata => maindata.filter(item => item.id !== targetid));
    
    }


     useEffect(() => {
        console.log("Se ejecuta useEffect");
    }, [maindata]);
    
        return(
    <div className="lista-contenedorgeneral">
        <div><input id="inputprincipal" type="text"></input>
        <button type="submit" onClick={agregarLista}>Agregar</button>
        <button type="submit">Modificar</button>
        <button type="submit" onClick={eliminarLista}>Eliminar</button></div>
        <Tablalista maindata={maindata}></Tablalista>
    </div>
        );
    } 

export default Listadeproductos;
