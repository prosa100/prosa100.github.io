---
layout : post
---

I wrote something so I can see my hands in vr using unity 3d.
At first, I mounted it on the desk, rendered a panio, and it sort of sucked.
So I mounted it on my head. But I want to fix the depth and reduce lag.
Code is in the sharevr project.

So I use the Tesseltation of the GPU.
So I send the hightmap their and then generate the geomotry on the fly. It works perfectly, and will be in the sharevr project when I push.
It runs at 90 fps with no lag.

## Future Ideas

- Lag Compisation
- Render in world space (and have it linger)
- 'Stamp' onto a 360 rgbd photosphere for persitance and better streaming (this sounds valuable)
- Use problistic voxels, render on gpu. (can easily do 1gb)
- Fill holes (becuse the black thing that I can't see is proably just a distance.
- can render corection like a shadow. Almost...
- Could just do Dilation for the gaps.

Stero stops mattering at a few meters.

The new sensor makes a clener map. Would also be nice to have two recivers or led to remove the shadows.

Could I just mount two gopros?
