Run with: 

	meteor npm i
	meteor --production

I'm not sure if it makes a difference, but I'm running in Windows 10.0.19042 Build 19042 with WSL1 / Ubuntu 20.04.3 LTS and have the repro cloned on a directory located at ``/c/mnt/Users/MyUserName/foo``. I have an issue connecting to local mongo (running as a Windows service -- this is a known WSL issue), and so I'm connecting to Atlas via ``MONGO_URL=... meteor --production``; I'm guessing this will not matter for a reproduction, however.
