package com.stayclean.services;

import com.stayclean.entity.ProgramEntity;
import com.stayclean.model.response.ProgramResponse;
import com.stayclean.repository.ProgramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProgramService {
    @Autowired
    private ProgramRepository programRepository;

    private ProgramResponse mapToDto(ProgramEntity program) {
        return new ProgramResponse(
                program.getProgramID(),
                program.getProgramName(),
                program.getProgramDescription(),
                program.getProgramDate(),
                program.getProgramCategory(),
                program.isProgramStatus()
        );
    }

    public List<ProgramResponse> getAllPrograms() {
        return programRepository.findAll().stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    public ProgramEntity addProgram(ProgramEntity programEntity) {
        return programRepository.save(programEntity);
    }

    public ProgramEntity updateProgram(String programId, ProgramEntity updatedProgram) {
        return programRepository.findById(programId).map(program -> {
                    program.setProgramName(updatedProgram.getProgramName());
                    program.setProgramDescription(updatedProgram.getProgramDescription());
                    program.setProgramDate(updatedProgram.getProgramDate());
                    program.setProgramCategory(updatedProgram.getProgramCategory());
                    // Add other fields as needed
                    return programRepository.save(program);
                })
                .orElseThrow(() -> new RuntimeException("Program not found with id: " + programId));
    }

    public void deleteProgram(String programId) {
        if (!programRepository.existsById(programId)) {
            throw new RuntimeException("Program not found with id: " + programId);
        }
        programRepository.deleteById(programId);
    }
}