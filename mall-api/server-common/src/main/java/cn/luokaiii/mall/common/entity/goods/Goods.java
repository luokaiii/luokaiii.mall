package cn.luokaiii.mall.common.entity.goods;

import cn.luokaiii.mall.common.entity.BaseEntity;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;
import java.util.Map;

/**
 * 商品
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class Goods extends BaseEntity {
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
    private List<String> pictures;
    /**
     * 重量
     */
    private Boolean weight;
    /**
     * 库存
     */
    private Long stock;
    /**
     * 商品规格：key 规格名（如颜色、尺码等）；value 规格参数（如红色、白色、藏青色等）
     */
    private Map<String, List<String>> specifications;
    /**
     * 原始价格
     */
    private Long originalPrice;
    /**
     * 当前价格（真实价格）
     */
    private Long realPrice;

    /**
     * 参加的活动
     */
    private List<String> activityIds;
    /**
     * 所属分类
     */
    private String categoryId;
    /**
     * 所属用户
     */
    private String createUserId;
    /**
     * 商品当前状态
     */
    private Status status;

    @JsonProperty
    public String statusName() {
        return this.status.name;
    }

    public enum Status {
        DRAFT("草稿箱"),
        STAY_ON("待上架"),
        NORMAL("已上架"),
        SOLD_OUT("已下架");

        String name;

        Status(String name) {
            this.name = name;
        }
    }
}
