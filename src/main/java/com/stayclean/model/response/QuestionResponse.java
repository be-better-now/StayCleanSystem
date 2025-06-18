
package com.stayclean.model.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionResponse {
    private String questionID;
    private String questionContent;
    private String questionType;
    private String questionCategory;
    private String answer;

}
