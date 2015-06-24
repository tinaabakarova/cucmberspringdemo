package com.cucumber.steps;


import com.cucumber.pages.Computers;
import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebElement;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

/**
 * Created by Sergey on 14.03.2015.
 */
public class ComputersSteps extends Step{

    @Autowired
    Computers computers;

    @When("I select PC type $type at computers page")
    public void shouldSelectPcType(String type){
        computers.selectPCType(type).click();
    }

    @When("I select min price $price")
    public void shouldSelectMinPrice(String price){
        computers.getMinPrice(price).click();
    }

    @When("I select max price $price")
    public void shouldSelectMaxPrice(String price){
        computers.getMaxPrice(price).click();
    }

    @Then("I should see page url \"(.*?)\"$")
    public void shouldCategoryPage(String url){
        assertThat(computers.getCurrentUrl(), equalTo(url));
    }

    @Then("I should see result $result")
    public void shouldBeSearchResult(String expected){
        String actual = computers.getFilterResult().getText();
        assertThat(actual, equalTo(expected));
    }

    @Then("^verify that has sub-column:$")
    public void shouldBeSubItems(DataTable table) throws Throwable {
        List<String> expect = table.asList(String.class);
        List<String> actual = extractText(computers.getSubItems());
        assertThat(actual, hasItems(expect.toArray(new String[expect.size()])));
    }

    private List<String> extractText(List<WebElement> webElements){
        List<String> text = new ArrayList<String>();
        for (WebElement el : webElements){
            text.add(el.getText());
        }
        return text;
    }



//    @After("@2")
//    public void tearDown(){
//        driver.close();
//    }
}
