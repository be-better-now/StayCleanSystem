package com.stayclean.exception;


public class AuthException extends RuntimeException{
    public AuthException(String message) {
        super(message); // Kế thừa của RuntimeException
    }
}
