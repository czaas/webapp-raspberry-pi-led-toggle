# Raspberry Pi LED toggle project

_This project must be running on the raspberry pi as it uses the npm module <a href="https://github.com/fivid/onoff/" target="blank">onoff</a> that can read, write, and watch the GPIO pins on the raspberry pi._

This is a node server that is running on a raspberry pi, that uses a webpage to send commands to turn on or off the led. 

## The gist of it

**Server and hardware**

I have a raspberry pi wired up to a breadboard that has a LED on it. It's initial state once the server is running is off. 

**The Website**

Then you can go to a website, I'm using <a href="https://localtunnel.me" target="blank">localtunnel</a> to expose my localhost address to the web with a unique subdomain.  

