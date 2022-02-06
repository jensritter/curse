package org.jens.angular.curse.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;
import java.util.UUID;

/**
 * @author Jens Ritter on 22/01/2022.
 */
@RestController
public class RandomController {

    @CrossOrigin(origins = "*")
    @GetMapping("/api/random")
    public RandomData random() {
        return new RandomData(UUID.randomUUID().toString(), new Random().nextInt(100));
    }


    public static class RandomData {
        private final String value;
        private final int intValue;

        public RandomData(String value, int intValue) {
            this.value = value;
            this.intValue = intValue;
        }

        public String getValue() {return value;}

        public int getIntValue() {return intValue;}

        public boolean getBool() {return intValue < 50;}
    }
}
