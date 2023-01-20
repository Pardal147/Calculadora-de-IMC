
let btn = document.getElementById('btn')
let comentario = document.getElementById('comentario')
comentario.style.display ='none'

btn.onclick=()=>{

    let nome = document.getElementById('nome')
    let altura = document.getElementById('altura')
    let peso = document.getElementById('peso')
    let resultado = Math.round(peso.value/Math.pow(altura.value,2))
    let grau;

    if(nome.value !== '' && altura.value !== ''&& peso.value !== ''){
        console.log(nome.value)
        if(resultado < 18.5){
            comentario.style.display ='block'
            grau = 'Abaixo do peso'
            console.log(nome.value+' seu IMC é '+resultado+'você está '+grau)
            comentario.innerHTML = nome.value+' seu IMC é '+resultado+' você está '+grau
        }
        if(resultado >= 18.5 && resultado < 24.9){
            comentario.style.display ='block'
            grau = 'Peso normal'
            console.log(nome.value+' seu IMC é '+resultado+'você esta '+grau)
            comentario.innerHTML = nome.value+' seu IMC é '+resultado+' você esta '+grau
        }
        if(resultado >= 25 && resultado < 29.9){
            comentario.style.display ='block'
            grau = 'Pré-Obesidade'
            console.log(nome.value+' seu IMC é '+resultado+'você esta '+grau)
            comentario.innerHTML = nome.value+' seu IMC é '+resultado+' você esta '+grau
        }
        if(resultado >= 30 && resultado < 34.9){
            comentario.style.display ='block'
            grau = 'Obesidade Grau 1'
            console.log(nome.value+' seu IMC é '+resultado+'você esta '+grau)
            comentario.innerHTML = nome.value+' seu IMC é '+resultado+' você esta '+grau
        }
        if(resultado >= 35 && resultado <39.9){
            comentario.style.display ='block'
            grau = 'Obesidade Grau 2'
            console.log(nome.value+' seu IMC é '+resultado+'você esta '+grau)
            comentario.innerHTML = nome.value+' seu IMC é '+resultado+' você esta '+grau 
        }
        if(resultado >=40){
            comentario.style.display ='block'
            grau = 'Obesidade Grau 3'
            console.log(nome.value+' seu IMC é '+resultado+'você esta '+grau)
            comentario.innerHTML = nome.value+' seu IMC é '+resultado+' você esta '+grau
        }
    }
    else{
        comentario.style.display ='none'
        // comentario.innerHTML = 'Preencha todos os campos'
        window.alert('Preencha todos os campos')
    }
}

