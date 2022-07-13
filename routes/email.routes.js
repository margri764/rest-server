const { Router } = require ('express');
const router = Router();

const { email } = require('../controllers/email-hostinger-feint');



router.post('/feint',[
],email); 







module.exports= router;