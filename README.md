# Project-Cloud-Clicker


A web-application where the user can see a global counter and it updates when the user clicks on the button. 

## How to run this code on local

We have already deployed a code on the cloud, if you want to run on your device, please follow these steps

1. Go to the file directory and write this
```bash
npm install
```
This will install all required dependencies. 

Then we need to update the code for MySQL for your own environment. Update these values in Backend/server.js
## MySQL Changes

```python
host: YourHostName 
user: YourUserName
password:YourPassword
database: YourDBName
```
After making these changes, you should be ready to run your app. In the Backend folder write

```bash
node server.js
```