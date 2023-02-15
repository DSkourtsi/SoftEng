call se2299 healthcheck
pause
echo se2299 questionnaire --questionnaire_id 1111 --format json
call se2299 questionnaire --questionnaire_id 1111 --format json
pause
echo se2299 doanswer --questionnaire_id 1111 --question_id Q06 --session_id 1234 --option_id Q06A1
call se2299 doanswer --questionnaire_id 1111 --question_id Q06 --session_id 1234 --option_id Q06A1
pause
echo se2299 getquestionanswers --questionnaire_id 1111 --question_id Q06 --format json
call se2299 getquestionanswers --questionnaire_id 1111 --question_id Q06 --format json
pause
echo se2299 resetall
call se2299 resetall
pause
echo se2299 questionnaire_upd --source dummy.json
call se2299 questionnaire_upd --source dummy.json
pause
echo se2299 questionnaire --questionnaire_id 1111 --format json
call se2299 questionnaire --questionnaire_id 1111 --format json