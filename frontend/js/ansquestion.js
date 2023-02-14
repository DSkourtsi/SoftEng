// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const questionnaire_id = urlParams.get('questionnaireID');
// const qID = urlParams.get('qID');
console.log("test");
console.log(questionnaire_id);
console.log(qID); // Output: 123
const nextq = {};

// const select = document.getElementById('ans_ID');
const responseDiv = document.getElementById('info');

const apiUrl = `https://localhost:9103/intelliq_api/question/${questionnaire_id}/${qID}`;
axios.get(apiUrl)
    .then(response => {
    const responseData = response.data;
    const text = responseData.qtext;
    console.log(text);

    for (let i = 0; i < responseData.options.length; i++) {
        nextq[responseData.options[i].optID] = responseData.options[i].nextqID;
    }
    console.log(nextq);

    let div = document.createElement("div");
    div.innerHTML = `Questionnaire id: ${questionnaire_id}<br>Question ID: ${qID}<br>Text: ${text}`;
    responseDiv.parentElement.appendChild(div);
})

const form = document.querySelector('form');

const formEvent = form.addEventListener('submit', event => {
    event.preventDefault();
    // var stationsLength = 0;
    var input_data ={
     option_id : document.querySelector('#ans_ID').value
    }
    axios.post(`https://localhost:9103/intelliq_api/doanswer/${questionnaire_id}/${qID}/${sessID}/${input_data.option_id}`)
    .then(response => {
        console.log("done");
        if (nextq[input_data.option_id] == null) {
            console.log("finished");
            const url = `finished.html`;
            window.location.href = url;
        }
        else{
            console.log(nextq[input_data.option_id]);
            const url = `question_answer.html?questionnaireID=${encodeURIComponent(questionnaire_id)}&qID=${encodeURIComponent(nextq[input_data.option_id])}&sessID=${encodeURIComponent(sessID)}`;
            window.location.href = url;
        }
    }

    )
    .catch(error => console.error(error));
});