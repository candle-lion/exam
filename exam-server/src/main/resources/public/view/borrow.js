/**
 * 显示书籍视图
 */
function showBorrowView() {
    let data = {"total": 0, "data": []};

    $$('library-content-view').reconstruct();
    $$("library-content-view").addView({
        rows: [{
            view: "toolbar",
            id: "borrow-datatable-toolbar",
            cols: [
                {},
                {
                    view: "button",
                    id: "borrow-del-button",
                    value: "续借",
                    width: 100,
                    align: "center",
                    css: "webix_primary",
                    on: {
                        'onItemClick': function () {

                            let item = $$("borrow-datatable").getSelectedItem();
                            webix.confirm({
                                ok: "确认",
                                cancel: "取消",
                                text: "确认删除[" + item.name + "]书籍信息?",
                                type: "confirm-warning"
                            }).then(function () {
                                webix.ajax().headers({
                                    "Authorization": "Bearer " + $.cookie('token'),
                                    'Content-Type': 'application/json'
                                }).del("/library/borrow/" + item.id).then(function () {
                                    reload_borrow_data("");
                                }).fail(function (response) {
                                    exceptionHandler(response);
                                });
                            })
                        }
                    }
                },
                {
                    view: "button",
                    id: "borrow-del-button",
                    value: "归还",
                    width: 100,
                    align: "center",
                    css: "webix_primary",
                    on: {
                        'onItemClick': function () {

                            let item = $$("borrow-datatable").getSelectedItem();
                            webix.confirm({
                                ok: "确认",
                                cancel: "取消",
                                text: "请确认是否归还[" + item.name + "]书籍?",
                                type: "confirm-warning"
                            }).then(function () {
                                webix.ajax().headers({
                                    "Authorization": "Bearer " + $.cookie('token'),
                                    'Content-Type': 'application/json'
                                }).del("/library/borrow/" + item.id).then(function () {
                                    reload_borrow_data("");
                                }).fail(function (response) {
                                    exceptionHandler(response);
                                });
                            })
                        }
                    }
                },
                {
                    view: "button",
                    id: "borrow-del-button",
                    value: "审批",
                    width: 100,
                    align: "center",
                    css: "webix_primary",
                    on: {
                        'onItemClick': function () {
                            let item = $$("borrow-datatable").getSelectedItem();
                            webix.confirm({
                                ok: "通过",
                                cancel: "拒绝",
                                text: "审批借阅[" + item.name + "]书籍信息?",
                                type: "confirm-warning"
                            }).then(function () {
                                console.log("11111");
                            }).fail(function () {
                                console.log("22222222222222");
                            })
                        }
                    }
                },
            ]
        }, {
            id: "borrow-datatable",
            view: "datatable",
            select: true,
            tooltip: true,
            scroll: "y",
            columns: [
                {
                    id: "id",
                    header: "编号",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>借阅时间: #borrowTime#</br>归还时间: #returnTime#</br>借阅人: #borrowUser#</br>费用: #cost#</br>状态: #status#</br>"
                },
                {
                    id: "name",
                    header: "书名",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>借阅时间: #borrowTime#</br>归还时间: #returnTime#</br>借阅人: #borrowUser#</br>费用: #cost#</br>状态: #status#</br>"
                },
                {
                    id: "borrowTime",
                    header: "借阅时间",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>借阅时间: #borrowTime#</br>归还时间: #returnTime#</br>借阅人: #borrowUser#</br>费用: #cost#</br>状态: #status#</br>"
                },
                {
                    id: "returnTime",
                    header: "归还时间",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>借阅时间: #borrowTime#</br>归还时间: #returnTime#</br>借阅人: #borrowUser#</br>费用: #cost#</br>状态: #status#</br>"
                },
                {
                    id: "borrowUser",
                    header: "借阅人",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>借阅时间: #borrowTime#</br>归还时间: #returnTime#</br>借阅人: #borrowUser#</br>费用: #cost#</br>状态: #status#</br>"
                },
                {
                    id: "cost",
                    header: "费用",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>借阅时间: #borrowTime#</br>归还时间: #returnTime#</br>借阅人: #borrowUser#</br>费用: #cost#</br>状态: #status#</br>"
                },
                {
                    id: "status",
                    header: "状态",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>借阅时间: #borrowTime#</br>归还时间: #returnTime#</br>借阅人: #borrowUser#</br>费用: #cost#</br>状态: #status#</br>"
                }
            ],
            select: "row",
            pager: "borrow-datatable-pager",
            navigation: true,
            autoConfig: true,
            datafetch: 20,
            url:
                {
                    $proxy: true,
                    load: function (view, params) {
                        if (params != null || params != undefined) {
                            return webix.ajax().headers({"Authorization": "Bearer " + $.cookie('token')}).get("/library/borrow", params);
                        } else {
                            return webix.ajax().headers({"Authorization": "Bearer " + $.cookie('token')}).get("/library/borrow");
                        }
                    }
                }
        }, {height: 23}, {
            id: "borrow-datatable-pager",
            view: "pager",
            template: "{common.first()} {common.prev()} {common.pages()} {common.next()} {common.last()}",
            group: 5,
            size: 20
        }]
    });
}

function showUpdateBorrow() {
    let item = $$("borrow-datatable").getSelectedItem();
    webix.ui({
        id: "borrow-update-window",
        view: "window",
        head: "修改图书",
        position: "center",
        body: {
            id: "borrow-update-form",
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
                    value: item.borrowshelf,
                    placeholder: "书架-层数-列数",
                    label: "书架号",
                    name: "borrowshelf"
                },
                {
                    margin: 5, cols: [
                        {
                            view: "button", value: "确定", css: "webix_primary", click: function () {
                                let borrow = $$("borrow-update-form").getValues();
                                webix.ajax().headers({
                                    "Authorization": "Bearer " + $.cookie('token'),
                                    'Content-Type': 'application/json'
                                }).put("/library/borrow", JSON.stringify(borrow)).then(function () {
                                    reload_borrow_data("borrow-update-window");
                                }).fail(function (response) {
                                    exceptionHandler(response);
                                });
                            }
                        },
                        {
                            view: "button", value: "取消", click: function () {
                                $$("borrow-update-window").hide();
                            }
                        }
                    ]
                }
            ]
        }
    });
    $$("borrow-update-window").show();
}

/**
 * 重加在页面数据
 */
function reload_borrow_data(windows_id) {
    if (windows_id != "") {
        $$(windows_id).hide();
    }
    $$("borrow-datatable").clearAll();
    $$("borrow-datatable").load(function () {
        return webix.ajax().headers({"Authorization": "Bearer " + $.cookie('token')}).get("/library/borrow");
    });
}