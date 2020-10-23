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
     * 订单收货地址
     */
    private OrderAddress address;
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

    @Getter
    @Setter
    public static class OrderAddress {
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
    }
}
