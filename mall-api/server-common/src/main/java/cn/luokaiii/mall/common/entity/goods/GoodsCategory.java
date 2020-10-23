package cn.luokaiii.mall.common.entity.goods;

import cn.luokaiii.mall.common.entity.BaseEntity;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 商品分类
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class GoodsCategory extends BaseEntity {
    /**
     * 父类型ID
     */
    private String parentId;
    /**
     * 图标
     */
    private String icon;
    /**
     * 分类名称
     */
    private String name;
    /**
     * 状态
     */
    private Status status;

    @JsonProperty
    public String statusName() {
        return this.status.name;
    }

    public enum Status {
        FORBIDDEN("禁用"),
        AVAILABLE("正常");

        String name;

        Status(String name) {
            this.name = name;
        }
    }
}
