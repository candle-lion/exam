/**
 * 显示书籍视图
 */
function showUserView() {
    let data = {"total": 0, "data": []};

    $$('library-content-view').reconstruct();
    $$("library-content-view").addView({
        rows: [{
            view: "toolbar",
            id: "user-datatable-toolbar",
            cols: [
                {},
                {
                    view: "button",
                    id: "user-del-button",
                    value: "删除",
                    width: 100,
                    align: "center",
                    css: "webix_primary",
                    on: {
                        'onItemClick': function () {

                            let item = $$("user-datatable").getSelectedItem();
                            webix.confirm({
                                ok: "确认",
                                cancel: "取消",
                                text: "确认删除[" + item.name + "]用户信息?",
                                type: "confirm-warning"
                            }).then(function () {
                                webix.ajax().headers({
                                    "Authorization": "Bearer " + $.cookie('token'),
                                    'Content-Type': 'application/json'
                                }).del("/library/user/" + item.id).then(function () {
                                    reload_user_data("");
                                }).fail(function (response) {
                                    exceptionHandler(response);
                                });
                            })
                        }
                    }
                }
            ]
        }, {
            id: "user-datatable",
            view: "datatable",
            select: true,
            tooltip: true,
            scroll: "y",
            columns: [
                {
                    id: "id",
                    header: "编号",
                    fillspace: true,
                    tooltip: "编号: #id#</br>用户名: #username#</br>姓名: #name#</br>性别: #sex#</br>身份证: #idCard#</br>移动电话: #mobile#</br>邮箱: #email#</br>角色: #roleName#</br>"
                },
                {
                    id: "username",
                    header: "用户名",
                    fillspace: true,
                    tooltip: "编号: #id#</br>用户名: #username#</br>姓名: #name#</br>性别: #sex#</br>身份证: #idCard#</br>移动电话: #mobile#</br>邮箱: #email#</br>角色: #roleName#</br>"
                },
                {
                    id: "name",
                    header: "姓名",
                    fillspace: true,
                    tooltip: "编号: #id#</br>用户名: #username#</br>姓名: #name#</br>性别: #sex#</br>身份证: #idCard#</br>移动电话: #mobile#</br>邮箱: #email#</br>角色: #roleName#</br>"
                },
                {
                    id: "sex",
                    header: "性别",
                    fillspace: true,
                    tooltip: "编号: #id#</br>用户名: #username#</br>姓名: #name#</br>性别: #sex#</br>身份证: #idCard#</br>移动电话: #mobile#</br>邮箱: #email#</br>角色: #roleName#</br>"
                },
                {
                    id: "idCard",
                    header: "身份证",
                    fillspace: true,
                    tooltip: "编号: #id#</br>用户名: #username#</br>姓名: #name#</br>性别: #sex#</br>身份证: #idCard#</br>移动电话: #mobile#</br>邮箱: #email#</br>角色: #roleName#</br>"
                },
                {
                    id: "mobile",
                    header: "移动电话",
                    fillspace: true,
                    tooltip: "编号: #id#</br>用户名: #username#</br>姓名: #name#</br>性别: #sex#</br>身份证: #idCard#</br>移动电话: #mobile#</br>邮箱: #email#</br>角色: #roleName#</br>"
                },
                {
                    id: "email",
                    header: "邮箱",
                    fillspace: true,
                    tooltip: "编号: #id#</br>用户名: #username#</br>姓名: #name#</br>性别: #sex#</br>身份证: #idCard#</br>移动电话: #mobile#</br>邮箱: #email#</br>角色: #roleName#</br>"
                },
                {
                    id: "roleName",
                    header: "角色",
                    fillspace: true,
                    tooltip: "编号: #id#</br>用户名: #username#</br>姓名: #name#</br>性别: #sex#</br>身份证: #idCard#</br>移动电话: #mobile#</br>邮箱: #email#</br>角色: #roleName#</br>"
                }
            ],
            select: "row",
            pager: "user-datatable-pager",
            navigation: true,
            autoConfig: true,
            datafetch: 20,
            url:
                {
                    $proxy: true,
                    load: function (view, params) {
                        if (params != null || params != undefined) {
                            return webix.ajax().headers({"Authorization": "Bearer " + $.cookie('token')}).get("/library/user", params);
                        } else {
                            return webix.ajax().headers({"Authorization": "Bearer " + $.cookie('token')}).get("/library/user");
                        }
                    }
                }
        }, {height: 23}, {
            id: "user-datatable-pager",
            view: "pager",
            template: "{common.first()} {common.prev()} {common.pages()} {common.next()} {common.last()}",
            group: 5,
            size: 20
        }]
    });
}

