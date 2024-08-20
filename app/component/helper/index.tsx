import studentDataBase from "@/app/database/datastore";

// export const findByName = (Name: string) => {
//     const findStudent = studentDataBase.find((student) => student.Name === Name);
//     if (!findStudent) {
//         console.error(`Student with name ${Name} not found`);
//         return null;
//     }
//     console.log(findStudent);
//     return findStudent;
// };
export const findByName = (Name:string) =>{
    const findStudent = studentDataBase.find((value)=>value.Name === Name );
    if (!findStudent) {
                console.error(`Student with name ${Name} not found`);
                return null;
            }
            console.log(findStudent);
            return findStudent

}
