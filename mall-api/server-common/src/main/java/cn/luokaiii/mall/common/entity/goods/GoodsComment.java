package cn.luokaiii.mall.common.entity.goods;

import cn.luokaiii.mall.common.entity.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 商品评论
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class GoodsComment extends BaseEntity {
    /**
     * 星级，1-5
     */
    private Integer star;
    /**
     * 评论
     */
    private String comment;
    /**
     * 追评
     */
    private String addComment;
    /**
     * 商家回复
     */
    private String reply;
    /**
     * 商品ID
     */
    private String goodsId;
    /**
     * 订单ID
     */
    private String orderId;
    /**
     * 用户ID
     */
    private String userId;
}
