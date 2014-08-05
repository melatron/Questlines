var HELPERS = (function(){
	
	function isNumber(candidate){
		return typeof candidate === 'number' && !isNaN(candidate);
	}

	function shuffleArray(o){
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    	return o;
	}

	return{
		isNumber: isNumber,
		shuffleArray:shuffleArray
	}
})();