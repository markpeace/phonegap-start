bbb.controller('ListNotifications', function($state, $scope, ParseService) { 
        $scope.dummyData=[
                { header:"Header", text: "text goes here" },
                { header:"Header", text: "text goes here" },
                { header:"Header", text: "text goes here" },
                { header:"Header", text: "text goes here" },
                { header:"Header", text: "text goes here" },
                { header:"Header", text: "text goes here" },
                { header:"Header", text: "text goes here" }               
        ]

        alert(moment().add("second",10))

        try {
                window.plugin.notification.local.add({
                        id:         "localnotificationtest",  // A unique id of the notifiction
                        date:       moment().add("second",10)._d,    // This expects a date object
                        message:    "Local Notification Test",  // The message that is displayed
                        title:      "This is a test of the local notifications",  // The title of the message
                        //repeat:     String,  // Either 'secondly', 'minutely', 'hourly', 'daily', 'weekly', 'monthly' or 'yearly'
                        badge:      2,  // Displays number badge to notification
                        //sound:      String,  // A sound to be played
                        //json:       String,  // Data to be passed through the notification
                        //autoCancel: Boolean, // Setting this flag and the notification is automatically canceled when the user clicks it
                        //ongoing:    Boolean, // Prevent clearing of notification (Android only)
                }, function () {
                        alert("this is the callback")
                });
        } catch (ex) {
                alert(ex)
        }
});