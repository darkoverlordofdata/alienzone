/**
 *--------------------------------------------------------------------+
 * Properties.ts
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
 * Persist properties using LocalStorage
 *
 */
class Properties {

    private static db = null;
    private static name = "";
    private static properties = null;

    public static init(name, properties) {
        
        if (Properties.db !== null) {
            return;
        }
        Properties.name = name;
        Properties.properties = properties;

        Properties.db = new localStorageDB(Properties.name, cc.sys.localStorage);
        var isNew = Properties.db.isNew();
        if (isNew) {
            Properties.db.createTable("settings", ["name", "value"]);
            Properties.db.createTable("leaderboard", ["date", "score"]);
            for (var key in Properties.properties) {
                var val = Properties.properties[key];
                Properties.db.insert("settings", {
                    name: key,
                    value: val
                });
            }
            return Properties.db.commit();
        }
    }

    /*
     * Get Game Property from local storage
     *
     * @param property name
     * @return property value
    */

    public static get(prop) {
        return Properties.db.queryAll("settings", {
            query: {
                name: prop
            }
        })[0].value;
    }

    /*
     * Set Game Property in local storage
     *
     * @param property name
     * @param property value
     * @return nothing
    */

    public static set = (prop, value) => {
        Properties.db.update("settings", {
            name: prop
        }, (row) => {
            row.value = "" + value;
            return row;
        });
        Properties.db.commit();
    }
}
