function switch_color() {
    const cell = document.querySelectorAll('td');
    for(i=0;i<cell.length;i++){
        if(cell[i].className == 'white'){
            cell[i].className = 'black';
        }
        else{
            cell[i].className = 'white';
        }
        
    }
}

const table = document.querySelector('table');
table.addEventListener('click', switch_color);