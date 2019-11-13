function postprop() {
    let myForm = document.querySelector("form")
    if (myForm) {
        myForm.onsubmit = function(event){
            event.preventDefault();

            const xhr = new XMLHttpRequest;
            const url = '/props';
            let token = document.querySelector('meta[name="csrf-token"]').content;
            let newProp = {
                name: document.querySelector("#prop_name").value,
                description: document.querySelector("#prop_description").value,
                ship_id: document.querySelector("#prop_ship_id").value,
                crew_id: document.querySelector("#prop_crew_id").value
            };
            xhr.responseType = 'json';
            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    let propList = document.querySelector("#propList");
                    let newOne = document.createElement("li")
                    newOne.innerHTML = '<li>'+xhr.response.crew.rank+" "+xhr.response.crew.name+ ' is <a href="/ships/'+ xhr.response.ship.id + '/props/' + xhr.response.id +'">' + 'assigned</a> to the ' + xhr.response.ship.name + '.</li>';
                    propList.appendChild(newOne);
                }
            };
            xhr.open('POST', url);
            xhr.setRequestHeader("x-csrf-token", token);
            xhr.setRequestHeader("Accept", "application/json");     
            xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            xhr.send(JSON.stringify(newProp));
            myForm.reset();
        };
    };
};


window.onload = postprop();