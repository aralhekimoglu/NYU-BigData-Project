﻿/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an orchestrator function.
 * 
 * Before running this sample, please:
 * - create a Durable orchestration function
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your
 *   function app in Kudu
 */
const dbService = require('../SharedFunctions/DBService')
module.exports = async function (context) {
    dbService.updateJobStatus(context.bindings.input.job_guid, context.bindings.input.status)
};