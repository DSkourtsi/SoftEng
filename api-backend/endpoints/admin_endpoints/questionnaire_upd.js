const mysql = require("mysql");
const express = require("express");
const multer = require("multer");
const router = express.Router();
const fs = require("fs")


fs.mkdirSync('uploads', { recursive: true });
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}.json`);
    },
  });
  
const upload = multer({ storage });
  
const db_string = {
    host: "localhost",
    user: "root",
    password: "intelliq",
    database: 'intelliq_database'
};

let db_con = mysql.createConnection(db_string);

db_con.connect((err) => {
    if (err) {
      console.error('Error connecting to database: ' + err.stack);
      return;
    }
    console.log('Connected to database as id ' + db_con.threadId);
  });

const questionnaire_upload = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file.path, (err, data) => {
            if (err) {
                reject({ error: 'Error reading file.'})
                return;
            }
            try {               
                const jsonData = JSON.parse(data);                
                db_con.query(
                    `INSERT INTO questionnaire SET ?`,
                    { questionnaireID: jsonData.questionnaireID, questionnaireTitle: jsonData.questionnaireTitle, keywords: JSON.stringify(jsonData.keywords) },
                    (error, results) => {
                        if (error) {
                            console.error(error);
                        }
                        else {
                            jsonData.questions.forEach(question => {
                                db_con.query(
                                    `INSERT INTO question SET ?`,
                                    { questionnaireID: jsonData.questionnaireID, qID: question.qID, qtext: question.qtext, required: question.required, type: question.type },
                                    (error, results) => {
                                        if (error) {
                                            console.error(error);
                                        }
                                        else {
                                            question.options.forEach(options => {
                                                let nextqID = options.nextqID;
                                                if (nextqID === "-") {
                                                    nextqID = null;
                                                }
                                                db_con.query(
                                                    `INSERT INTO options SET ?`,
                                                    { qID: question.qID, optID: options.optID, opttxt: options.opttxt, nextqID: nextqID },
                                                    (error, results) => {
                                                        if (error) {
                                                            console.error(error);
                                                        }
                                                        else {
                                                            console.log(results);
                                                        }
                                                    }
                                                );
                                            });
                                        }
                                    }
                                );
                            });
                        }
                    }
                );
                resolve(jsonData);
            }   catch (e) {
                    reject({ error: 'Invalid JSON file.'});
            }
        });
    });
};

router.use(upload.single('file'));

router.post("/admin/questionnaire_upd", (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'File is required.' });
    }    
    questionnaire_upload(req.file).then((result) => {
        res.json(result);
    }).catch((error) => {
        res.status(400).json(error);
    });
});

module.exports = router;