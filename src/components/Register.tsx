import React, {Component, useState, useEffect} from 'react';

export default function Register () {

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

            var email = document.getElementById("email-register").value
            var password = document.getElementById("password-register").value
            var password_confirm = document.getElementById("password-confirm").value

            if (password != password_confirm) {
                alert('passwords dont match')
                alert(password)
                alert(password_confirm)
                password = 
                password_confirm = ''
            }
            else {
            
                const sql = "insert into users values("+"\'"+email+"\'"+","+"\'"+password+"\');" 
                    
                
                connection.query(sql, function (err, result) {
                    
                    if (err) throw err
                    if (result.length == 0) alert('nope')
                    else alert('welcome '+email+"!")
                     
            
                })
            }
        })
        
    }


    return (
        <div id="wrapper-register">
            <h1>Register</h1>
      	    <div id="register-form-wrapper">
                <form action="#">
                    <table>
                    <tr>
                        <td>
                        <label for="email">Username: </label>
                        </td>
                        <td>
                        <input type="email" id="email-register" name="email" required />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label for="password">Password: </label>
                        </td>
                        <td>
                        <input type="password" id="password-register" required />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label for="password-confirm">Confirm: </label>
                        </td>
                        <td>
                        <input type="password" id="password-confirm" required />
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

