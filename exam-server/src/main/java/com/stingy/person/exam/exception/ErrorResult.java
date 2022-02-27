package com.stingy.person.exam.exception;

/***
 *
 * @FileName: LibraryErrorResult
 * @author 孙栋
 * @Date 2020 /1/8 6:15
 * @version 1.0.0
 * @remark
 * @explain
 */
public class ErrorResult {

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

    /**
     * 构造方法
     *
     * @param errorCode
     *            the error code
     */
    public ErrorResult(ErrorCode errorCode) {
        this.code = errorCode.getCode();
        this.zhMessage = errorCode.getZhMessage();
        this.enMessage = errorCode.getEnMessage();
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
