package com.stayclean.model;

import java.util.List;

public class ConsultantDTO {
    private int consultantId;
    private List<ConsultantNoteDTO> consultationNotes;
    private List<ConsultationDTO> consultations;

    // Constructor
    public ConsultantDTO(int consultantId, List<ConsultantNoteDTO> consultationNotes, List<ConsultationDTO> consultations) {
        this.consultantId = consultantId;
        this.consultationNotes = consultationNotes;
        this.consultations = consultations;
    }

    // Getters và Setters
    public int getConsultantId() {
        return consultantId;
    }

    public void setConsultantId(int consultantId) {
        this.consultantId = consultantId;
    }

    public List<ConsultantNoteDTO> getConsultationNotes() {
        return consultationNotes;
    }

    public void setConsultationNotes(List<ConsultantNoteDTO> consultationNotes) {
        this.consultationNotes = consultationNotes;
    }

    public List<ConsultationDTO> getConsultations() {
        return consultations;
    }

    public void setConsultations(List<ConsultationDTO> consultations) {
        this.consultations = consultations;
    }
}
