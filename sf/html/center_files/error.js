/*
 * The file is used to verify form information
 * show some error notices
 */
var iError = {};

iError = {
	'unknow_error' : '未知错误',
	'register' : {
		'outemail' : {'required' : '电子邮件没有填写','email' : '请填写正确的邮箱','uppercase':'邮箱不能有大写字母', 'remote' : '该邮箱已被注册'},
		'oldpassword' : {'required' : '旧密码没有填写','sMinLength': '密码至少{0}个字符','sMaxLength': '旧密码最多{0}个字符', 'pwdck':'旧密码请勿使用特殊字符'},
		'password' : {'required' : '密码没有填写','sMinLength': '密码至少{0}个字符','sMaxLength': '密码最多{0}个字符', 'pwdck':'密码请勿使用特殊字符'},
		'confirmPass' : {'required' : '确认密码没有填写','equalTo' : '两次输入密码不一致'},
		'telpassword' : {'required' : '电话密码没有填写','telpwdck':'电话密码应为6位数字'},
		'confirmtelPass' : {'required' : '确认电话密码没有填写','equalTo' : '确认电话密码不一致'},		
		'authCode' : {'required' : '验证码不能为空','remote' : '验证码不正确'},
		'agreement' : {'required' : '需要同意使用协议'},
		'company_name' : {'required' : '公司名称不能为空'},
		'district' : {'positive' : '所在地不能为空'} ,
		'addr' : {'required' : '公司地址不能为空'}
	},
	'baseInfoEdit' : {
		'nick' : {'required' : '昵称没有填写','sMinLength' : '昵称至少{0}个字符','remote' : '昵称已存在'},
		'usual_email' : {'required' : '电子邮件没有填写','email' : '请填写正确的Email'},
		'gender' : {'required' : '请选择性别'},
		'province_id' : {'required' : '请选择所在地'},
		'mobile' : {'mobile' : '手机号码格式不正确'},
		'qq' : {'isQQ' : 'QQ号码格式填写不正确'},
		'site' : {'url' : '网址格式不正确'},
		'msn' : {'msn' : 'MSN号码格式不正确'}
	}
};