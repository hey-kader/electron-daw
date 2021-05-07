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

            var username = document.getElementById("username").value
            var password = document.getElementById("password").value
            
            const sql = "select * from users where " + "username="+ "\'"+username+"\'" + " and password="+"\'"+password+"\'"+";" 
                
            
            connection.query(sql, function (err, result) {
                
                if (err) throw err
                if (result.length == 0) {
                    alert ("invalid login")
                }    
                else {
                    alert ('hey '+username+'!')
                }
                 
        
            })
        })
        
    }


    return (
        <div id="wrapper-login">
      	    <div id="login-form-wrapper">
                <form action="#">
                    <table>
                    <tr>
                        <td>
                        <label for="username">Username: </label>
                        </td>
                        <td>
                        <input type="text" id="username" name="email" required />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label for="password">Password: </label>
                        </td>
                        <td>
                        <input type="password" id="password" name="username" required />
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

