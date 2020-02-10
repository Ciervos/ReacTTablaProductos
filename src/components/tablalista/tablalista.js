import React,{useState, useEffect} from 'react';
import './tablalista.scss';
import '../listadeproductos/listadeproductos';

const Tablalista = ({maindata, ...props}) =>{
   
        return(
    <div className="tabla-contenedorgeneral">
        <table>
        <tr className="tabla-columnacabeza">
          <th>Id</th>
          <th>Producto</th>
          <th>Precio</th>
        </tr>
        
      
        {maindata.map(item=>{
          return(
          <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{`$${item.precio}`}</td>
          </tr>
          )
           })
       }
           
      </table>

    </div>
        );
    } 

export default Tablalista;