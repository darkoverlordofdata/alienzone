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
class AppActivity {

    private static className = "org/cocos2dx/javascript/AppActivity";

    public static updateLeaderboard(leaderboard, score) {
        return jsb.reflection.callStaticMethod(AppActivity.className, "updateLeaderboard", "(Ljava/lang/String;I)V", leaderboard, score);
    }

    public static showAlertDialog(title, message) {
        return jsb.reflection.callStaticMethod(AppActivity.className, "showAlertDialog", "(Ljava/lang/String;Ljava/lang/String;)V", title, message);
    }
}
