export default($scope, $state, hService, qService, xService, kpiRes, $rootScope) => {
	'ngInject';
	$scope.title = "公共安全";
	$scope.subTitle = "报警数";
	const jQueryDOMToDos = () => {
        //$(".navbar2position").hide(0); // 显示当前位置
        //$(".navbar2return").show(0); // 显示返回按钮
        //$(".navTopShowMark").hide(0); // 隐藏KPI状态 KPI分类
        $('.navTopShowPolice').hide(0); // 显示公安类型
        //$('#showshort').focus(); // 获取默认焦点

    }();
	// 上一级路由
	$scope.toH = () => {
		let h = hService.state();
		if (h.params == null) {
			$state.go(h.name);
		} else {
			$state.go(h.name, h.params);
		}
	}
	$scope.changeTitle = (subTitle) => {
		$scope.subTitle = subTitle;
	}


	$scope.changeState = (state) => {
		let categoryId = hService.state().params.categoryId;
		let paramObj = {
			"categoryId": categoryId,
			"state": state
		};
		$state.go("app.publicsecurity.bystate",paramObj);
	}

	// 用于底部bar的当前位置
	const initPosition = () => {
		switch($state.params.categoryId) {
			case "3001": $scope.currentCategoryName = "公安"; break;
			case "3002": $scope.currentCategoryName = "消防"; break;
			case "3004": $scope.currentCategoryName = "信访"; break;
			case "3003": $scope.currentCategoryName = "交通事故"; break;
			case "3005": $scope.currentCategoryName = "生产安全"; break;
		}
	}();
	$scope.changeCategory = (name) => {
		$scope.currentCategoryName = name;
	}

	$scope.toDetail = () => {
		switch($scope.currentCategoryName) {
			case "公安":
				$state.go("app.publicsecurity.policecall");
				break;
			case "消防":
				$state.go("app.publicsecurity.fire");
				break;
			case "信访":
				$state.go("app.publicsecurity.petition");
				break;
			case "交通事故":
				$state.go("app.publicsecurity.accident");
				break;
			case "生产安全":
				$state.go("app.publicsecurity.safety");
				break;
		}
	}
	xService.h("publicsecurity", ["3001", "3002", "3004", "3003", "3005"]);
	let headers = {
		"X-Auth-Token": "eyJhY2NvdW50Ijp7IkBpZCI6IjEiLCJpZCI6NzksImNyZWF0ZV90aW1lIjoiMjAxNS0wNy0wNSAxNTowNjo0OCIsIm1vZGlmeV90aW1lIjoiMjAxNS0wNy0wNSAxNTowNzowNiIsImFjY291bnQiOiJnYWowMSIsInBhc3N3b3JkIjpudWxsLCJ0aXRsZSI6IuWFrOWuieWxgCIsIm5hbWUiOiLlhazlronlsYAiLCJzeXN0ZW1OYW1lIjoi5YWs5a6J5bGAIiwibW9iaWxlUGhvbmUiOm51bGwsIndvcmtQaG9uZSI6bnVsbCwicm9sZSI6IkRJUkVDVE9SIiwiZGVwYXJ0bWVudHMiOlt7IkBpZCI6IjIiLCJpZCI6MjIsImNyZWF0ZV90aW1lIjoiMjAxNC0xMi0yOSAxMjo0MDoxMCIsIm1vZGlmeV90aW1lIjoiMjAxNC0xMi0yOSAxMjo0MDoxMCIsIm5hbWUiOiLlhazlronlsYAiLCJkZXNjcmlwdGlvbiI6IkdBSl/lhazlronlsYAifV19LCJleHBpcmVzIjoxNDgwMTAxNzc1NTEyLCJncmFudGVkQXV0aHMiOlsiUk9MRV9ESVJFQ1RPUiJdLCJhY2NvdW50Tm9uTG9ja2VkIjp0cnVlLCJhY2NvdW50Tm9uRXhwaXJlZCI6dHJ1ZSwiY3JlZGVudGlhbHNOb25FeHBpcmVkIjp0cnVlLCJlbmFibGVkIjp0cnVlLCJ1c2VybmFtZSI6ImdhajAxIiwicGFzc3dvcmQiOm51bGx9.oazO0vE7wp76MqfN+h9kmTZH1nPjU1ZEFDmW0tqqyWQ="
    };
	$rootScope.loading = false;
    qService.httpGetWithToken(kpiRes.blueMap, {}, headers).then((data) => {
        if (data.errorCode == "NO_ERROR") {
        	let t = data.data;
        	for (var i = t.length - 1; i >= 0; i--) {
        		if (t[i].id === "4") {
        			let a = [];
        			for (var j = t[i].categories.length - 1; j >= 0; j--) {
        				a.push(t[i].categories[j].id);
        				xService.s("publicsecurity", a);
        			}
        		}
        	}
        } else {}
    }, (err) => {
        if (err.errorCode == "UNAUTHORIZED") {
            $state.go('portal');
        } else {}
    }).finally(() => {
        $rootScope.loading = false;
    });
};