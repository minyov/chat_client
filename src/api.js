import { Platform } from 'react-native';

const javaPath = 'http://localhost:8080/api';
const wsPath = 'ws://localhost:8080/websocket';
const nodePath = 'http://localhost:8080/subscribe';

let ws = null;

export const connect = (userName) => {
  ws = new WebSocket(wsPath);
  
  ws.onopen = (e) => {
    ws.send(userName);
  }
}

export const close = () => {
  ws.close();
}

export const onError = (callback) => {
  ws.onerror = (e) => {
    callback(e);
  }
}

export const onMessage = (callback) => {
  ws.onmessage = (e) => {
    callback(e);
  }
}

export const sendMessage = (message) => {
  ws.send(message);
}

export const getFriendsOfUser = async (name, callback) => {
  try {
    const response = await fetch(`${javaPath}/getFriends/` + name);

    const json = await response.json();

    callback(json);
  } catch (err) {
    console.log(err);
  }
}

export const getChatMessages = async (senderName, receiverName, callback) => {
  try {
    const response = await fetch(
      `${javaPath}/getMessages?senderName=` 
      + senderName 
      + "&receiverName=" 
      + receiverName);

    const json = await response.json();
    
    callback(json);
  } catch (err) {
    console.log(err);
  }
}

export const auth = async (userName, callback) => {
  try {
    const response = await fetch(`${javaPath}/login?userName=` + userName);
    const json = await response.json();
    
    callback(json);
  } catch (err) {
    console.log(err);
  }
}

/**
 * 
 * @param {
 *  name (username)
 *  email
 *  password
 * } body 
 * @param {Bool} callback - true if okay, false if not
 */
export const signup = async (body, callback) => {
  try {
    const response = await fetch(`${javaPath}/signup`, {
      method: 'POST',
      body: JSON.stringify(body),
    });
    
    callback(response.status === 200);
  } catch (err) {
    console.log(err);
  }
}

/**
 * callback - true if okay, false if not
 */
export const subscribe = async (username, callback) => {
  try {
    const response = await fetch(nodePath, {
      method: 'POST',
      body: JSON.stringify({ username }),
    });
    
    callback(response.status === 200);
  } catch (err) {
    console.log(err);
  }
}
