package org.jens.angular.curse.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

/**
 * @author Jens Ritter on 22/01/2022.
 */
@RestController
public class RandomController {

    @GetMapping("/api/random")
    public String random() {
        return UUID.randomUUID().toString();
    }
}
