let example = document.createElement("img");
document.body.appendChild(example);
example.setAttribute("src","http://placekitten.com/300/300");
example.className = "cat-power";
example.onclick = wipeScreen;

let spin = true;

function wipeScreen(event){
    if(spin){
        example.className = "cat-power2";
        spin = false;
    }else{
        example.className = "cat-power";
        spin = true;
    }
};