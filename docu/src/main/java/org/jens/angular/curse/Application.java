package org.jens.angular.curse;

import org.jens.angular.curse.config.AppConfig;
import org.jens.angular.curse.config.MvcConfig;
import org.jens.shorthand.spring.boot.HostnameAwareSpringApplicationBuilder;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 * Standalone ApplicationStarter
 *
 * @author Jens Ritter on 02.03.2018.
 */
@EnableAutoConfiguration
@Configuration
@Import({
    MvcConfig.class,
    AppConfig.class,
})
public class Application {

    /**
     * Starter
     *
     * @param args cli-args
     **/
    public static void main(String[] args) {
        new HostnameAwareSpringApplicationBuilder(Application.class)
            .run(args);
    }

}
