package com.stayclean.exception;

// Tạo ra các Error code cho từng lỗi khác nhau

public enum ErrorCode {
    UNCATEGORIZED_EXCEPTION(9999, "Uncategorized error"),
    USER_EXISTED(1001, "User existed"),
    INVALID_KEY(1002, "Invalid message key"),
    USERNAME_INVALID(1003, "Username must be at least 3 characters!"),
    INVALID_PASSWORD(1004, "Password must be at least 6 characters!"),
    INVALID_FIRSTNAME(1005, "Firstname must be at least 8 characters!"),
    USER_NOT_EXISTED(1006, "User not existed"),
    UNAUTHENTICATED(1007, "Unauthenticated"),
    LOGIN_FAIL(1008, "Username or Password invalid"),
    USERNAME_EXISTED(1009,"Username existed"),
    PROGRAM_NOT_EXISTED(1010,"Program not existed"),
    COURSE_NOT_EXISTED(1011,"Course not existed"),
    COURSE_STATUS_NOT_EXISTED(1012,"Coursestatus not existed"),
    LIST_NOT_EXISTED(1013, "List not existed"),
    EMAIL_EXISTED(1014, "Email is duplicated"),
    PHONE_EXISTED(1015, "Phone is duplicated"),
    EMPTY_TOKEN(1016, "Empty token"),
    POST_DOES_NOT_EXIST(1017, "Post does not exist"),
    WRONG_PASSWORD(1018, "Your old password is not correct"),
    ACCOUNT_IS_NOT_EXISTED(1019, "Account is not existed"),
    BLOG_NOT_EXISTED(1020, "Post not found"),

    ;

    private int code;
    private String message;

    ErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}
