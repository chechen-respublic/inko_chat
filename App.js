let socket = new WebSocket("ws://http://913e-188-0-188-195.ngrok.io");

socket.onopen = () => {
  let h3_ws_status = document.querySelector('.h3_ws_status')
  h3_ws_status.innerHTML = 'ONLINE'
  
}

socket.onclose = () => {
  let h3_ws_status = document.querySelector('.h3_ws_status')
  h3_ws_status.innerHTML = 'DISCONNECTED'
  }

function send_msg(){
  
      let msg_inp = document.querySelector('.msg_inp')
        
      socket.send(msg_inp.value)    
        
      }

        socket.onmessage = (msg) => {
          let _msg = document.createElement('h4')
          _msg.innerHTML = msg.data
          let _chat = document.querySelector('._chat')
          _chat.appendChild(_msg)
          let status_send = document.querySelector('.status_send')
          if(msg.data === 'Печатает...'){status_send.innerHTML = 'Печатает...'}else{status_send.innerHTML = ''}

          socket.close
}

        
