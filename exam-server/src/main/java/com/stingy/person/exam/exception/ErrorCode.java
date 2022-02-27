package com.stingy.person.exam.exception;

/***
 *
 * @FileName: LiraryErrorCode
 * @author 孙栋
 * @Date 2020 /1/7 22:23
 * @version 1.0.0
 * @remark
 * @explain
 */
public enum ErrorCode {

    /**
     * 验证码不正确
     */
    LOGIN_VERIFY_CODE_ERROR(10001, "验证码不正确, 请检查", ""),

    /**
     * 用户名或密码不正确
     */
    LOGIN_USERNAME_OR_PASSWORD_ERROR(10002, "用户名或密码不正确, 请检查", ""),

    /**
     * 添加书籍失败
     */
    ADD_BOOK_ERROR(20001, "添加书籍信息失败, 请检查书籍信息", ""),

    /**
     * 更新书籍失败
     */
    UPDATE_BOOK_ERROR(20002, "更新书籍信息失败, 请检查书籍信息", ""),

    /**
     * 删除书籍失败
     */
    DELETE_BOOK_ERROR(20003, "删除书籍信息失败, 请检查书籍信息", ""),

    /**
     * 借阅图书失败--图书数量不足
     */
    BORROW_BOOK_INSUFFICIENT_QUANTITY(30001, "图书借阅失败, 库存不足", ""),

    /**
     * 借阅图书失败--更新图书库存失败
     */
    BORROW_BOOK_UPDATE_INVENTORY(30002, "图书借阅失败, 更新库存失败", ""),

    /**
     * 借阅图书失败--更新图书库存失败
     */
    BORROW_BOOK_FAILED(30003, "图书借阅失败", ""),

    /**
     * 内部错误
     */
    LOGIN_INTERNAL_ERROR(99999, "内部错误,请联系管理员", "");

    /**
     * 错误码
     */
    private int code;

    /**
     * 错误消息-中文
     */
    private String zhMessage;

    /**
     * 错误消息-英文
     */
    private String enMessage;

    ErrorCode(int code, String zhMessage, String enMessage) {
        this.code = code;
        this.zhMessage = zhMessage;
        this.enMessage = enMessage;
    }

    /**
     * Gets code.
     *
     * @return the code
     */
    public int getCode() {
        return code;
    }

    /**
     * Sets code.
     *
     * @param code
     *            the code
     */
    public void setCode(int code) {
        this.code = code;
    }

    /**
     * Gets zh message.
     *
     * @return the zh message
     */
    public String getZhMessage() {
        return zhMessage;
    }

    /**
     * Sets zh message.
     *
     * @param zhMessage
     *            the zh message
     */
    public void setZhMessage(String zhMessage) {
        this.zhMessage = zhMessage;
    }

    /**
     * Gets en message.
     *
     * @return the en message
     */
    public String getEnMessage() {
        return enMessage;
    }

    /**
     * Sets en message.
     *
     * @param enMessage
     *            the en message
     */
    public void setEnMessage(String enMessage) {
        this.enMessage = enMessage;
    }
}
