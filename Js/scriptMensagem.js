
const envelope = document.getElementById("envelope");
const fundoModal = document.getElementById("fundoModal");
const fechar = document.getElementById("fechar");

const textoCarta = document.getElementById("textoCarta");
const status = document.querySelector("footer small");

const mensagem = `Honestamente eu não sou bom com as palavras. Sempre me embolo na hora da fala

mas isso não me impede de ama-lá.
Talvez eu seja um tolo por me entregar sem conhece-lá totalmente.
Talvez isso seja perigoso...

Mas honestamente... Tanto faz.

Eu gosto de sentir isso por você.
Eu gosto de amar você.

E eu quero fazer o possível para ver seu sorriso.
O possível para eu ser o motivo dele.

Mas como dizia o Link do Zap...
Todo lobo solitário tem uma dona onça,
e se você for a minha eu ficaria muito feliz.

Sabe Heloísa... Eu te amo. E essa é a melhor sensação que eu poderia desejar...`;

const simbolos = ["ø", "*", "#", "%", "@", "&", "§", "¥", "∆", "¿", "ß", "▪︎"];

let digitando = false;
let intervalo = null;

envelope.addEventListener("click", () => {
  fundoModal.classList.add("ativo");

  if (!digitando) {
    iniciarMaquina();
  }
});

fechar.addEventListener("click", () => {
  fundoModal.classList.remove("ativo");
});

function iniciarMaquina() {
  digitando = true;

  textoCarta.textContent = "";
  status.textContent = "DECIFRANDO MENSAGEM...";

  let posicao = 0;

  function escreverCaractere() {

    if (posicao >= mensagem.length) {
      clearInterval(intervalo);

      digitando = false;
      status.textContent = "MENSAGEM CONCLUÍDA.";

      return;
    }

    const caractere = mensagem[posicao];

    // Preserva espaços e quebras de linha
    if (caractere === " " || caractere === "\n") {
      textoCarta.textContent += caractere;
      posicao++;
      return;
    }

    let tentativas = 0;

    const animacao = setInterval(() => {

      if (tentativas < 8) {

        const aleatorio = simbolos[
          Math.floor(Math.random() * simbolos.length)
        ];

        textoCarta.textContent =
          mensagem.slice(0, posicao) + aleatorio;

        tentativas++;

      } else {

        clearInterval(animacao);

        textoCarta.textContent += caractere;
        posicao++;
      }


    }, 45);
  }

  intervalo = setInterval(escreverCaractere, 200);
};

function irPara(pagina){
  window.location.href = pagina
}