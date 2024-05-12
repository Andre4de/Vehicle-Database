# Andre4de.github.io
I have created three additional playwright tests which test the exceptions and conditions for the third JavaScript database criteria.

My first playwright test, tests that a vehicle is successfully added if a person already exists. Within my test, i have specified that my message id element should have the text 'Vehcile successfully added' when the vehicle form is filled out and submitted within the Add a Vehicle page.
In addition to this, in the first test, i instruct the test to visit the Vehicle search page, and look up within the supabase remote database and look for the vehicle the test just added. If the Vehicle search returns the added car make, then it passes the test.

My second playwright test

For each of my html pages, i acheive a score of 100% for accessability within the lighthouse test. In order to achieve 100%, i have to change my heading elements so that they were sequential, before they were not so my font size was not linear. In another case, i had to give my image element an alt element within my People search page, which gives a descrption of an image if it fails to load or if it is missing.

Also for each of my html pages, i have made the main id element responsive when the page size is less than 500px. The div elements returned from a query stack on top of each other when the page size is less than 500px.
