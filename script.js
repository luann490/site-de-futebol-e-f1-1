const apiKeyFutebol = 'SUA_API_KEY_FUTEBOL';
const apiKeyF1 = 'SUA_API_KEY_F1';
const tabelaBody = document.querySelector('#tabela tbody');
const jogosFuturos = document.getElementById('jogosFuturos');
const f1Calendario = document.getElementById('f1Calendario');
const ligaSelect = document.getElementById('ligaSelect');

async function carregarTabela(ligaId) {
  tabelaBody.innerHTML = '';
  const url = `https://api-football-v1.p.rapidapi.com/v3/standings?season=2023&league=${ligaId}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKeyFutebol,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const times = data.response[0].league.standings[0];

  times.forEach(time => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${time.team.name}</td>
      <td>${time.points}</td>
      <td>${time.all.win}</td>
      <td>${time.all.draw}</td>
      <td>${time.all.lose}</td>
      <td>${time.goalsDiff}</td>
    `;
    tabelaBody.appendChild(tr);
  });
}

async function carregarJogosFuturos(ligaId) {
  jogosFuturos.innerHTML = '';
  const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${ligaId}&season=2023&next=5`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKeyFutebol,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };
  const res = await fetch(url, options);
  const data = await res.json();

  data.response.forEach(jogo => {
    const li = document.createElement('li');
    const dataHora = new Date(jogo.fixture.date).toLocaleString('pt-BR');
    li.textContent = `${jogo.teams.home.name} vs ${jogo.teams.away.name} - ${dataHora}`;
    jogosFuturos.appendChild(li);
  });
}

async function carregarCalendarioF1() {
  f1Calendario.innerHTML = '';
  const url = 'https://ergast.com/api/f1/current.json';
  const res = await fetch(url);
  const data = await res.json();
  const races = data.MRData.RaceTable.Races;

  races.forEach(race => {
    const li = document.createElement('li');
   
::contentReference[oaicite:0]{index=0}
 
