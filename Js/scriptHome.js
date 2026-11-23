function irPara(pagina){
  window.location.href = pagina;
}

function responder() {

  let resposta1 = document.getElementById("1").checked;
  let resposta2 = document.getElementById("2").checked;
  let resposta3 = document.getElementById("3").checked;
  let resposta4 = document.getElementById("4").checked;
  let resposta5 = document.getElementById("5").checked;

  let resultado = "";

  // Pergunta 1
  if (resposta1) {
    resultado += "<h1>Respostas:</h1><hr><h3>Ja me fez sorrir?</h3>1.A resposta está certinha ok? você sempre me faz sorrir<br><hr><br>";
  } else {
    resultado += "<h1>Respostas:</h1><hr><h3>Ja me fez sorrir?</h3>1.Você errou, boba. Você é quem mais faz eu sorrir<br><hr><br>";
  }

  // Pergunta 2
  if (resposta2) {
    resultado += "<h3>Se tornou minha pessoa fav?</h3>2.Meio óbvio que você seria essa pessoa. Você me traz conforto, segurança. Me faz ficar bem.<br><hr><br>";
  } else {
    resultado += "<h3>Se tornou minha pessoa fav?</h3>2.COMO ACHA QUE NÃO??? AFFF... Óbvio que você é minha pessoa favorita Heloísa.<br><hr><br>";
  }

  // Pergunta 3
  if (resposta3) {
    resultado += "<h3>Acha que eu valho a pena para a vida?</h3>3.VOCÊ REALMENTE ACHA ISSO?????? YUPIIIIIIE ^^<br><hr><br>";
  } else {
    resultado += "<h3>Acha que eu valho a pena para a vida?</h3>3.AFFFFSSSS... Tudo bem tudo bem. Vou mostrar que posso valer...<br><hr><br>";
  }

  // Pergunta 4
  if (resposta4) {
    resultado += "<h3>Gostaria de assistir saiko comigo um dia?</h3>4.AEEEEEEE, bora marcar um dia para assistir então ok? Na sua casa :> <br><hr><br>";
  } else {
    resultado += "<h3>Gostaria de assistir saiko comigo um dia?</h3>4.Poxa... eu realmente gostaria muito de ver ele com alguém especial... Queria que fosse com você...<br><hr><br>";
  }

  // Pergunta 5
  if (resposta5) {
    resultado += "<h3>Você... realmente... no FUTURO, tem chances de aceitar namorar comigo?</h3>5.Eu fico MUITO feliz por isso. Muito mesmo... embora eu não tenha acesso as suas respostas. Eu só quero que saiba que eu realmente gostei muito de 'saber' disso (entre aspas pq n vou ver). Enfim... realmente é bom, e espero te fazer feliz sendo eu mesmo. Esse bobo de sempre<br><hr><br><br><br>";
  } else {
    resultado += "<h3>Você... realmente... no FUTURO, tem chances de aceitar namorar comigo?</h3>5.Eu sei que você gostaria de aqui ter um 'Talvez'... mas infelizmente não tem. Eu não vou ter acesso as respostas, então se não assinalou por ser 'talvez' me diz. Não brinca comigo... Por favor helô<br><hr><br><br><br>";
  }

  document.getElementById("resposta-Perguntas").innerHTML = resultado;
}