function showAddUser() {
    webix.ui({
        id: "user-add-window",
        view: "window",
        head: "添加图书",
        position: "center",
        body: {
            id: "user-add-form",
            view: "form",
            scroll: false,
            width: 300,
            elements: [
                {
                    view: "text",
                    value: '',
                    label: "书名",
                    name: "name"
                },
                {
                    view: "text",
                    value: '',
                    type: "number",
                    label: "数量",
                    name: "quantity"
                },
                {
                    view: "text",
                    value: '',
                    type: "number",
                    label: "价格(￥)",
                    name: "price"
                },
                {
                    view: "text",
                    value: '',
                    label: "出版社",
                    name: "press"
                },
                {
                    view: "text",
                    value: '',
                    placeholder: "书架-层数-列数",
                    label: "书架号",
                    name: "usershelf"
                },
                {
                    margin: 5, cols: [
                        {
                            view: "button", value: "确定", css: "webix_primary", click: function () {
                                let user = $$("user-add-form").getValues();
                                webix.ajax().headers({
                                    "Authorization": "Bearer " + $.cookie('token'),
                                    'Content-Type': 'application/json'
                                }).post("/library/user", user).then(function () {
                                    reload_user_data("user-add-window");
                                }).fail(function (response) {
                                    exceptionHandler(response);
                                });
                            }
                        },
                        {
                            view: "button", value: "取消", click: function () {
                                $$("user-add-window").hide();
                            }
                        }
                    ]
                }
            ]
        }
    });
    $$("user-add-window").show();
}

function showUpdateUser() {
    let item = $$("user-datatable").getSelectedItem();
    webix.ui({
        id: "user-update-window",
        view: "window",
        head: "修改图书",
        position: "center",
        body: {
            id: "user-update-form",
            view: "form",
            scroll: false,
            width: 300,
            elements: [
                {
                    view: "text",
                    value: item.id,
                    label: "编号",
                    disabled: true,
                    name: "id"
                },
                {
                    view: "text",
                    value: item.name,
                    label: "书名",
                    name: "name"
                },
                {
                    view: "text",
                    value: item.quantity,
                    type: "number",
                    label: "数量",
                    name: "quantity"
                },
                {
                    view: "text",
                    value: item.price,
                    type: "number",
                    label: "价格(￥)",
                    name: "price"
                },
                {
                    view: "text",
                    value: item.press,
                    label: "出版社",
                    name: "press"
                },
                {
                    view: "text",
                    value: item.usershelf,
                    placeholder: "书架-层数-列数",
                    label: "书架号",
                    name: "usershelf"
                },
                {
                    margin: 5, cols: [
                        {
                            view: "button", value: "确定", css: "webix_primary", click: function () {
                                let user = $$("user-update-form").getValues();
                                webix.ajax().headers({
                                    "Authorization": "Bearer " + $.cookie('token'),
                                    'Content-Type': 'application/json'
                                }).put("/library/user", JSON.stringify(user)).then(function () {
                                    reload_user_data("user-update-window");
                                }).fail(function (response) {
                                    exceptionHandler(response);
                                });
                            }
                        },
                        {
                            view: "button", value: "取消", click: function () {
                                $$("user-update-window").hide();
                            }
                        }
                    ]
                }
            ]
        }
    });
    $$("user-update-window").show();
}

/**
 * 重加在页面数据
 */
function reload_user_data(windows_id) {
    if (windows_id != "") {
        $$(windows_id).hide();
    }
    $$("user-datatable").clearAll();
    $$("user-datatable").load(function () {
        return webix.ajax().headers({"Authorization": "Bearer " + $.cookie('token')}).get("/library/user");
    });
}