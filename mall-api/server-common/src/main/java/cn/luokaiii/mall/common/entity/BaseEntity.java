package cn.luokaiii.mall.common.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public abstract class BaseEntity {

    private String id;

    private Date createTime;

    private Date updateTime;
}
