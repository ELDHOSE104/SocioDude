#SocioDude -  A Collaborative drawing platform
SodioDude is an online drawing platform that is derived from the very basics of html **canvas** effects. It uses a third party library that enables us to transmit the data from a machine to another.
##Demo##
For demo of this site please clock [here](http://mallmate.in/eldhose).
##Technology Stack##
- HTML5 Canvas
- Pubnub Javascript Library
- TypedJS
- Jquery
- Zocial CSS
###How it works ? ###
A simple canvas effect that powered by the Pubnub library to send and to recieve the cordinates that are send though a channel and is recieved at another end. The function 
>addEventListener()
Listens the mouse strokes which then calls the subsequent functions **startDraw(),endDraw() and draw()** makes the magic to happen ! 
Refer [here](http://www.pubnub.com/blog/multiuser-draw-html5-canvas-tutorial/) to know more.
