import app from './app'
import dotenv from 'dotenv';
dotenv.config();
import './db/mongodb';

function init() {
    app.listen(app.get('port'))
    console.log('Server on port: ', app.get('port'));
}

init();