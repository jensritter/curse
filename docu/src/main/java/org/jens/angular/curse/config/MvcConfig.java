package org.jens.angular.curse.config;

import org.jens.angular.curse.controller.IndexController;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Configuration für Web-Dinge
 *
 * @author Jens Ritter on 17.12.2015.
 */
@Configuration
@ComponentScan(basePackageClasses = IndexController.class)
@Import(SecurityConfig.class)
public class MvcConfig implements WebMvcConfigurer {
}
