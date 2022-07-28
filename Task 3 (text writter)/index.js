const text ="hey buddi how are you i hope u r fine !!!!!!"
var index=0
function showscreen(){
  document.body.innerText=text.slice(0,index)

  index++
  if(index >text.length){//0>15
    index=0 
  }
}
setInterval(showscreen,100)