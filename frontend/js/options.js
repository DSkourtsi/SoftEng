const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const questionnaire_id = urlParams.get('questionnaireID');
const qID = urlParams.get('qID');
const sessID = urlParams.get('sessID');

window.addEventListener("load", () =>{
    var home = document.getElementById("ans_ID")
    axios.get(`https://localhost:9103/intelliq_api/question/${questionnaire_id}/${qID}`)
        .then(response => {
            for (let i = 0; i < response.data.options.length; i++)
            {
                // var res = response.data.options[i];
                home.options[home.options.length] = new Option(response.data.options[i].opttxt, response.data.options[i].optID)
                // const option = document.createElement('option');
                // option.value = responseData.options[i].optID;
                // option.textContent = responseData.options[i].opttxt;
                // select.appendChild(option);
            }
})
.catch(error => console.error(error))
}
)