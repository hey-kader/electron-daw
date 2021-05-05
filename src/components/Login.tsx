import React, {Component, useState, useEffect} from 'react';

export default function Login () {

    return (
	<div id="wrapper-login">
	    <h1>Login</h1>
	    <div id="login-form-wrapper">
                <form action="#">
                    <table>
                    <tr>
                        <td>
                        <label for="email">Email: </label>
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
                            <button>enter</button>
                        </td>
                    </tr>
                    </table>
                </form>
	    </div>
	</div>
    );

}

