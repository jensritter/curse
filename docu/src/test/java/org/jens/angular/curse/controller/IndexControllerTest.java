package org.jens.angular.curse.controller;

import org.jens.angular.curse.MyMockRunner;
import org.junit.jupiter.api.Test;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * @author Jens Ritter on 15.10.2016.
 */
public class IndexControllerTest extends MyMockRunner {

    @Test
    public void testIndex() throws Exception {
        mockMvc.perform(get("/"))
            .andExpect(status().is3xxRedirection());

    }


}
