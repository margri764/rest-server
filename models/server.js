
const express = require('express');
const cors = require ('cors');
const path = require ('path');

class Server{

        constructor(){
            this.app = express();
            this.port = 8000;
            this.middlewares();
            this.routes();
            
        }


    middlewares(){
        this.app.use(cors());
        this.app.use (express.json());
        this.app.use(express.static('public'));
        
        this.app.set('trust proxy', true);
     
      

    }    

    routes(){
        this.app.use('/api/send-email', require('../routes/email.routes'));

        
        this.app.get('*', (req, res) => { 
            res.sendFile( path.resolve( __dirname,'../public/index.html') )
            });
              
              
    }

    listen(){
        this.app.listen(this.port)
        console.log('servidor corriendo en puerto', this.port)
    }



}

module.exports = Server;