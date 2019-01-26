const urlPrefix = "http://127.0.0.1/project/maoyan/index.php/";

//首页(电影列表-正在上映)

//电影列表页 开始==================================================
//	接口1：正在上映
//		类型： GET
//		参数1：token=''	可选
//案例：http://127.0.0.1/project/maoyan/index.php/api/movieOnInfoList?token=
//原始地址： http://m.maoyan.com/ajax/movieOnInfoList?token=

var movieOnInfoListUrl = urlPrefix + "api/movieOnInfoList";

//	接口2：即将上映
//		类型： GET
//		参数1：token=''	可选
//		参数2： limit=10	每页显示的数据	可选
//	案例：http://127.0.0.1/project/maoyan/index.php/api/comingList?token=&limit=10
//	原始地址： http://m.maoyan.com/ajax/comingList?ci=30&token=&limit=10

var comingListUrl = urlPrefix + "api/comingList";

//	接口3：近期最受期待
//		类型： GET
//		参数1： token=''	可选
//		参数2： limit=10	每页显示的数据  可选
//	案例：http://127.0.0.1/project/maoyan/index.php/api/mostExpected?limit=10&token=
//	原始地址： http://m.maoyan.com/ajax/mostExpected?ci=30&limit=10&offset=0&token=

var mostExpectedUrl = urlPrefix + "api/mostExpected";

//电影列表页 结束==================================================

//电影详情页 开始==================================================
//	接口1：电影详情接口
//		类型： GET
//		参数1：movieId=1240159	电影id
//案例：http://127.0.0.1/project/maoyan/index.php/api/movieDetail?movieId=1240159
//原始地址： http://m.maoyan.com/ajax/detailmovie?movieId=1240159

const movieDetailUrl = urlPrefix + "api/movieDetail";

//	接口2：电影对应播放影院接口
//		类型： GET
//		参数1：movieId=1240159	电影id
//		参数2：day=2019-01-08	日期
//		参数2：cityId=1			城市id
//案例：http://127.0.0.1/project/maoyan/index.php/api/movie
//原始地址：
//POST http://m.maoyan.com/ajax/movie
/*
movieId: 1206875
day: 2019-01-08
offset: 0
limit: 20
districtId: -1
lineId: -1
hallType: -1
brandId: -1
serviceId: -1
areaId: -1
stationId: -1
item: 
updateShowDay: true
reqId: 1546911684510
cityId: 59
*/
const movieUrl = urlPrefix + "api/movie";

//	接口3：精选评论
//		类型： GET
//		参数1：movieId=1240159	电影id
//案例：http://127.0.0.1/project/maoyan/index.php/api/comments
//原始地址： http://m.maoyan.com/review/v2/comments.json?movieId=1240159

const commentsUrl = urlPrefix + "api/comments";

//电影详情页 结束==================================================

//城市列表页开始==================================================
//	接口1：城市列表页
//		类型： GET
//		参数：无
//	案例：http://127.0.0.1/project/maoyan/index.php/api/cityList
//	原始地址：

const cityListUrl = urlPrefix + "api/cityList";

//城市列表页 结束==================================================
//

//电影搜索页开始==================================================
//	接口1：搜索接口
//		类型： GET
//		参数1: kw=huixiang	搜索关键字
//		参数2: stype=-1		-1表示搜索结果为电影和影院，0表示搜索结果为电影，2表示搜索结果为影院
//	案例：http://127.0.0.1/project/maoyan/index.php/api/search?kw=ying&stype=-1
//	电影搜索原始地址： http://m.maoyan.com/ajax/search?kw=h&stype=-1
//	影院搜索原始地址：http://m.maoyan.com/ajax/search?kw=h&cityId=150&stype=2

const searchUrl = urlPrefix + "api/search";

//电影搜索页 结束==================================================

//影院列表页开始==================================================
//	接口1：影院列表接口
//		类型： GET
//		参数1: limit=10		可选
//	案例：http://127.0.0.1/project/maoyan/index.php/api/cinemaList?limit=20
//	原始地址：http://m.maoyan.com/ajax/cinemaList?limit=20

const cinemaListUrl = urlPrefix + "api/cinemaList";

//	接口2：影院过滤接口
//		类型： GET
//		参数1:无
//	案例：http://127.0.0.1/project/maoyan/index.php/api/filterCinemas
//	原始地址：http://m.maoyan.com/ajax/filterCinemas?ci=1

const filterCinemasUrl = urlPrefix + "api/filterCinemas";

//影院列表页 结束==================================================

//影院详情页 结束==================================================
//	接口1：影院详情接口/超值套餐
//		类型： GET
//		参数1: cinemaId=135		影院id
//	案例：http://127.0.0.1/project/maoyan/index.php/api/cinemaDetail?cinemaId=135
//	原始地址：http://m.maoyan.com/ajax/cinemaDetail?cinemaId=135

const cinemaDetailUrl = urlPrefix + "api/cinemaDetail";

//	接口2：影院详情地址和特色接口
//		类型： GET
//		参数1: cinemaId=135		影院id
//	案例：http://127.0.0.1/project/maoyan/index.php/api/cinemaAjaxDetail?cinemaId=135
//	原始地址：http://m.maoyan.com/ajax/cinemaAjaxDetail?cinemaId=135

const cinemaAjaxDetailUrl = urlPrefix + "api/cinemaAjaxDetail";

