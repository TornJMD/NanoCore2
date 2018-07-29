/******************************************************************************

    Nano Core 2 - An adblocker
    Copyright (C) 2018  Nano Core 2 contributors

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

*******************************************************************************

    Background script.

******************************************************************************/

"use strict";

/*****************************************************************************/

var nano = {};

/*****************************************************************************/

nano.ub = window["\xB5Block"];

/*****************************************************************************/

nano.recompile_filters = () => {
    const on_done = () => {
        vAPI.app.restart();
    };

    vAPI.storage.set({
        compiledMagic: -1,
        selfieMagic: -1
    }, on_done);
};

/*****************************************************************************/

nano.is_trusted_ext = (id) => {
    return (
        sender.id === nano_defender_ext_id_chrome ||
        sender.id === nano_defender_ext_id_edge
    );
};

/*****************************************************************************/
