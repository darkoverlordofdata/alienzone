/**
 *--------------------------------------------------------------------+
 * AppActivity.ts
 *--------------------------------------------------------------------+
 * Copyright DarkOverlordOfData (c) 2014-2015
 *--------------------------------------------------------------------+
 *
 * This file is a part of Alien Zone
 *
 * Alien Zone is free software; you can copy, modify, and distribute
 * it under the terms of the GPLv3 License
 *
 *--------------------------------------------------------------------+
 *
 * Android AppActivity wrapper
 * when running as a native application
 *
 */
var AppActivity = (function () {
    function AppActivity() {
    }
    AppActivity.updateLeaderboard = function (leaderboard, score) {
        return jsb.reflection.callStaticMethod(AppActivity.className, "updateLeaderboard", "(Ljava/lang/String;I)V", leaderboard, score);
    };
    AppActivity.showAlertDialog = function (title, message) {
        return jsb.reflection.callStaticMethod(AppActivity.className, "showAlertDialog", "(Ljava/lang/String;Ljava/lang/String;)V", title, message);
    };
    return AppActivity;
}());
AppActivity.className = "org/cocos2dx/javascript/AppActivity";
//# sourceMappingURL=AppActivity.js.map