package com.stingy.person.exam.dao.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * The type Query user entity.
 *
 * @Author: 孙栋
 * @Email: 905280842 @qq.com
 * @Date: 2020 /1/5 9:08
 */
@ApiModel(value = "QueryUserEntity")
public class QueryUserEntity extends UserEntity {

    /**
     * 角色名称
     */
    @ApiModelProperty(value = "角色名称")
    private String roleName;

    /**
     * Gets role name.
     *
     * @return the role name
     */
    public String getRoleName() {
        return roleName;
    }

    /**
     * Sets role name.
     *
     * @param roleName
     *            the role name
     */
    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }
}
