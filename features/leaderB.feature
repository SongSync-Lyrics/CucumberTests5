Feature: As the owner, I would like the server to email me the csv file, so that I can view the contents of the CSV file

    Scenario: I am the owner
        Given I am the "owner"
        When I want to see which songs are played
        Then I can get a csv file from the server