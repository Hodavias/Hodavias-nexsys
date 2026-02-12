  function enviarWhats(event) {
            event.preventDefault()

            const nome = document.getElementById('nome').value;
            const mensagem = document.getElementById('mensagem').value;
            const telefone = '5591982991931'

            const texto = `Olá ! Me chamo ${nome}, ${mensagem}`
            const msgFormatada = encodeURIComponent(texto)
            const url = `https://wa.me/${telefone}?text=${msgFormatada}`

            console.log(url)
            window.open(url, '_blank')
        }

const botaoMenu = document.querySelector('.button-menu');
const menuLateral = document.querySelector('.menu')
const conteudo = document.querySelector('.conteudo')
const background = document.querySelector('.background')


botaoMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('ativo')
botaoMenu.classList.toggle('ativo')
conteudo.classList.toggle('ativo')

})

menuLateral.addEventListener('click', () => {
   menuLateral.classList.remove('ativo')
botaoMenu.classList.remove('ativo')
conteudo.classList.remove('ativo')
})
