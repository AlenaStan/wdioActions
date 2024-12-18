Feature: The Internet Guinea Pig Website

Scenario: Click on checkbox
    Given I am on the checkbox page
      And I move mouse over checkbox
      And I click on current pointer position
    Then I should see a checkbox checked

Scenario: Click on checkbox with 0:0 coordinates
    Given I am on the checkbox page
      And I move mouse over checkbox
      And I click on current pointer position without offset
    Then I should see a checkbox checked

 Scenario: Click on checkbox with origin pointer with element's offset coordinates
     Given I am on the checkbox page
       And I wait 3 seconds
       And I remember checkbox coordinates
       And I click on current pointer position with offset element coordinates
       And I wait 3 seconds
     Then I should see a checkbox checked

Scenario: Click on checkbox with origin viewport with element's offset coordinates
    Given I am on the checkbox page
      And I wait 3 seconds
      And I remember checkbox coordinates
      And I click on viewport with offset element coordinates
      And I wait 3 seconds
    Then I should see a checkbox checked