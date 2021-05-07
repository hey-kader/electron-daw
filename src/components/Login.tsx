import React, {Component, useState, useEffect} from 'react';

export default function Login () {

    function connect () {
        
        const mysql = require('mysql');
       
        var connection = mysql.createConnection ({
            host: '66.85.133.188',
            user: 'kader',
            password: 'kader',
            database: 'electron',
            insecureAuth: true
        })
        
        connection.connect (function (err) {
            
            if (err) throw err
            console.log('it worked!') 

            var email = document.getElementById("email").value
            var password = document.getElementById("password").value
            
            const sql = "select * from users where " + "username="+ "\'"+email+"\'" + " and password="+"\'"+password+"\'"+";" 
                
            
            connection.query(sql, function (err, result) {
                
                if (err) throw err
                if (result.length == 0) {
                    alert ("invalid login")
                }    
                else {
                    alert ('hey '+email+'!')
                }
                 
        
            })
        })
        
    }


    return (
        <div id="wrapper-login">
            <h1>Login</h1>
      	    <div id="login-form-wrapper">
                <form action="#">
                    <table>
                    <tr>
                        <td>
                        <label for="email">Username: </label>
                        </td>
                        <td>
                        <input type="email" id="email" name="email" required />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label for="password">Password: </label>
                        </td>
                        <td>
                        <input type="password" id="password" name="email" required />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={connect}>enter</button>
                        </td>
                    </tr>
                    </table>
                </form>
            </div>
     	</div>
    );

}

