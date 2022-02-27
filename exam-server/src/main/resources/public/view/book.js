/**
 * 显示书籍视图
 */
function showBookView() {
    let data = {"total": 0, "data": []};

    $$('library-content-view').reconstruct();
    $$("library-content-view").addView({
        rows: [{
            view: "toolbar",
            id: "book-datatable-toolbar",
            cols: [
                {},
                {
                    view: "button",
                    id: "book-add-button",
                    value: "新增",
                    width: 100,
                    align: "left",
                    css: "webix_primary",
                    on: {
                        'onItemClick': function (id) {
                            showAddBook();
                        }
                    }
                },
                {
                    view: "button",
                    id: "book-update-button",
                    value: "修改",
                    width: 100,
                    align: "right",
                    css: "webix_primary", on: {
                        'onItemClick': function (id) {
                            showUpdateBook();
                        }
                    }
                },
                {
                    view: "button",
                    id: "book-del-button",
                    value: "删除",
                    width: 100,
                    align: "center",
                    css: "webix_primary",
                    on: {
                        'onItemClick': function () {

                            let item = $$("book-datatable").getSelectedItem();
                            webix.confirm({
                                ok: "确认",
                                cancel: "取消",
                                text: "确认删除[" + item.name + "]书籍信息?",
                                type: "confirm-warning"
                            }).then(function () {
                                webix.ajax().headers({
                                    "Authorization": "Bearer " + $.cookie('token'),
                                    'Content-Type': 'application/json'
                                }).del("/library/book/" + item.id).then(function () {
                                    reload_book_data("");
                                }).fail(function (response) {
                                    exceptionHandler(response);
                                });
                            })
                        }
                    }
                },
                {
                    view: "button",
                    id: "book-del-button",
                    value: "借阅",
                    width: 100,
                    align: "center",
                    css: "webix_primary",
                    on: {
                        'onItemClick': function () {

                            let item = $$("book-datatable").getSelectedItem();
                            webix.confirm({
                                ok: "确认",
                                cancel: "取消",
                                text: "请确认是否借阅[" + item.name + "]书籍?",
                                type: "confirm-warning"
                            }).then(function () {
                                let borrow = {"bookId": item.id};
                                webix.ajax().headers({
                                    "Authorization": "Bearer " + $.cookie('token'),
                                    'Content-Type': 'application/json'
                                }).post("/library/borrow/", borrow).then(function () {
                                    reload_book_data("");
                                }).fail(function (response) {
                                    exceptionHandler(response);
                                });
                            })
                        }
                    }
                }
            ]
        }, {
            id: "book-datatable",
            view: "datatable",
            select: true,
            tooltip: true,
            scroll: "y",
            columns: [
                {
                    id: "id",
                    header: "编号",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>数量: #quantity#</br>价格: #price#</br>出版社: #press#</br>作者: #author#</br>书架号: #bookshelf#</br>入库时间: #time#</br>"
                },
                {
                    id: "name",
                    header: "书名",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>数量: #quantity#</br>价格: #price#</br>出版社: #press#</br>作者: #author#</br>书架号: #bookshelf#</br>入库时间: #time#</br>"
                },
                {
                    id: "price",
                    header: "价格(￥)",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>数量: #quantity#</br>价格: #price#</br>出版社: #press#</br>作者: #author#</br>书架号: #bookshelf#</br>入库时间: #time#</br>"
                },
                {
                    id: "press",
                    header: "出版社",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>数量: #quantity#</br>价格: #price#</br>出版社: #press#</br>作者: #author#</br>书架号: #bookshelf#</br>入库时间: #time#</br>"
                },
                {
                    id: "author",
                    header: "作者",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>数量: #quantity#</br>价格: #price#</br>出版社: #press#</br>作者: #author#</br>书架号: #bookshelf#</br>入库时间: #time#</br>"
                },
                {
                    id: "quantity",
                    header: "数量",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>数量: #quantity#</br>价格: #price#</br>出版社: #press#</br>作者: #author#</br>书架号: #bookshelf#</br>入库时间: #time#</br>"
                },
                {
                    id: "bookshelf",
                    header: "书架号",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>数量: #quantity#</br>价格: #price#</br>出版社: #press#</br>作者: #author#</br>书架号: #bookshelf#</br>入库时间: #time#</br>"
                },
                {
                    id: "time",
                    header: "入库时间",
                    fillspace: true,
                    tooltip: "编号: #id#</br>书名: #name#</br>数量: #quantity#</br>价格: #price#</br>出版社: #press#</br>作者: #author#</br>书架号: #bookshelf#</br>入库时间: #time#</br>"
                }
            ],
            select: "row",
            pager: "book-datatable-pager",
            navigation: true,
            autoConfig: true,
            datafetch: 20,
            url:
                {
                    $proxy: true,
                    load: function (view, params) {
                        if (params != null || params != undefined) {
                            return webix.ajax().headers({"Authorization": "Bearer " + $.cookie('token')}).get("/library/book", params);
                        } else {
                            return webix.ajax().headers({"Authorization": "Bearer " + $.cookie('token')}).get("/library/book");
                        }
                    }
                }
        }, {height: 23}, {
            id: "book-datatable-pager",
            view: "pager",
            template: "{common.first()} {common.prev()} {common.pages()} {common.next()} {common.last()}",
            group: 5,
            size: 20
        }]
    });
}

