{
	"contents": {
		"b3555009-f010-4907-9870-6a3828f4ebd0": {
			"classDefinition": "com.sap.bpm.wfs.Model",
			"id": "itworkflow",
			"subject": "ITWorkflow",
			"name": "ITWorkflow",
			"documentation": "workflow for handling IT Ticket",
			"lastIds": "62d7f4ed-4063-4c44-af8b-39050bd44926",
			"events": {
				"11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3": {
					"name": "StartEvent1"
				},
				"2798f4e7-bc42-4fad-a248-159095a2f40a": {
					"name": "EndEvent1"
				}
			},
			"activities": {
				"b294448c-8505-4abc-b72e-c683f119e095": {
					"name": "Requester"
				}
			},
			"sequenceFlows": {
				"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
					"name": "SequenceFlow1"
				},
				"2c4cca04-5c63-4dea-aa57-03c80c2c385c": {
					"name": "SequenceFlow2"
				}
			},
			"diagrams": {
				"42fa7a2d-c526-4a02-b3ba-49b5168ba644": {}
			}
		},
		"11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3": {
			"classDefinition": "com.sap.bpm.wfs.StartEvent",
			"id": "startevent1",
			"name": "StartEvent1"
		},
		"2798f4e7-bc42-4fad-a248-159095a2f40a": {
			"classDefinition": "com.sap.bpm.wfs.EndEvent",
			"id": "endevent1",
			"name": "EndEvent1"
		},
		"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow1",
			"name": "SequenceFlow1",
			"sourceRef": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3",
			"targetRef": "b294448c-8505-4abc-b72e-c683f119e095"
		},
		"42fa7a2d-c526-4a02-b3ba-49b5168ba644": {
			"classDefinition": "com.sap.bpm.wfs.ui.Diagram",
			"symbols": {
				"df898b52-91e1-4778-baad-2ad9a261d30e": {},
				"53e54950-7757-4161-82c9-afa7e86cff2c": {},
				"6bb141da-d485-4317-93b8-e17711df4c32": {},
				"29c2fe11-5b92-41ed-8cc3-5813202ff27a": {},
				"3fa2ebf5-9319-4851-97fb-ce3fcc3b2b3b": {}
			}
		},
		"df898b52-91e1-4778-baad-2ad9a261d30e": {
			"classDefinition": "com.sap.bpm.wfs.ui.StartEventSymbol",
			"x": 100,
			"y": 100,
			"width": 32,
			"height": 32,
			"object": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3"
		},
		"53e54950-7757-4161-82c9-afa7e86cff2c": {
			"classDefinition": "com.sap.bpm.wfs.ui.EndEventSymbol",
			"x": 504,
			"y": 98,
			"width": 35,
			"height": 35,
			"object": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"6bb141da-d485-4317-93b8-e17711df4c32": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "116,116 222,116",
			"sourceSymbol": "df898b52-91e1-4778-baad-2ad9a261d30e",
			"targetSymbol": "29c2fe11-5b92-41ed-8cc3-5813202ff27a",
			"object": "c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f"
		},
		"62d7f4ed-4063-4c44-af8b-39050bd44926": {
			"classDefinition": "com.sap.bpm.wfs.LastIDs",
			"sequenceflow": 2,
			"startevent": 1,
			"endevent": 1,
			"usertask": 2
		},
		"b294448c-8505-4abc-b72e-c683f119e095": {
			"classDefinition": "com.sap.bpm.wfs.UserTask",
			"subject": "Request Form",
			"priority": "MEDIUM",
			"isHiddenInLogForParticipant": false,
			"supportsForward": false,
			"userInterface": "sapui5://comsapbpmworkflow.comsapbpmwusformplayer/com.sap.bpm.wus.form.player",
			"recipientUsers": "${context.requester}",
			"formReference": "/forms/ITWorkflow/RequesterForm.form",
			"userInterfaceParams": [{
				"key": "formId",
				"value": "requesterform"
			}, {
				"key": "formRevision",
				"value": "1"
			}],
			"id": "usertask2",
			"name": "Requester",
			"documentation": "User Task for Requester"
		},
		"29c2fe11-5b92-41ed-8cc3-5813202ff27a": {
			"classDefinition": "com.sap.bpm.wfs.ui.UserTaskSymbol",
			"x": 172,
			"y": 86,
			"width": 100,
			"height": 60,
			"object": "b294448c-8505-4abc-b72e-c683f119e095"
		},
		"2c4cca04-5c63-4dea-aa57-03c80c2c385c": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow2",
			"name": "SequenceFlow2",
			"sourceRef": "b294448c-8505-4abc-b72e-c683f119e095",
			"targetRef": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"3fa2ebf5-9319-4851-97fb-ce3fcc3b2b3b": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "222,115.75 521.5,115.75",
			"sourceSymbol": "29c2fe11-5b92-41ed-8cc3-5813202ff27a",
			"targetSymbol": "53e54950-7757-4161-82c9-afa7e86cff2c",
			"object": "2c4cca04-5c63-4dea-aa57-03c80c2c385c"
		}
	}
}