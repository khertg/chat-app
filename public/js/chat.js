const socket = io();

socket.on('countUpdated', (data) => {
  console.log(data);
});

document.querySelector('#increment').addEventListener('click', () => {
  console.log('clcik');
  socket.emit('increment');
});
