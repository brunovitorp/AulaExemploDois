const personagens = [
    {
        nome: "Naruto Uzumaki",
        cla: "Uzumaki",
        golpe: "Rasengan",
        img: "https://i.pinimg.com/originals/a5/b5/4a/a5b54a912badeea1a93825751682db10.png"
    },
    {
        nome: "Sasuke Uchiha",
        cla: "Uchiha",
        golpe: "Chidori",
        img: "https://artpoin.com/wp-content/uploads/2023/09/artpoin-personagens-naruto-cute39.png"
    }
];

let indexAtual = 0;

document.getElementById('next').addEventListener('click', () => {
    indexAtual = (indexAtual + 1) % personagens.length;
    atualizarPersonagem(personagens[indexAtual]);
});

function atualizarPersonagem(personagem) {
    document.querySelector('.geek').src = personagem.img;
    document.querySelector('.geek').alt = personagem.nome;
    document.querySelector('dd:nth-of-type(1)').textContent = personagem.nome;
    document.querySelector('dd:nth-of-type(2)').textContent = personagem.cla;
    document.querySelector('dd:nth-of-type(3)').textContent = personagem.golpe;
}
