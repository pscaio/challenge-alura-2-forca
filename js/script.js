var animais = ['porco', 'pato', 'macaco', 'vaca','coelho', 'tigre', 'girafa', 'flamingo', 'raposa', 'pantera'];
var paises = ['brasil', 'alemanha', 'chile', 'china', 'dinamarca', 'espanha', 'zambia', 'canada' ,'noruega'];
var nomes = ['geane', 'carol', 'lohan', 'jessica', 'caio', 'eduarda', 'alessandro' , 'eliel', 'gilnete', 'renan'];
var objetos = ['celular', 'caneta', 'pente', 'bola', 'mouse', 'teclado', 'televisao', 'copo', 'prato'];
var add = [];
var listaCategorias = [animais, paises, nomes, objetos, add];
var listaNomeCategorias = ['Animais', 'Países', 'Nomes', 'Objetos', 'Adicionados'];

let menu = document.querySelector('.menu')
var botoes = document.querySelector('.botoes');
var botaoAnimais = document.querySelector('.animais');
var botaoObjetos = document.querySelector('.objetos');
var botaoNomes = document.querySelector('.nomes');
var botaoPaises = document.querySelector('.paises');
var botaoAleatorio = document.querySelector('.aleatorio');
var botaoAdd = document.querySelector('.add');
let alfabeto = document.querySelector('.alfabeto');
let areaImagem = document.querySelector('.imagem');
let imagem = document.querySelector('#imagem');
let btnJogar = document.querySelector('.btn-jogar');

botaoAnimais.addEventListener('click', function(){
	iniciaJogo(animais, 'Animais');	
})

botaoObjetos.addEventListener('click', function(){
	iniciaJogo(objetos, 'Objetos');
})

botaoNomes.addEventListener('click', function(){
	iniciaJogo(nomes, 'Nomes');
});

botaoPaises.addEventListener('click', function(){
	iniciaJogo(paises, 'Paises');
});

botaoAleatorio.addEventListener('click', funcAleatorio);

function funcAleatorio(){
	let categoriaDaLista =Math.round(Math.random(0, 5) * 5);
	iniciaJogo(listaCategorias[categoriaDaLista], 'Aleatório - ' + listaNomeCategorias[categoriaDaLista]);
}

botaoAdd.addEventListener('click', function(){
	let inputPalavra = document.querySelector('.input-palavra');
	let submitPalavra = document.querySelector('.submit-palavra');
	
	areaImagem.style.display = 'none';
	
	for( btn = 0; btn<27; btn++ ){
		botoesAlfabeto[btn].disabled=true;
	}
	for(let btnMenu = 0; btnMenu < 6; btnMenu ++){
		document.querySelector('#bt-menu' + btnMenu).disabled = true;
	}
	document.querySelector('.add-palavra').style.display = 'block';
	
	submitPalavra.addEventListener('click', function(){
		if(inputPalavra.value == ''){
			alert('Adicione uma palavra.')
		}else{			
			add.push(inputPalavra.value.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g,''));
			alert('Palavra "' + inputPalavra.value + '" adicionada com sucesso.' );
			inputPalavra.value = '';
			console.log(add);
		}
	});

	btnJogar.addEventListener('click',function(){
		areaImagem.style.display = 'block';
		document.querySelector('.add-palavra').style.display = 'none';
		for(btn = 0; btn<27;btn++){
			botoesAlfabeto[btn].disabled=false;
		}

		for(btnMenu = 0; btnMenu < 6; btnMenu ++){
			document.querySelector('#bt-menu' + btnMenu).disabled = false;
		}
	});
});

function iniciaJogo(categoria, tipoCategoria){
	let posicaoPalavra = Math.round(Math.random(0, 9) * 9);

	let palavra = categoria[posicaoPalavra];
	document.getElementById('menu').style.display = 'none';

	let categoriaEscolhida = document.querySelector('.categoria-escolhida');
	categoriaEscolhida.textContent = tipoCategoria;
	document.getElementById('recomeco').style.display = 'block';

	procuraLetra(palavra);
	for(var cont = 0; cont < categoria[posicaoPalavra].length; cont++){
		let letraComTraco = document.querySelector('.letras');
		let campo = document.createElement('span');
		campo.id = 'letra' + cont;
		campo.textContent = '_';
		letraComTraco.appendChild(campo);
	}
}