/**
 * 异常处理
 */
let language="zh_cn";

function exceptionHandler(response) {
    let responseText = JSON.parse(response.responseText);
    let message = "";
    if (language == "zh_cn") {
        message = responseText.zhMessage;
    } else {
        message = responseText.enMessage;
    }
    showMessage("error", message);

    // 状态为401则跳转至登陆界面，当登陆状态码为用户锁定时，前台记录在cookie里面
}

function showMessage(type, message) {
    webix.message({type: type, text: message}).show();
}