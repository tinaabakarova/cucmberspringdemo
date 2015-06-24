package com.cucumber.steps;

import com.cucumber.pages.Home;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by sergey on 14.03.15.
 */
public class HomeSteps extends Step {

    @Autowired
    Home home;

    @Given("^I open pn\\.com\\.ua$")
    public void shouldOpenMainPage() throws Throwable {
        home.open();
    }

    @When("^I select category \"(.*?)\"$")
    public void shoulSelectCategory(String cat) throws Throwable {
        home.getCategoty(cat).click();
    }

}
