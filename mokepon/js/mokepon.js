function startPlay(){
    let buttonSelectPet = document.getElementById('button-pet')
    buttonSelectPet.addEventListener('click', selectPetPayer)
}

function selectPetPayer(){
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let inputLangostelvis = document.getElementById('Langostelvis')
    let spanPetPlayer = document.getElementById('pet-player')

    if(inputCapipepo.checked){
        spanPetPlayer.innerHTML = 'Capipepo'
        alert("Select Capipepo!")
    } else if (inputRatigueya.checked){
        spanPetPlayer.innerHTML = 'Ratigueya'
        alert("Select Ratigueya!")
    } else if (inputLangostelvis.checked){
        spanPetPlayer.innerHTML = 'Langostelvis'
        alert("Select Langostelvis!")
    } else(alert ("Select a pet")
    )
   
}

window.addEventListener('load', startPlay)