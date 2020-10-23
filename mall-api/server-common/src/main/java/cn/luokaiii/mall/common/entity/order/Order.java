package cn.luokaiii.mall.common.entity.order;

import cn.luokaiii.mall.common.entity.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * 订单
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class Order extends BaseEntity {
    /**
     * 订单商品
     */
    private List<OrderGoods> goods;
    /**
     * 所属用户
     */
    private String userId;
    /**
     * 总价
     */
    private Long totalPrice;

    @Getter
    @Setter
    public static class OrderGoods {
        /**
         * 商品ID
         */
        private String goodsId;
        /**
         * 标题
         */
        private String title;
        /**
         * 副标题
         */
        private String subTitle;
        /**
         * 商品图片
         */
        private String picture;
        /**
         * 数量
         */
        private Long count;
        /**
         * 商品规格
         */
        private List<String> specification;
        /**
         * 原始价格
         */
        private Long originalPrice;
        /**
         * 当前价格（真实价格）
         */
        private Long realPrice;
    }
}
