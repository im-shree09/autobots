
# Autobots

A brief description of what this project does and who it's for


## Docker Container Image link

```bash
  React Image (Frontend) - https://hub.docker.com/r/nowsaymyname/autobotsreact13-2
  Django Image (Backend) - https://hub.docker.com/r/nowsaymyname/autobots13-2
```
    
## Installation

Clone our-project with

```bash
  git clone https://github.com/im-shree09/autobots.git
```
    
## How to run the server

Install all packages using following command

```bash
  pip install -r requirements.txt
```
Be on the folder of Manage.py & To deploy this project run 

```bash
  python manage.py runserver
```

To Run the Docker images

To run React Image (Frontend)
```bash
  docker pull nowsaymyname/autobotsreact13-2
  docker run --publish 3000:3000 nowsaymyname/autobotsreact13-2
```
To Run the Django Image (Backend)
```bash
  docker pull nowsaymyname/autobots13-2
  docker run --publish 8000:8000 nowsaymyname/autobots13-2
```


## Features

- Application that can be run as a container on the cloud
- You can creating/updating/deleting a team in the project
- You can send out daily status emails for each project
- REST APIs are used so can be usen on any platform.


## Demo

Link to demo
https://drive.google.com/file/d/1kXuYmAxSbPAaNNURf59HoDvhsakihuhT/view?usp=share_link

