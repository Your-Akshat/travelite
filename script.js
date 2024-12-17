const addButton = document.getElementById('addElement')

const nameSpace = document.getElementById('name')
const amountSpace = document.getElementById('amount')

const table = document.getElementById('myTable')
const displayTotal = document.getElementById('displayTotal')

let totalPayed=0

const count = document.getElementById('count')

const splitButton = document.getElementById('showSplit')

const tellUser = document.getElementById('individualPays')


addButton.addEventListener('click',(e)=>{
    e.preventDefault()
    let thisName = nameSpace.value
    let thisAmount = parseInt(amountSpace.value)

    if (thisName ==='') {
        alert("Name can not be empty!! Please check")
    } else if(thisAmount ===''){
        alert("Amount can not be empty!! Please check")
    } else if(thisAmount < 1){
        alert("Amount can not be less than Re.1!! Please check")
    } else if(isNaN(thisAmount)){
        alert("Amount must be a number!! Please check")
    }else{
        nameSpace.value = ''
        amountSpace.value = ''
        table.innerHTML += `<tr>
                                <td class="border border-r-2 border-white">${thisName}</td>
                                <td class="border border-white">${thisAmount.toLocaleString('en-IN')}</td>
                            </tr>`
        totalPayed += thisAmount
        displayTotal.innerHTML = `Total = Rs. ${totalPayed.toLocaleString('en-IN')}`
        tellUser.innerHTML = ''
    }
})


splitButton.addEventListener('click', (e)=>{
    e.preventDefault()
    const memberCount = parseInt(count.value)
    
    if (memberCount < 1) {
        alert("Number of individuals must be positive!! Please check")
    } else if(isNaN(memberCount)){
        alert("Number of individuals must be a number!! Please check")
    }else{
        let eachPays = totalPayed/memberCount
        
        eachPays = eachPays.toFixed(2)
        eachPays = parseFloat(eachPays)
        eachPays = eachPays.toLocaleString('en-IN')
        
        tellUser.innerHTML = ''
        tellUser.innerHTML += `Each person has to pay <span class="font-semibold">Rs. ${eachPays}</span>`
    }
})
