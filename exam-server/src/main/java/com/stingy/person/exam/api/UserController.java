package com.stingy.person.exam.api;

import com.stingy.person.exam.dao.entity.CreateUserEntity;
import com.stingy.person.exam.dao.entity.ForgotPasswordEntity;
import com.stingy.person.exam.dao.entity.QueryUserEntity;
import com.stingy.person.exam.user.LoginResponse;
import com.stingy.person.exam.user.UserListResponse;
import com.stingy.person.exam.api.request.LoginForm;
import com.stingy.person.exam.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * The type User controller.
 *
 * @Author: 孙栋
 * @Email: 905280842 @qq.com
 * @Date: 2020 /1/5 10:24
 */
@RestController
@RequestMapping(value = "/library/user")
@Api(tags = "用户")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * Query verift code.
     *
     * @param request
     *            the request
     * @param response
     *            the response
     */
    @ApiOperation(value = "获取验证码")
    @RequestMapping(value = "/verift-code", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public void queryVeriftCode(HttpServletRequest request, HttpServletResponse response) {
        userService.getVerificationCode(request, response);
    }

    /**
     * Query user user list response.
     *
     * @param request
     *            the request
     * @param response
     *            the response
     * @return the user list response
     */
    @ApiOperation(value = "查询用户列表")
    @RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public UserListResponse queryUser(HttpServletRequest request, HttpServletResponse response) {
        return new UserListResponse(userService.queryUser());
    }

    /**
     * Query user by id query user entity.
     *
     * @param request
     *            the request
     * @param response
     *            the response
     * @param id
     *            the id
     * @return the query user entity
     */
    @ApiOperation(value = "查询用户详情")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public QueryUserEntity queryUserById(HttpServletRequest request, HttpServletResponse response, @PathVariable String id) {
        return userService.queryUserById(id);
    }

    /**
     * Login login response.
     *
     * @param loginForm
     *            the login form
     * @return the login response
     */
    @ApiOperation(value = "认证登录")
    @RequestMapping(value = "/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public LoginResponse login(@RequestBody LoginForm loginForm) {
        return new LoginResponse(userService.login(loginForm));
    }

    /**
     * Add user.
     *
     * @param createUserEntity
     *            the create user entity
     */
    @ApiOperation(value = "添加用户")
    @RequestMapping(value = "", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void addUser(@RequestBody CreateUserEntity createUserEntity) {
        userService.addUser(createUserEntity);
    }

    /**
     * Forgot password.
     *
     * @param forgotPasswordEntity
     *            the forgot password entity
     */
    @ApiOperation(value = "忘记密码")
    @RequestMapping(value = "/forgot", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void forgotPassword(@RequestBody ForgotPasswordEntity forgotPasswordEntity) {
        userService.forgotPassword(forgotPasswordEntity);
    }
}