/**
 * 显示主页内容
 */
function showSettingView() {
    $$('library-content-view').reconstruct();
    $$("library-content-view").addView({
        view: "form",
        elements: [{view: "text", value: 'dummy111@email.com', label: "Email"},
            {view: "text", type: 'password', value: '123pass', label: "Password"},
            {
                margin: 5, cols: [
                    {view: "button", value: "Login", css: "webix_primary"},
                    {view: "button", value: "Cancel"}
                ]
            }]
    });
}