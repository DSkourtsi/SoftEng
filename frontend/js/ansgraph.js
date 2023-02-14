window.onload = () => {
    const form = document.getElementById('graph-form');
    const questionnaireid = document.getElementById('questionnaire_id');
    const qID = document.getElementById('question_id');
    const chartCanvas = document.getElementById('chart');
    const ctx = chartCanvas.getContext('2d');

    const chartData = {
        labels: [],
        datasets: [
            {
                label: 'Data',
                data: [],
                backgroundColor:'rgba(144,103,167,0.6)',
                borderWidth:1,
                borderColor:'#777',
                hoverBorderWidth:3,
                hoverBorderColor:"#000"
            }
        ]
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    const chart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: chartOptions
    });

    form.addEventListener('submit', event => {
        event.preventDefault();

        const questionnaire_id = questionnaireid.value;
        const question_id = qID.value;
        const apiUrl = `https://localhost:9103/intelliq_api/getquestionanswers/${questionnaire_id}/${question_id}`;
        axios.get(apiUrl)
            .then(response => {
            const responseData = response.data.answers;
            const countMap = new Map();
            for (let i = 0; i < responseData.length; i++) {
                const answer = responseData[i].ans;
                if (countMap.has(answer)) {
                    countMap.set(answer, countMap.get(answer) + 1);
                } else {
                    countMap.set(answer, 1);
                }
            }
            chartData.labels = Array.from(countMap.keys());
            chartData.datasets[0].data = Array.from(countMap.values());
            chart.update();
            })
            .catch(error => {
            console.error(error);
        });
        });
};