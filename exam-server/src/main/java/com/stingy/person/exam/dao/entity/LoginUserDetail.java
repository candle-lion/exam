package com.stingy.person.exam.dao.entity;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

/***
 *
 * @FileName: LoginUserEntity
 * @author 孙栋
 * @Date 2020 /1/6 23:24
 * @version 1.0.0
 * @remark
 * @explain
 */
public class LoginUserDetail implements UserDetails {

    /**
     * 用户名
     */
    private String username;

    /**
     * 密码
     */
    private String password;

    /**
     * 角色名称
     */
    private String roleName;

    /**
     * Gets user name.
     *
     * @return the user name
     */
    public String getUserName() {
        return username;
    }

    /**
     * Sets user name.
     *
     * @param username
     *            the username
     */
    public void setUserName(String username) {
        this.username = username;
    }

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

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    /**
     * Gets role name.
     *
     * @return the role name
     */
    public String getRoleName() {
        return roleName;
    }

    /**
     * Sets role name.
     *
     * @param roleName
     *            the role name
     */
    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }
}
