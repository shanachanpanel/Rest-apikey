const fs = require('fs')

global.creator = 'shanachan'// Creator
global.MONGO_DB_URI = "mongodb+srv://danzzapiuserdata:Danzz804505@cluster0.j3kozll.mongodb.net/?retryWrites=true&w=majority" // Database
global.ACTIVATION_TOKEN_SECRET = "-@Pqnap+@(/1jAPPnew/@10"
global.your_email = "rizaedtz@gmail.com" // Email
global.email_password = "ttyyxwlaapgockvk" // SMTP Password
global.APIKEY_PREM = 'shanachan'
global.limitCount = 10000
global.YUOR_PORT = 8000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'Input parameter apikey',
        creator: `${creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
    	status: 403,
    	message: 'Forbiden, Invalid apikey',
    	creator: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator: `${creator}`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
