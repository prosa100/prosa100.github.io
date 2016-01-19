---
title: Apps in Unity : VR Desktop
---
### Goal
I want to have apps running in unity.
I will settle for just a browser, though.
I need/want to have chrome becuse google's speech regonition is the best,
even though I can just spoof it easily.
I can also use the RealSense SDK from Intel.


Unity is really starting to bother me with its aging Mono.

### Linux VNC
Linux is king, and proably the right host os, but I use visual studio.
X11 + Pulse forward very easily
x11vnc is good.
http://askubuntu.com/questions/371687/how-to-carry-audio-over-ssh
It's free, and *easy* to lock down.
I can make a simple program that streams TCP.
Audio would be nice.
Seems vnc would be a smart choice, even though it is not smart.

xforard + pulseaudio forwarding is about as good a rdb.

### Remote Desktop
RDP is much faster and lighter the vnc, although way more coplicated
Their are a number of free clients.
http://www.remotespark.com/
http://guac-dev.org/

### Embed Chrome
Being able to talk to chrome sounds very very helpful.
I can write an extension (easy to install for user). Chrome supports IME stuff.
Only excuse I have is webcam. This is a bad excuse.
Writing chrome extensions is always anoying.
I can use https://en.wikipedia.org/wiki/Chromium_Embedded_Framework
(http://stackoverflow.com/questions/18119125/options-for-embedding-chromium-instead-of-ie-webbrowser-control-with-wpf-c)

Xilium.CefGlue supports mono, but is old
CefSharp : no mono, but active
ChromiumFX : Supports remote

How does firefox do that 3d view thing?

### Other Browsers
uWebKit looks great. Only desktop. Not chrome.
Also Mono Browser Browser is promsing.
The built-in browser componet is a joke.

### PrintScreen in Unity3D
[Discussion of diffrent ways to take a screenshot](http://stackoverflow.com/questions/362986/capture-the-screen-into-a-bitmap)
[Another post](http://www.developerfusion.com/code/4630/capture-a-screen-shot/)
[Here is how to Get bitmap of hidden window in C#](https://www.daniweb.com/programming/software-development/threads/260393/get-bitmap-of-hidden-window)
Their is a good libary to do this cross-platform, but I don't want cross-platform. This is only for windows.
I copied the System.Drawing.dll and System.Drawing.Forms.dll from the unity mono directory to my project.
Unity is appartnly red-blue color blind.

### Notes
That organization stuff is powerfull and complicated.
How to load / unload stuff?

Read mode/ mobile.
Apps via arcwelder / vm
https://github.com/chromium/dom-distiller

### Desktop?

The resolution requirments for text are high.
That means I either need to run on a gear vr or a new oculus.
New oculus is not avalible.
Remote desktop can do sounds and has c# componet.
So can xforwading + pulse audio

#### Neglect Security
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp
Set SecurityLayer to 1


### Project Managment
Their are a lot of PM softwares. Unless I do something they all don't.
Try to leverage them?
This market is painful. Run away!