function showAddBook() {
    webix.ui({
        id: "book-add-window",
        view: "window",
        head: "添加图书",
        position: "center",
        body: {
            id: "book-add-form",
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
                    name: "bookshelf"
                },
                {
                    margin: 5, cols: [
                        {
                            view: "button", value: "确定", css: "webix_primary", click: function () {
                                let book = $$("book-add-form").getValues();
                                webix.ajax().headers({
                                    "Authorization": "Bearer " + $.cookie('token'),
                                    'Content-Type': 'application/json'
                                }).post("/library/book", book).then(function () {
                                    reload_book_data("book-add-window");
                                }).fail(function (response) {
                                    exceptionHandler(response);
                                });
                            }
                        },
                        {
                            view: "button", value: "取消", click: function () {
                                $$("book-add-window").hide();
                            }
                        }
                    ]
                }
            ]
        }
    });
    $$("book-add-window").show();
}

function showUpdateBook() {
    let item = $$("book-datatable").getSelectedItem();
    webix.ui({
        id: "book-update-window",
        view: "window",
        head: "修改图书",
        position: "center",
        body: {
            id: "book-update-form",
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
                    value: item.bookshelf,
                    placeholder: "书架-层数-列数",
                    label: "书架号",
                    name: "bookshelf"
                },
                {
                    margin: 5, cols: [
                        {
                            view: "button", value: "确定", css: "webix_primary", click: function () {
                                let book = $$("book-update-form").getValues();
                                webix.ajax().headers({
                                    "Authorization": "Bearer " + $.cookie('token'),
                                    'Content-Type': 'application/json'
                                }).put("/library/book", JSON.stringify(book)).then(function () {
                                    reload_book_data("book-update-window");
                                }).fail(function (response) {
                                    exceptionHandler(response);
                                });
                            }
                        },
                        {
                            view: "button", value: "取消", click: function () {
                                $$("book-update-window").hide();
                            }
                        }
                    ]
                }
            ]
        }
    });
    $$("book-update-window").show();
}

/**
 * 重加在页面数据
 */
function reload_book_data(windows_id) {
    if (windows_id != "") {
        $$(windows_id).hide();
    }
    $$("book-datatable").clearAll();
    $$("book-datatable").load(function () {
        return webix.ajax().headers({"Authorization": "Bearer " + $.cookie('token')}).get("/library/book");
    });
}