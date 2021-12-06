The Api for this project will have the following endpoints.

1) Tour guide profile
Get a single tour guide profile: Get /apis/tour-guide-profile/:tour-guide_id
Create a Profile: Put : /apis/tour-guide/create
Edit a Profile: Post: /apis/tour-guide/edit/:tour-guide_id
Delete a Profile: /apis/tour-guide/delete/:tour-guide_id

2) Tourist Profile
Get a single tourist profile: Get: /apis/tourist-profile/tourist_id
Create a Profile: Put : /apis/tourist/create
Edit a Profile: Post: /apis/tourist/edit/:tourist_id
Delete a Profile: /apis/tourist/delete/:tourist_id

3) Tour 
Get a single tour: Get: /apis/tour/:tour_id
Create a Profile: Put : /apis/tour/create
Edit a Profile: Post: /apis/tour/edit/:tour_id
Delete a Profile: /apis/tour/delete/:tour_id

4) Tour guide list
Create tour guide list: Put: /apis/tour-guide-list/create
Get all tour guides: Get: /apis/tour-guide-list/all?
PARAMS: 
-cost(integer): filter tour guides by cost of tour [min:$1, max:1,000]
-length of tour(integer): filter tour guides by length of tour [1,2,3,4, infinity]
-dates(date): filter tour guides by date of availability [mm,dd,yyyy]
-number of guests: filter tour guides by number of guests allowed on tour [1-2,2-3,3-4,5-6]
Update Tour guide list: Post: /apis/tour-guide-list/edit

Testing the update function


