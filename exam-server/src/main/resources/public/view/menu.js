/**
 * 顶部左侧折叠/展开侧边栏
 */
function topLeftMenuView() {
    let view = {
        paddingY: 7,
        rows: [
            {
                view: "icon",
                icon: "mdi mdi-menu",
                tooltip: "单击折叠/展开侧边栏",
                click: function () {
                    $$("left-menu-sidebar").toggle();
                }
            }
        ]
    };
    return view;
}

/**
 * 顶部主页视图
 */
function topHomeMenuView() {

    let view = {
        template: "<div class='library-home'><img src='image/logo.png'/></div>",
        width: document.body.scrollWidth * 0.15,
        borderless: true,
        tooltip: "图书馆管理系统首页",
        onClick: {
            'library-home': function () {
                showHomeView();
                // webix.message("Selected: 首页")
            }
        }
    };

    return view;
}

/**
 * 顶部右侧消息提示、设置按钮等视图
 */
function topRightMenuView() {
    let view = {
        paddingY: 7,
        rows: [
            {
                margin: 8,
                cols: [
                    // {
                    //     view: "icon", icon: "mdi mdi-bell",
                    //     localId: "bell", badge: 3,
                    //     click: function () {
                    //         webix.message("Selected: 邮件提醒")
                    //     }
                    // },
                    {
                        view: "icon",
                        icon: "mdi mdi-settings",
                        tooltip: "设置",
                        click: function () {
                            showSettingView();
                            // webix.message("Selected: 设置")
                        }
                    },
                    {
                        view: "icon",
                        icon: "mdi mdi-logout-variant",
                        tooltip: "注销账号",
                        click: function () {
                            $.cookie('token', "");
                            window.location.reload();
                        }
                    }
                ]
            }
        ]
    };
    return view;
}

/**
 * 左侧菜单列表
 */
function leftMenuSidebarView() {
    let view = {
        id: "left-menu-sidebar",
        view: "sidebar",
        width: 150,
        data: [
            {id: "book", value: "书籍管理", icon: "mdi mdi-library-books"},
            {id: "borrowing", value: "借阅管理", icon: "mdi mdi-cart"},
            {id: "approval", value: "审批管理", icon: "mdi mdi-cart"},
            {id: "user", value: "用户管理", icon: "mdi mdi-account-multiple"},
            {id: "personal", value: "个人管理", icon: "mdi mdi-account-box"}
        ],
        on: {
            onAfterSelect: function (id) {
                let origin = window.location.origin;
                switch (id) {
                    case "book":
                        showBookView();
                        window.location.replace(origin + "#book");
                        break;
                    case "borrowing":
                        showBorrowView();
                        window.location.replace(origin + "#borrowing");
                        break;
                    case "approval":
                        showApprovalView();
                        window.location.replace(origin + "#approval");
                        break;
                    case "user":
                        showUserView();
                        window.location.replace(origin + "#user");
                        break;
                    case "personal":
                        webix.message("Selected: 个人管理");
                        break;
                }

            }
        }
    };

    return view;
}