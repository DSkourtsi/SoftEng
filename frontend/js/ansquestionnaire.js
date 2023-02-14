window.onload = () => {
    const form = document.getElementById('form');
    const questionnaireid = document.getElementById('questionnaire_id');
    const resCanvas = document.getElementById('result');
    const responseDiv = document.getElementById('response');
    const buttonDiv = document.getElementById('res2');

    form.addEventListener('submit', event => {
        event.preventDefault();

        const questionnaire_id = questionnaireid.value;
        const apiUrl = `https://localhost:9103/intelliq_api/questionnaire/${questionnaire_id}`;
        
        axios.get(apiUrl)
            .then(response => {
            const responseData = response.data;
            const title = responseData.questionnaireTitle;
            const keywords = responseData.keywords;
            const firstq = responseData.questions[0].qID;

            const div = document.createElement('div');
            div.innerHTML = `Questionnaire id: ${questionnaire_id}<br>Questionnaire title: ${title}<br>Keywords: ${keywords}`;
            responseDiv.appendChild(div);
            responseDiv.appendChild(document.createElement('br'));

            const sessID_num = Math.floor(1000 + Math.random() * 9000);
            const sessID = sessID_num.toString(); 

            const button = document.createElement('button');
            button.textContent = 'Go to First Question';
            button.onclick = () => {
            const url = `question_answer.html?questionnaireID=${encodeURIComponent(questionnaire_id)}&qID=${encodeURIComponent(firstq)}&sessID=${encodeURIComponent(sessID)}`;
            window.location.href = url;
            };
            buttonDiv.appendChild(button);
            })
            .catch(error => {
            console.error(error);
        });


        responseDiv.textContent = "Questionnaire id: " + questionnaire_id;

    });
}