/* MagicMirror²
 * Module: repository updater plugin for MMM-Remote-Control
 *
 * By eouia
 * MIT Licensed.
 */

const path = require("path")
const fs = require("fs")
const https = require("https")
const NodeHelper = require("node_helper")

const repository = "https://github.com/MichMich/MagicMirror/wiki/3rd-Party-Modules"
const moduleJson = "modules.json"

module.exports = NodeHelper.create({
	start: function() {
		// do nothing
	},

	socketNotificationReceived: function(message, payload) {
		if (message === "START") {
			this.readRepository()
		}
	},

	readRepository: function() {
		console.log("[RCREPO] Repository scanning...")
		var modules = []
		var body = ""
		https.get(repository, function(res) {
			res.setEncoding("utf8")
			res.on("data", function(chunk) {
				body += chunk
			})
			res.on("end", function() {
				var pattern = /<tr>\s<td.*><a href="(.*)">(.*)<\/a><\/td>\s<td.*>(.*)<\/td>\s<td[^>]*>(.*)<\/td>\s<\/tr>/gm
				var result
				while ((result = pattern.exec(body)) !== null) {
					var module = {
						url: result[1],
						longname: result[2],
						author: result[3],
						desc: result[4],
						id: `${result[3]}/${result[2]}`
					}
					modules.push(module)
				}
				var json = JSON.stringify(modules)
				var jsonPath = path.resolve(__dirname, "../MMM-Remote-Control", moduleJson)
				fs.writeFile(jsonPath, json, "utf8", function(err, data) {
					if (err) {
						console.log(`[RCREPO] modules.json updating fail: ${err.message}`)
					} else {
						console.log("[RCREPO] modules.json is updated.")
					}
				})
			})
		}).on("error", function(e) {
			console.log(`[RCREPO] Repository reading error: ${e.message}`)
		})
	}
})
