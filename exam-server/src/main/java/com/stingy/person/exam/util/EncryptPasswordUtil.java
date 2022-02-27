package com.stingy.person.exam.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * The type Encrypt password util.
 *
 * @Author: 孙栋
 * @Email: 905280842 @qq.com
 * @Date: 2020 /1/5 12:07
 */
public class EncryptPasswordUtil extends BCryptPasswordEncoder {

    private static EncryptPasswordUtil encryptPasswordUtil = null;

    /**
     * Gets instance.
     *
     * @return the instance
     */
    public static EncryptPasswordUtil getInstance() {
        if (encryptPasswordUtil == null) {
            encryptPasswordUtil = new EncryptPasswordUtil();
        }

        return encryptPasswordUtil;
    }

    /**
     * 加密
     *
     * @param password
     *            密码
     * @return 加密后的字符串 string
     */
    public String encrypt(String password) {
        return getInstance().encode(password);
    }

    /**
     * 密码比对
     *
     * @param input
     *            用户输入面
     * @param password
     *            密码
     * @return 比对结果 boolean
     */
    public boolean matchesPassword(String input, String password) {
        return matches(input, password);
    }
}
