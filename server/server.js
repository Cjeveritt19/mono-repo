import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const PORT =8080;
app.listen(PORT, function() {
    console.info(`Server is up and running in port ${PORT}`);
})


app.get("/", function(request, response) {
    response.json({message:"Welcome to the server."});
});