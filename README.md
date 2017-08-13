# MothershipTransponder
That's right. Like you ever cared.

## How to use
This is a sample transponder. Hopefully you will make something cooler out of it, but this is a good place to start.

Everything works over Socket.IO. Your app will connect to the Mothership. The mothership will either accept your transponder or reject it depending on if it was allowed by an (the) admin in the Discord chat. Once your transponder is accepted, it will begin to recieve messages addressed to it. You reply by emitting a `message` event back at the mothership. Right now that's all you can do, but I hope to add more stuff later like replying or images or something.

## How do I get my transponder allowed?
Ask me.

## Where does the mothership live (aka what's this weird IP address?)
In the cloud. I'm too cheap to get a domain name and too stingy to give away a subdomain of one of the ones I own.
