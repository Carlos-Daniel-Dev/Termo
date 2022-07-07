PosicaoQuadro = [1,1] //Linha, Coluna

function digitar(v){
    let s = document.getElementById(`l${PosicaoQuadro[0]/*Linha*/ }c${PosicaoQuadro[1]/*Coluna*/}`)
    if(PosicaoQuadro[1] <= 5)
    PosicaoQuadro[1]+=1
    s.innerHTML = v
}
function backspace(){
    let s = document.getElementById(`l${PosicaoQuadro[0]/*Linha*/ }c${PosicaoQuadro[1]-1/*Coluna*/}`)
    if(PosicaoQuadro[1] > 1){
        PosicaoQuadro[1]-=1
        s.innerHTML = ""
    }
}
function enter(){
    let LinhaCompleta = false
    console.log("1")
    for(let i=1; i<=5; i++){
        console.log(window.document.getElementById(''))

    }
}