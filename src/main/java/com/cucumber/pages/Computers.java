package com.cucumber.pages;


import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by Sergey on 14.03.2015.
 */
@Component
public class Computers extends Page{

    public static final String URL = "http://pn.com.ua/computers/";

    public WebElement selectPCType(String type){
        return $("//a[contains(.,'%s')]",type);
    }


    public WebElement getMinPrice(String price) {
        return $(".//*[@id='page-content-wrap']/div[3]/div[1]/div[1]/div/div[2]/div[3]/div[2]//a[contains(.,'%s')]",price);
    }

    public WebElement getMaxPrice(String price) {
        return $(".//*[@id='page-content-wrap']/div[3]/div[1]/div[1]/div/div[2]/div[4]/div[2]//a[contains(.,'%s')]",price);
    }

    public WebElement getFilterResult() {
        return $(By.cssSelector(".total>b"));
    }

    public String getCurrentUrl() {
        return URL;
    }

    public List<WebElement> getSubItems() {
        return $$(By.cssSelector(".ct.warn>a"));
    }

}
