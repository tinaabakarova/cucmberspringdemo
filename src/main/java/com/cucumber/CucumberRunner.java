package com.cucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


/**
 * Created by sergey on 09.07.14.
 */

@RunWith(Cucumber.class)
@CucumberOptions(tags = {},format = {"pretty", "json:target/cucumber.json","html:target/cucumber.html"}, features = {"src/main/java/com/features/"})
public class CucumberRunner {

}
