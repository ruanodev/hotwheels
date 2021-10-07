const btns = document.querySelectorAll('.btn') //seleciona todos os botões com classe ".btn" e guarda na variavel "btns"

btns.forEach(btn => { //"para" cada botão vamos chamar uma função
    btn.addEventListener('click', (e) =>{ // "adicione" um escutador de evento "click"
        makeActiveBtn(e)

        if(e.target.classList.contains('btn_all')){ //verificar qual botão/categoria foi clicado ...
            filterImage("all") // filtra todas as imagens da categoria
        }
        if(e.target.classList.contains('btn_volkswagen')){
            filterImage("volkswagen")
        }
        if(e.target.classList.contains('btn_porsche')){
            filterImage("porsche")
        }
        if(e.target.classList.contains('btn_japones')){
            filterImage("japones")
        }
        if(e.target.classList.contains('btn_mascle')){
            filterImage("mascle")
        }
        if(e.target.classList.contains('btn_tematicos')){
            filterImage("tematicos")
        }
        if(e.target.classList.contains('btn_outros')){
            filterImage("outros")
        }
    })
})

const makeActiveBtn = (event) => {
    btns.forEach(btn => { // para cada btn remover "active" da classe button ...
        btn.classList.remove("active");
    });
    event.target.classList.add("active"); // adiciona "active" na classe dos outros botões, ativando CSS que ".btn.active" que deixa o fundo branco
};


//função para filtrar as imagens por categoria
const filterImage = (category) => {
    const images = Array.from(document.querySelectorAll(".filter_imgs img")); //cria um array com todas as imagens selecionadas
    
    images.forEach((img) => { // para cada image (img) adicionar uma classe lista chamada "hide"
        img.classList.add("hide");

    });

const filterdImages = images.filter(
    (img) => 
    img.getAttribute("data-image") === category || // encontrar as imagens onde o atributo "data" é igual a categoria 
    img.getAttribute("data-all") === category
    );

filterdImages.forEach(img => {
    img.classList.remove("hide"); // filtrar imagens removendo a classe "hide"
})

};


