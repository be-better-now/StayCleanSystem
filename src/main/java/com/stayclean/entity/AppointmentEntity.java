package com.stayclean.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "appointments")
public class AppointmentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "appointment_id")
    private Long appointmentId;

    @ManyToOne
    @JoinColumn(name = "member_id", nullable = false)
    private MemberEntity member;

    @ManyToOne
    @JoinColumn(name = "consultant_id", nullable = false)
    private ConsultantEntity consultant;

    @NotNull(message = "Appointment slot cannot be null")
    @Column(name = "slot_time", nullable = false)
    private LocalDateTime slotTime;

    @Pattern(regexp = "^(PENDING|CONFIRMED|COMPLETED)$", message = "Status must be PENDING, CONFIRMED, or COMPLETED")
    @Column(name = "status", length = 20)
    private String status;

    @Column(name = "note", length = 500)
    private String note; // Ghi chú của Consultant
}

