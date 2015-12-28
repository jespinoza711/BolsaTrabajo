module.exports ={
   //Puerto de servicio
   port:process.env.PORT || 5000,
   //Lenguaje
   
   express:{
     secret:process.env.SECRET || 'julio',
     key:process.env.KEY||'emilio'
   },
   mongodb:{
     uri:process.env.MONGOLAB_URI || 'mongodb://localhost/BolsaTrabajo' ,
   }, 
   site: {
    title: 'nicalab - La mejor manera de trabajar en linea',
    lang:'es-ni',
    html: {
      engine: 'jade',
      minify: true
    }
   }
}
