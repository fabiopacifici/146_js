/* 

Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

*/


const teams = [
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 }
]



/* 

Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.


Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/


// populate the values for each object
for (let i = 0; i < teams.length; i++) {
  const team = teams[i];

  team.falliSubiti = Math.ceil(Math.random() * 50)
  team.puntiFatti = Math.ceil(Math.random() * 100)

}

console.log(teams);






function filterTeamsArray(teams) {
  const filteredTeams = []
  //  creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
  for (let i = 0; i < teams.length; i++) {
    const team = teams[i];


    /*   const nome = team.nome
      const falliSubiti = team.falliSubiti */

    // destructuring
    const { nome, falliSubiti } = team
    console.log(nome, falliSubiti);


    /*     filteredTeams.push({
          nome: nome,
          falliSubiti: falliSubiti
        }) */

    filteredTeams.push({
      nome,
      falliSubiti
    })

  }

  console.log(filteredTeams);
  return filteredTeams
}


const filtered = filterTeamsArray(teams)
console.log(filtered);
