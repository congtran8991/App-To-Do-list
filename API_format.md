# API App To Do List
## GET workList
### URL: http://localhost:3333/Api/workList/
### Method: GET
### headers: 
    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNvbmciLCJpYXQiOjE1ODI0NzI5NTN9.uG1zt-j1l5AFGnYf6TALF3LlKybFWlKRK3ZQ-xCttjg
    Content-Type: application/json

### Response
```json
{
    success:true,
    result: [
        {
            _id:string,
            nameWork:string,
            status:boolean,
        }
    ]
}
//TH lỗi
{
    success:false,
    message:"String"
}
```

## CREATE NEW workList
### URL: http://localhost:3333/Api/workList/add
### Method: POST
### headers: 
    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNvbmciLCJpYXQiOjE1ODI0NzI5NTN9.uG1zt-j1l5AFGnYf6TALF3LlKybFWlKRK3ZQ-xCttjg
    Content-Type: application/json
### body:
     {
        nameWork:string,
        status:boolean,
    }

### Response
```json
{
    success:true,
    result: 
        {
            _id:string,
           nameWork:string,
           status:boolean,
        }
}
//TH lỗi
{
    success:false,
    message:"String"
}
```
## UPDATE workList
### URL: http://localhost:3333/Api/workList/
### Method: PUT
### headers: 
    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNvbmciLCJpYXQiOjE1ODI0NzI5NTN9.uG1zt-j1l5AFGnYf6TALF3LlKybFWlKRK3ZQ-xCttjg
    Content-Type: application/json
### body:
    {
        _id
    }

### Response
```json
{
    success:true,
    result: 
        {
            _id:string,
           nameWork:string,
           status:boolean,
        }
}
//TH lỗi
{
    success:false,
    message:"String"
}
```
## DELETE workList
### URL: http://localhost:3333/Api/workList/
### Method: DELETE  
### headers: 
    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNvbmciLCJpYXQiOjE1ODI0NzI5NTN9.uG1zt-j1l5AFGnYf6TALF3LlKybFWlKRK3ZQ-xCttjg
    Content-Type: application/json
### Response
```json
{
    success:true
}
//TH lỗi
{
    success:false,
    message:"String"
}
```
## LOGIN ACCOUNT
### URL: http://localhost:3333/Api/account/auth/login
### Method: POST  
### headers: 
    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNvbmciLCJpYXQiOjE1ODI0NzI5NTN9.uG1zt-j1l5AFGnYf6TALF3LlKybFWlKRK3ZQ-xCttjg
    Content-Type: application/json
### request
{
   username:string,
   pass: string
}
### Response
```json
{
    success:true,
    result: [
        {
            ok:boolean,
            token:string,
            username:string,
        }
    ]
}

{
    success:false,
    ### Request
   {
       username:string,
       pass: string
   }
}