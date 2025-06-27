package com.stayclean.services;

import com.stayclean.entity.ProgramEntity;
import com.stayclean.model.request.ProgramRequest;
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

    public ProgramResponse createProgram(ProgramRequest createDto) {
        ProgramEntity program = new ProgramEntity();
        program.setProgramID(createDto.getProgramId());
        program.setProgramName(createDto.getProgramName());
        program.setProgramDescription(createDto.getProgramDescription());
        program.setProgramDate(createDto.getProgramDate());
        program.setProgramCategory(createDto.getProgramCategory());
        program.setProgramStatus(createDto.isStatus());
        ProgramEntity savedProgram = programRepository.save(program);
        return mapToDto(savedProgram);
    }
    public ProgramResponse getProgramById(String programId) {
        ProgramEntity program = programRepository.findById(programId)
                .orElseThrow(() -> new RuntimeException("Program not found with id: " + programId));
        return mapToDto(program);
    }
    public ProgramResponse updateProgram(String programId, ProgramRequest updateDto) {
        ProgramEntity program = programRepository.findById(programId)
                .orElseThrow(() -> new RuntimeException("Program not found with id: " + programId));

        if (updateDto.getProgramName() != null) {
            program.setProgramName(updateDto.getProgramName());
        }
        if (updateDto.getProgramDescription() != null) {
            program.setProgramDescription(updateDto.getProgramDescription());
        }
        if (updateDto.getProgramDate() != null) {
            program.setProgramDate(updateDto.getProgramDate());
        }
        if (updateDto.getProgramCategory() != null) {
            program.setProgramCategory(updateDto.getProgramCategory());
        }
        if (updateDto.isStatus() != program.isProgramStatus()) {
            program.setProgramStatus(updateDto.isStatus());
        }
        // Note: Updating createdBy is generally not done or requires specific business logic.

        ProgramEntity updatedProgram = programRepository.save(program);
        return mapToDto(updatedProgram);
    }

    public void deleteProgram(String programId) {
        if (!programRepository.existsById(programId)) {
            throw new RuntimeException("Program not found with id: " + programId);
        }
        programRepository.deleteById(programId);
    }
}