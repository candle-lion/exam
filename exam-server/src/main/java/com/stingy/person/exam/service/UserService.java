package com.stingy.person.exam.service;

import com.stingy.person.exam.api.request.LoginForm;
import com.stingy.person.exam.dao.entity.CreateUserEntity;
import com.stingy.person.exam.dao.entity.ForgotPasswordEntity;
import com.stingy.person.exam.dao.entity.QueryUserEntity;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * The interface User service.
 *
 * @Author: 孙栋
 * @Email: 905280842 @qq.com
 * @Date: 2020 /1/5 10:21
 */
public interface UserService {

    /**
     * 查询人员列表
     *
     * @return list
     */
    public List<QueryUserEntity> queryUser();

    /**
     * 查询人员详情
     *
     * @param id
     *            人员ID
     * @return 详细信息 query user entity
     */
    public QueryUserEntity queryUserById(String id);

    /**
     * 添加新用户
     *
     * @param createUserEntity
     *            用户信息
     * @return 添加结果
     */
    public void addUser(CreateUserEntity createUserEntity);

    /**
     * 忘记密码
     *
     * @param forgotPasswordEntity
     *            the forgot password entity
     * @return 更新结果
     */
    public void forgotPassword(ForgotPasswordEntity forgotPasswordEntity);

    /**
     * 获取验证码
     *
     * @param request
     *            请求
     * @param response
     *            响应
     */
    public void getVerificationCode(HttpServletRequest request, HttpServletResponse response);

    /**
     * 认证登录
     *
     * @param loginForm
     *            登录表单
     * @return 生成Token string
     */
    public String login(LoginForm loginForm);
}
