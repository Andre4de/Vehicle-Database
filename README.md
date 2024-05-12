# Andre4de.github.io
This is my description for my additional JavaScript, CSS, playwright test and 100% lighthouse score work.

JavaScript:
When a user wants to add a vehicle when a person does not exist, i have made it so that when the second form appears, prompting the User to add details about the person they want to create, if the user makes the PersonID of this person to an id which already exists in the database, the message id element displays an error, but allows the user to change the is to a id which does not exist. I later check this works within one of my playwright tests


Playwight Tests:
I have created four additional playwright tests which test the exceptions and conditions for the third JavaScript database criteria.

My first playwright test for Add a Vehicle tests that a vehicle is successfully added if a person already exists. Within my test, i have specified that my message id element should have the text 'Vehcile successfully added' when the vehicle form is filled out and submitted within the Add a Vehicle page.
In addition to this, in the first test, i instruct the test to visit the Vehicle search page, and look up within the supabase remote database and look for the vehicle the test just added. If the Vehicle search returns the added car make, then it passes the test.

My second playwright test for Add a Vehicle checks that the element with an id of message displays 'Error' if there is a missing input when adding a vehicle.

My third playwright test for Add a Vehicle checks that the element with an id of message displays 'Error', if there is missing input in the create person form when wanting to create a vehicle for a owner who does not exist yet.

My last playwright test checks that the element with an id of message displays 'Error' when a personid is used which already exists in the supabase database when creating a new person.

CSS:
Also for each of my html pages, i have the element with an id of 'main' to be responsive when the page size is less than 500px. The div elements returned from a query stack on top of each other when the page size is less than 500px.

LightHouse Score:
For each of my html pages, i acheive a score of 100% for accessability within the lighthouse test. In order to achieve 100%, i have to change my heading elements so that they were sequential, before they were not so my font size was not linear. In another case, i had to give my image element an alt element within my People search page, which gives a descrption of an image if it fails to load or if it is missing.




