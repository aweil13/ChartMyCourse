

# [<p align="center"><img src="app/assets/images/Logo.PNG" width="500" height=""></p>][1]


ChartMyCourse is a single-page web application and clone of [MapMyRun][2]; it enables users to create running routes, add other users as friends and comment on other users courses using:  

* Google Maps JavaScript API
* Directions API
* Postgresql database
* Ruby on Rails
* React/Redux
* Javascript
* CSS

## <p align="center">[Link to Live Site](https://chart-my-course.herokuapp.com/#/)<p/>

# Course Creator
MapMyRun allows users to create routes using Google Maps API and then decide what kind of workout they woud like to do using a side toolbar. I decided to simplify the interface as I found MapMyRuns too clunky and unintuitive. I did away with choosing workouts and decided to focus specifically on running/walking routes. I made Input to be two simple fields, a course name and a description, and also simplified the map toolbar with only three buttons: Undo Waypoint, Clear Waypoint, Return to Start. This is all done by implementing Google Maps API and Direction API, React/Redux state and props, and CSS in order to create a smooth, intuitive and clear course creating experience. Clicking on the map adds a waypoint and connects previously added waypoints to each other in real time, updating both the map, and the distance display toolbar.      









[1]: https://chart-my-course.herokuapp.com/#/
[2]: https://www.mapmyrun.com/
