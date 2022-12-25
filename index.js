require('dotenv').config();
const requestPromise = require('request-promise')

const fs = require('fs');
// contentType - 'application/pdf'
const filePath = "./DSZ25.pdf"
const contentType = "application/pdf"
const whatsapp_server_url = "https://graph.facebook.com/v15.0/100453106272004";

async function uploadOnWhatsapp(filePath, contentType) {
    const stats = fs.statSync(filePath);
    const fileSizeInBytes = stats.size;
    let requestOptions = {
        method: 'POST',
        url: whatsapp_server_url + '/media',
        json: true,
        headers: {
            "Authorization": "Bearer EAAhbCazC7RMBACB8nDNqTCOjUZA8TIJJfu7r02bblrtWRUEUE0srXpmhJgZAhu5ZCVbNfKqrZCZBXAdZBrsj5U2ztkanNFkZCivPZCTUwxVh59IkR2Xb6hPZAFtpDvA6oSgjj5ZCFYxLfQyl6ZAlxTjc4qLFBxE6v4RZASW31wEuFzil7MYvPXNi6flaFjbNwJXflNjAZAZC5jWZB300QZDZD",
            'content-type': contentType,
            'content-length': fileSizeInBytes,
        },
        data: {
            'messaging_product': 'whatsapp'
        }
        // data: '{ "messaging_product": "whatsapp", "to": "919510342875", "type": "template", "template": { "name": "hello_world", "language": { "code": "en_US" } } }'
    };


    // xhr.onreadystatechange = function () {
    //    if (xhr.readyState === 4) {
    //       console.log(xhr.status);
    //       console.log(xhr.responseText);
    //    }};
    
    // var data = '{ "messaging_product": "whatsapp", "to": "919510342875", "type": "template", "template": { "name": "hello_world", "language": { "code": "en_US" } } }';
    
    // xhr.send(data);
    


    // const res = await fs.createReadStream(filePath).pipe(requestPromise(requestOptions));
    console.log(res);
}

uploadOnWhatsapp(filePath, contentType)