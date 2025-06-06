import java.util.Date;
package com.stayclean.model;

public class ConsultantNoteDTO {
    private int consultantNoteID;
    private ConsultationDTO consultation;
    private String note;
    private Date createdAt;
    public ConsultantNoteDTO() {
        // Default constructor
    }
    public ConsultantNoteDTO(int consultantNoteID, ConsultationDTO consultation, String note, Date createdAt) {
        this.consultantNoteID = consultantNoteID;
        this.consultation = consultation;
        this.note = note;
        this.createdAt = createdAt;
    }
    // Getters and Setters
    public int getConsultantNoteID() {
        return consultantNoteID;
    }

    public void setConsultantNoteID(int consultantNoteID) {
        this.consultantNoteID = consultantNoteID;
    }

    public ConsultationDTO getConsultation() {
        return consultation;
    }

    public void setConsultation(ConsultationDTO consultation) {
        this.consultation = consultation;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
