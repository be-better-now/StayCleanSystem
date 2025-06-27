package com.stayclean.controller.web;

import com.stayclean.entity.ProgramEntity;
import com.stayclean.model.request.ProgramRequest;
import com.stayclean.model.response.ProgramResponse;
import com.stayclean.services.ProgramService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/programs")
@SecurityRequirement(name = "api")
public class ProgramController {
    @Autowired
    ProgramService programService;

    @GetMapping("/{id}")
    public ResponseEntity<ProgramResponse> getProgramById(@PathVariable String id) {
        ProgramResponse program = programService.getProgramById(id);
        return ResponseEntity.ok(program);
    }
    @GetMapping
    public ResponseEntity<List<ProgramResponse>> getAllPrograms() {
        List<ProgramResponse> programs = programService.getAllPrograms();
        return ResponseEntity.ok(programs);
    }
    @PostMapping("/create")
    public ResponseEntity<ProgramResponse> createProgram(@Valid @RequestBody ProgramRequest createProgramRequestDto) {
        ProgramResponse createdProgram = programService.createProgram(createProgramRequestDto);
        return new ResponseEntity<>(createdProgram, HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<ProgramResponse> updateProgram(@PathVariable String id, @Valid @RequestBody ProgramRequest updateProgramRequestDto) {
        ProgramResponse updatedProgram = programService.updateProgram(id, updateProgramRequestDto);
        return ResponseEntity.ok(updatedProgram);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProgram(@PathVariable String id) {
        programService.deleteProgram(id);
        return ResponseEntity.noContent().build();
    }

}
