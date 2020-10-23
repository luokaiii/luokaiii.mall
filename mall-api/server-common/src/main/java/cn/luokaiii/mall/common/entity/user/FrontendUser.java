package cn.luokaiii.mall.common.entity.user;

import cn.luokaiii.mall.common.entity.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 前台用户
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class FrontendUser extends BaseEntity {
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
     * 昵称
     */
    private String nickname;
    /**
     * 等级
     */
    private String level;
    /**
     * 积分
     */
    private String integration;
}
