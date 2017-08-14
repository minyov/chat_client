import { Platform } from 'react-native';

let ws = null;

export const connect = (userName) => {
  ws = new WebSocket(Platform.OS === 'ios' ? "ws://localhost:8080/websocket" : "ws://10.0.2.2:8080/websocket");

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

export const getUser = async (name, callback) => {
  try {
    const response = await fetch((Platform.OS === 'ios' ? "http://localhost:8080/api/getUser/minyov" : "http://10.0.2.2:8080/api/getUser/server"));

    const json = await response.json();

    callback(json);
  } catch (err) {
    console.log(err);
  }
}

export const getFriendsOfUser = async (name, callback) => {
  try {
    const response = await fetch((Platform.OS === 'ios' ? "http://localhost:8080/api/getFriends/" : "http://10.0.2.2:8080/api/getFriends/") + name);

    const json = await response.json();

    callback(json);
  } catch (err) {
    console.log(err);
  }
}
