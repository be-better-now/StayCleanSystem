package com.stayclean.model.request;

import jakarta.validation.constraints.*;
import lombok.Data;

import java.sql.Date;

@Data
public class ProgramRequest {
    @NotBlank
    @Size(min = 2, max = 10, message = "Program ID must be between 2 and 10 characters!")
    private String programId;

    @NotBlank(message = "Program name cannot be blank")
    @Size(min = 3, max = 100, message = "Program name must be between 3 and 100 characters")
    private String programName;

    private String programDescription;

    @NotNull(message = "Program date cannot be null")
    private Date programDate;

    @NotBlank(message = "Program category cannot be blank")
    private String programCategory;
    @NotBlank
    private boolean Status;
}
