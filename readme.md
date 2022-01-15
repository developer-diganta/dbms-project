# DBMS PROJECT

This is the DBMS project submission for practicals.

## Contributing

1. Fork and Star the repository.
2. Run the following command using the forked url.
```bash
git clone <Forked Repo URL>
```
3. Go to the cloned folder.
```bash
cd dbms-project
```
4. Run the following command
```bash
git remote add https://github.com/developer-diganta/dbms-project
```
5.  Fetch in case new changes have been made to the repo
```bash
git fetch upstream
```
6. Run the following command (make sure node is installed)
```bash
npm i
```
7. Make a new branch (name is as per what changes you are making)
```bash
git checkout -b <branch-name>
```
8. Make the changes you want.
7. Add the files you have changed using the following command.
```bash
git add <files you have changed/added>
```
9. Commit the changes with a commit message.
```bash
git commit -m <Message describing the change>
```
10.Push the changes.
```bash
git push -u origin <name-of-branch>
```

## TABLE CREATION

### STUDENT:

create table student(
name varchar(10) not null,
regno varchar(6) not null primary key,
rollno int(6) not null,
contact int(10),
address varchar(20) not null,
email varchar(25) not null
);

### EXAM:

create table exam(
regno varchar(6) not null primary key,
department_id int(3) not null,
department_name varchar(5) not null,
stream_name varchar(30),
stream_id int(2) not null,
duration int not null,
course_name varchar(10) not null,
subject_name varchar(8) not null,
score int(3) not null,
grade varchar(2) not null,
gpa float(2,1) not null
);

### ADMINISTRATOR
create administrator(
rollno int(6) not null,
admin_id varchar(4) not null,
password varchar(25) not null
);


### FE
create table fee(
regno varchar(6) not null primary key,
recieptno int(5) not null,
tuition_fee int(10) not null,
dop date not null,
concession varchar(25) 
);