# MP3 PLayer -  Fundamentos de Programação II

## Coisas a serem modificas ou explicadas:

1) Substituir a imagem do fone de ouvido por uma outra de seu gosto. Crie sua própria, se você souber (usando a tag svg, por exemplo) ou procure uma na internet. Neste caso, busque por "royalty free images", de preferência imagens vetoriais e com fundo transparente.

2) Modificar a cor de fundo do player para a cor de sua preferência

3) Modificar a fonte usada no player para a de sua preferência

4) Modificar as músicas com as suas preferidas. 

5) Exibir na lista de músicas o título apenas, sem a extensção do arquivo.

6) Explique, com suas próprias palavras, o que faz o seguinte trecho de código:
   
~~~~js
const createSongList = () => {
    const list = document.createElement("ol");
    for (let i = 0; i < songs.length; i++) {
        const item = document.createElement("li");
        item.appendChild(document.createTextNode(songs[i].slice(0,-4)));
        list.appendChild(item);
    }
    return list;
};
~~~~
7) Modifique o código para quando vc clicar sobre a barra de progresso, a música avançar para o ponto correspondente.

#

### Todas as músicas utilizada nesse pequeno projeto foram tiradas do canal [しぐれうい ](https://www.youtube.com/@ui_shig)

### Este projeto não tem nenhum fim lucrativo, apenas fins de aprendizado
