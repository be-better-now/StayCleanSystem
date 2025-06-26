package com.stayclean.controller.web;

import com.stayclean.entity.ProgramEntity;
import com.stayclean.model.response.ProgramResponse;
import com.stayclean.services.ProgramService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/programs")
@SecurityRequirement(name = "api")
public class ProgramController {
    @Autowired
    ProgramService programService;

    @GetMapping("")
    public List<ProgramResponse> getAllPrograms() {
        return programService.getAllPrograms();
    }

    @PostMapping("/create")
    public ProgramEntity createProgram(@RequestBody ProgramEntity program) {
        return programService.addProgram(program);
    }

    @PutMapping("/{id}")
    public ProgramEntity updateProgram(@PathVariable("id") String id, @RequestBody ProgramEntity program) {
        return programService.updateProgram(id, program);
    }

    @DeleteMapping("/{id}")
    public void deleteProgram(@PathVariable("id") String id) {
        programService.deleteProgram(id);
    }

}
