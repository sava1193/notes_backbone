define([
    'backbone',
    'collections/noteCollection'
], function (backbone, notes) {
    'use strict';

    var Note = backbone.Model.extend({
        defaults: {
            title: 'note ',
            text : 'note text should be here'
        },

        initialize: function () {

        }
    });

    return Note;
});