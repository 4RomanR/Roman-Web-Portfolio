const box1 = document.querySelector('.box_1');
const box2 = document.querySelector('.box_2');
const box3 = document.querySelector('.box_3');
const box4 = document.querySelector('.box_4');


const infoBoxS = document.getElementsByClassName('infoBox');
// const experiencia = document.getElementById('experienciaBox');
// const proyectos = document.getElementById('proyectosBox');
// const estudios = document.getElementById('estudiosBox');

console.log(box1.style);
box1.style.display = 'initial';
box2.style.display = 'none';
box3.style.display = 'none';
box4.style.display = 'none';


function boxes(e){
    console.log(e.target.innerHTML);
    let elm = e.target.innerHTML;
    switch(elm) {
        case "Sobre mí":
            box1.style.display = 'initial';
            
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';

            break;
        case "Experiencia":
            box2.style.display = 'initial';

            box1.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';

            break;
        case "Proyectos":
            box3.style.display = 'initial';

            box1.style.display = 'none';
            box2.style.display = 'none';
            box4.style.display = 'none';

            break;
        case "Estudios":
            default:
            box4.style.display = 'initial';

            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';

            
    }
    return console.log(e)
    }; 
    
for (const i of infoBoxS){
    i.addEventListener('click', boxes);
};

