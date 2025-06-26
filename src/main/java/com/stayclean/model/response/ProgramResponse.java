package com.stayclean.model.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProgramResponse {
    private String programID;
    private String programName;
    private String programDescription;
    private Date programDate;
    private String programCategory;
    private boolean programStatus;
}
