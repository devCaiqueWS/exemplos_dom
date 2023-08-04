function mudar() {
    let novo = document.getElementById("idNome")
    document.getElementById("ttl").required=true;
    document.getElementById("ttl").innerHTML = novo.value;
}

function inserir(){
    let num = document.getElementById("position").value-1;
    let novo1 = document.getElementById("novo").value;

    document.getElementsByClassName("colocado")[num].innerHTML = novo1
}

function mostrar(){
    let num = document.getElementById("mes").value-1;
    let mes = document.getElementsByTagName("li")[num].innerHTML;
    document.getElementById("resultado").innerHTML = mes;
}


document.querySelector("#btnMsg").onclick=()=>{
    alert("Olá Mundo")
}

document.querySelector("#btnMsg").addEventListener('click', function(){
    alert("olá mundo")
})