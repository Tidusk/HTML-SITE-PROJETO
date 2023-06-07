telefone.onblur = function(){
    if(this.IDBCursorWithValue.length < 11){
        erros1.innerHTML = '<p>Verifique o número de telefone</p>'
        this.style.backgroundColor = 'red';
    }else{
         this.style.backgroundColor = 'white';
    }
};

aperitivos = document.getElementById('aperit')
aperitivos.onchange = function(){
    this.checked ? alert("Ok, vou providenciar!") : alert('Até a próxima');
};

let sexo = document.getElementsByName('sexo')
let hobbis = document.getElementsByName('hobbies')

btSexo.onclick = function(){
    alert('até aqui  ')
    let mens = "";
    mens += 'Sexo:';
    sexo.forEach(s =>{
        s.checked ? mens += s.value + '\n': undefined;
    });
    mens += '\n Hobbies: \n';
    hobbies.forEach(h =>{
        mens += h.checked ? h.value +'\n': '';
    });
    mensagem.value = mens;
};

uf.onchange=function(){
    switch(this.value=){
        case 'AC': natural.innerHTML = 'Acreano'; break;
        case 'AL': natural.innerHTML = 'Alagoano'; break;
        case 'AM': natural.innerHTML = 'Amazonense'; break;
        case 'AP': natural.innerHTML = 'Amapaense'; break;
        case 'BA': natural.innerHTML = 'Baiano'; break;
        case 'CE': natural.innerHTML = 'Cearense'; break;
        case 'DF': natural.innerHTML = 'Brasiliense'; break;
        case 'ES': natural.innerHTML = 'Capixaba'; break;
        case 'GO': natural.innerHTML = 'Goiano'; break;
        case 'MA': natural.innerHTML = 'Maranhense'; break;
        case 'MT': natural.innerHTML = 'Mato-grossense'; break;
        case 'MS': natural.innerHTML = 'Sul-mato-grossense'; break;
        case 'MG': natural.innerHTML = 'Mineiro'; break;
        case 'PA': natural.innerHTML = 'Paraense'; break;
        case 'PB': natural.innerHTML = 'Paraibano'; break;
        case 'PR': natural.innerHTML = 'Paranaense'; break;
        case 'PE': natural.innerHTML = 'Pernambucano'; break;
        case 'PI': natural.innerHTML = 'Piauiense'; break;
        case 'RJ': natural.innerHTML = 'Carioca'; break;
        case 'RN': natural.innerHTML = 'Potiguar'; break;
        case 'RS': natural.innerHTML = 'Gaúcho'; break;
        case 'RO': natural.innerHTML = 'Rondoniense'; break;
        case 'RR': natural.innerHTML = 'Roraimense'; break;
        case 'SC': natural.innerHTML = 'Catarinense'; break;
        case 'SP': natural.innerHTML = 'Paulista'; break;
        case 'SE': natural.innerHTML = 'Sergipano'; break;
        case 'TO': natural.innerHTML = 'Tocantinense'; break;
        default: natural.innerHTML = 'Outros estados';
    }
} 