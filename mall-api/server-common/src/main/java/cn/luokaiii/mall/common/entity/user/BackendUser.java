package cn.luokaiii.mall.common.entity.user;

import cn.luokaiii.mall.common.entity.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 后台用户
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class BackendUser extends BaseEntity {
    /**
     * 用户名
     */
    private String username;
    /**
     * 密码
     */
    private String password;
    /**
     * 手机号
     */
    private String mobile;
    /**
     * 邮箱
     */
    private String email;
    /**
     * 头像
     */
    private String avatar;
    /**
     * 角色
     */
    private RoleName role;
    /**
     * 部门
     */
    private String department;
    /**
     * 职位
     */
    private String position;

    public enum RoleName {
        /**
         * 运维
         */
        OPERATE,
        /**
         * 管理员
         */
        ADMINISTRATOR,
        /**
         * 超级管理员
         */
        SUPER_ADMIN
    }
}
