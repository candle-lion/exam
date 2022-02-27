package com.stingy.person.exam.aop;

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
 *
 * @FileName: PermissionAspect
 * @author 孙栋
 * @Date 2020 /3/6 7:01
 * @version 1.0.0
 * @remark
 * @explain
 */
@Aspect
@Component
@Order(2)
public class PermissionAspect {

    private static final Logger log = LoggerFactory.getLogger(PermissionAspect.class);

    /**
     * 定义切入点，切入点为需要校验验证码的Controller 通过@Pointcut注解声明频繁使用的切点表达式
     */
    @Pointcut("execution(public * com.stingy.person.exam.api.*Controller.*(..)) && !execution(public * com.stingy.person.exam.api.UserController.login(..)) && !execution(public * com.stingy.person.exam.api.UserController.addUser(..)) && !execution(public * com.stingy.person.exam.api.UserController.forgotPassword(..))")
    public void permissionPoint() {

    }

    /**
     * Do around object.
     *
     * @param proceedingJoinPoint the proceeding join point
     * @return the object
     * @throws Throwable the throwable
     */
    @Around("permissionPoint()")
    public Object doAround(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {

        // 获取验证码
        ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = servletRequestAttributes.getRequest();

        String requestUri = request.getRequestURI();
        log.info("-------------{}", requestUri);
        return proceedingJoinPoint.proceed();
    }
}
