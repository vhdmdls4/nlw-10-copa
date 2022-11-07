function criarPartida(equip1, equip2, hora) {
  return `
    <li>
      <img src="./img/icon=${equip1}.svg" alt="Bandeira de ${equip1}" />
      <strong>${hora}</strong>
      <img src="./img/icon=${equip2}.svg" alt="Bandeira de ${equip2}" />
    </li>
  `
}

let delay = 0

function criarCard(data, dia, partida) {
  delay += 0.5
  return `
    <div class="card" style="animation-delay: .${delay}s">
      <h2>${data}<span>${dia}</span></h2>
      <ul>
      ${partida}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  criarCard(
    "24/11",
    "quinta",
    criarPartida("switzerland", "cameroon", "07:00") +
      criarPartida("south korea", "uruguay", "10:00") +
      criarPartida("portugal", "ghana", "13:00") +
      criarPartida("brazil", "serbia", "16:00")
  ) +
  criarCard(
    "28/11",
    "segunda",
    criarPartida("cameroon", "serbia", "07:00") +
      criarPartida("south korea", "ghana", "10:00") +
      criarPartida("brazil", "switzerland", "13:00") +
      criarPartida("portugal", "uruguay", "16:00")
  ) +
  criarCard(
    "02/12",
    "sexta",
    criarPartida("south korea", "portugal", "12:00") +
      criarPartida("ghana", "uruguay", "12:00") +
      criarPartida("serbia", "switzerland", "16:00") +
      criarPartida("cameroon", "brazil", "16:00")
  )
