package com.stingy.person.exam.exception;

/***
 *
 * @FileName: LibraryException
 * @author 孙栋
 * @Date 2020 /1/7 22:22
 * @version 1.0.0
 * @remark
 * @explain
 */
public class ExamException extends RuntimeException {

    /**
     * 错误码
     */
    private ErrorCode errorCode;


    /**
     * Instantiates a new Library exception.
     *
     * @param errorCode
     *            the error code
     */
    public ExamException(ErrorCode errorCode) {
        this.errorCode = errorCode;
    }

    /**
     * Gets error code.
     *
     * @return the error code
     */
    public ErrorCode getErrorCode() {
        return errorCode;
    }

    /**
     * Sets error code.
     *
     * @param errorCode
     *            the error code
     */
    public void setErrorCode(ErrorCode errorCode) {
        this.errorCode = errorCode;
    }
}
