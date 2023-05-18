

const shareButtons = document.querySelectorAll('.tile-share-button')

console.log(shareButtons)

async function copyText(e) {
    //prevent button going to site 
    e.preventDefault()
    const link =this.getAttribute('link')
    console.log(link)

    try {
        await navigator.clipboard.writeText(link)
        alert("coppied text")
    } catch (error) {
        console.error(error)
    }



}


shareButtons.forEach((shareButtons) =>{ 
    shareButtons.addEventListener('click',copyText)
    shareButtons.addEventListener('touch',copyText)})