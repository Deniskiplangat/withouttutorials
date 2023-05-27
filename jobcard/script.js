const button = document.querySelector('button')






button.addEventListener('click',()=>{
    const outercard = document.createElement('div')
outercard.classList.add('outercard')


//logic for the input classes, this is the trickiest part of my experiment
const cardname = document.getElementById('name')
const myname = cardname.value
cardname.value = ''

const cardId = document.getElementById('id')
const myId = cardId.value
cardId.value = ''

const cardbirth = document.getElementById('birth')
const myBirth = cardbirth.value
cardbirth.value = ''

const cardBranch = document.getElementById('branch')
const myBranch = cardBranch.value
cardBranch.value = ''

const cardIssue = document.getElementById('issue')
const myIssue = cardIssue.value
cardIssue.value = ''












////////////////////////////////////////end of input logic


///here we have created our photo placeholder
const image = document.createElement('img')
image.src = './img/pp.jpg'
image.classList.add('profile-image')

const addnew = document.getElementById('card')

addnew.appendChild(outercard)

///this is the container that will contaij the photo
const photocontainer = document.createElement('div')
photocontainer.classList.add('photocontainer')

///let us append the image container
photocontainer.appendChild(image)


const detailscontainer = document.createElement('div')
detailscontainer.classList.add('detailscontainer')

//////////////////////////////////////////////////////our card details will reside here
const cardone = document.createElement('p')
cardone.textContent = myname

const cardtwo = document.createElement('p')
cardtwo.textContent = myId

const cardthree = document.createElement('p')
cardthree.textContent = myBirth

const cardfour = document.createElement('p')
cardfour.textContent = myBranch

const cardfive = document.createElement('p')
cardfive.textContent = myIssue

////////////////////////////////////////////////////////////////////////////////end of card details
///////////////////////////////////////insert information to the card details
detailscontainer.appendChild(cardone)
detailscontainer.appendChild(cardtwo)
detailscontainer.appendChild(cardthree)
detailscontainer.appendChild(cardfour)
detailscontainer.appendChild(cardfive)




outercard.appendChild(photocontainer)
outercard.appendChild(detailscontainer)

input.focus()
})



