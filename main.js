//Goal resposta certa - eu clico na resposta certa e aparece-me HTML e CSS a dizer "Correcto"

//Goal resposta errada - eu clico numa resposta errada e aparece-me HTML e CSS "OOPS ERRADO" + "Tenta outra vez!"

//RESPOSTA CERTA 
//1.Buscar o botao certo
const respostaCerta = document.getElementById('resposta-certa');

//1.2. Buscar <p> para onde injetar conteúdo

const explicacao = document.getElementById('explicacao');

//2. Escutar click
respostaCerta.addEventListener('click', (event) => {
	explicacao.innerHTML = "<strong>Correcto!</strong> 🥳"
})

//RESPOSTAS ERRADAS
//1. Buscar os botoes errados
const respostasErradas = document.querySelectorAll('.resposta-errada');

//2. Iterar por cada resposta errada (loop)
respostasErradas.forEach((resposta) => {
	//3. Escutar cada resposta
	resposta.addEventListener('click', (event) => {
		let explicacaoConteudo = "<strong>Oops! Errado...</strong> 😬"

		//4.Distinguir se a resposta é HTML, CSS ou Ruby
		if(resposta.id === "resposta-html") {
			explicacaoConteudo += " HTML permite-nos dar estrutura e conteúdo à nossa página."
		} else if(resposta.id === "resposta-css") {
			explicacaoConteudo += " CSS permite-nos dar estilo à nossa página."
		} else {
			explicacaoConteudo += " Ruby é uma das várias linguagens que pode ser utilizada para back end."
		}

		explicacaoConteudo += " Tenta de novo!"

		explicacao.innerHTML = explicacaoConteudo
	})
})