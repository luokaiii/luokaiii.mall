package cn.luokaiii.mall.common.entity.cart;

import cn.luokaiii.mall.common.entity.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 购物车
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class Cart extends BaseEntity {
    /**
     * 商品ID
     */
    private String goodsId;
    /**
     * 所属用户
     */
    private String userId;
}
