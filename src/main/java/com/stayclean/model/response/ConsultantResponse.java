package com.stayclean.model.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ConsultantResponse {
    private int consultantId;
    private List<ConsultantNoteResponse> consultationNotes;
    private List<ConsultationResponse> consultations;

}
