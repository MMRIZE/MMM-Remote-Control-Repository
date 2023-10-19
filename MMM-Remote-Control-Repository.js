/* MagicMirror²
 * Module: repository updater plugin for MMM-Remote-Control
 *
 * By eouia
 * MIT Licensed.
 */

Module.register("MMM-Remote-Control-Repository", {
	start: function() {
		//do nothing
	},

	notificationReceived: function(noti, payload, sender) {
		if (noti === "DOM_OBJECTS_CREATED") {
			var self = this
			var modules = MM.getModules().enumerate(function(m) {
				if (m.name === "MMM-Remote-Control") {
					self.sendSocketNotification("START")
				}
			})
		}
	}
})
