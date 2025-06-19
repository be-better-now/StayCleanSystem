package com.stayclean.model.request;

import com.stayclean.entity.UserEntity;
import lombok.Data;

@Data
public class EmailDetail {
    private UserEntity user;
    private String subject;
    private String link;
}
