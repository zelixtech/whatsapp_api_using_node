const accountSid = "AC15921528d2b47a667d077a5078b82e78";
const authToken = "052877c7cf5d1cbbfda3d6c3c7eed84e";
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'Hello, there!',
         to: 'whatsapp:+15005550006'
       })
      .then(message => console.log(message.sid));
