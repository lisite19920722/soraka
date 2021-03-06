export default ($stateProvider, $urlRouterProvider, $locationProvider) => {
  'ngInject';

  $stateProvider

    //登陆
    .state('portal', {
      url: '/',
      templateUrl: 'app/auth/portal/portal.html',
      controller: 'portalCtrl'
    })
    // 样例
    .state('example', {
      url: '/example',
      templateUrl: 'app/in/example/example.html',
      controller: 'exampleCtrl'
    })
    // 登陆之后的界面
    .state('app', {
      abstract: true,
      url: '/app',
      templateUrl: 'app/app.html',
      controller: 'appCtrl'
    })
    // 首页
    .state('app.in', {
      abstract: true,
      url: '/in',
      templateUrl: 'app/in/in.html', 
      controller: 'inCtrl'
    })
    .state('app.in.home', {
      url: '/home',
      templateUrl: 'app/in/home/home.html',
      controller: 'homeCtrl'
    })
    .state('app.in.me', {
      url: '/me',
      templateUrl: 'app/in/me/me.html',
      controller: 'meCtrl'
    })
    .state('app.in.datepick', {
      url: '/datepick',
      templateUrl: 'app/in/datepick/datepick.html',
      controller: 'datepickCtrl'
    })
    .state('app.in.changepsw', {
      url: '/changepsw',
      templateUrl: 'app/in/changepsw/changepsw.html',
      controller: 'changepswCtrl'
    })
    // 经济
    .state('app.economy', {
      abstract: true,
      name: 'economy',
      url: '/economy',
      templateUrl: 'app/in/economy/economy.html', 
      controller: 'economyCtrl'
    })
    .state('app.economy.economylist', {
      url: '/economylist?categoryId',
      name: 'economylist',
      templateUrl: 'app/in/economy/one/economylist.html',
      controller: 'economylistCtrl'
    })
    .state('app.economy.bystate', {
      url: '/bystate/?categoryId&state',
      name: 'bystate',
      templateUrl: 'app/in/economy/one/bystate/bystate.html',
      controller: 'economyByStateCtrl'
    })
    .state('app.economy.detail', {
      url: '/detail?kpiId',
      name: 'economydetail',
      templateUrl: 'app/in/economy/two/economydetail.html',
      controller: 'economydetailCtrl'
    })
    .state('app.economy.economy',{
     url:'/economy/third/economy',
     templateUrl:'app/in/economy/EconomyThird/thirddetail.html',
     controller:'thirdgdpcontroller'
    })
    .state('app.economy.finance',{
     url:'/economy/third/fianance',
     templateUrl:'app/in/economy/EconomyThird/thirdfinance/thirdfinance.html',
     controller:'thirdfinancecontroller'
    })
    .state('app.economy.thirdinvest',{
     url:'/economy/third/invest',
     templateUrl:'app/in/economy/EconomyThird/thirdinvest/thirdinvest.html',
     controller:'thirdinvestcontroller'
    })
    .state('app.economy.thirdindustry',{
     url:'/economy/third/industry',
     templateUrl:'app/in/economy/EconomyThird/thirdindustry/thirdindustry.html',
     controller:'thirdindustrycontroller'
    })
    .state('app.economy.thirdfisical',{
     url:'/economy/third/fisical',
     templateUrl:'app/in/economy/EconomyThird/thirdfisical/thirdfisical.html',
     controller:'thirdfisicalcontroller'
    })
    .state('app.economy.select',{
     url:'/economy/third/select',
     templateUrl:'app/in/economy/EconomyThird/select.html'
    })
    // 环境
    .state('app.environment', {
      abstract: true,
      name: 'environment',
      url: '/environment',
      templateUrl: 'app/in/Environment/Environment.html', 
      controller: 'environmentCtrl'
    })
    .state('app.environment.environmentlist', {
      url: '/environmentlist?categoryId',
      name: 'environmentlist',
      templateUrl: 'app/in/Environment/one/environmentlist.html',
      controller: 'environmentlistCtrl'
    })
    .state('app.environment.bystate', {
      url: '/bystate/?categoryId&state',
      name: 'bystate',
      templateUrl: 'app/in/Environment/one/bystate/bystate.html',
      controller: 'environmentByStateCtrl'
    })
    .state('app.environment.detail', {
      url: '/detail?kpiId',
      name: 'environmentdetail',
      templateUrl: 'app/in/Environment/two/EnvironmentDetail.html',
      controller: 'environmentdetailCtrl'
    })
    .state('app.environment.waterThree', {
      url: '/waterThree',
      templateUrl: 'app/in/Environment/three/water/waterThree.html',
      controller: 'waterThreeCtrl'
    })
    .state('app.environment.airThree', {
      url: '/airThree',
      templateUrl: 'app/in/Environment/three/air/airThree.html',
      controller: 'airThreeCtrl'
    })
    .state('app.environment.landThree', {
      url: '/landThree',
      templateUrl: 'app/in/Environment/three/land/landThree.html',
      controller: 'landThreeCtrl'
    })
    .state('app.environment.energyThree', {
      url: '/energyThree',
      templateUrl: 'app/in/Environment/three/energy/energyThree.html',
      controller: 'energyThreeCtrl'
    })

    
    // 公共安全
    .state('app.publicsecurity', {
      abstract: true,
      name: 'publicsecurity',
      url: '/publicsecurity',
      templateUrl: 'app/in/publicsecurity/publicsecurity.html', 
      controller: 'publicsecurityCtrl'
    })
    .state('app.publicsecurity.publicsecuritylist', {
      url: '/publicsecuritylist?categoryId',
      name: 'publicsecuritylist',
      templateUrl: 'app/in/publicsecurity/one/publicsecuritylist.html',
      controller: 'publicsecuritylistCtrl'
    })
    .state('app.publicsecurity.bystate', {
      url: '/bystate/?categoryId&state',
      name: 'bystate',
      templateUrl: 'app/in/publicsecurity/one/bystate/bystate.html',
      controller: 'publicsecurityByStateCtrl'
    })
    .state('app.publicsecurity.detail', {
      url: '/detail?kpiId',
      name: 'publicsecuritydetail',
      templateUrl: 'app/in/publicsecurity/two/publicsecuritydetail.html',
      controller: 'publicsecuritydetailCtrl'
    })
    .state('app.publicsecurity.police', {
      url: '/detail/police',
      templateUrl: 'app/in/publicsecurity/three/police/police.html',
      controller: 'policeCtrl'
    })
    .state('app.publicsecurity.criminal', {
      url: '/detail/criminal',
      templateUrl: 'app/in/publicsecurity/three/police/criminal.html',
      controller: 'criminalCtrl'
    })
    .state('app.publicsecurity.policecall', {
      url: '/detail/policecall',
      templateUrl: 'app/in/publicsecurity/three/police/policeCall.html',
      controller: 'policeCallCtrl'
    })
    .state('app.publicsecurity.accident', {
      url: '/detail/accident',
      templateUrl: 'app/in/publicsecurity/three/accident/accidentthree.html',
      controller: 'accidentthreeCtrl'
    })
    .state('app.publicsecurity.fire', {
      url: '/detail/fire',
      templateUrl: 'app/in/publicsecurity/three/fire/firethree.html',
      controller: 'firethreeCtrl'
    })
    .state('app.publicsecurity.petition', {
      url: '/detail/petition',
      templateUrl: 'app/in/publicsecurity/three/petition/petitionthree.html',
      controller: 'petitionthreeCtrl'
    })
    .state('app.publicsecurity.safety', {
      url: '/detail/safety',
      templateUrl: 'app/in/publicsecurity/three/safety/safetythree.html',
      controller: 'safetythreeCtrl'
    })
    .state('app.publicsecurity.psthirdselect', {
      url: '/psthirdselect',
      templateUrl: 'app/in/publicsecurity/three/psthirdselect.html'
    })

    // 民生
    .state('app.livehood', {
      abstract: true,
      name: 'livehood',
      url: '/livehood',
      templateUrl: 'app/in/livehood/livehood.html', 
      controller: 'livehoodCtrl'
    })
    .state('app.livehood.livehoodlist', {
      url: '/livehoodlist?categoryId',
      name: 'livehoodlist',
      templateUrl: 'app/in/livehood/one/livehoodlist.html',
      controller: 'livehoodlistCtrl'
    })
    .state('app.livehood.bystate', {
      url: '/bystate/?categoryId&state',
      name: 'bystate',
      templateUrl: 'app/in/livehood/one/bystate/bystate.html',
      controller: 'livehoodByStateCtrl'
    })
    .state('app.livehood.detail', {
      url: '/detail?kpiId',
      name: 'livehooddetail',
      templateUrl: 'app/in/livehood/two/livehooddetail.html',
      controller: 'livehooddetailCtrl'
    })
    //民生人口三级界面
    .state('app.livehood.PopulationStructure',{
      url:'/PopulationThree/PopulationStructure',
      templateUrl:'app/in/livehood/three/population/populationThree.html',
      controller:'populationThreeCtrl'
    })
    .state('app.livehood.TerminalPopulation',{
      url:'/PopulationThree/TerminalPopulation',
      templateUrl:'app/in/livehood/three/population/populationThree.html',
      controller:'populationThreeCtrl'
    })
    .state('app.livehood.BornDeath',{
      url:'/PopulationThree/BornDeath',
      templateUrl:'app/in/livehood/three/population/populationThree.html',
      controller:'populationThreeCtrl'
    })
    .state('app.livehood.BearingWomen',{
      url:'/PopulationThree/BearingWomen',
      templateUrl:'app/in/livehood/three/population/populationThree.html',
      controller:'populationThreeCtrl'
    })
    .state('app.livehood.FirstMarriage',{
      url:'/PopulationThree/FirstMarriage',
      templateUrl:'app/in/livehood/three/population/populationThree.html',
      controller:'populationThreeCtrl'
    })
    //价格指数三级界面
    .state('app.livehood.priceThree',{
      url:'/priceThree/priceThree',
      templateUrl:'app/in/livehood/three/price/priceThree.html',
      controller:'priceThreeCtrl'
    })
    .state('app.pricehome.citizen',{
      url:'/pricehome',
      templateUrl:'app/in/livehood/three/price/priceThreeNewOne.html',
      controller:'priceThreeCtrl'
    })
    .state('app.pricehome',{
      abstract: true,
      url:'/pricehome',
      templateUrl:'app/in/livehood/pricehome.html'
    }) 
    .state('app.pricehome.agriculture',{
      url:'/pricehome',
      templateUrl:'app/in/livehood/three/price/priceThreeNewTwo.html',
      controller:'priceThreeCtrl'
    })   
    //社会保险三级界面
    //   .state('app.inThDetail', {
    //   url: '/InsuranceChart/UrbanBasicEndowmentInsuranceData',
    //   name: 'UBEI',
    //   templateUrl: 'app/in/livehood/three/insurance/insurance.html',
    //   controller: 'insuranceCtrl'
    // })


      //社保三级子界面
 .state('app.livehood.UrbanBasicEndowmentInsuranceData', {
      url: '/InsuranceChart/UrbanBasicEndowmentInsuranceData',
      name: 'UrbanBasicEndowmentInsuranceData',
      templateUrl: 'app/in/livehood/three/insurance/inThDetail/inThDetail.html',
      controller: 'insuranceCtrl'
    })
      .state('app.livehood.UnemploymentInsuranceData', {
      url: '/InsuranceChart/UnemploymentInsuranceData',
      name: 'UnemploymentInsuranceData',
      templateUrl: 'app/in/livehood/three/insurance/inThDetail/inThDetail.html',
      controller: 'insuranceCtrl'
    })
         .state('app.livehood.UrbanBasicMedicalInsuranceData', {
      url: '/InsuranceChart/UrbanBasicMedicalInsuranceData',
      name: 'UrbanBasicMedicalInsuranceData',
      templateUrl: 'app/in/livehood/three/insurance/inThDetail/inThDetail.html',
      controller: 'insuranceCtrl'
    })
         .state('app.livehood.UrbanResidentsMedicalInsuranceData', {
      url: '/InsuranceChart/UrbanResidentsMedicalInsuranceData',
      name: 'UrbanResidentsMedicalInsuranceData',
      templateUrl: 'app/in/livehood/three/insurance/inThDetail/inThDetail.html',
      controller: 'insuranceCtrl'
    })
         .state('app.livehood.EmploymentInjuryInsuranceData', {
      url: '/InsuranceChart/EmploymentInjuryInsuranceData',
      name: 'EmploymentInjuryInsuranceData',
      templateUrl: 'app/in/livehood/three/insurance/inThDetail/inThDetail.html',
      controller: 'insuranceCtrl'
    })
            .state('app.livehood.MaternityInsuranceData', {
      url: '/InsuranceChart/MaternityInsuranceData',
      name: 'MaternityInsuranceData',
      templateUrl: 'app/in/livehood/three/insurance/inThDetail/inThDetail.html',
      controller: 'insuranceCtrl'
    })
      .state('app.livehood.ResidentsBasicEndowmentInsuranceData', {
      url: '/InsuranceChart/ResidentsBasicEndowmentInsuranceData',
      name: 'ResidentsBasicEndowmentInsuranceData',
      templateUrl: 'app/in/livehood/three/insurance/inThDetail/inThDetail.html',
      controller: 'insuranceCtrl'
    })


        
    //公共事业
    .state('app.publicService', {
      abstract: true,
      name: 'publicService',
      url: '/publicService',
      templateUrl: 'app/in/publicService/publicService.html', 
      controller: 'publicServiceCtrl'
    })
    .state('app.publicService.publicServicelist', {
      url: '/publicServicelist?categoryId',
      name: 'publicServicelist',
      templateUrl: 'app/in/publicService/one/publicServicelist.html',
      controller: 'publicServicelistCtrl'
    })
    .state('app.publicService.bystate', {
      url: '/bystate/?categoryId&state',
      name: 'bystate',
      templateUrl: 'app/in/publicService/one/bystate/bystate.html',
      controller: 'publicServiceByStateCtrl'
    })
    .state('app.publicService.detail', {
      url: '/detail?kpiId',
      name: 'publicServicedetail',
      templateUrl: 'app/in/publicService/two/publicServicedetail.html',
      controller: 'publicServicedetailCtrl'
    })
    .state('app.publicService.eduGuarantee', {
      url: '/education/eduGuarantee',
      templateUrl: 'app/in/publicService/three/education/eduGuarantee.html',
      controller: 'eduGuaranteeCtrl'
    })
    .state('app.publicService.hlthRscSvc', {
      url: '/healthCare/hlthRscSvc',
      templateUrl: 'app/in/publicService/three/healthCare/hlthRscSvc.html',
      controller: 'phealthCareCtrl'
    })
    .state('app.publicService.hlthPblcHlth',{
    url:'/healthCare/hlthPblcHlth',
    templateUrl:'app/in/publicService/three/healthCare/hlthPblcHlth.html',
    controller:'hlthPblcHlthCtrl'
    })
    .state('app.publicService.ptelecom', {
      url: '/detail/telecom',
      templateUrl: 'app/in/publicService/three/telecom/ptelecom.html',
      controller: 'ptelecomCtrl'
    })
    .state('app.publicService.psngrTransportation',{
      url:'/traffic/psngrTransportation',
      templateUrl:'app/in/publicService/three/traffic/psngrTransportation.html',
      controller:'psngrTransportationCtrl'
    })
    .state('app.publicService.trnspAdminPermit',{
      url:'/traffic/trnspAdminPermit',
      templateUrl:'app/in/publicService/three/traffic/trnspAdminPermit.html',
      controller:'trnspAdminPermitCtrl'
    })
    .state('app.publicService.gdsTrans',{
      url:'/traffic/gdsTrans',
      templateUrl:'app/in/publicService/three/traffic/gdsTrans.html',
      controller:'gdsTransCtrl'
    })
    .state('app.publicService.driverTrain',{
      url:'/traffic/driverTrain',
      templateUrl:'app/in/publicService/three/traffic/driverTrain.html',
      controller:'driverTrainCtrl'
    })
    .state('app.publicService.trnspInfstCnstr',{
      url:'/traffic/trnspInfstCnstr',
      templateUrl:'app/in/publicService/three/traffic/trnspInfstCnstr.html',
      controller:'trnspInfstCnstrCtrl'
    })
    // .state('app.traffichome',{
    //   abstract: true,
    //   url:'/traffic',
    //   templateUrl:'app/in/publicService/traffichome.html'
    // }) 

    
    
    // 城市管理
    .state('app.cm', {
      abstract: true,
      name: 'cm',
      url: '/cm',
      templateUrl: 'app/in/citymanager/cm.html', 
      controller: 'cmCtrl'
    })
    .state('app.cm.cmlist', {
      url: '/cmlist?categoryId',
      name: 'cmlist',
      templateUrl: 'app/in/citymanager/one/cmlist.html',
      controller: 'cmlistCtrl'
    })
    .state('app.cm.bystate', {
      url: '/bystate/?categoryId&state',
      name: 'bystate',
      templateUrl: 'app/in/citymanager/one/bystate/bystate.html',
      controller: 'cmByStateCtrl'
    })
    .state('app.cm.detail', {
      url: '/detail?kpiId',
      name: 'cmdetail',
      templateUrl: 'app/in/citymanager/two/cmdetail.html',
      controller: 'cmdetailCtrl'
    })
    .state('app.cm.cmrefuse', {
      url: '/detail/refuse',
      templateUrl: 'app/in/citymanager/three/refuse/cmrefuse.html',
      controller: 'cmrefuseCtrl'
    })
    .state('app.cm.cmpunish', {
      url: '/detail/punish',
      templateUrl: 'app/in/citymanager/three/punish/cmpunish.html',
      controller: 'cmpunishCtrl'
    })
    .state('app.cm.cmfix', {
      url: '/detail/fix',
      templateUrl: 'app/in/citymanager/three/fix/cmfix.html',
      controller: 'cmfixCtrl'
    })
    .state('app.cm.cmicm', {
      url: '/detail/icm',
      templateUrl: 'app/in/citymanager/three/icm/cmicm.html',
      controller: 'cmicmCtrl'
    })
    ;
    

  $urlRouterProvider.otherwise('/');
};
