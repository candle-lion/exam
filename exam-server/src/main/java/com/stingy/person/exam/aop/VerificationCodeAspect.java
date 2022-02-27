package com.stingy.person.exam.aop;

import com.stingy.person.exam.dao.entity.CreateUserEntity;
import com.stingy.person.exam.dao.entity.ForgotPasswordEntity;
import com.stingy.person.exam.api.request.LoginForm;
import com.stingy.person.exam.exception.ErrorCode;
import com.stingy.person.exam.exception.ExamException;
import org.apache.commons.lang3.StringUtils;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

/***
 * 校验码切面认证
 *
 * @FileName: VCodeAspect
 * @author 孙栋
 * @Date 2020 /1/14 21:26
 * @version 1.0.0
 * @remark
 * @explain
 */
@Aspect
@Component
@Order(1)
public class VerificationCodeAspect {
    /**
     * 日志
     */
    private static final Logger log = LoggerFactory.getLogger(VerificationCodeAspect.class);

    /**
     * 用户
     */
    private static final String USER_URI = "/user";

    /**
     * 忘记密码
     */
    private static final String USER_FORGOT_URI = "/user/forgot";

    /**
     * 定义切入点，切入点为需要校验验证码的Controller 通过@Pointcut注解声明频繁使用的切点表达式
     */
    @Pointcut("execution(public * com.stingy.person.exam.api.UserController.login(..)) || execution(public * com.stingy.person.exam.api.UserController.addUser(..)) || execution(public * com.stingy.person.exam.api.UserController.forgotPassword(..))")
    public void verificationCodePoint() {

    }

    /**
     * Do around object.
     *
     * @param proceedingJoinPoint the proceeding join point
     * @return the object
     * @throws Throwable the throwable
     */
    @Around("verificationCodePoint()")
    public Object doAround(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {

        // 获取验证码
        ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = servletRequestAttributes.getRequest();

        String requestUri = request.getRequestURI();

        Object[] requestArgs = proceedingJoinPoint.getArgs();
        Object requestArg = requestArgs[0];
        String inputVerificationCode = "";

        if (StringUtils.endsWith(requestUri, USER_URI)) {
            CreateUserEntity createUserEntity = (CreateUserEntity) requestArg;
            inputVerificationCode = createUserEntity.getVerifyCode();
        } else if (StringUtils.endsWith(requestUri, USER_FORGOT_URI)) {
            ForgotPasswordEntity forgotPasswordEntity = (ForgotPasswordEntity) requestArg;
            inputVerificationCode = forgotPasswordEntity.getVerifyCode();
        } else {
            LoginForm loginForm = (LoginForm) requestArg;
            inputVerificationCode = loginForm.getVerifyCode();
        }

        String verificationCode = (String) request.getSession().getAttribute("verifyCode");

        if (!StringUtils.equalsIgnoreCase(verificationCode, inputVerificationCode)) {
            log.error("Verification code verification failed, input code [{}]", inputVerificationCode);
            throw new ExamException(ErrorCode.LOGIN_VERIFY_CODE_ERROR);
        }

        return proceedingJoinPoint.proceed();
    }
}
