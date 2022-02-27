package com.stingy.person.exam.util;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.util.Random;

/**
 * The type Verification code.
 *
 * @Author: 孙栋
 * @Email: 905280842 @qq.com
 * @Date: 2020 /1/5 12:50
 */
public class VerificationCode {

    /**
     * 随机生成数字和字母的基础字符串
     */
    private static final String NUM_LETTER = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";

    /**
     * 随机生成字符长度
     */
    private static final int RANDOM_LENGHT = 4;

    /**
     * 干扰线数量
     */
    private static final int INTERFERENCE_LINE_NUM = 6;

    /**
     * 噪点数量
     */
    private static final int NOISE_NUM = 30;

    /**
     * 画验证码
     *
     * @param width
     *            the width
     * @param height
     *            the height
     * @param verifyImg
     *            the verify img
     * @return string
     */
    public static String drawRandomText(int width, int height, BufferedImage verifyImg) {
        Graphics2D graphics = (Graphics2D) verifyImg.getGraphics();
        //设置画笔颜色-验证码背景色
        graphics.setColor(Color.WHITE);
        //填充背景
        graphics.fillRect(0, 0, width, height);
        graphics.setFont(new Font("微软雅黑", Font.BOLD, 25));
        //数字和字母的组合
        StringBuffer sBuffer = new StringBuffer();
        //旋转原点的 x 坐标
        int x = 10;
        int y = 10;
        String ch = "";
        Random random = new Random();
        for (int i = 0; i < RANDOM_LENGHT; i++) {
            graphics.setColor(getRandomColor());
            //设置字体旋转角度 角度小于30度
            int degree = random.nextInt() % 30;
            int dot = random.nextInt(NUM_LETTER.length());
            ch = NUM_LETTER.charAt(dot) + "";
            sBuffer.append(ch);
            //正向旋转
            graphics.rotate(degree * Math.PI / width, x, y);
            graphics.drawString(ch, x, height - 5);
            //反向旋转
            graphics.rotate(-degree * Math.PI / width, x, y);
            x += 20;
        }

        //画干扰线
        for (int i = 0; i < INTERFERENCE_LINE_NUM; i++) {
            // 设置随机颜色
            graphics.setColor(getRandomColor());
            // 随机画线
            graphics.drawLine(random.nextInt(width), random.nextInt(height),
                    random.nextInt(width), random.nextInt(height));
        }

        //添加噪点
        for (int i = 0; i < NOISE_NUM; i++) {
            int x1 = random.nextInt(width);
            int y1 = random.nextInt(height);
            graphics.setColor(getRandomColor());
            graphics.fillRect(x1, y1, 2, 2);
        }
        return sBuffer.toString();
    }

    /**
     * 随机取色
     */
    private static Color getRandomColor() {
        Random ran = new Random();
        Color color = new Color(ran.nextInt(256),
                ran.nextInt(256), ran.nextInt(256));
        return color;
    }
}