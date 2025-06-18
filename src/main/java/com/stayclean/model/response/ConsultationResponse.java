
package com.stayclean.model.response;

import com.stayclean.entity.MemberEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ConsultationResponse {
    private int consultationID;
    private MemberEntity member;
    private ConsultantResponse consultant;
    private LocalDateTime consultationTime;
    private String consultationType; // "Offline" or "Online"
    private String meetUrl;
    private boolean consultationStatus;
    private String createdBy; // "User", "Consultant", or "Staff"
    private Date createdAt;
}