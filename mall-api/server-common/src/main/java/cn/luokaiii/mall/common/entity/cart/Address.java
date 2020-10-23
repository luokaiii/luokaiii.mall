package cn.luokaiii.mall.common.entity.cart;

import cn.luokaiii.mall.common.entity.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 收货地址
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class Address extends BaseEntity {
    /**
     * 省/直辖市
     */
    private String province;
    /**
     * 城市
     */
    private String city;
    /**
     * 区/县
     */
    private String county;
    /**
     * 详细地址
     */
    private String details;
    /**
     * 是否默认
     */
    private Boolean isDefault;
    /**
     * 所属用户
     */
    private String userId;
}
