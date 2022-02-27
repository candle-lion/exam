/**
 * 刷新验证码
 */
function changeCode() {
    let src = "/library/user/verift-code?" + new Date().getTime(); //加时间戳，防止浏览器利用缓存
    $('.verifyCode').attr("src", src);
}

/**
 * 用户登陆
 */
function userLogin() {
    if (!$$("login_user_form").validate()) {
        webix.message({type: "error", text: "登陆信息不正确,请检查!"});
        return;
    }
    let loginData = $$("login_user_form").getValues();
    webix.ajax().headers({
        'Content-Type': 'application/json'
    }).post("/library/user/login", loginData).then(function (response) {
        let responseText = JSON.parse(response.text());
        $.cookie('token', responseText.token);

        $$("login_window_panel").hide();

        showMainInterface();
    }).fail(function (response) {
        exceptionHandler(response);
        changeCode();
    });
}

/**
 * 用户注册
 */
function userRegister() {
    if (!$$("register_user_form").validate()) {
        webix.message({type: "error", text: "注册信息不正确,请检查!"});
        return;
    }
    let registerData = $$("register_user_form").getValues();
    webix.ajax().headers({
        'Content-Type': 'application/json'
    }).post("/library/user", registerData).then(function (response) {
        console.log(response);
        $$("register_window_panel").hide();
        $$("login_window_panel").show();
        changeCode();
    }).fail(function (xhr) {
        exceptionHandler(response);
        changeCode();
    });
}

function userRegisterBack() {
    changeCode();
    $$("register_user_form").clear();
    $$("register_window_panel").hide();
    $$("login_window_panel").show();
}

/**
 * 忘记密码
 */
function forgotPassword() {
    if (!$$("forgot_password_form").validate()) {
        webix.message({type: "error", text: "用户信息不正确,请检查!"});
        return;
    }
    let forgotData = $$("forgot_password_form").getValues();
    webix.ajax().headers({
        'Content-Type': 'application/json'
    }).post("/library/user/forgot", forgotData).then(function (response) {
        console.log(response);
        $$("forgot_password_window_panel").hide();
        $$("login_window_panel").show();
        changeCode();
    }).fail(function (xhr) {
        exceptionHandler(response);
        changeCode();
    });
}

function forgotPasswordBack() {
    changeCode();
    $$("forgot_password_form").clear();
    $$("forgot_password_window_panel").hide();
    $$("login_window_panel").show();
}