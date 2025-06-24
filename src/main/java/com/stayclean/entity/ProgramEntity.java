package com.stayclean.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@Table(name = "programs")
public class ProgramEntity {
    @Id
    @Size(min = 2, max = 10, message = "Program ID must be between 2 and 10 characters!")
    @Column(name = "course_id", length = 10)
    private String programID;
    
    @NotBlank(message = "Program name cannot be blank")
    @Size(max = 100, message = "Program name cannot exceed 100 characters")
    @Column(name = "program_name", length = 100, nullable = false)
    private String programName;

    @Size(max = 500, message = "Description cannot exceed 500 characters")
    @Column(name = "program_description", length = 500)
    private String programDescription;

    @NotNull(message = "Program date is required")
    @PastOrPresent(message = "Program date cannot be in the future")
    @Column(name = "program_date", nullable = false)
    private LocalDate programDate;

    @NotBlank(message = "Program category cannot be blank")
    @Size(max = 50, message = "Program category cannot exceed 50 characters")
    @Column(name = "program_category", length = 50, nullable = false)
    private String programCategory;

    @NotNull(message = "Program status is required")
    @Column(name = "program_status", nullable = false)
    private boolean programStatus;

}
