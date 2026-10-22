import { viajantesCosmicos, arrTags } from "./objetos.js";

//recuperar o id arrTags
const tags = document.querySelector('#tags');
arrTags.forEach((tag, index) => {
    //definir a cor das tags paras e ímpares
    
    //if ternário
    const cor = index % 2 === 0
            ? 'border-cyan-400/20 text-cyan-300'
            : 'border-fuchsia-400/20 text-fuchsia-300';

    //inserir o conteúdo do array na tag que será exibida
    tags.innerHTML += `
        <span class= "bg-zinc-900 border ${cor} px-4 py-2 text-sm uppercase rounded-md transition hover:scale-105 duration-300">
        ${tag}</span>
    `
});

//Montando os cards
const container = document.querySelector('#cards');

viajantesCosmicos.forEach(viajante => {
    container.innerHTML += `
    <article class="bg-zinc-900/80 border border-cyan-400/10 rounded-2xl overflow-hidden hover:border-cyan-300 transition duration-300 backdrop-blur-sm">
    <img src="${viajante.imagem}" alt="${viajante.nome}" class="w-full">

    <div class="p-6">
        <h2 class="text-cyan-400 font-black text-2xl md-4">${viajante.nome}</h2>
        <p class="md-3 text-zinc-400">Origem: 
        <span class="text-white">${viajante.planetaOrigem}</span></p>
        <p class="md-3 text-zinc-400">Energia:
        <span class="text-white">${viajante.energia}</span></p>
        <p class="md-3 text-zinc-400">Equipamento:
        <span class="text-white">${viajante.equipamento}</span></p>
        <p class="md-3 text-zinc-400">Status:
        <span class="text-white">${viajante.status}</span></p>
    </article>

    `
})