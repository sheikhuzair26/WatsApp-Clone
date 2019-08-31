
// Make a request for a user with a given ID

let handleSuccess = function (response) {
    // handle success
    console.log(response);
    
    
    for (let i = 0; i < response.data.length; i++) { 
        let message=response.data[i]; 
        document.querySelector("ul").innerHTML +=
        
        ` <li class="messages">
    
        <div class="Pic">
            <img src="${message.profilePic}" </div> <div class="info">
            <div class="basicInfoContainer">
                <div class="nameNumb">
                    <h3 class="userName"> ${message.name}</h3>
                    <p class="number"> ${message.number} </p>
                </div>
    
                <div class="unread">
                    <p class="numb">${message.numbUnread}</p>
                </div>
            </div>
            <p class="line">${message.firstLine} </p>
            <p class="time">${message.time} </p>
        </div>
        </li> `
    
        if (message.numbUnread == 0) {
        document.querySelector(".messages").className = "messege2";
    
        } else {
        document.querySelector(".messages").className = "messege";
    
        }
        }
        }
    
        let handleError = function (error) {
        // handle error
        console.log(error);
        }
    
        let finish = function () {
        // always executed
        }
    
    
    
        axios.get('https://tk-whatsapp.herokuapp.com/messages') //Rsponse URL
        .then(handleSuccess)
        .catch(handleError)
        .finally(finish);