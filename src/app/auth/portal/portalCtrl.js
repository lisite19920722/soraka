/**
* 登陆控制器
* --Mondooo
*/
export default ($scope, $localStorage, $timeout, $state, $q, $sessionStorage, qService, accountRes, AuthTool) => {
    'ngInject';

    let TOKEN_KEY  = 'x-auth-token',
        USERNAME   = 'username',
        PASSWORD   = 'password',
        AUTOLOGIN  = 'ioc-kpi-autologin';

    // 自动登录
    const autoLogin = () => {
        if ($localStorage[AUTOLOGIN] && $localStorage[USERNAME] && $localStorage[PASSWORD]) {
            let info = {
                'X-Username': $localStorage[USERNAME],
                'X-Password': $localStorage[PASSWORD]
            };
            qService.httpPost(accountRes.account, {}, info, {}).then((data) => {
                if (data.errorCode == "NO_ERROR") {
                    console.log("自动登录, 用户信息验证成功");
                    // 存储登陆用户data和token
                    AuthTool.saveLoginInfo(data, data.headers[TOKEN_KEY]);
                    $state.go('app.in.home');
                } else {
                    $scope.errMessage = "出错了, 请重试";
                }
            }, (err) => {
                if (err.errorCode == "UNAUTHORIZED") {
                    $scope.errMessage = "密码已变更, 请重新登陆";
                    AuthTool.delLoginInfo();
                } else {
                    $scope.errMessage = "出错了, 请重试";
                }
            });
        }
    }();

    $scope.login = () => {
    	if (isNull($scope.loginAccount)) {
    		$scope.errMessage = "账号不能为空!";
    		$q((resolve, reject) => {
        		$timeout(() => {
        			$scope.errMessage = "";
        			resolve();
        		}, 1500);
            });
    		return;
    	};
    	let info = {
    		'X-Username': $scope.loginAccount,
            'X-Password': $scope.loginPassword
    	};
    	qService.httpPost(accountRes.account, {}, info, {}).then((data) => {
    		if (data.errorCode == "NO_ERROR") {
                // 如果用户选择自动登录, 则将其用户名和密码存到本地
                if ($scope.isAutoLogin) {
                    AuthTool.saveAutoLoginInfo($scope.loginAccount, $scope.loginPassword);
                    console.log("用户信息已保存, 启用自动登录");
                }
                // 存储登陆用户data和token
                AuthTool.saveLoginInfo(data, data.headers[TOKEN_KEY]);

    			$state.go('app.in.home');
    		} else {
                $scope.errMessage = "出错了, 请重试";
            }
    	}, (err) => {
            if (err.errorCode == "UNAUTHORIZED") {
                $scope.errMessage = "账号/密码不匹配!";
            } else {
                $scope.errMessage = "出错了, 请重试";
            }
    	});
    };

    let isNull = (value) => {
    	return typeof(value) == undefined || value == null;
    };

    // 设置内容居中
    $(function() {
        let contentH = 446; // 内容高度
        let clientH = $(window).height(); // 视口高度
        let marginT = (clientH - contentH) / 2 - 5;

        $(".index-module").css("margin-top", marginT + "px");
    });
};
