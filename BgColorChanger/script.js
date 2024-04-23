let  colors = document.querySelectorAll(".color");
const body = document.querySelector("body");
colors.forEach((btn)=> {
    btn.addEventListener('click', function(e){
        if(e.target.id == 'grey'){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id == 'white'){
            body.style.backgroundColor = e.target.id

        }
        else if(e.target.id == 'blue'){
            body.style.backgroundColor = e.target.id

        }
        else if(e.target.id == 'orange'){
            body.style.backgroundColor = e.target.id

        }
    })
})