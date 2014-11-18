YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Application Course Model",
        "Application Department Model",
        "Application Instructor Model",
        "Application Schedule Model",
        "LSU Scheduler API",
        "Sequelize Course Model",
        "Sequelize Department Model",
        "Sequelize Instructor Model",
        "fetch"
    ],
    "modules": [
        "fetch",
        "lsu-scheduler"
    ],
    "allModules": [
        {
            "displayName": "fetch",
            "name": "fetch",
            "description": "Controls fetching information from the open lsu booklet portal"
        },
        {
            "displayName": "lsu-scheduler",
            "name": "lsu-scheduler",
            "description": "Server script that controls the LSU Scheduler backend, including\nthe API used to communicate with front-end clients, managing data requests,\nand fetching updated information from LSU's system."
        }
    ]
} };
});