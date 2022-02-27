/**
 * 显示书籍视图
 */
function showApprovalView() {
    let data = {"total": 0, "data": []};

    $$('library-content-view').reconstruct();
    $$("library-content-view").addView({
        rows: [
            // {
            // view: "toolbar",
            // id: "approval-datatable-toolbar",
            // cols: [
            //     {},
            //     {
            //         view: "button",
            //         id: "approval-del-button",
            //         value: "续借",
            //         width: 100,
            //         align: "center",
            //         css: "webix_primary",
            //         on: {
            //             'onItemClick': function () {
            //
            //                 let item = $$("approval-datatable").getSelectedItem();
            //                 webix.confirm({
            //                     ok: "确认",
            //                     cancel: "取消",
            //                     text: "确认删除[" + item.name + "]书籍信息?",
            //                     type: "confirm-warning"
            //                 }).then(function () {
            //                     webix.ajax().headers({
            //                         "Authorization": "Bearer " + $.cookie('token'),
            //                         'Content-Type': 'application/json'
            //                     }).del("/library/approval/" + item.id).then(function () {
            //                         reload_approval_data("");
            //                     }).fail(function (response) {
            //                         exceptionHandler(response);
            //                     });
            //                 })
            //             }
            //         }
            //     },
            //     {
            //         view: "button",
            //         id: "approval-del-button",
            //         value: "归还",
            //         width: 100,
            //         align: "center",
            //         css: "webix_primary",
            //         on: {
            //             'onItemClick': function () {
            //
            //                 let item = $$("approval-datatable").getSelectedItem();
            //                 webix.confirm({
            //                     ok: "确认",
            //                     cancel: "取消",
            //                     text: "请确认是否归还[" + item.name + "]书籍?",
            //                     type: "confirm-warning"
            //                 }).then(function () {
            //                     webix.ajax().headers({
            //                         "Authorization": "Bearer " + $.cookie('token'),
            //                         'Content-Type': 'application/json'
            //                     }).del("/library/approval/" + item.id).then(function () {
            //                         reload_approval_data("");
            //                     }).fail(function (response) {
            //                         exceptionHandler(response);
            //                     });
            //                 })
            //             }
            //         }
            //     },
            //     {
            //         view: "button",
            //         id: "approval-del-button",
            //         value: "审批",
            //         width: 100,
            //         align: "center",
            //         css: "webix_primary",
            //         on: {
            //             'onItemClick': function () {
            //                 let item = $$("approval-datatable").getSelectedItem();
            //                 webix.confirm({
            //                     ok: "通过",
            //                     cancel: "拒绝",
            //                     text: "审批借阅[" + item.name + "]书籍信息?",
            //                     type: "confirm-warning"
            //                 }).then(function () {
            //
            //                 })
            //             }
            //         }
            //     },
            // ]
        // },
        {
            id: "approval-datatable",
            view: "datatable",
            select: true,
            tooltip: true,
            scroll: "y",
            columns: [
                {
                    id: "id",
                    header: "编号",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>借阅时间: #approvalTime#</br>归还时间: #returnTime#</br>借阅人: #approvalUser#</br>费用: #cost#</br>状态: #status#</br>"
                },
                {
                    id: "name",
                    header: "书名",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>借阅时间: #approvalTime#</br>归还时间: #returnTime#</br>借阅人: #approvalUser#</br>费用: #cost#</br>状态: #status#</br>"
                },
                {
                    id: "approvalTime",
                    header: "借阅时间",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>借阅时间: #approvalTime#</br>归还时间: #returnTime#</br>借阅人: #approvalUser#</br>费用: #cost#</br>状态: #status#</br>"
                },
                {
                    id: "returnTime",
                    header: "归还时间",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>借阅时间: #approvalTime#</br>归还时间: #returnTime#</br>借阅人: #approvalUser#</br>费用: #cost#</br>状态: #status#</br>"
                },
                {
                    id: "approvalUser",
                    header: "借阅人",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>借阅时间: #approvalTime#</br>归还时间: #returnTime#</br>借阅人: #approvalUser#</br>费用: #cost#</br>状态: #status#</br>"
                },
                {
                    id: "cost",
                    header: "费用",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>借阅时间: #approvalTime#</br>归还时间: #returnTime#</br>借阅人: #approvalUser#</br>费用: #cost#</br>状态: #status#</br>"
                },
                {
                    id: "status",
                    header: "状态",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>借阅时间: #approvalTime#</br>归还时间: #returnTime#</br>借阅人: #approvalUser#</br>费用: #cost#</br>状态: #status#</br>"
                }
            ],
            select: "row",
            pager: "approval-datatable-pager",
            navigation: true,
            autoConfig: true,
            datafetch: 20,
            url:
                {
                    $proxy: true,
                    load: function (view, params) {
                        if (params != null || params != undefined) {
                            return webix.ajax().headers({"Authorization": "Bearer " + $.cookie('token')}).get("/library/approval", params);
                        } else {
                            return webix.ajax().headers({"Authorization": "Bearer " + $.cookie('token')}).get("/library/approval");
                        }
                    }
                }
        }, {height: 23}, {
            id: "approval-datatable-pager",
            view: "pager",
            template: "{common.first()} {common.prev()} {common.pages()} {common.next()} {common.last()}",
            group: 5,
            size: 20
        }]
    });
}

function showUpdateApproval() {
    let item = $$("approval-datatable").getSelectedItem();
    webix.ui({
        id: "approval-update-window",
        view: "window",
        head: "修改图书",
        position: "center",
        body: {
            id: "approval-update-form",
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
                    value: item.approvalshelf,
                    placeholder: "书架-层数-列数",
                    label: "书架号",
                    name: "approvalshelf"
                },
                {
                    margin: 5, cols: [
                        {
                            view: "button", value: "确定", css: "webix_primary", click: function () {
                                let approval = $$("approval-update-form").getValues();
                                webix.ajax().headers({
                                    "Authorization": "Bearer " + $.cookie('token'),
                                    'Content-Type': 'application/json'
                                }).put("/library/approval", JSON.stringify(approval)).then(function () {
                                    reload_approval_data("approval-update-window");
                                }).fail(function (response) {
                                    exceptionHandler(response);
                                });
                            }
                        },
                        {
                            view: "button", value: "取消", click: function () {
                                $$("approval-update-window").hide();
                            }
                        }
                    ]
                }
            ]
        }
    });
    $$("approval-update-window").show();
}

/**
 * 重加在页面数据
 */
function reload_approval_data(windows_id) {
    if (windows_id != "") {
        $$(windows_id).hide();
    }
    $$("approval-datatable").clearAll();
    $$("approval-datatable").load(function () {
        return webix.ajax().headers({"Authorization": "Bearer " + $.cookie('token')}).get("/library/approval");
    });
}