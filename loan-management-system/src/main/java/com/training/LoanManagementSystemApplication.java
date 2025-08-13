package com.training;

import com.training.util.Greeting;
import com.training.util.RandomNumberGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class LoanManagementSystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(LoanManagementSystemApplication.class, args);
    }


}
