         ___   ___        ____
        / _ | / (_)__ ___/_  / ___  ___  ___
       / __ |/ / / -_) _ \/ /_/ _ \/ _ \/ -_)
      /_/ |_/_/_/\__/_//_/___/\___/_//_/\__/
    

  - Dark Overlord of Data


#Alien Zone

Created With [ash.coffee](https://github.com/darkoverlordofdata/ash.coffee), 
jMatch3, 
localstorageDb, 
and Cocos2d-JS


Play the online demo at [https://darkoverlordofdata.com/alienzone](example.html)

## Notes

Originally created to run in cocoonjs and integrated with Google Play. 
I no longer like the native/script hybrids like cordova. 

This also uses cocos2d. I've stopped using cocos2d, there is too much churn. 
So this project is frozen at version 3.9, with the correct library embedded in web folder.

This is a puzzle game, so it is still a great excercise for leaderboard usage, which is why I'm digging into it again. That, and I think it can still be polished up and made shiny!


# Install

```bash
$ git clone https://github.com/darkoverlordofdata/alienzone.git
$ cd alienzone
$ npm install
$ npm run get
$ cd web && tsc && tsc -p jsconfig.json && uglifyjs -c -m -o alienzone.min.js
```


d.ts:
https://github.com/yuanotes/typescript-for-cocos2djs/blob/master/cocos2d-3.0.d.ts

# GPLv3 License

Copyright (c) 2015-2016 Bruce Davidson <darkoverlordofdata@gmail.com>

This file is part of Alien Zone.

Alien Zone is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Alien Zone is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Alien Zone.  If not, see <http://www.gnu.org/licenses/>.
