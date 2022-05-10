var listaAcertos = [];
var contaLetras = 0;
let validaErro = false;
let numeradorImagem = 0;
let contadorAcertos = 0;
let btn = 0;
let botoesAlfabeto = document.querySelectorAll('#botaoAlfabeto');
let msgFinalizacao = document.querySelector(".msg-finalizacao");

function procuraLetra(palavra){
	alfabeto.addEventListener('click', function(event){
		listaAcertos.splice(0, listaAcertos.length);
		let letra = event.target.textContent;
		let classe = event.target.getAttribute('class');
		
		if(classe == 'a-i' || classe == 'j-r' || classe == 's-ç'){
			null;
		}else{
			document.querySelector('.'+ classe).disabled = true;
			validaErro = false;

			for(var i = 0; i < palavra.length; i++){
				for(var contador=0;contador<=palavra.length;contador++){
					if(letra.toLowerCase() == palavra[contador]){
						validaErro = true;
					}
				}

				if(letra.toLowerCase() == palavra[i]){
					listaAcertos.push(i);
				}else{
					document.querySelector('.'+classe).style.background = '#780000';
					if(!validaErro){
						if(numeradorImagem <= 6){
							numeradorImagem++;
							imagem.src = 'img/'+numeradorImagem+'-forca.png';
							validaErro= true;
						}

						if(numeradorImagem == 6){
							for(var btn = 0; btn<27;btn++){
								botoesAlfabeto[btn].disabled=true;
								msgFinalizacao.innerHTML = 'Que pena, você perdeu! A palavra era <p style="color: #21E6C1; padding-top: 5px">"' + palavra + '"</p> Tente novamente.';
								msgFinalizacao.style.display = 'inline-block';
								msgFinalizacao.style.color = '#fff';
							}
						}
					}
				}
			}
			if(listaAcertos.length > 0){
				contadorAcertos += listaAcertos.length;

				for(var ii = 0; ii < listaAcertos.length; ii++){
					document.getElementById('letra' + listaAcertos[ii]).innerHTML = letra.toUpperCase();
					document.querySelector('.'+classe).style.background = '#007800';
				}
				if(contadorAcertos == palavra.length){
					imagem.src = 'img/'+numeradorImagem+'-vitoria.png';

					msgFinalizacao.innerHTML = 'Parabens, você venceu!';
					msgFinalizacao.style.display = 'inline-block';
					msgFinalizacao.style.color = '#21E6C1';
					for(btn = 0; btn<27;btn++){
						botoesAlfabeto[btn].disabled=true;
					}
				}
			}
		}
	});
}