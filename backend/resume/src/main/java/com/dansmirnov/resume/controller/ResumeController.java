package com.dansmirnov.resume.controller;
import org.springframework.web.bind.annotation.*;
import com.dansmirnov.resume.model.ResumeModel;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/resume")
public class ResumeController {
    private ResumeModel resume = new ResumeModel();
    @GetMapping
    public ResumeModel getResume() {
        System.out.println("Information sent: " + resume);
        return resume;
    }
    @PostMapping("/feedback")
    public String submitFeedback(@RequestBody String feedback) {
        System.out.println("receive otklik: " + feedback);
        return "done!!";
    }
}
