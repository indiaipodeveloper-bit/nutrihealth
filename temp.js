const buffer = new ArrayBuffer(16); 
const view = new Uint8Array(buffer);
view[0] = 255;
view[1] = 128;

console.log(view);