const express = require('express');
const cors = require('cors');
const axios = require('axios')

const app = express();
app.use(express.json());
app.use(cors({ origin: true}));

app.post("/authentication", async (req, res) => {
    const {username} = req.body;
    try{
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": "50742634-26f4-4168-b40e-3315ec2d660c"}}
        )
        return res.status(r.status).json(r.data)
    } catch(e) {
        return res.status(e.response.status).json(e.response.data)
    }
});

app.listen(3001);