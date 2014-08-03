var HELPERS = (function(){
	
	function isNumber(candidate){
		return typeof candidate === 'number' && !isNaN(candidate);
	}

	return{
		isNumber: isNumber
	}
})();