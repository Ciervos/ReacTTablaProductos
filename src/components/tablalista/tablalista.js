import React,{useState, useEffect} from 'react';
import './tablalista.scss';
import '../listadeproductos/listadeproductos';

const Tablalista = ({maindata, ...props}) =>{
   
        return(
    <div className="tabla-contenedorgeneral">
        <table>
          <thead>
        <tr className="tabla-columnacabeza">
          <th>Id</th>
          <th className="casillaproducto">Producto</th>
          <th>Precio</th>
        </tr>
        </thead>
      
        {maindata.map(item=>{
          return(
          <tr key={item.id}>
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