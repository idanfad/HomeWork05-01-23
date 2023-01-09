// ///////////////////////////////////////////M1/////////////////////////////////////

// class Render{
//     htmlTagName;
//     propertyName;
//     contentName;
//     text;
//     constructor(htmlTagNameInput,propertyNameInput,contentNameInput,textInput) {
//         this.htmlTagName=htmlTagNameInput;
//         this.propertyName=propertyNameInput;
//         this.contentName=contentNameInput;
//         this.text=textInput;
//     }
//     printFunction(){
//         let newDiv = document.getElementById('rowDiv');
//         let newText = document.createTextNode(`${this.htmlTagName} ${this.propertyName} ${this.contentName} ${this.text}`);
//         let exampleElement = document.createElement(this.htmlTagName);
//         exampleElement.appendChild(newText);
//         console.log(exampleElement);
//         newDiv.appendChild(exampleElement);
//         exampleElement.setAttribute("id",this.propertyName);
//         this.alertFunction();
        
        
//     }
//     alertFunction(){
//         let newDiv = document.getElementById('rowDiv');
//         newDiv.addEventListener('click',()=>{
//             alert('error');
//         });
//     }
// }

// let example = new Render('h3','idan','elad','ohad');
// example.printFunction();
// example.alertFunction();


// ///////////////////////////////////////////M2/////////////////////////////////////

// class Computer{
//     processor;
//     graphic;
//     RAM;
//     hardDisk;
//     screenName;
//     brand;
//     constructor(processorInput,graphicInput,RAMInput,hardDiskInput,screenNameInput,brandInput) {
//         this.processor=processorInput;
//         this.graphic=graphicInput;
//         this.RAM=RAMInput;
//         this.hardDisk=hardDiskInput;
//         this.screenName=screenNameInput;
//         this.brand=brandInput;
//     }
// }

// class Render{
//     computer;
//     constructor(computerInput) {
//         this.computer=computerInput;
//     }
//     printDetails(){
//         let myDiv = document.getElementById('rowDiv');
//         let compDetails = document.createElement('div');
//         let fullDetails = document.createTextNode(
//             `processor: ${this.computer.processor},
//             graphic: ${this.computer.graphic},
//             RAM: ${this.computer.RAM},
//             hardDisk: ${this.computer.hardDisk},
//             screenName: ${this.computer.screenName},
//             brand: ${this.computer.brand}`
//         );
//         compDetails.appendChild(fullDetails);
//         myDiv.appendChild(compDetails);
//     }
// }

// let computers = [
//     new Computer('i7', 'GTX 1080', 16, 512, 'screen1', 'Dell'),
//     new Computer('Ryzen 5', 'RX 5700', 8, 256, 'screen2', 'HP'),
//     new Computer('i5', 'GTX 1650', 8, 128, 'screen3', 'Acer')
// ];

// computers.forEach((computer)=>{
//     let myDiv = document.getElementById('rowDiv');
//     let newButton = document.createElement("button");
//     myDiv.appendChild(newButton);
//     newButton.innerHTML=computer.processor;
//     newButton.addEventListener("click", ()=>{
//         let pc = new Render(computer);
//         pc.printDetails();
//     });
// });

///////////////////////////////////////////M3/////////////////////////////////////

class Missions {
    missionsOutput = [{
            missionName: 'Paint the sky',
            studentName: 'Idan',
            studentId: 301401923,
            missionDate: new Date("2023-01-08")
        },
        {
            missionName: 'Paint the floor',
            studentName: 'Yaron',
            studentId: 2,
            missionDate: new Date("2023-01-10")
        },
        {
            missionName: 'Paint the roof',
            studentName: 'Elad',
            studentId: 3,
            missionDate: new Date("2023-01-09")
        }
    ];
    constructor(studentName, studentId) {
        this.missionsOutput.forEach((id) => {
            if (id.studentId == studentId) {
                alert(`Hello ${studentName},
                Your mission is: ${id.missionName}.
                DeadLine: ${id.missionDate}`);
                
            }
        });
    }
}

class Students {
    studentName;
    studentId;
    constructor(studentNameInput,studentIdInput){
        this.studentName = studentNameInput;
        this.studentId = studentIdInput;
    }

    check(){
        let a = new Missions(this.studentName,this.studentId);  
    }
}

exec();
function exec(){
    let StudentNameInput = document.getElementById('nameInput');
    let StudentIdInput = document.getElementById('idInput');
    let getBtn = document.getElementById('validBtn');
    getBtn.addEventListener('click',()=>{
        
        let a = new Students(StudentNameInput.value,StudentIdInput.value);
        a.check();
        
    });
}

///////////////////////////////////////////END-M3/////////////////////////////////////