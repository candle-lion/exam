package com.stingy.person.exam.swagger;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * The type Swagger configuartion.
 *
 * @Author: 孙栋
 * @Email: 905280842 @qq.com
 * @Date: 2020 /1/5 10:36
 */
@Configuration
@EnableSwagger2
public class SwaggerConfiguartion {

    /**
     * 创建图书馆API
     *
     * @return docket
     */
    @Bean
    public Docket createRestApi() {
        return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo()).select().apis(RequestHandlerSelectors.basePackage("com.sun.amusement")).paths(PathSelectors.any()).build();
    }

    /**
     * API作者部分信息
     *
     * @return 作者信息
     */
    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                // 页面标题
                .title("图书馆管理系统")
                // 创建人信息
                .contact(new Contact("sundong", "http://dragon-soul.cn", "905280842@qq.com"))
                // 版本号
                .version("1.0")
                // 描述
                .description("图书馆管理系统API描述")
                .license("License")
                .build();
    }
}
