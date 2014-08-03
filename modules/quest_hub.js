(function(){
	var questHub = angular.module('questHub',[]);

	LOREM.sendRequest({requestId:101,amount:5},function(response){
		questHub.controller('RecentQuesters',function(){
			this.users = response.users;
		});
	});

	questHub.controller('Popular',function(){
		this.tab = 1;
		this.selectTab = function(tab){
			this.tab = tab;
		};
		this.tabIsSelected = function(tab){
			return this.tab === tab;
		}
	});

	LOREM.sendRequest({requestId:200,amount:10},function(response){
		questHub.controller('PopularGoals',function(){
			this.goals = response.goals;
		});
	})

	LOREM.sendRequest({requestId:300,amount:10},function(response){
		questHub.controller('PopularTasks',function(){
			this.tasks = response.tasks;
		})
	})

})();