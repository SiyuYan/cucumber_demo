Feature: Login Github
  As a user of github
  I want to login with my account
  So that I use my github

#  Scenario Outline: login Github
#    Given open the login page
#    When login with users "<UserName>" and "<PassWord>"
#    Then login "<LoginResult>"
#    Examples:
#      | UserName  | PassWord  | LoginResult |
##      | RainieYan | 111111    | failed      |failed
#      | RainieYan | 111111ysy | successful  |

  Scenario: login Github
    Given open the login page
    When login with users UserName and PassWord:
#      | UserName | RainieYan |
#      | PassWord | 111111ysy |
      | msg    | name  |
      | hello  | siyu  |
      | hello2 | siyu2 |
    Then login LoginResult:
#      | LoginResult |
#      | successful  |


#  Scenario:
#    Given Say "hello" to "<name>"
#      |id| name    |
#      |--|---------|
#      |1 |vishnu   |
#      |2 |prateek  |
#      |3 |navaneeth|
#  Scenario:
#    When Say "namaste" to "<name>"
#
#
#
#      |id| name    |
#      |--|---------|
#      |4 |4vishnu   |
#      |5 |5prateek  |
#      |6 |6navaneeth|