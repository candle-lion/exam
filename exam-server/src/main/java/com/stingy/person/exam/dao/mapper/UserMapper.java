package com.stingy.person.exam.dao.mapper;

import com.stingy.person.exam.dao.entity.CreateUserEntity;
import com.stingy.person.exam.dao.entity.ForgotPasswordEntity;
import com.stingy.person.exam.dao.entity.QueryUserEntity;

import java.util.List;

/**
 * The interface User mapper.
 *
 * @Author: 孙栋
 * @Email: 905280842 @qq.com
 * @Date: 2020 /1/5 9:07
 */
public interface UserMapper {

    /**
     * 查询人员列表
     *
     * @return list
     */
    List<QueryUserEntity> queryUser();

    /**
     * 查询人员详情
     *
     * @param id
     *            人员ID
     * @return 详细信息 query user entity
     */
    QueryUserEntity queryUserById(String id);

    /**
     * 添加新用户
     *
     * @param createUserEntity
     *            用户信息
     * @return 添加结果 int
     */
    int addUser(CreateUserEntity createUserEntity);

    /**
     * 忘记密码
     *
     * @param forgotPasswordEntity
     *            the forgot password entity
     * @return 更新结果 int
     */
    int forgotPassword(ForgotPasswordEntity forgotPasswordEntity);
}
