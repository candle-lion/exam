package com.stingy.person.exam.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/***
 *
 * @FileName: LibraryExceptionAdvice
 * @author 孙栋
 * @Date 2020 /1/7 22:32
 * @version 1.0.0
 * @remark
 * @explain
 */
@ControllerAdvice
public class ExceptionAdvice {

    @ExceptionHandler(ExamException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    private ErrorResult loginExceptionAdvice(ExamException libraryException) {
        return new ErrorResult(libraryException.getErrorCode());
    }
}
