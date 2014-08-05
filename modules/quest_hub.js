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

	LOREM.sendRequest({requestId:200,amount:20},function(response){
		questHub.controller('PopularGoals',function(){
			this.goals = HELPERS.shuffleArray(response.goals);
			this.getColor = function(type){
				switch(type){
					case 'relationship':
					case 'health':
					case 'fitness':
						return 'ql-red';
						
					case 'work':
					case 'travel':
					case 'hobby':
						return 'ql-green';

					case 'education':
						return 'ql-purple';

					case 'technology':
					case 'default':
					default:
						return 'ql-blue';
				}
			};
			this.removeGoal = function(index){
				this.goals.splice(index,1);
			}
		});
	})

	LOREM.sendRequest({requestId:300,amount:20},function(response){
		questHub.controller('PopularTasks',function(){
			this.tasks = response.tasks;
		})
	})

})();