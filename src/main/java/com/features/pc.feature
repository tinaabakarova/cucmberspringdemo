Feature: PC Feature

  @1
  Scenario: Verify that user can open PC page
    Given I open pn.com.ua
    When I select category "Компьютеры"
    Then I should see page url "http://pn.com.ua/computers/"

  @2
  Scenario: Verify that user can open PC page
    Given I open pn.com.ua
    When I select category "Компьютеры"
    Then verify that has sub-column:
    |name|
    |Ноутбуки, планшеты|
