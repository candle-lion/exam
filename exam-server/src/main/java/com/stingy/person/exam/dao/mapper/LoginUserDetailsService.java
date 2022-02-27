package com.stingy.person.exam.dao.mapper;

import com.stingy.person.exam.dao.entity.LoginUserDetail;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

/***
 *
 * @FileName: LoginUserDetailsService
 * @author 孙栋
 * @Date 2020 /1/6 23:41
 * @version 1.0.0
 * @remark
 * @explain
 */
public interface LoginUserDetailsService extends UserDetailsService {

    /**
     * 通过用户名查找用户信息
     * @param username 用户名
     * @return 用户信息
     * @throws UsernameNotFoundException
     */
    @Override
    LoginUserDetail loadUserByUsername(String username) throws UsernameNotFoundException;
}
