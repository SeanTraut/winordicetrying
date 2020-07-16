let thumbnails = document.querySelectorAll("thumbnail");

for(let thumbnail of thumbnails){
    thumbnail.onclick = toggle_thumbnail;
};

function toggle_thumbnail(event){
    let thumbnail = event.currentTarget;
    console.log(thumbnail, "called");
    thumbnail.classList.toggle("expand-example");
};

/* 
Cat Dance Legacy Code
==============================

let example = document.createElement("img");
document.body.appendChild(example);
example.setAttribute("src","http://placekitten.com/300/300");
example.className = "cat-power";
example.onclick = catdance;

let spin = true;

function catdance(event){
    if(spin){
        example.className = "cat-power2";
        spin = false;
    }else{
        example.className = "cat-power";
        spin = true;
    }
};

let project = document.querySelector("#project1");

function cycle(element, classArray){
    for(let i = 0; i < classArray.length; i++){
        let current = classArray[i];

        if(element.classList.contains(current)){
            if(i + 1 > classArray.length - 1){
                i = -1;
            }

            let next = classArray[i + 1];
            element.classList.replace(current, next);
            return;
        }
    }

    element.classList.add(classArray[0]);
}; */
