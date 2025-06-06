import java.time.LocalDateTime;
import java.util.Date;

public class ConsultationDTO {
    private int consultationID;
    private UserDTO member;
    private ConsultantDTO consultant;
    private LocalDateTime consultationTime;
    private String consultationType; // "Offline" or "Online"
    private String meetUrl;
    private boolean consultationStatus;
    private String createdBy; // "User", "Consultant", or "Staff"
    private Date createdAt;

    // Default constructor
    public ConsultationDTO() {
        // Initialize with default values if necessary
    }
    // Parameterized constructor
public ConsultationDTO(int consultationID, UserDTO member, ConsultantDTO consultant, LocalDateTime consultationTime,
                          String consultationType, String meetUrl, boolean consultationStatus, String createdBy, Date createdAt) {
        this.consultationID = consultationID;
        this.member = member;
        this.consultant = consultant;
        this.consultationTime = consultationTime;
        this.consultationType = consultationType;
        this.meetUrl = meetUrl;
        this.consultationStatus = consultationStatus;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
    }
    // Getters and Setters
    public int getConsultationID() {
        return consultationID;
    }

    public void setConsultationID(int consultationID) {
        this.consultationID = consultationID;
    }

    public UserDTO getMember() {
        return member;
    }

    public void setMember(UserDTO member) {
        this.member = member;
    }

    public ConsultantDTO getConsultant() {
        return consultant;
    }

    public void setConsultant(ConsultantDTO consultant) {
        this.consultant = consultant;
    }

    public LocalDateTime getConsultationTime() {
        return consultationTime;
    }

    public void setConsultationTime(LocalDateTime consultationTime) {
        this.consultationTime = consultationTime;
    }

    public String getConsultationType() {
        return consultationType;
    }

    public void setConsultationType(String consultationType) {
        this.consultationType = consultationType;
    }

    public String getMeetUrl() {
        return meetUrl;
    }

    public void setMeetUrl(String meetUrl) {
        this.meetUrl = meetUrl;
    }

    public boolean isConsultationStatus() {
        return consultationStatus;
    }

    public void setConsultationStatus(boolean consultationStatus) {
        this.consultationStatus = consultationStatus;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    // Methods
    public void schedule() {
        // Implementation for scheduling a consultation
    }

    public void cancel() {
        // Implementation for cancelling a consultation
    }
}