 // Create expressjs application
 var express = require('express');
 var router = express.Router();


 const allowedExt = [
     '.js',
     '.ico',
     '.css',
     '.png',
     '.jpg',
     '.woff2',
     '.woff',
     '.ttf',
     '.svg',
 ];

 // Route our backend calls
 router.get('/api', (req, res) => res.json({ application: 'API works' }));


 /* GET home page. */

 router.get('*', (req, res) => {
     if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
         res.sendFile(req.url, { root: './client/dist/client' });
     } else {
         res.sendFile("index.html", {
             root: './client/dist/client'
         })
     }
 });

 module.exports = router;