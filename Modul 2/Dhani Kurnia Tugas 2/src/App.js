import React from 'react';
import logo from './logo.svg';
import PP from './dhani.jpg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function Biodata() {
  return (
    <center>
      <div>
        <img src={PP} alt="logo" className= "roudedCircle"/>
      </div>
      <br/>
      <br/>
      <div>
        <tr>
          <td><h5>Nama</h5></td><td><h5>:</h5></td><td><h5>Dhani Kurnia Dharma Prasetya</h5></td>
        </tr>
        <tr>
          <td><h5>Nim</h5></td><td><h5>:</h5></td><td><h5>1741720118</h5></td>
        </tr>
        <tr>
          <td><h5>Kelas</h5></td><td><h5>:</h5></td><td><h5>TI-3C</h5></td>
        </tr>
        <tr>
          <td><h5>Jurusan</h5></td><td><h5>:</h5></td><td><h5>Teknologi Informasi</h5></td>
        </tr>
        <tr>
          <td><h5>Prodi</h5></td><td><h5>:</h5></td><td><h5>D-IV Teknik Informatika</h5></td>
        </tr>
        <tr>
          <td><h5>Alamat</h5></td><td><h5>:</h5></td><td><h5>Jl. Simping No 2 Gg 2 Kota Blitar</h5></td>
        </tr>
      </div>
    </center>
  )
}

export default Biodata;
