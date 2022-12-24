const express = require("express");
const path = require("path");
const app = express();

var mongoose = require('mongoose');
const bodyparser = require('body-parser');
const { stringify } = require("querystring");

mongoose.connect('mongodb://localhost:27017/anurag',
    {
        useNewUrlParser: true,
    }
);

const port = 80;

var contactSchema = new mongoose.Schema({
    post:String,
    email: String,
    password: String,
});

var Practicum = mongoose.model('Practicum', contactSchema);

app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));

app.get('/Home_page', (req, res) => {
    res.status(200).render("Home_page.pug");
});

app.get('/employeeattendance.pug', (req, res) => {
    res.status(200).render("employeeattendance.pug");
});

app.get('/addmaterial.pug', (req, res) => {
    res.status(200).render("addmaterial.pug");
});

app.get('/employeedetail.pug', (req, res) => {
    res.status(200).render("employeedetail.pug");
});

app.get('/', (req, res) => {
    res.status(200).render("Login_Page.pug");
});

app.get('/Login_Page.pug', (req, res) => {
    res.status(200).render("Login_Page.pug");
});

app.get('/material_list.pug', (req, res) => {
    res.status(200).render("material_list.pug");
});

app.get('/profile.pug', (req, res) => {
    res.status(200).render("profile.pug");
});

app.get('/markattendance.pug', (req, res) => {
    res.status(200).render("markattendance.pug");
});

app.get('/holidays.pug', (req, res) => {
    res.status(200).render("holidays.pug");
});

app.get('/increment.pug', (req, res) => {
    res.status(200).render("increment.pug");
});

app.get('/material_list.pug', (req, res) => {
    res.status(200).render("material_list.pug");
});

app.get('/material.pug', (req, res) => {
    res.status(200).render("material.pug");
});

app.get('/materialresheduling.pug', (req, res) => {
    res.status(200).render("materialresheduling.pug");
});

app.get('/product_list.pug', (req, res) => {
    res.status(200).render("product_list.pug");
});

app.get('/updateemployeedetails.pug', (req, res) => {
    res.status(200).render("updateemployeedetails.pug");
});

app.get('/updateprice.pug', (req, res) => {
    res.status(200).render("updateprice.pug");
});

app.get('/unpaidtrancitions.pug', (req, res) => {
    res.status(200).render("unpaidtrancitions.pug");
});

app.get('/allTransactions.pug', (req, res) => {
    res.status(200).render("allTransactions.pug");
});

app.get('/updatemateriallist.pug', (req, res) => {
    res.status(200).render("updatemateriallist.pug");
});

app.get('/salary.pug', (req, res) => {
    res.status(200).render("salary.pug");
});

app.get('/salarylist.pug', (req, res) => {
    res.status(200).render("salarylist.pug");
});

// app.post("/", (req, res) => {

//     var mydata = new practicum(req.body);

//     mydata.save().then(() => {
//         res.status(200).render("home_page.pug");
//     }).catch(() => {
//         res.status(404).send("Not saved")
//     })
// });

app.post("/", (req, res) => {
    const {post , email, password } = req.body
    Practicum.findOne({ post: post , email: email , password:password}, (err, user) => {
        // if(post !='HR' || post !='Sales' || post !='Manager' || post !='Account'){
        //     res.send({ message: "Please fill correctly" })
        // }
        if (user) {
            // res.send({ message: "User already registerd" })
            res.status(200).render("home_page.pug");
        } 
        else {
            const user = new Practicum({
                post,
                email,
                password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now." })
                }
            })
//             res.send({ message: "Incorrect Data." })
        }
    })
})




app.post("/updateprice.pug", (req, res) => {

            res.send({ message: "Data Updated." })
})
app.post("/addmaterial.pug", (req, res) => {

            res.send({ message: "Data Saved." })
})
app.post("/updateemployeedetails.pug", (req, res) => {

            res.send({ message: "Data Updated." })
})
app.post("/updatemateriallist.pug", (req, res) => {

            res.send({ message: "Data Updated." })
})
app.post("/materialresheduling.pug", (req, res) => {

            res.send({ message: "Data Saved." })
})

app.post("/markattendance.pug", (req, res) => {

            res.send({ message: "Attendance Marked" })
})



app.listen(port, () => {
    console.log(`The application tarted sucessfully on ${port}`);
})
