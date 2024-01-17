let previousMultiplicator = 1

function calculateAmount() {
    const elements = document.getElementsByClassName('variable');
    let multiplicator = document.getElementById('input-text').value
    
    for (let i = 0; i < elements.length; i++) {
        let newAmount = (elements[i].innerHTML / previousMultiplicator) * multiplicator;        
        elements[i].innerHTML = `${newAmount}`
    }
    previousMultiplicator = multiplicator

}