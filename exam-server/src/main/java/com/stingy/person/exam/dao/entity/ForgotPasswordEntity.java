package com.stingy.person.exam.dao.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.validation.constraints.NotNull;

/***
 *
 * @FileName: ForgotPasswordEntity
 * @author 孙栋
 * @Date 2020 /1/13 21:54
 * @version 1.0.0
 * @remark
 * @explain
 */
@ApiModel(value = "ForgotPasswordEntity")
public class ForgotPasswordEntity {

    /**
     * 用户名
     */
    @ApiModelProperty(value = "用户名")
    private String username;

    /**
     * 密码
     */
    @ApiModelProperty(value = "密码")
    private String password;

    /**
     * 身份证号码
     */
    @ApiModelProperty(value = "身份证号码")
    private String idCard;

    /**
     * 验证码
     */
    @ApiModelProperty(value = "验证码")
    @NotNull
    private String verifyCode;


    /**
     * Gets password.
     *
     * @return the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * Sets password.
     *
     * @param password
     *            the password
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * Gets id card.
     *
     * @return the id card
     */
    public String getIdCard() {
        return idCard;
    }

    /**
     * Sets id card.
     *
     * @param idCard
     *            the id card
     */
    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    /**
     * Gets username.
     *
     * @return the username
     */
    public String getUsername() {
        return username;
    }

    /**
     * Sets username.
     *
     * @param username
     *            the username
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * Gets verify code.
     *
     * @return the verify code
     */
    public String getVerifyCode() {
        return verifyCode;
    }

    /**
     * Sets verify code.
     *
     * @param verifyCode
     *            the verify code
     */
    public void setVerifyCode(String verifyCode) {
        this.verifyCode = verifyCode;
    }
}
