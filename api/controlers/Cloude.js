export const getAll = (req, res) => {
    res.status(200).send(
        [
        {
          "cursor": "gFhCd3rcFnxxaGRkczc4czczZHQ5aTdn",
          "service": {
            "autoDeploy": "yes",
            "branch": "main",
            "createdAt": "2025-03-05T23:24:54.428515Z",
            "dashboardUrl": "https://dashboard.render.com/web/srv-cv4dqhdds78s73dt9i7g",
            "id": "srv-cv4dqhdds78s73dt9i7g",
            "name": "ToDo-Server-1",
            "notifyOnFail": "default",
            "ownerId": "tea-cuto18aj1k6c738egm2g",
            "repo": "https://github.com/malki3949/ToDo-Server",
            "rootDir": "",
            "serviceDetails": {
              "buildPlan": "starter",
              "env": "docker",
              "envSpecificDetails": {
                "dockerCommand": "",
                "dockerContext": ".",
                "dockerfilePath": "Dockerfile"
              },
              "healthCheckPath": "",
              "maintenanceMode": {
                "enabled": false,
                "uri": ""
              },
              "numInstances": 1,
              "openPorts": null,
              "plan": "free",
              "previews": {
                "generation": "off"
              },
              "pullRequestPreviewsEnabled": "no",
              "region": "singapore",
              "runtime": "docker",
              "sshAddress": "srv-cv4dqhdds78s73dt9i7g@ssh.singapore.render.com",
              "url": "https://todo-server-1-06ko.onrender.com"
            },
            "slug": "todo-server-1-06ko",
            "suspended": "not_suspended",
            "suspenders": [],
            "type": "web_service",
            "updatedAt": "2025-03-11T23:53:49.325338Z"
          }
        },
        {
          "cursor": "gFhCd3rcFnxvODN0cTIxYzczZjhxYmsw",
          "service": {
            "autoDeploy": "yes",
            "branch": "main",
            "createdAt": "2025-03-05T23:20:01.326952Z",
            "dashboardUrl": "https://dashboard.render.com/web/srv-cv4do83tq21c73f8qbk0",
            "id": "srv-cv4do83tq21c73f8qbk0",
            "name": "ToDo-Server",
            "notifyOnFail": "default",
            "ownerId": "tea-cuto18aj1k6c738egm2g",
            "repo": "https://github.com/malki3949/ToDo-Server",
            "rootDir": "",
            "serviceDetails": {
              "buildPlan": "starter",
              "env": "docker",
              "envSpecificDetails": {
                "dockerCommand": "",
                "dockerContext": ".",
                "dockerfilePath": "ToDo-Server/Dockerfile"
              },
              "healthCheckPath": "",
              "maintenanceMode": {
                "enabled": false,
                "uri": ""
              },
              "numInstances": 1,
              "openPorts": null,
              "plan": "free",
              "previews": {
                "generation": "off"
              },
              "pullRequestPreviewsEnabled": "no",
              "region": "singapore",
              "runtime": "docker",
              "sshAddress": "srv-cv4do83tq21c73f8qbk0@ssh.singapore.render.com",
              "url": "https://todo-server-fise.onrender.com"
            },
            "slug": "todo-server-fise",
            "suspended": "not_suspended",
            "suspenders": [],
            "type": "web_service",
            "updatedAt": "2025-03-11T23:52:24.097128Z"
          }
        },
        {
          "cursor": "e6uYcpjq23pucm9ncGg2YzczOHVsaDEw",
          "service": {
            "autoDeploy": "yes",
            "branch": "main",
            "createdAt": "2025-03-05T22:10:55.701758Z",
            "dashboardUrl": "https://dashboard.render.com/static/srv-cv4cnrogph6c738ulh10",
            "id": "srv-cv4cnrogph6c738ulh10",
            "name": "ToDo-Client",
            "notifyOnFail": "default",
            "ownerId": "tea-cuto18aj1k6c738egm2g",
            "repo": "https://github.com/malki3949/ToDo-Client",
            "rootDir": "",
            "serviceDetails": {
              "buildCommand": "npm run build",
              "buildPlan": "starter",
              "previews": {
                "generation": "off"
              },
              "publishPath": "build",
              "pullRequestPreviewsEnabled": "no",
              "url": "https://todo-client-8k8d.onrender.com"
            },
            "slug": "todo-client-8k8d",
            "suspended": "not_suspended",
            "suspenders": [],
            "type": "static_site",
            "updatedAt": "2025-03-12T00:25:51.905996Z"
          }
        }
      ])
    }