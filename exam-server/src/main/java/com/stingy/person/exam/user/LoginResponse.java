package com.stingy.person.exam.user;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/***
 *
 * @FileName: JwtResponse
 * @author 孙栋
 * @Date 2020 /1/6 22:14
 * @version 1.0.0
 * @remark
 * @explain
 */
@ApiModel(value = "LoginResponse")
public class LoginResponse {

    @ApiModelProperty(value = "认证成功信息")
    private final String token;

    /**
     * Instantiates a new Login response.
     *
     * @param token
     *            the token
     */
    public LoginResponse(String token) {
        this.token = token;
    }

    /**
     * Gets token.
     *
     * @return the token
     */
    public String getToken() {
        return token;
    }
}