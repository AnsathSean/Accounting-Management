/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { LoginAPICall, saveLoggedInUser, storeToken } from '../Service/AuthService';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function handleLoginForm(e) {
    e.preventDefault();

    LoginAPICall(username, password)
      .then((response) => {
        const token = 'Basic ' + window.btoa(username + ':' + password);
        console.log('token:' + token);
        storeToken(token);
        saveLoggedInUser(username);
        navigate('/list-account');
        window.location.reload(false); // 成功後重載頁面
      })
      .catch((error) => {
        console.log(error);
        // 如果登入失敗，顯示彈跳視窗
        window.alert('Login failed. Please check your username and password.');
      });
  }

  return (
    <div className='container'>
      <br />
      <br />
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-header'>
              <h2 className='text-center'>Login</h2>
            </div>
            <div className='card-body'>
              <form>
                <div className='row mb-3'>
                  <label className='col-md-3 control-label'>Username</label>
                  <div className='col-md-9'>
                    <input
                      type='text'
                      name='username'
                      className='form-control'
                      placeholder='Enter username'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className='row mb-3'>
                  <label className='col-md-3 control-label'>Password</label>
                  <div className='col-md-9'>
                    <input
                      type='password'
                      name='password'
                      className='form-control'
                      placeholder='Enter password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div className='form-group mb-3'>
                  <button className='btn btn-primary' onClick={(e) => handleLoginForm(e)}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
