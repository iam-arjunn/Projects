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
				},
				"2890fa44-6503-4560-9e6a-e85c4a0777a4": {
					"name": "Requester Cancel"
				}
			},
			"activities": {
				"b294448c-8505-4abc-b72e-c683f119e095": {
					"name": "Requester"
				},
				"d3b4f03f-f0cd-4d81-ac9e-81f0b2b642f1": {
					"name": "Requester Decision"
				}
			},
			"sequenceFlows": {
				"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
					"name": "SequenceFlow1"
				},
				"2c4cca04-5c63-4dea-aa57-03c80c2c385c": {
					"name": "SequenceFlow2"
				},
				"7f914986-e47b-48f3-a10c-b3a590b6b7af": {
					"name": "Submit"
				},
				"3b70bf24-4c5a-4a27-8393-35d412f2305f": {
					"name": "Cancel"
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
		"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow1",
			"name": "SequenceFlow1",
			"sourceRef": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3",
			"targetRef": "b294448c-8505-4abc-b72e-c683f119e095"
		},
		"2c4cca04-5c63-4dea-aa57-03c80c2c385c": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow2",
			"name": "SequenceFlow2",
			"sourceRef": "b294448c-8505-4abc-b72e-c683f119e095",
			"targetRef": "d3b4f03f-f0cd-4d81-ac9e-81f0b2b642f1"
		},
		"42fa7a2d-c526-4a02-b3ba-49b5168ba644": {
			"classDefinition": "com.sap.bpm.wfs.ui.Diagram",
			"symbols": {
				"df898b52-91e1-4778-baad-2ad9a261d30e": {},
				"53e54950-7757-4161-82c9-afa7e86cff2c": {},
				"6bb141da-d485-4317-93b8-e17711df4c32": {},
				"29c2fe11-5b92-41ed-8cc3-5813202ff27a": {},
				"3fa2ebf5-9319-4851-97fb-ce3fcc3b2b3b": {},
				"39f3efa4-2f30-49d8-81c8-551fd6335186": {},
				"8f01760d-6f63-410f-88ce-8e516ff4b2d7": {},
				"11eb8a7f-0930-4d64-84be-efe69ad35602": {},
				"c5fc3de8-e6fb-4585-985b-7ec49dd4f36f": {}
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
		"29c2fe11-5b92-41ed-8cc3-5813202ff27a": {
			"classDefinition": "com.sap.bpm.wfs.ui.UserTaskSymbol",
			"x": 172,
			"y": 86,
			"width": 100,
			"height": 60,
			"object": "b294448c-8505-4abc-b72e-c683f119e095"
		},
		"3fa2ebf5-9319-4851-97fb-ce3fcc3b2b3b": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "222,115.5 318,115.5",
			"sourceSymbol": "29c2fe11-5b92-41ed-8cc3-5813202ff27a",
			"targetSymbol": "39f3efa4-2f30-49d8-81c8-551fd6335186",
			"object": "2c4cca04-5c63-4dea-aa57-03c80c2c385c"
		},
		"62d7f4ed-4063-4c44-af8b-39050bd44926": {
			"classDefinition": "com.sap.bpm.wfs.LastIDs",
			"sequenceflow": 4,
			"startevent": 1,
			"endevent": 2,
			"usertask": 2,
			"exclusivegateway": 1
		},
		"d3b4f03f-f0cd-4d81-ac9e-81f0b2b642f1": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway1",
			"name": "Requester Decision",
			"default": "7f914986-e47b-48f3-a10c-b3a590b6b7af"
		},
		"39f3efa4-2f30-49d8-81c8-551fd6335186": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 297,
			"y": 94,
			"object": "d3b4f03f-f0cd-4d81-ac9e-81f0b2b642f1"
		},
		"7f914986-e47b-48f3-a10c-b3a590b6b7af": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow3",
			"name": "Submit",
			"sourceRef": "d3b4f03f-f0cd-4d81-ac9e-81f0b2b642f1",
			"targetRef": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"8f01760d-6f63-410f-88ce-8e516ff4b2d7": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "318,115.25 521.5,115.25",
			"sourceSymbol": "39f3efa4-2f30-49d8-81c8-551fd6335186",
			"targetSymbol": "53e54950-7757-4161-82c9-afa7e86cff2c",
			"object": "7f914986-e47b-48f3-a10c-b3a590b6b7af"
		},
		"2890fa44-6503-4560-9e6a-e85c4a0777a4": {
			"classDefinition": "com.sap.bpm.wfs.EndEvent",
			"id": "endevent2",
			"name": "Requester Cancel"
		},
		"11eb8a7f-0930-4d64-84be-efe69ad35602": {
			"classDefinition": "com.sap.bpm.wfs.ui.EndEventSymbol",
			"x": 300.5,
			"y": 283.5,
			"width": 35,
			"height": 35,
			"object": "2890fa44-6503-4560-9e6a-e85c4a0777a4"
		},
		"3b70bf24-4c5a-4a27-8393-35d412f2305f": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"condition": "${usertasks.usertask2.last.decision==\"cancel\"}",
			"id": "sequenceflow4",
			"name": "Cancel",
			"sourceRef": "d3b4f03f-f0cd-4d81-ac9e-81f0b2b642f1",
			"targetRef": "2890fa44-6503-4560-9e6a-e85c4a0777a4"
		},
		"c5fc3de8-e6fb-4585-985b-7ec49dd4f36f": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "318,135.5 318,284",
			"sourceSymbol": "39f3efa4-2f30-49d8-81c8-551fd6335186",
			"targetSymbol": "11eb8a7f-0930-4d64-84be-efe69ad35602",
			"object": "3b70bf24-4c5a-4a27-8393-35d412f2305f"
		}
	}
}