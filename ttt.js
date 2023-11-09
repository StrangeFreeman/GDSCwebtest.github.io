function aa(){
	alert("嗨嗨")
}

// aa()

var Button = document.getElementById('btn');

Button.addEventListener('click',function(){
    var Out = document.getElementById('Output');
    var Name = document.getElementById('name');
    Out.innerHTML = "Hi! "+Name.value;
})

Button.addEventListener()
