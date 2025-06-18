package com.stayclean.model.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class ConsultantNoteResponse {
    private int consultantNoteID;
    private ConsultationResponse consultation;
    private String note;
    private Date createdAt;
}
