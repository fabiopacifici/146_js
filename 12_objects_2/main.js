const teamMembers = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];


// select the dom node where put the team members
const ulEl = document.getElementById('team')
const rowEl = document.querySelector('.row')
const formEl = document.querySelector('form')
const nameEl = document.getElementById('name')
const roleEl = document.getElementById('role')
const imageEl = document.getElementById('image')


// Render the members
renderTeamMembers(teamMembers, rowEl)




formEl.addEventListener('submit', (e) => {
  e.preventDefault()


  console.log(nameEl.value, roleEl.value, imageEl.value);

  const name = nameEl.value
  const role = roleEl.value
  const image = imageEl.value
  const newMember = {
    name,
    role,
    image
  }


  teamMembers.push(newMember)


  renderTeamMembers(teamMembers, rowEl)



})







function renderTeamMembers(teamMembers, nodeEl) {

  nodeEl.innerHTML = ''
  // loop over the teamMember array
  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];


    // generate the member markup
    const memberMarkup = generateMemberMarkup(member)
    console.log(memberMarkup);
    // option 1
    //memebrs += memberMarkup

    // option 2
    nodeEl.insertAdjacentHTML('beforeend', memberMarkup)

  }

}

function generateMemberMarkup(member) {
  const { name, role, image } = member
  console.log(name, role, image);

  // generate the member markup
  const memberMarkup = `
    <div class="col">
      <div class="card">
        <img src="img/${image}" alt="" class="card-img-top">
        <div class="card-body">
          <h3>${name}</h3>
          <div>${role}</div>
        </div>
      </div>
    </div>
  
  `
  return memberMarkup
}




/* let memebrs = ''

// loop over the teamMember array
for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];


  // generate the member markup
  const memberMarkup = generateMemberMarkup(member)
  console.log(memberMarkup);
  // option 1
  //memebrs += memberMarkup

  // option 2
  ulEl.insertAdjacentHTML('beforeend', memberMarkup)

} */

/* console.log(memebrs);

ulEl.innerHTML = memebrs */
// - generate the markup for the single team member

// - add the markup to the dom element
