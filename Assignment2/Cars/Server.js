const express=require("express")
const app = express();

app.get('/', (req, res) => {
   console.log("hello");
   return res.send('Received a GET HTTP method');
 
}); 

app.post('/update/:title', (req, res) => {
    
    res.send("ok")

});

const port=2000
app.listen(port,() =>
  console.log(`Example app listening on port `,port),
);