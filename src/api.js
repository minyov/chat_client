let ws = null;

export const connect = () => {
  ws = new WebSocket("ws://localhost:8080/websocket");
  console.log(ws);
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

