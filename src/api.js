import { Platform } from 'react-native';

let ws = null;

export const connect = (userName) => {
  ws = new WebSocket(Platform.OS === 'ios' ? "ws://10.0.1.2:8080/websocket" : "ws://10.0.1.2:8080/websocket");
  
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
    const response = await fetch("http://10.0.1.2:8080/api/getFriends/" + name);

    const json = await response.json();

    callback(json);
  } catch (err) {
    console.log(err);
  }
}

export const getChatMessages = async (senderName, receiverName, callback) => {
  try {
    const response = await fetch(
      "http://10.0.1.2:8080/api/getMessages?senderName=" 
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
    const response = await fetch(
      "http://10.0.1.2:8080/api/login?userName=" 
      + userName);

    const json = await response.json();
    console.log(json)
    callback(json);
  } catch (err) {
    console.log(err);
  }
}
