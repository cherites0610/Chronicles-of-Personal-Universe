import request from '../axios/index';

export const login = (userName, passWord) => request.post('/login', { userName: userName, passWord: passWord })

export const register = (userName, passWord) => request.post('/register', { userName: userName, passWord: passWord })