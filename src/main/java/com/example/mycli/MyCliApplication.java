package com.example.mycli;

import com.example.mycli.services.FilesStorageService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;

import javax.annotation.Resource;

@SpringBootApplication
public class MyCliApplication implements CommandLineRunner {
    @Resource
    FilesStorageService storageService;
    public static void main(String[] args)  {
        SpringApplication.run(MyCliApplication.class);
    }
    @Override
    public void run(String... arg0) {
        storageService.deleteAll();
        storageService.init();
    }
}
