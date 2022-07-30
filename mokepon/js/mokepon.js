function startPlay(){
    let buttonSelectPet = document.getElementById('button-pet')
    buttonSelectPet.addEventListener('click', selectPetPayer)
}

function selectPetPayer(){
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let inputLangostelvis = document.getElementById('Langostelvis')

    if(inputCapipepo.checked){
        alert("Select Capipepo!")
    } else if (inputRatigueya.checked){
        alert("Select Ratigueya!")
    } else if (inputLangostelvis.checked){
        alert("Select Langostelvis!")
    } else(alert ("Select a pet")
    )
   
}

window.addEventListener('load', startPlay)