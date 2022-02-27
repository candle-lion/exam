package com.stingy.person.exam.user;

import com.stingy.person.exam.dao.entity.QueryUserEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.List;

/**
 * The type User list response.
 *
 * @Author: 孙栋
 * @Email: 905280842 @qq.com
 * @Date: 2020 /1/5 10:26
 */
@ApiModel(value = "UserListResponse")
public class UserListResponse {

    /**
     * 总记录数
     */
    @ApiModelProperty(value = "用户列表记录总数")
    private int total;

    /**
     * 列表数据
     */
    @ApiModelProperty(value = "用户列表记录")
    private List<QueryUserEntity> data;

    /**
     * 构造方法
     *
     * @param data
     *            人员列表数据
     */
    public UserListResponse(List<QueryUserEntity> data) {
        this.data = data;
        this.total = data.size();
    }

    /**
     * Gets total.
     *
     * @return the total
     */
    public int getTotal() {
        return total;
    }

    /**
     * Sets total.
     *
     * @param total
     *            the total
     */
    public void setTotal(int total) {
        this.total = total;
    }

    /**
     * Gets data.
     *
     * @return the data
     */
    public List<QueryUserEntity> getData() {
        return data;
    }

    /**
     * Sets data.
     *
     * @param data
     *            the data
     */
    public void setData(List<QueryUserEntity> data) {
        this.data = data;
    }
}
