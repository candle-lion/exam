package com.stingy.person.exam.util;

import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

/**
 * 检查重复文件
 *
 * @Author: 孙栋
 * @Email: 905280842 @qq.com
 * @Date: 2020 /1/4 16:58
 */
public class CheckDuplicateFile {

    private static final String DUPLICATE_FILE_PATH = "C:\\Users\\Administrator.LAPTOP-DV6H7GK0\\Desktop\\照片";

    private static ConcurrentMap<String, File> duplicateFileMap = new ConcurrentHashMap<String, File>();

    /**
     * The entry point of application.
     *
     * @param args
     *            the input arguments
     * @throws IOException
     *             the io exception
     */
    public static void main(String[] args) throws IOException {
        File[] duplicateFiles = FileUtils.getFile(DUPLICATE_FILE_PATH).listFiles();
        for (File duplicateFile : duplicateFiles) {
            InputStream duplicateFileInputStream = null;
            try {
                duplicateFileInputStream = new FileInputStream(duplicateFile.getAbsolutePath());
                String md5Hex = DigestUtils.md5Hex(duplicateFileInputStream);
                if (!duplicateFileMap.containsKey(md5Hex)) {
                    duplicateFileMap.put(md5Hex, duplicateFile);
                } else {
                    System.out.println("[0]" + duplicateFileMap.get(md5Hex).getAbsolutePath());
                    System.out.println("[1]" + duplicateFile.getAbsolutePath());
                    System.out.println(FileUtils.deleteQuietly(duplicateFileMap.get(md5Hex).getAbsoluteFile()));
                }
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                IOUtils.closeQuietly(duplicateFileInputStream);
            }
        }
    }
}
