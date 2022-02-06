package org.jens.angular.curse.controller;

import org.springframework.web.bind.annotation.GetMapping;

/**
 * IndexPage-Controller
 *
 * @author Jens Ritter on 17.12.2015.
 */
public class IndexController {

    @GetMapping("/")
    public String index() {
        return "redirect:/docs/index.html";
    }

}
