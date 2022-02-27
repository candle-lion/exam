$(function () {
    //检查用户是否登陆，若已登陆则直接跳转到主界面
    let token = $.cookie('token');
    if (token == undefined || token == "") {
        showLoginInterface();
    } else {
        showMainInterface();
    }
});

/**
 * 显示登陆界面
 */
function showLoginInterface() {
    webix.ui({
        view: "window",
        id: "login_window_panel",
        container: "library",
        head: "平&nbsp;台&nbsp;登&nbsp;录",
        position: "center",
        width: 300,
        css: {"opacity": 0.9, "border-radius": "5px"},
        body: {
            view: "form",
            id: 'login_user_form',
            name: "登录窗口",
            elements: [
                {view: "text", name: "username", placeholder: "请输入用户名"},
                {view: "text", name: "password", placeholder: "请输入密码", type: "password"},
                {
                    cols: [
                        {view: "text", name: "verifyCode", placeholder: "验证码", width: 120},
                        {template: "<img class=\"verifyCode\" onclick=\"changeCode()\" src=\"/library/user/verift-code\">"}
                    ]
                },
                {
                    cols: [
                        {
                            view: "button", value: "注册账号", click: function () {
                                $$("login_window_panel").hide();
                                $$("login_user_form").clear();
                                $$("register_window_panel").show();
                                changeCode();
                            }
                        },
                        {
                            view: "button", value: "忘记密码", click: function () {
                                $$("login_window_panel").hide();
                                $$("login_user_form").clear();
                                $$("forgot_password_window_panel").show();
                                changeCode();
                            }
                        }
                    ]
                },
                {view: "button", value: "登录", css: "webix_primary", click: userLogin}
            ],
            rules: {
                username: webix.rules.isNotEmpty,
                password: webix.rules.isNotEmpty,
                verifyCode: webix.rules.isNotEmpty
            }
        }
    });

    showRegisterInterface();
    showForgotInterface();
    $$("login_window_panel").show();
}

/**
 * 显示忘记密码界面
 */
function showForgotInterface() {
    webix.ui({
        view: "window",
        id: "forgot_password_window_panel",
        container: "library",
        head: "忘&nbsp;记&nbsp;密&nbsp;码",
        position: "center",
        width: 300,
        css: {"opacity": 0.9, "border-radius": "5px"},
        body: {
            view: "form",
            id: 'forgot_password_form',
            name: "登录窗口",
            elements: [
                {view: "text", name: "username", placeholder: "请输入用户名"},
                {view: "text", name: "idCard", placeholder: "请输入身份证号码"},
                {view: "text", name: "password", placeholder: "请输入密码", type: "password"},
                {
                    cols: [
                        {view: "text", name: "verifyCode", placeholder: "验证码", width: 120},
                        {template: "<img class=\"verifyCode\" onclick=\"changeCode()\" src=\"/library/user/verift-code\">"}
                    ]
                },
                {
                    cols: [
                        {view: "button", value: "返回", css: "webix_primary", click: forgotPasswordBack},
                        {view: "button", value: "确认", css: "webix_primary", click: forgotPassword}
                    ]
                }
            ],
            rules: {
                username: webix.rules.isNotEmpty,
                password: webix.rules.isNotEmpty,
                idCard: webix.rules.isNotEmpty,
                verifyCode: webix.rules.isNotEmpty
            }
        }
    });
}

/**
 * 显示注册界面
 */
function showRegisterInterface() {
    webix.ui({
        view: "window",
        id: "register_window_panel",
        container: "library",
        head: "用&nbsp;户&nbsp;注&nbsp;册",
        position: "center",
        width: 300,
        css: {"opacity": 0.9, "border-radius": "5px"},
        body: {
            view: "form",
            id: 'register_user_form',
            name: "登录窗口",
            elements: [
                {view: "text", name: "username", placeholder: "请输入用户名"},
                {view: "text", name: "password", placeholder: "请输入密码", type: "password"},
                {view: "text", name: "name", placeholder: "请输入姓名"},
                {view: "text", name: "sex", placeholder: "请选择性别"},
                {view: "text", name: "idCard", placeholder: "请输入身份证号码"},
                {view: "text", name: "mobile", placeholder: "请输入移动电话"},
                {view: "text", name: "email", placeholder: "请输入邮箱"},
                {
                    cols: [
                        {view: "text", name: "verifyCode", placeholder: "验证码", width: 120},
                        {template: "<img class=\"verifyCode\" onclick=\"changeCode()\" src=\"/library/user/verift-code\">"}
                    ]
                },
                {
                    cols: [
                        {view: "button", value: "返回", css: "webix_primary", click: userRegisterBack},
                        {view: "button", value: "注册", css: "webix_primary", click: userRegister}
                    ]
                }
            ],
            rules: {
                username: webix.rules.isNotEmpty,
                password: webix.rules.isNotEmpty,
                name: webix.rules.isNotEmpty,
                sex: webix.rules.isNotEmpty,
                idCard: webix.rules.isNotEmpty,
                mobile: webix.rules.isNotEmpty,
                email: webix.rules.isEmail,
                verifyCode: webix.rules.isNotEmpty
            }
        }
    });
}

/**
 * 显示主界面
 */
function showMainInterface() {

    //页面初始化完成后，加载方法
    webix.ui({
        id: "library-main-interface",
        container: "library",
        height: document.body.scrollHeight,
        width: document.body.scrollWidth,
        rows: [
            {
                view: "toolbar",
                width: document.body.scrollWidth * 0.1,
                elements: [
                    topLeftMenuView(),
                    topHomeMenuView(), {
                        width: document.body.scrollWidth * 0.75
                    },
                    topRightMenuView(),
                    {
                        width: document.body.scrollWidth * 0.05,
                    }
                ]
            },
            {
                height: window.screen.height * 0.815,
                cols: [leftMenuSidebarView(), {
                    id: "library-content-view",
                    type: "space",
                    view: "accordion",
                    height: window.screen.height * 0.78,
                    rows: []
                }]
            }
        ]
    }).show();

    switch (window.location.hash) {
        case "#book":
            showBookView();
            break;
        case "#borrowing":
            showBorrowView();
            break;
        case "#approval":
            showApprovalView();
            break;
        case "#user":
            showUserView();
            break;
        case "#personal":
            webix.message("Selected: 个人管理");
            break;
    }
}