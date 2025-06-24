package com.stayclean.services;

import com.stayclean.entity.ProgramEntity;
import com.stayclean.repository.ProgramRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProgramService {
    ProgramRepository programRepository;
    public List<ProgramEntity> getAllPrograms() {
        return programRepository.findAll();
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
        programRepository.deleteById(programId);
    }
}
