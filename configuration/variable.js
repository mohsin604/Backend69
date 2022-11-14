const dotenv = require('dotenv')

let MyEnvironment={};
if(process.env.NODE_ENV === 'testing'){
    MyEnvironment = dotenv.config({path:`${__dirname}/../test.env`});
}
