$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("pc.feature");
formatter.feature({
  "id": "pc-feature",
  "description": "",
  "name": "PC Feature",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "pc-feature;verify-that-user-can-open-pc-page",
  "tags": [
    {
      "name": "@1",
      "line": 3
    }
  ],
  "description": "",
  "name": "Verify that user can open PC page",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "I open pn.com.ua",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I select category \"Компьютеры\"",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I should see page url \"http://pn.com.ua/computers/\"",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "HomeSteps.shouldOpenMainPage()"
});
formatter.result({
  "duration": 48335868028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Компьютеры",
      "offset": 19
    }
  ],
  "location": "HomeSteps.shoulSelectCategory(String)"
});
formatter.result({
  "duration": 670215239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://pn.com.ua/computers/",
      "offset": 23
    }
  ],
  "location": "ComputersSteps.shouldCategoryPage(String)"
});
formatter.result({
  "duration": 33681952,
  "status": "passed"
});
formatter.scenario({
  "id": "pc-feature;verify-that-user-can-open-pc-page",
  "tags": [
    {
      "name": "@2",
      "line": 9
    }
  ],
  "description": "",
  "name": "Verify that user can open PC page",
  "keyword": "Scenario",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "I open pn.com.ua",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "I select category \"Компьютеры\"",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "verify that has sub-column:",
  "keyword": "Then ",
  "line": 13,
  "rows": [
    {
      "cells": [
        "name"
      ],
      "line": 14
    },
    {
      "cells": [
        "Ноутбуки, планшеты"
      ],
      "line": 15
    }
  ]
});
formatter.match({
  "location": "HomeSteps.shouldOpenMainPage()"
});
formatter.result({
  "duration": 1256093681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Компьютеры",
      "offset": 19
    }
  ],
  "location": "HomeSteps.shoulSelectCategory(String)"
});
formatter.result({
  "duration": 12236625538,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.shouldBeSubItems(DataTable)"
});
formatter.result({
  "duration": 8128001561,
  "status": "failed",
  "error_message": "java.lang.AssertionError: \nExpected: (a collection containing \"name\" and a collection containing \"Ноутбуки, планшеты\")\n     but: a collection containing \"name\" was \"Ноутбуки, планшеты\", was \"Настольные компьютеры\", was \"Тонкие клиенты\", was \"Игровые приставки\", was \"Мониторы\", was \"Клавиатуры\", was \"Мыши\", was \"Джойстики\", was \"Колонки\", was \"Принтеры и МФУ\", was \"Сканеры\", was \"Графические планшеты\", was \"Web-камеры\", was \"ИБП (UPS)\", was \"Стабилизаторы напряжения\", was \"Сетевые фильтры, удлинители\", was \"Видеокарты\", was \"Процессоры\", was \"Материнские платы\", was \"Память\", was \"Жесткие диски\", was \"Корпуса\", was \"Блоки питания\", was \"Охлаждающие устройства\", was \"Звуковые карты\", was \"Тюнеры, платы монтажа\", was \"USB флешки\", was \"Карты памяти\", was \"Кардридеры\", was \"Подставки для ноутбуков\", was \"Модемы\", was \"Сетевые карты\", was \"Беспроводное оборудование\", was \"Коммутаторы, маршрутизаторы\", was \"Серверы печати\", was \"Телефоны, факсы\", was \"Уничтожители документов\"\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\r\n\tat com.cucumber.steps.ComputersSteps.shouldBeSubItems(ComputersSteps.java:55)\r\n\tat ✽.Then verify that has sub-column:(pc.feature:13)\r\n"
});
});