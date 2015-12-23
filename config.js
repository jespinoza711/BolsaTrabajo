module.exports ={
   //Puerto de servicio
   port:process.env.PORT || 5000,
   //Lenguaje
   
   express:{
     secret:process.env.SECRET || 'julio',
     key:process.env.KEY||'emilio'
   },
   mongodb:{
     host:process.env.MONGODB_HOST || '',
     port:process.env.MONGODB_POR || '',
     db: process.env.MONGODB_DATABASE  || '',
     username:process.env.MONGODB_USERNAME || '',
     password: process.env.MONGODB_PASSWORD || ''
   },
   site: {
    title: 'NicaLabs',
    lang:'es-ni',
    html: {
      engine: 'jade',
      minify: true
    }
   }
}
