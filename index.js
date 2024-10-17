const express = require("express");
const app = express();
app.use(express.json());

const student = [
  {
    name: "Krishna",
    placed: [
      {
        dreamCompany: true,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const studentPlaced = student[0].placed;
  const numberOfCompanies = studentPlaced.length;
  const numberOfCompaniesMoreThan20CTC = 0;

  for (let i = 0; i < studentPlaced.length; i++) {
    if (studentPlaced[i] > 20) {
      numberOfCompaniesMoreThan20CTC += 1;
    }
  }
  const numberOfOffersLessThan20CTC =
    numberOfCompanies - numberOfCompaniesMoreThan20CTC;
  res.json({
    studentPlaced,
    numberOfCompanies,
    numberOfCompaniesMoreThan20CTC,
    numberOfOffersLessThan20CTC,
  });
});


app.post("/", function(req, res) {  
    const isOffered20plus = req.body.yes;
    student[0].placed.push({
         
    })
    res.json({
        msg: "Done!"
    })
})

app.listen(3000);
