import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if(req.method==='POST'){
        const {email, name, message} = req.body;
        if(!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === ''){
            req.status(422).json({message: 'Invalid Input.'})
            return;
        }

        const newMessage = {
            email,
            name,
            message,
        };
        let client;
        let connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.3fukt.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
        try{
             client = await MongoClient.connect(connectionString)
        }catch(e){
            console.log(e)
            res.status(500).json({message:'Could not connect to Database'})
            return;
        }
        const db = client.db()
        try {
            const result = await db.collection('messages').insertOne(newMessage);
            const newMessageId = result.insertedId;

        }catch(error){
            client.close();
            res.status(500).json({message:'Storing message failed.'})
            return;
        }
        client.close()
        res.status(200).json({message:'Successfully Stored Message.', message:newMessage});
    }
}

export default handler;