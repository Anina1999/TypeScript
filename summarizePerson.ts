function summarizePersonInfo (
    id: number,
    firstName: string,
    lastName: string,
    age: number, 
    middleName?: string,
    hobbies?: string[],
    workInfo?: [string, number]
): [number, string, number, string, string] {

    const fullName = middleName && middleName !== ''?
        `${firstName} ${middleName} ${lastName}` :
        `${firstName} ${lastName}`;
    
    const hobbiesStrArr = hobbies && hobbies.length > 0?
        hobbies.join(', ') :
        '-';

    const workInfoTuple = workInfo? `${workInfo[0]} -> ${workInfo[1]}` : '-'

    return [
        id,
        fullName,
        age,
        hobbiesStrArr,
        workInfoTuple
    ]
}

// console.log(summarizePersonInfo(
//     12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500] 
// ));

console.log(summarizePersonInfo(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']));