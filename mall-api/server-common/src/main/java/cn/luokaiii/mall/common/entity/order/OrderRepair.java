package cn.luokaiii.mall.common.entity.order;

import cn.luokaiii.mall.common.entity.BaseEntity;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 售后单
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class OrderRepair extends BaseEntity {
    /**
     * 订单ID
     */
    private String orderId;
    /**
     * 发起人
     */
    private String userId;
    /**
     * 售后原因
     */
    private String reason;
    /**
     * 详细描述
     */
    private String comment;
    /**
     * 当前状态
     */
    private Status status;

    @JsonProperty
    public String statusName() {
        return this.status.name;
    }

    public enum Status {
        PENDING("待处理"),
        PROCESSED("已处理"),
        REJECTED("已拒绝");

        String name;

        Status(String name) {
            this.name = name;
        }
    }
}
