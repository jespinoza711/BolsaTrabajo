var  controller =  require('../controllers');


module.exports = function (_app){
	_app.get('/',controller.home.index);
	_app.get('/about',controller.about.home);
}

