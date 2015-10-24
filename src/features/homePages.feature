Feature: Login Github
  As a user of github
  I want to login as my account
  So that I use github

  Scenario Outline: login Github
    Given open the login page
    When login with users "<UserName>" and "<PassWord>"
    Then login "<LoginResult>"
    Examples:
      | UserName  | PassWord  | LoginResult |
      | RainieYan | 111111    | failed      |
      | RainieYan | 111111ysy | successful  |