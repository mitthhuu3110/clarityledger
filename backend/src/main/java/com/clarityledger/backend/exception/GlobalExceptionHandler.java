package com.clarityledger.backend.exception;
//Added just a bonus.

//@RestControllerAdvice
//public class GlobalExceptionHandler {
//
//    @ExceptionHandler(DataIntegrityViolationException.class)
//    public ResponseEntity<String> handleDuplicate(DataIntegrityViolationException ex) {
//        return ResponseEntity.status(HttpStatus.CONFLICT).body("User already exists with this email.");
//    }
//
//    @ExceptionHandler(RuntimeException.class)
//    public ResponseEntity<String> handleRuntime(RuntimeException ex) {
//        return ResponseEntity.badRequest().body(ex.getMessage());
//    }
//}
