/**
 *--------------------------------------------------------------------+
 * Nodes.ts
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
 */

module Nodes {

    export class AudioNode extends ash.core.Node {
        public audio: Components.Audio;
        public static className = 'AudioNode';
        public static components = {
            audio: Components.Audio
        };
    }
    /**
     *
     * @type {Components.Audio}
     */
    AudioNode.prototype.audio = null;

}