//	接口3：来电狂响影院购票页接口
//		类型： GET
//		参数1: seqNo 场次
//	案例：http://127.0.0.1/project/maoyan/index.php/api/seatingPlan
//	原始地址：http://m.maoyan.com/ajax/seatingPlan
const seatingPlanUrl = urlPrefix + "api/seatingPlan";

//	接口4：影院超值套餐圣诞桶
//		类型： GET
//		参数1:无
//	案例：http://127.0.0.1/project/maoyan/index.php/api/price
//	原始地址：http://m.maoyan.com/ajax/price
const priceUrl = urlPrefix + "api/price";

//影院详情页 结束==================================================

//登录逻辑
//Step1: 发送手机号,获取验证码
//类型: POST
//参数1: mobile=13611112222
//返回: 验证码发送成功
//	案例：http://127.0.0.1/project/maoyan/index.php/api/signup
const signupUrl = urlPrefix + "api/signup";

//Step2: 发送用户输入验证码给后台,检测是否ok
//signupCheck
//类型: POST
//参数1: mobile=13611112222
//参数2: code=4444
//返回: 验证码是否ok
//	案例：http://127.0.0.1/project/maoyan/index.php/api/signupCheck
const signupCheckUrl = urlPrefix + "api/signupCheck";

//Step3: 发送手机号,验证码, 密码, 执行注册
//signupSetPassword
//类型: POST
//参数1: mobile=13611112222
//参数2: code=4444
//参数3: password=123456
//返回: 是否注册成功
//	案例：http://127.0.0.1/project/maoyan/index.php/api/signupSetPassword
const signupSetPasswordUrl = urlPrefix + "api/signupSetPassword";

//密码登录
//userPasswordLogin
//类型: POST
//参数1: mobile=13611112222
//参数2: password=123456
//返回: 是否登录成功
//	案例：http://127.0.0.1/project/maoyan/index.php/api/userPasswordLogin
const userPasswordLoginUrl = urlPrefix + "api/userPasswordLogin";

//短信验证码登录
//Step1: 获取验证码
//mobileLoginCode
//类型: POST
//参数1: mobile=13611112222
//返回: 返回是否成功发送验证码
//	案例：http://127.0.0.1/project/maoyan/index.php/api/mobileLoginCode
const mobileLoginCodeUrl = urlPrefix + "api/mobileLoginCode";

//Step2: 真正的登录
//userMobileLogin
//类型: POST
//参数1: mobile=13611112222
//参数2: code=4444
//返回: 返回是否登录成功
//	案例：http://127.0.0.1/project/maoyan/index.php/api/userMobileLogin
const userMobileLoginUrl = urlPrefix + "api/userMobileLogin";

//注销
//userLogout
//类型: POST
//参数1: userId=1
//参数2: token=$#@!#$@#!$@!#$
//返回: 返回是否注销成功
//	案例：http://127.0.0.1/project/maoyan/index.php/api/userLogout
const userLogoutUrl = urlPrefix + "api/userLogout";

//创建订单
//createOrder
//类型: POST
//'seqNo' => $seqNo,
//'sectionId' => $sectionId,
//'sectionName' => $sectionName,
//'seats' => $seats,
//'userPhone' => $userPhone,
//'userId' => $userId,
//'token' => $cinema
//'cinema' => $cinema
// movie
// hall
// show
//返回: 返回是否创建成功
//	案例：http://127.0.0.1/project/maoyan/index.php/api/createOrder
const createOrderUrl = urlPrefix + "api/createOrder";

//获取某个订单信息
//orderInfo
//类型: GET
//'orderId' => $orderId,
//'userId' => $userId,
//'token' => $cinema
//返回: 返回订单信息
//	案例：http://127.0.0.1/project/maoyan/index.php/api/orderInfo
const orderInfoUrl = urlPrefix + "api/orderInfo";

//获取我的订单信息
//myOrderList
//类型: GET
//'userId' => $userId,
//'token' => $cinema
//'userPhone' => $userPhone
//返回: 返回订单列表
//	案例：http://127.0.0.1/project/maoyan/index.php/api/myOrderList
const myOrderListUrl = urlPrefix + "api/myOrderList";


module.exports = {
  urlPrefix,
  movieOnInfoListUrl,
  movieDetailUrl,
  movieUrl,
  mostExpectedUrl,
  comingListUrl,
  cityListUrl,
  searchUrl,
  cinemaListUrl,
  cinemaDetailUrl,
  cinemaAjaxDetailUrl,
  filterCinemasUrl,
  commentsUrl,
  seatingPlanUrl,
  priceUrl,

  //注册/登录/注销
  signupUrl,
  signupCheckUrl,
  signupSetPasswordUrl,
  userPasswordLoginUrl,
  mobileLoginCodeUrl,
  userMobileLoginUrl,
  userLogoutUrl,

  createOrderUrl,
  orderInfoUrl,
  myOrderListUrl
};


/*
export default {
  urlPrefix,
  movieOnInfoListUrl,
  movieDetailUrl,
  movieUrl,
  mostExpectedUrl,
  comingListUrl,
  cityListUrl,
  searchUrl,
  cinemaListUrl,
  cinemaDetailUrl,
  cinemaAjaxDetailUrl,
  filterCinemasUrl,
  commentsUrl,
  seatingPlanUrl,
  priceUrl,

  //注册/登录/注销
  signupUrl,
  signupCheckUrl,
  signupSetPasswordUrl,
  userPasswordLoginUrl,
  mobileLoginCodeUrl,
  userMobileLoginUrl,
  userLogoutUrl,

  createOrderUrl,
  orderInfoUrl,
  myOrderListUrl
};
*/