
let btn = document.getElementById('btn')

btn.onclick=()=>{

    let nome = document.getElementById('nome')
    let altura = document.getElementById('altura')
    let peso = document.getElementById('peso')
    let comentario = document.getElementById('comentario')
    let resultado = peso.value/(Math.pow(altura.value,2))
    let grau;

    if(nome.value !== '' && altura.value !== ''&& peso.value !== ''){
        if(resultado < 18.5){
            grau = 'Abaixo do peso'
            console.log(nome.value+' seu IMC é '+resultado+'você está '+grau)
            comentario.innerHTML = nome.value+' seu IMC é '+resultado+' você está '+grau
        }
        if(resultado >= 18.5 && resultado < 24.9){
            grau = 'Peso normal'
            console.log(nome.value+' seu IMC é '+resultado+'você esta '+grau)
            comentario.innerHTML = nome.value+' seu IMC é '+resultado+' você esta '+grau
        }
        if(resultado >= 25 && resultado < 29.9){
            grau = 'Pré-Obesidade'
            console.log(nome.value+' seu IMC é '+resultado+'você esta '+grau)
            comentario.innerHTML = nome.value+' seu IMC é '+resultado+' você esta '+grau
        }
        if(resultado >= 30 && resultado < 34.9){
            grau = 'Obesidade Grau 1'
            console.log(nome.value+' seu IMC é '+resultado+'você esta '+grau)
            comentario.innerHTML = nome.value+' seu IMC é '+resultado+' você esta '+grau
        }
        if(resultado >= 35 && resultado <39.9){
            grau = 'Obesidade Grau 2'
            console.log(nome.value+' seu IMC é '+resultado+'você esta '+grau)
            comentario.innerHTML = nome.value+' seu IMC é '+resultado+' você esta '+grau 
        }
        if(resultado >=40){
            grau = 'Obesidade Grau 3'
            console.log(nome.value+' seu IMC é '+resultado+'você esta '+grau)
            comentario.innerHTML = nome.value+' seu IMC é '+resultado+' você esta '+grau
        }
    }
    else{
        // comentario.innerHTML = 'Preencha todos os campos'
        window.alert('Preencha todos os campos')
    }
}

