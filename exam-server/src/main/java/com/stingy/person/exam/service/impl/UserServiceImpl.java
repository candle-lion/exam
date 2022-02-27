package com.stingy.person.exam.service.impl;

import com.stingy.person.exam.api.request.LoginForm;
import com.stingy.person.exam.dao.entity.CreateUserEntity;
import com.stingy.person.exam.dao.entity.ForgotPasswordEntity;
import com.stingy.person.exam.dao.entity.LoginUserDetail;
import com.stingy.person.exam.dao.entity.QueryUserEntity;
import com.stingy.person.exam.dao.mapper.LoginUserDetailsService;
import com.stingy.person.exam.dao.mapper.UserMapper;
import com.stingy.person.exam.exception.ErrorCode;
import com.stingy.person.exam.exception.ExamException;
import com.stingy.person.exam.jwt.JwtTokenUtil;
import com.stingy.person.exam.util.EncryptPasswordUtil;
import com.stingy.person.exam.util.VerificationCode;
import com.stingy.person.exam.service.UserService;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

/**
 * The type User service.
 *
 * @Author: 孙栋
 * @Email: 905280842 @qq.com
 * @Date: 2020 /1/5 10:21
 */
@Service
public class UserServiceImpl implements UserService {

    private static final Logger log = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private LoginUserDetailsService loginUserDetailsService;

    /**
     * 查询人员列表
     *
     * @return 人员列表
     */
    @Override
    public List<QueryUserEntity> queryUser() {
        return userMapper.queryUser();
    }

    /**
     * 查询人员列表
     *
     * @param id 人员ID
     * @return 人员详情
     */
    @Override
    public QueryUserEntity queryUserById(String id) {
        return userMapper.queryUserById(id);
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public void addUser(CreateUserEntity createUserEntity) {
        createUserEntity.setPassword(EncryptPasswordUtil.getInstance().encrypt(createUserEntity.getPassword()));
        userMapper.addUser(createUserEntity);
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public void forgotPassword(ForgotPasswordEntity forgotPasswordEntity) {
        forgotPasswordEntity.setPassword(EncryptPasswordUtil.getInstance().encrypt(forgotPasswordEntity.getPassword()));
        userMapper.forgotPassword(forgotPasswordEntity);
    }

    /**
     * 获取验证码
     *
     * @param request
     * @param response
     */
    @Override
    public void getVerificationCode(HttpServletRequest request, HttpServletResponse response) {
        OutputStream os = null;
        try {
            int width = 100;
            int height = 30;
            BufferedImage verifyImg = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
            //生成对应宽高的初始图片
            String randomText = VerificationCode.drawRandomText(width, height, verifyImg);
            //单独的一个类方法，出于代码复用考虑，进行了封装。
            //功能是生成验证码字符并加上噪点，干扰线，返回值为验证码字符
            request.getSession().setAttribute("verifyCode", randomText);
            //必须设置响应内容类型为图片，否则前台不识别
            response.setContentType("image/png");
            //获取文件输出流
            os = response.getOutputStream();
            //输出图片流
            ImageIO.write(verifyImg, "png", os);
            os.flush();
        } catch (IOException e) {
            log.error(e.getMessage());
        } finally {
            IOUtils.closeQuietly(os);
        }
    }

    /**
     * 用户登录
     *
     * @param loginForm
     * @return
     */
    @Override
    public String login(LoginForm loginForm) {
        String token = "";
        try {
            String username = loginForm.getUsername();
            String password = loginForm.getPassword();
            authenticate(username, password);
            final LoginUserDetail loginUserDetail = (LoginUserDetail) loginUserDetailsService
                    .loadUserByUsername(loginForm.getUsername());

            // 比较密码
            if (!EncryptPasswordUtil.getInstance().matchesPassword(password, loginUserDetail.getPassword())) {
                log.error("password is incorrect, username: {}", username);
                throw new ExamException(ErrorCode.LOGIN_INTERNAL_ERROR);
            }

            token = jwtTokenUtil.generateToken(loginUserDetail);
        } catch (Exception e) {
            log.error("Username or password is incorrect, cause: {}", e);
            throw new ExamException(ErrorCode.LOGIN_USERNAME_OR_PASSWORD_ERROR);
        }
        return token;
    }

    /**
     * 登录认证
     *
     * @param username
     * @param password
     */
    private void authenticate(String username, String password) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
    }
}
