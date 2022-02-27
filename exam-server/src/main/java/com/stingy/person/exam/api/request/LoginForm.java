package com.stingy.person.exam.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.validation.constraints.NotNull;
import java.util.Collection;

/***
 * 登录表单
 *
 * @FileName: LoginForm
 * @author 孙栋
 * @Date 2020 /1/6 23:02
 * @version 1.0.0
 * @remark
 * @explain
 */
@ApiModel(value = "LoginForm")
public class LoginForm implements UserDetails {

    /**
     * 用户名
     */
    @ApiModelProperty(value = "用户名")
    @NotNull
    private String username;

    /**
     * 密码
     */
    @ApiModelProperty(value = "密码")
    @NotNull
    private String password;

    /**
     * 验证码
     */
    @ApiModelProperty(value = "验证码")
    @NotNull
    private String verifyCode;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
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

    @Override
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

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
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
