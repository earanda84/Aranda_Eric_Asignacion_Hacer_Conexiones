// Cahnge Profile Name
function changeUserName(){
    let newName = prompt('Nombre de Perfil');
    let name = document.getElementById('name');
    if(!newName){
        name.innerText ="Jane Doe"
    }else{
        name.innerText = newName;
    }
};

// Delete Requests
let listItems = document.querySelectorAll('li[class="card-list-item requests"]')
let countRequests = listItems.length;
console.log('LAs count REquests ', countRequests)
let connectionRequest = document.querySelector('.badge.requests')
let countConnectionRequests = connectionRequest.innerText = countRequests;

function removeUser(closeIcon){    
    let {parentElement} = closeIcon.parentElement;

    if(countConnectionRequests > 0 && parentElement){
        for(let li of listItems){
            if(li === parentElement){
                countRequests--
                countConnectionRequests = connectionRequest.innerText = countRequests;
                li.remove();
            }
        }
    }
};

// Increases Connections
let numberOfconnections = document.querySelector('.badge.connections');
let listConnections = document.querySelectorAll('li[class="card-list-item start"]');
let totalConnections = numberOfconnections.innerText = listConnections.length;
let count = totalConnections;

function increasesConnections(){
    count++
    numberOfconnections.innerText = count;
}

