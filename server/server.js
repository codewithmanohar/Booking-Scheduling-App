import express from "express";


const PORT = 8000 ; 
const app = express();


app.get("/", (req , res) => {
    res.status(200).json("Server is running ");
});

app.listen(PORT , () => {
    console.log(`Server is running on PORt : ${PORT}`);
})