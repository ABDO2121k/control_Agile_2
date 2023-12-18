

const button =document.getElementsById("click");
let counter=0;

button.addEventListener('click', function() {
    counter+=1
    alert("Button clicked! ",counter);
    console.log('Button clicked!');
  });
