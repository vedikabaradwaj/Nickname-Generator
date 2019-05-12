console.log("testing")
var section=document.getElementById("main");
setInterval(function(){
	var random=Math.random()
	var hex=random.toString(16)
	hex=hex.slice(2,8)
section.style.background="#"+hex
},1000)
var firstname=document.getElementById("nameinput")
var secondname=document.getElementById("objectinput")
var submitbtn=document.getElementById("submit")
var output=document.getElementById("result")
submitbtn.onclick=function(){
	console.log(firstname.value)
	console.log(secondname.value)
	output.innerText=firstname.value.slice(0,3)+secondname.value.slice(-3)
	console.log(output)
}