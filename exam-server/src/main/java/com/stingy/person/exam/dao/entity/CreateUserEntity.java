package com.stingy.person.exam.dao.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.validation.constraints.NotNull;

/**
 * The type Create user entity.
 *
 * @Author: 孙栋
 * @Email: 905280842 @qq.com
 * @Date: 2020 /1/5 9:08
 */
@ApiModel(value = "CreateUserEntity")
public class CreateUserEntity extends UserEntity {

    /**
     * 用户密码
     */
    @ApiModelProperty(value = "密码")
    private String password;

    /**
     * 角色ID
     */
    @ApiModelProperty(value = "角色")
    private int roleId;

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
     * Gets role id.
     *
     * @return the role id
     */
    public int getRoleId() {
        return roleId;
    }

    /**
     * Sets role id.
     *
     * @param roleId
     *            the role id
     */
    public void setRoleId(int roleId) {
        this.roleId = roleId;
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
