/**
 * 显示主页内容
 */
function showHomeView() {
    $$('library-content-view').reconstruct();

    $$("library-content-view").addView({
        cols: [{
            view: "form",
            elements: [{view: "text", value: 'dummy@email.com', label: "Email"},
                {view: "text", type: 'password', value: '123pass', label: "Password"},
                {
                    margin: 5, cols: [
                        {view: "button", value: "Login", css: "webix_primary"},
                        {view: "button", value: "Cancel"}
                    ]
                }]
        }, {
            view: "form",
            elements: [{view: "text", value: 'dummy@email.com', label: "Email"},
                {view: "text", type: 'password', value: '123pass', label: "Password"},
                {
                    margin: 5, cols: [
                        {view: "button", value: "Login", css: "webix_primary"},
                        {view: "button", value: "Cancel"}
                    ]
                }]
        }]
    });

    $$("library-content-view").addView({
        cols: [{
            view: "form",
            elements: [{view: "text", value: 'dummy@email.com', label: "Email"},
                {view: "text", type: 'password', value: '123pass', label: "Password"},
                {
                    margin: 5, cols: [
                        {view: "button", value: "Login", css: "webix_primary"},
                        {view: "button", value: "Cancel"}
                    ]
                }]
        }, {
            view: "form",
            elements: [{view: "text", value: 'dummy@email.com', label: "Email"},
                {view: "text", type: 'password', value: '123pass', label: "Password"},
                {
                    margin: 5, cols: [
                        {view: "button", value: "Login", css: "webix_primary"},
                        {view: "button", value: "Cancel"}
                    ]
                }]
        }]
    });
}